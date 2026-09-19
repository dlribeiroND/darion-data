export const SAC_TYPES = [
  { value: "reclamacao", label: "Reclamação" },
  { value: "sugestao", label: "Sugestão" },
  { value: "contato", label: "Contato geral" },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateSacForm(data) {
  const errors = {};
  const nome = (data.nome ?? "").trim();
  const email = (data.email ?? "").trim();
  const tipo = data.tipo ?? "";
  const mensagem = (data.mensagem ?? "").trim();

  if (nome.length < 2 || nome.length > 120) {
    errors.nome = "Informe seu nome completo.";
  }

  if (!EMAIL_REGEX.test(email) || email.length > 254) {
    errors.email = "Informe um e-mail válido.";
  }

  if (!SAC_TYPES.some((option) => option.value === tipo)) {
    errors.tipo = "Selecione o tipo de contato.";
  }

  if (mensagem.length < 10 || mensagem.length > 4000) {
    errors.mensagem = "A mensagem deve ter entre 10 e 4000 caracteres.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    values: { nome, email, tipo, mensagem },
  };
}
