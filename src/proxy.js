import { NextResponse } from "next/server";

// Área restrita reservada para operações internas, futuramente acessível
// só por contas autenticadas do domínio dariondata.com.br. Ainda não há
// autenticação implementada, então qualquer acesso é bloqueado (404) até
// esse fluxo existir — ver src/app/(privado)/.
export function proxy() {
  return new NextResponse(null, { status: 404 });
}

export const config = {
  matcher: ["/portal", "/portal/:path*"],
};
