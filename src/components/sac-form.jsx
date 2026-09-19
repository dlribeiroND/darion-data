"use client";

import { useState } from "react";
import { SAC_TYPES, validateSacForm } from "@/lib/sac-validation";

const INITIAL_VALUES = { nome: "", email: "", tipo: "", mensagem: "", website: "" };

export default function SacForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { valid, errors: fieldErrors } = validateSacForm(values);
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
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Não foi possível enviar sua mensagem.");
        return;
      }

      setStatus("success");
      setValues(INITIAL_VALUES);
    } catch {
      setStatus("error");
      setErrorMessage("Não foi possível enviar sua mensagem. Verifique sua conexão.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-6 text-slate-100">
        <h2 className="text-lg font-semibold text-white">Mensagem enviada</h2>
        <p className="mt-2 text-sm text-slate-300">
          Recebemos seu contato e vamos responder o quanto antes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
        <label htmlFor="nome" className="block text-sm font-medium text-slate-200">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          value={values.nome}
          onChange={handleChange}
          className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-slate-100 outline-none placeholder:text-slate-500 focus:border-blue-500/50"
          placeholder="Seu nome completo"
        />
        {errors.nome && <p className="mt-1.5 text-sm text-red-400">{errors.nome}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-200">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-slate-100 outline-none placeholder:text-slate-500 focus:border-blue-500/50"
          placeholder="voce@empresa.com"
        />
        {errors.email && <p className="mt-1.5 text-sm text-red-400">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="tipo" className="block text-sm font-medium text-slate-200">
          Tipo de contato
        </label>
        <select
          id="tipo"
          name="tipo"
          value={values.tipo}
          onChange={handleChange}
          className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-slate-100 outline-none focus:border-blue-500/50"
        >
          <option value="" disabled>
            Selecione
          </option>
          {SAC_TYPES.map((option) => (
            <option key={option.value} value={option.value} className="bg-slate-900">
              {option.label}
            </option>
          ))}
        </select>
        {errors.tipo && <p className="mt-1.5 text-sm text-red-400">{errors.tipo}</p>}
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-slate-200">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          value={values.mensagem}
          onChange={handleChange}
          className="mt-1.5 w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-slate-100 outline-none placeholder:text-slate-500 focus:border-blue-500/50"
          placeholder="Conte com detalhes o que você gostaria de nos dizer"
        />
        {errors.mensagem && <p className="mt-1.5 text-sm text-red-400">{errors.mensagem}</p>}
      </div>

      {status === "error" && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-300">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando..." : "Enviar mensagem"}
      </button>
    </form>
  );
}
