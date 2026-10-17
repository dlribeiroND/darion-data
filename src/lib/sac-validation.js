export const SAC_TYPES = [
  { value: "duvida", label: "Dúvida" },
  { value: "sugestao", label: "Sugestão" },
  { value: "reclamacao", label: "Reclamação" },
  { value: "elogio", label: "Elogio" },
  { value: "privacidade", label: "Privacidade e dados pessoais (LGPD)" },
  { value: "outro", label: "Outro" },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateSacForm(data) {
  const errors = {};
  const nome = (data.nome ?? "").trim();
  const email = (data.email ?? "").trim();
  const telefone = (data.telefone ?? "").trim();
  const empresa = (data.empresa ?? "").trim();
  const tipo = data.tipo ?? "";
  const mensagem = (data.mensagem ?? "").trim();
  const consentimento = !!data.consentimento;

  if (nome.length < 2 || nome.length > 120) {
    errors.nome = "Informe seu nome completo.";
  }

  if (!EMAIL_REGEX.test(email) || email.length > 254) {
    errors.email = "Informe um e-mail válido.";
  }

  if (telefone.length > 0) {
    const digitsOnly = telefone.replace(/\D/g, "");
    if (digitsOnly.length < 7 || digitsOnly.length > 16) {
      errors.telefone = "Informe um telefone válido.";
    }
  }

  if (!SAC_TYPES.some((option) => option.value === tipo)) {
    errors.tipo = "Selecione o tipo da solicitação.";
  }

  if (mensagem.length < 10 || mensagem.length > 4000) {
    errors.mensagem = "A mensagem deve ter entre 10 e 4000 caracteres.";
  }

  if (!consentimento) {
    errors.consentimento = "É necessário concordar com os termos de privacidade para envio do atendimento.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    values: { nome, email, telefone, empresa, tipo, mensagem, consentimento },
  };
}
