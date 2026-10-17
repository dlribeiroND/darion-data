"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CONTATO_ASSUNTOS, validateContatoForm } from "@/lib/contato-validation";
import { site } from "@/content/site.config";

const INITIAL_VALUES = {
  nome: "",
  empresa: "",
  cargo: "",
  email: "",
  telefone: "",
  assunto: "redes",
  tamanhoAmbiente: "",
  mensagem: "",
  consentimento: false,
  website: "", // honeypot
};

export default function ContatoForm() {
  const searchParams = useSearchParams();
  const assuntoParam = searchParams.get("assunto");
  const initialAssunto =
    assuntoParam && CONTATO_ASSUNTOS.some((a) => a.value === assuntoParam)
      ? assuntoParam
      : "redes";

  const [values, setValues] = useState({
    ...INITIAL_VALUES,
    assunto: initialAssunto,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const phoneInputRef = useRef(null);
  const itiRef = useRef(null);

  useEffect(() => {
    let itiInstance = null;
    let isMounted = true;

    import("intl-tel-input/intlTelInputWithUtils").then(({ default: intlTelInput }) => {
      if (!isMounted || !phoneInputRef.current) return;

      itiInstance = intlTelInput(phoneInputRef.current, {
        initialCountry: "br",
        separateDialCode: true,
        autoPlaceholder: "polite",
        strictMode: true,
        countrySearch: true,
      });
      itiRef.current = itiInstance;

      const updatePhone = () => {
        if (!itiInstance || !phoneInputRef.current) return;
        const fullNumber = itiInstance.getNumber() || phoneInputRef.current.value;
        setValues((prev) => ({ ...prev, telefone: fullNumber }));
      };

      phoneInputRef.current.addEventListener("input", updatePhone);
      phoneInputRef.current.addEventListener("countrychange", updatePhone);
    });

    return () => {
      isMounted = false;
      if (itiInstance) {
        itiInstance.destroy();
      }
    };
  }, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const currentPhone = itiRef.current
      ? itiRef.current.getNumber() || phoneInputRef.current?.value || ""
      : values.telefone;

    const submissionValues = { ...values, telefone: currentPhone };

    const { valid, errors: fieldErrors, values: cleanValues } = validateContatoForm(submissionValues);
    setErrors(fieldErrors);
    if (!valid) {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...cleanValues, website: values.website }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Não foi possível enviar a mensagem.");
        return;
      }

      setStatus("success");
      setValues(INITIAL_VALUES);
      if (itiRef.current) {
        itiRef.current.setNumber("");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Erro de conexão. Verifique sua rede e tente novamente.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#1d1d1f]">
          Mensagem recebida com sucesso!
        </h3>
        <p className="mt-2 text-sm text-[#515154] max-w-md mx-auto leading-relaxed">
          Obrigado pelo contato. Analisaremos o cenário técnico da sua organização para responder com os próximos passos.
        </p>
        {site.responseTimeCommercial && (
          <p className="mt-3 text-xs font-medium text-emerald-700">
            {site.responseTimeCommercial}
          </p>
        )}
        <div className="mt-6">
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              if (itiRef.current) {
                itiRef.current.setNumber("");
              }
            }}
            className="rounded-full bg-[#1d1d1f] px-6 py-2 text-xs font-semibold text-white hover:bg-black transition-colors"
          >
            Enviar outra solicitação
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot anti-spam */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website"
          value={values.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <div className="rounded-xl border border-red-500/20 bg-red-50 p-4 text-xs text-red-700">
          {errorMessage}
        </div>
      )}

      {/* Grid: Nome e Empresa */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="block text-xs font-semibold text-[#1d1d1f]">
            Nome completo *
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            value={values.nome}
            onChange={handleChange}
            className={`mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#1d1d1f] shadow-xs outline-none transition-colors focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] ${
              errors.nome ? "border-red-500" : "border-black/[0.12]"
            }`}
          />
          {errors.nome && <p className="mt-1 text-[11px] text-red-600">{errors.nome}</p>}
        </div>

        <div>
          <label htmlFor="empresa" className="block text-xs font-semibold text-[#1d1d1f]">
            Empresa *
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            required
            value={values.empresa}
            onChange={handleChange}
            className={`mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#1d1d1f] shadow-xs outline-none transition-colors focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] ${
              errors.empresa ? "border-red-500" : "border-black/[0.12]"
            }`}
          />
          {errors.empresa && <p className="mt-1 text-[11px] text-red-600">{errors.empresa}</p>}
        </div>
      </div>

      {/* Grid: Cargo e E-mail */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cargo" className="block text-xs font-semibold text-[#1d1d1f]">
            Cargo ou área *
          </label>
          <input
            id="cargo"
            name="cargo"
            type="text"
            required
            value={values.cargo}
            onChange={handleChange}
            className={`mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#1d1d1f] shadow-xs outline-none transition-colors focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] ${
              errors.cargo ? "border-red-500" : "border-black/[0.12]"
            }`}
          />
          {errors.cargo && <p className="mt-1 text-[11px] text-red-600">{errors.cargo}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-[#1d1d1f]">
            E-mail corporativo *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
            className={`mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#1d1d1f] shadow-xs outline-none transition-colors focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] ${
              errors.email ? "border-red-500" : "border-black/[0.12]"
            }`}
          />
          {errors.email && <p className="mt-1 text-[11px] text-red-600">{errors.email}</p>}
        </div>
      </div>

      {/* Grid: Telefone com intl-tel-input e Assunto */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="telefone" className="block text-xs font-semibold text-[#1d1d1f]">
            Telefone ou WhatsApp <span className="text-[#86868b] font-normal">(opcional)</span>
          </label>
          <div className="mt-1.5">
            <input
              id="telefone"
              name="telefone"
              type="tel"
              ref={phoneInputRef}
              className={`w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#1d1d1f] shadow-xs outline-none transition-colors focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] ${
                errors.telefone ? "border-red-500" : "border-black/[0.12]"
              }`}
            />
          </div>
          {errors.telefone && <p className="mt-1 text-[11px] text-red-600">{errors.telefone}</p>}
        </div>

        <div>
          <label htmlFor="assunto" className="block text-xs font-semibold text-[#1d1d1f]">
            Assunto do projeto *
          </label>
          <select
            id="assunto"
            name="assunto"
            value={values.assunto}
            onChange={handleChange}
            className={`mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#1d1d1f] shadow-xs outline-none transition-colors focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] ${
              errors.assunto ? "border-red-500" : "border-black/[0.12]"
            }`}
          >
            {CONTATO_ASSUNTOS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.assunto && <p className="mt-1 text-[11px] text-red-600">{errors.assunto}</p>}
        </div>
      </div>

      {/* Tamanho do ambiente */}
      <div>
        <label htmlFor="tamanhoAmbiente" className="block text-xs font-semibold text-[#1d1d1f]">
          Tamanho do ambiente <span className="text-[#86868b] font-normal">(opcional: ex.: 5 filiais, 120 usuários)</span>
        </label>
        <input
          id="tamanhoAmbiente"
          name="tamanhoAmbiente"
          type="text"
          value={values.tamanhoAmbiente}
          onChange={handleChange}
          className="mt-1.5 w-full rounded-xl border border-black/[0.12] bg-white px-3.5 py-2.5 text-xs text-[#1d1d1f] shadow-xs outline-none transition-colors focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]"
        />
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="mensagem" className="block text-xs font-semibold text-[#1d1d1f]">
          Conte sobre o cenário ou o projeto *
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          required
          value={values.mensagem}
          onChange={handleChange}
          placeholder="Descreva as características da infraestrutura atual, os desafios de conexão, as rotinas a automatizar ou o uso de IA na organização."
          className={`mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#1d1d1f] shadow-xs outline-none transition-colors focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] ${
            errors.mensagem ? "border-red-500" : "border-black/[0.12]"
          }`}
        />
        {errors.mensagem && <p className="mt-1 text-[11px] text-red-600">{errors.mensagem}</p>}
      </div>

      {/* Consentimento LGPD */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          id="consentimento"
          name="consentimento"
          type="checkbox"
          checked={values.consentimento}
          onChange={handleChange}
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#0071e3] focus:ring-[#0071e3]"
        />
        <label htmlFor="consentimento" className="text-xs text-[#515154] leading-relaxed">
          Concordo com o tratamento dos dados informados para contato comercial e elaboração de proposta técnica, conforme a{" "}
          <Link href="/privacidade" className="text-[#0071e3] underline hover:text-[#0077ed]">
            Política de Privacidade
          </Link>.
        </label>
      </div>
      {errors.consentimento && (
        <p className="text-[11px] text-red-600">{errors.consentimento}</p>
      )}

      {/* Botão de Envio */}
      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-[#0071e3] px-6 py-3 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#0077ed] disabled:opacity-60"
        >
          {status === "submitting" ? "Enviando solicitação..." : "Agendar conversa técnica"}
        </button>
      </div>
    </form>
  );
}
