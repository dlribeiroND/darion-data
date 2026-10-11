"use client";

import { useState, useRef, useEffect } from "react";
import { SAC_TYPES, validateSacForm } from "@/lib/sac-validation";

const INITIAL_VALUES = { nome: "", email: "", telefone: "", tipo: "", mensagem: "", website: "" };

export default function SacForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const phoneInputRef = useRef(null);
  const itiRef = useRef(null);

  useEffect(() => {
    let itiInstance = null;
    let isMounted = true;

    // Carrega a biblioteca oficial intl-tel-input com utilitários de máscara
    import("intl-tel-input/intlTelInputWithUtils").then(({ default: intlTelInput }) => {
      if (!isMounted || !phoneInputRef.current) return;

      itiInstance = intlTelInput(phoneInputRef.current, {
        initialCountry: "br",
        separateDialCode: true,
        autoPlaceholder: "off",
        strictMode: true,
      });
      itiRef.current = itiInstance;

      // Garante que nenhum placeholder de exemplo apareça
      if (phoneInputRef.current) {
        phoneInputRef.current.placeholder = "";
      }

      const updatePhone = () => {
        if (!itiInstance || !phoneInputRef.current) return;
        phoneInputRef.current.placeholder = "";
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

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // Sincroniza o valor final do telefone
    const currentPhone = itiRef.current ? itiRef.current.getNumber() || phoneInputRef.current?.value || "" : values.telefone;
    const submissionValues = { ...values, telefone: currentPhone };

    const { valid, errors: fieldErrors } = validateSacForm(submissionValues);
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
        body: JSON.stringify(submissionValues),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Não foi possível enviar sua mensagem.");
        return;
      }

      setStatus("success");
      setValues(INITIAL_VALUES);
      if (itiRef.current) {
        itiRef.current.setNumber("");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Não foi possível enviar sua mensagem. Verifique sua conexão.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-8 text-center text-[#1d1d1f] shadow-xs">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="mt-4 text-xl font-semibold text-[#1d1d1f]">Mensagem enviada com sucesso</h2>
        <p className="mt-2 text-sm text-[#6e6e73]">
          Recebemos sua solicitação. Nossos especialistas entrarão em contato o mais breve possível.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            if (itiRef.current) {
              itiRef.current.setNumber("");
            }
          }}
          className="mt-6 inline-flex rounded-full bg-white px-5 py-2 text-xs font-semibold text-[#1d1d1f] shadow-xs border border-black/[0.08] hover:bg-black/5"
        >
          Enviar nova mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <input
        type="text"
        name="website"
        value={values.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div>
        <label htmlFor="nome" className="block text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
          Nome completo
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          value={values.nome}
          onChange={handleChange}
          className="mt-2 w-full rounded-2xl border border-black/[0.1] bg-white px-4 py-3 text-sm text-[#1d1d1f] outline-none transition-all focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10"
        />
        {errors.nome && <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.nome}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          className="mt-2 w-full rounded-2xl border border-black/[0.1] bg-white px-4 py-3 text-sm text-[#1d1d1f] outline-none transition-all focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10"
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="telefone" className="block text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
          Telefone
        </label>
        <div className="mt-2">
          <input
            id="telefone"
            name="telefone"
            type="tel"
            ref={phoneInputRef}
            className="w-full rounded-2xl border border-black/[0.1] bg-white px-4 py-3 text-sm text-[#1d1d1f] outline-none transition-all focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10"
          />
        </div>
        {errors.telefone && <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.telefone}</p>}
      </div>

      <div>
        <label htmlFor="tipo" className="block text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
          Área de interesse
        </label>
        <select
          id="tipo"
          name="tipo"
          value={values.tipo}
          onChange={handleChange}
          className="mt-2 w-full rounded-2xl border border-black/[0.1] bg-white px-4 py-3 text-sm text-[#1d1d1f] outline-none transition-all focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10"
        >
          <option value="" disabled>
            Selecione a área de interesse
          </option>
          {SAC_TYPES.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.tipo && <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.tipo}</p>}
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          value={values.mensagem}
          onChange={handleChange}
          className="mt-2 w-full resize-none rounded-2xl border border-black/[0.1] bg-white px-4 py-3 text-sm text-[#1d1d1f] outline-none transition-all focus:border-[#0071e3] focus:ring-4 focus:ring-[#0071e3]/10"
        />
        {errors.mensagem && <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.mensagem}</p>}
      </div>

      {status === "error" && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-xs font-medium text-red-700">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-[#0071e3] py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0077ed] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando dados..." : "Enviar mensagem"}
      </button>
    </form>
  );
}
