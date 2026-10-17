"use client";

import { useState } from "react";
import Link from "next/link";
import { SAC_TYPES, validateSacForm } from "@/lib/sac-validation";
import { site } from "@/content/site.config";

const INITIAL_VALUES = {
  nome: "",
  email: "",
  telefone: "",
  empresa: "",
  tipo: "duvida",
  mensagem: "",
  consentimento: false,
  website: "", // honeypot
};

export default function SacForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [protocol, setProtocol] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

    const { valid, errors: fieldErrors, values: cleanValues } = validateSacForm(values);
    setErrors(fieldErrors);
    if (!valid) {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/sac", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...cleanValues, website: values.website }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Não foi possível registrar o atendimento.");
        return;
      }

      setProtocol(data.protocol || "SAC-REGISTRADO");
      setStatus("success");
      setValues(INITIAL_VALUES);
    } catch {
      setStatus("error");
      setErrorMessage("Erro de conexão. Verifique sua rede e tente novamente.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-8 text-center space-y-4">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#1d1d1f]">
          Atendimento registrado com sucesso!
        </h3>
        <p className="text-xs text-[#515154]">
          Guarde o número de protocolo abaixo para acompanhamento da sua solicitação:
        </p>
        <div className="inline-block rounded-xl border border-emerald-600/30 bg-white px-5 py-2.5 text-base font-bold tracking-wider text-emerald-800">
          {protocol}
        </div>
        <p className="text-xs text-[#6e6e73] max-w-md mx-auto leading-relaxed">
          Registramos sua solicitação com o protocolo acima. {site.responseTimeSac} Em caso de reclamação, retornamos formalmente com a conclusão do atendimento.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="rounded-full bg-[#1d1d1f] px-6 py-2 text-xs font-semibold text-white hover:bg-black transition-colors"
          >
            Registrar novo atendimento
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot */}
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

      {/* Grid: Nome e E-mail */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="sac-nome" className="block text-xs font-semibold text-[#1d1d1f]">
            Nome completo *
          </label>
          <input
            id="sac-nome"
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
          <label htmlFor="sac-email" className="block text-xs font-semibold text-[#1d1d1f]">
            E-mail de contato *
          </label>
          <input
            id="sac-email"
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

      {/* Grid: Telefone e Empresa */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="sac-telefone" className="block text-xs font-semibold text-[#1d1d1f]">
            Telefone <span className="text-[#86868b] font-normal">(opcional)</span>
          </label>
          <input
            id="sac-telefone"
            name="telefone"
            type="tel"
            value={values.telefone}
            onChange={handleChange}
            placeholder="(DDD) 99999-9999"
            className={`mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#1d1d1f] shadow-xs outline-none transition-colors focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] ${
              errors.telefone ? "border-red-500" : "border-black/[0.12]"
            }`}
          />
          {errors.telefone && <p className="mt-1 text-[11px] text-red-600">{errors.telefone}</p>}
        </div>

        <div>
          <label htmlFor="sac-empresa" className="block text-xs font-semibold text-[#1d1d1f]">
            Empresa ou organização <span className="text-[#86868b] font-normal">(opcional)</span>
          </label>
          <input
            id="sac-empresa"
            name="empresa"
            type="text"
            value={values.empresa}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-xl border border-black/[0.12] bg-white px-3.5 py-2.5 text-xs text-[#1d1d1f] shadow-xs outline-none transition-colors focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]"
          />
        </div>
      </div>

      {/* Tipo da solicitação */}
      <div>
        <label htmlFor="sac-tipo" className="block text-xs font-semibold text-[#1d1d1f]">
          Tipo da solicitação *
        </label>
        <select
          id="sac-tipo"
          name="tipo"
          value={values.tipo}
          onChange={handleChange}
          className={`mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#1d1d1f] shadow-xs outline-none transition-colors focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] ${
            errors.tipo ? "border-red-500" : "border-black/[0.12]"
          }`}
        >
          {SAC_TYPES.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.tipo && <p className="mt-1 text-[11px] text-red-600">{errors.tipo}</p>}
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="sac-mensagem" className="block text-xs font-semibold text-[#1d1d1f]">
          Mensagem detalhada *
        </label>
        <textarea
          id="sac-mensagem"
          name="mensagem"
          rows={4}
          required
          value={values.mensagem}
          onChange={handleChange}
          placeholder="Descreva com clareza sua dúvida, sugestão, elogio, reclamação ou requerimento de titular de dados pessoais."
          className={`mt-1.5 w-full rounded-xl border bg-white px-3.5 py-2.5 text-xs text-[#1d1d1f] shadow-xs outline-none transition-colors focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] ${
            errors.mensagem ? "border-red-500" : "border-black/[0.12]"
          }`}
        />
        {errors.mensagem && <p className="mt-1 text-[11px] text-red-600">{errors.mensagem}</p>}
      </div>

      {/* Consentimento LGPD */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          id="sac-consentimento"
          name="consentimento"
          type="checkbox"
          checked={values.consentimento}
          onChange={handleChange}
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#0071e3] focus:ring-[#0071e3]"
        />
        <label htmlFor="sac-consentimento" className="text-xs text-[#515154] leading-relaxed">
          Estou ciente de que as informações fornecidas serão tratadas para atendimento e registro formal deste chamado, conforme a{" "}
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
          className="w-full rounded-full bg-[#1d1d1f] px-6 py-3 text-xs font-semibold text-white shadow-sm transition-all hover:bg-black disabled:opacity-60"
        >
          {status === "submitting" ? "Registrando solicitação..." : "Enviar solicitação ao SAC"}
        </button>
      </div>
    </form>
  );
}
