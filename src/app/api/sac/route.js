import { NextResponse } from "next/server";
import { validateSacForm } from "@/lib/sac-validation";
import { sendSacMessage } from "@/lib/sac-mailer";

export const dynamic = "force-dynamic";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

// Armazenamento em memória: reinicia a cada deploy/restart e não é
// compartilhado entre instâncias. Suficiente como mitigação básica de
// spam; se o tráfego crescer, mover para um rate limiter externo.
const requestLog = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return false;
}

export async function POST(request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Aguarde alguns minutos e tente novamente." },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  // Honeypot: campo invisível para usuários reais. Se vier preenchido,
  // finge sucesso para não sinalizar ao bot que foi bloqueado.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const { valid, errors, values } = validateSacForm(body);
  if (!valid) {
    return NextResponse.json({ error: "Dados inválidos.", fields: errors }, { status: 400 });
  }

  try {
    await sendSacMessage(values);
  } catch (error) {
    console.error("[sac] falha ao enviar mensagem:", error.message);
    return NextResponse.json(
      {
        error: error.message || "Não foi possível enviar sua mensagem agora. Tente novamente mais tarde.",
      },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true });
}
