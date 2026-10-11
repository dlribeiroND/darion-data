export const SAC_TYPES = [
  { value: "seguranca", label: "Redes & Cibersegurança (Conceito Fortinet)" },
  { value: "automacao", label: "Automação de Processos & Agentes de IA" },
  { value: "contato", label: "Contato comercial e/ou consultoria" },
  { value: "sugestao", label: "Sugestão" },
  { value: "reclamacao", label: "Reclamação" },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateSacForm(data) {
  const errors = {};
  const nome = (data.nome ?? "").trim();
  const email = (data.email ?? "").trim();
  const telefone = (data.telefone ?? "").trim();
  const tipo = data.tipo ?? "";
  const mensagem = (data.mensagem ?? "").trim();

  if (nome.length < 2 || nome.length > 120) {
    errors.nome = "Informe seu nome completo.";
  }

  if (!EMAIL_REGEX.test(email) || email.length > 254) {
    errors.email = "Informe um e-mail válido.";
  }

  if (telefone.length > 0) {
    const digitsOnly = telefone.replace(/\D/g, "");
    if (digitsOnly.length < 7 || digitsOnly.length > 16 || !/^\+?[0-9\s\-().]{7,25}$/.test(telefone)) {
      errors.telefone = "Informe um telefone válido com código do país (ex.: +55...).";
    }
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
    values: { nome, email, telefone, tipo, mensagem },
  };
}
