import { NextResponse } from "next/server";
import { validateContatoForm } from "@/lib/contato-validation";
import { sendContatoMessage } from "@/lib/contato-mailer";

export const dynamic = "force-dynamic";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

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

  // Honeypot anti-spam
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const { valid, errors, values } = validateContatoForm(body);
  if (!valid) {
    return NextResponse.json({ error: "Dados inválidos.", fields: errors }, { status: 400 });
  }

  try {
    await sendContatoMessage(values);
  } catch (error) {
    console.error("[contato] Falha ao enviar mensagem:", error.message);
    return NextResponse.json(
      {
        error: error.message || "Não foi possível enviar sua mensagem no momento. Tente novamente mais tarde.",
      },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true });
}
