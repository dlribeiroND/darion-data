/**
 * Envio do SAC ainda não configurado. Quando o provedor de e-mail for
 * definido (ex.: Resend) e a credencial disponibilizada via variável de
 * ambiente, substituir o corpo desta função pela chamada real — o
 * restante do fluxo (validação, rota, formulário) não muda.
 */
export async function sendSacMessage(values) {
  if (!process.env.SAC_MAILER_API_KEY) {
    throw new Error("SAC mailer não configurado: defina SAC_MAILER_API_KEY.");
  }

  throw new Error("Envio de SAC ainda não implementado.");
}
