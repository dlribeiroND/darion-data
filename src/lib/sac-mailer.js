import { SAC_TYPES } from "./sac-validation";

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendSacMessage(values) {
  const apiKey = process.env.SAC_MAILER_API_KEY || process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("SAC mailer não configurado: defina SAC_MAILER_API_KEY ou RESEND_API_KEY no arquivo de ambiente.");
  }

  const fallbackEmail = "diegolribeiro@gmail.com";
  let toEmail = process.env.SAC_MAILER_TO || fallbackEmail;
  const fromEmail = process.env.SAC_MAILER_FROM || "Darion Data SAC <onboarding@resend.dev>";

  const tipoObj = SAC_TYPES.find((t) => t.value === values.tipo);
  const tipoLabel = tipoObj ? tipoObj.label : values.tipo;

  const nowFormatted = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  }).format(new Date());

  const safeNome = escapeHtml(values.nome);
  const safeEmail = escapeHtml(values.email);
  const safeTelefone = escapeHtml(values.telefone || "Não informado");
  const safeTipo = escapeHtml(tipoLabel);
  const safeMensagem = escapeHtml(values.mensagem).replace(/\n/g, "<br>");

  const subject = `[SAC Darion Data] Novo contato: ${tipoLabel} — ${values.nome}`;

  const htmlBody = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1d1d1f;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f7; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" max-width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; border: 1px solid rgba(0, 0, 0, 0.08); overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.04);">
          <!-- Cabeçalho -->
          <tr>
            <td style="padding: 32px 32px 24px 32px; background: linear-gradient(135deg, #0a0a0c 0%, #1d1d1f 100%); color: #ffffff;">
              <div style="font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #2997ff; margin-bottom: 8px;">
                Canal de SAC & Atendimento
              </div>
              <h1 style="margin: 0; font-size: 22px; font-weight: 600; color: #ffffff; line-height: 1.3;">
                Nova Mensagem Recebida
              </h1>
              <p style="margin: 6px 0 0 0; font-size: 13px; color: #a1a1a6;">
                Recebida em ${escapeHtml(nowFormatted)}
              </p>
            </td>
          </tr>

          <!-- Dados do Contato -->
          <tr>
            <td style="padding: 28px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f2; font-size: 13px; color: #86868b; width: 140px;">
                    Nome completo
                  </td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f2; font-size: 14px; font-weight: 600; color: #1d1d1f;">
                    ${safeNome}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f2; font-size: 13px; color: #86868b;">
                    E-mail
                  </td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f2; font-size: 14px; color: #0071e3;">
                    <a href="mailto:${safeEmail}" style="color: #0071e3; text-decoration: none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f2; font-size: 13px; color: #86868b;">
                    Telefone
                  </td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f2; font-size: 14px; color: #1d1d1f;">
                    ${safeTelefone}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f2; font-size: 13px; color: #86868b;">
                    Área de interesse
                  </td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f2; font-size: 14px; font-weight: 500; color: #1d1d1f;">
                    <span style="display: inline-block; background-color: #f5f5f7; border: 1px solid #e5e5ea; border-radius: 6px; padding: 2px 8px; font-size: 12px;">
                      ${safeTipo}
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Mensagem -->
              <div style="margin-top: 16px;">
                <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #86868b; margin-bottom: 8px;">
                  Mensagem enviada
                </div>
                <div style="background-color: #fafafc; border: 1px solid #e5e5ea; border-radius: 12px; padding: 18px; font-size: 14px; line-height: 1.6; color: #333336;">
                  ${safeMensagem}
                </div>
              </div>

              <!-- Ação rápida -->
              <div style="margin-top: 28px; text-align: center;">
                <a href="mailto:${safeEmail}?subject=Re:%20${encodeURIComponent(subject)}" style="display: inline-block; background-color: #0071e3; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 500; padding: 10px 24px; border-radius: 9999px;">
                  Responder para ${safeNome}
                </a>
              </div>
            </td>
          </tr>

          <!-- Rodapé do E-mail -->
          <tr>
            <td style="padding: 20px 32px; background-color: #f5f5f7; border-top: 1px solid rgba(0, 0, 0, 0.06); font-size: 11px; color: #86868b; text-align: center;">
              Mensagem enviada via formulário institucional do site <a href="https://dariondata.com.br" style="color: #6e6e73; text-decoration: underline;">Darion Data</a>.<br>
              Você pode responder diretamente a este e-mail para contatar o remetente.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  let response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: values.email,
      subject,
      html: htmlBody,
    }),
  });

  let responseData = await response.json();

  // Se o Resend recusar por restrição de domínio não verificado, tenta entregar na conta do proprietário
  if (!response.ok && toEmail !== fallbackEmail && responseData?.message?.includes("only send testing emails")) {
    console.warn(`[sac-mailer] Domínio ainda não verificado no Resend para '${toEmail}'. Redirecionando entrega para '${fallbackEmail}'...`);
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Darion Data SAC <onboarding@resend.dev>",
        to: [fallbackEmail],
        reply_to: values.email,
        subject,
        html: htmlBody,
      }),
    });
    responseData = await response.json();
  }

  if (!response.ok) {
    const errorMsg = responseData?.message || responseData?.error || "Falha ao enviar e-mail via Resend.";
    console.error("[sac-mailer] Erro retornado pela API do Resend:", responseData);
    throw new Error(errorMsg);
  }

  return { id: responseData.id };
}
