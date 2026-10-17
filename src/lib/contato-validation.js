export const CONTATO_ASSUNTOS = [
  { value: "redes", label: "Redes e SD-WAN" },
  { value: "seguranca", label: "Segurança de perímetro e Zero Trust" },
  { value: "automacao", label: "Automação e IA" },
  { value: "redes-inteligentes", label: "Automação e inteligência de redes" },
  { value: "shadow-ai", label: "Governança de IA (Shadow AI)" },
  { value: "outro", label: "Outro" },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContatoForm(data) {
  const errors = {};
  const nome = (data.nome ?? "").trim();
  const empresa = (data.empresa ?? "").trim();
  const cargo = (data.cargo ?? "").trim();
  const email = (data.email ?? "").trim();
  const telefone = (data.telefone ?? "").trim();
  const assunto = data.assunto ?? "";
  const tamanhoAmbiente = (data.tamanhoAmbiente ?? "").trim();
  const mensagem = (data.mensagem ?? "").trim();
  const consentimento = !!data.consentimento;

  if (nome.length < 2 || nome.length > 120) {
    errors.nome = "Informe seu nome completo.";
  }

  if (empresa.length < 2 || empresa.length > 120) {
    errors.empresa = "Informe o nome da sua empresa.";
  }

  if (cargo.length < 2 || cargo.length > 100) {
    errors.cargo = "Informe seu cargo ou área.";
  }

  if (!email) {
    errors.email = "Precisamos do seu e-mail para poder responder.";
  } else if (!EMAIL_REGEX.test(email) || email.length > 254) {
    errors.email = "Informe um e-mail válido para podermos responder.";
  }

  if (telefone.length > 0) {
    const digitsOnly = telefone.replace(/\D/g, "");
    if (digitsOnly.length < 8 || digitsOnly.length > 16) {
      errors.telefone = "Informe um número de telefone válido.";
    }
  }

  if (!CONTATO_ASSUNTOS.some((opt) => opt.value === assunto)) {
    errors.assunto = "Selecione o assunto do projeto.";
  }

  if (mensagem.length < 10 || mensagem.length > 4000) {
    errors.mensagem = "A mensagem deve ter entre 10 e 4000 caracteres.";
  }

  if (!consentimento) {
    errors.consentimento = "É necessário concordar com o tratamento dos dados conforme a Política de Privacidade.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    values: {
      nome,
      empresa,
      cargo,
      email,
      telefone,
      assunto,
      tamanhoAmbiente,
      mensagem,
      consentimento,
    },
  };
}
