"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";

const STORAGE_KEY = "darion_cookie_consent_v1";

function subscribe(callback) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function getServerSnapshot() {
  return "server";
}

export default function CookieBanner() {
  const consentRaw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isManuallyOpened, setIsManuallyOpened] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    const handleReopen = () => {
      setShowCustomize(true);
      setIsManuallyOpened(true);
    };

    window.addEventListener("open-cookie-banner", handleReopen);
    return () => {
      window.removeEventListener("open-cookie-banner", handleReopen);
    };
  }, []);

  const hasDecided = consentRaw !== null && consentRaw !== "server";
  const isOpen = isManuallyOpened || (!hasDecided && consentRaw !== "server");

  const saveConsent = (analytics) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          essential: true,
          analytics,
          updatedAt: new Date().toISOString(),
        })
      );
      window.dispatchEvent(new Event("storage"));
    } catch {
      // Storage error ignored
    }
    setAnalyticsAllowed(analytics);
    setIsManuallyOpened(false);
    setShowCustomize(false);
  };

  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Consentimento de Cookies"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-black/[0.08] bg-white/95 p-6 shadow-2xl backdrop-blur-xl sm:p-7">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-[#1d1d1f]">
                Privacidade e uso de cookies
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-[#6e6e73]">
                Utilizamos cookies essenciais para o funcionamento seguro do site. Também podemos utilizar cookies de análise de telemetria agregada para entender o desempenho técnico da plataforma, apenas com a sua autorização expressa. Saiba mais na nossa{" "}
                <Link href="/privacidade" className="text-[#0071e3] underline hover:text-[#0077ed]">
                  Política de Privacidade
                </Link>.
              </p>
            </div>
          </div>

          {showCustomize && (
            <div className="rounded-xl border border-black/[0.06] bg-[#f5f5f7] p-4 text-xs space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-[#1d1d1f]">Cookies Essenciais</span>
                  <p className="text-[11px] text-[#86868b]">Necessários para segurança, roteamento e integridade das requisições.</p>
                </div>
                <span className="text-[11px] font-medium text-[#86868b]">Sempre ativos</span>
              </div>
              <div className="border-t border-black/[0.06] pt-3 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-[#1d1d1f]">Cookies de Desempenho e Telemetria</span>
                  <p className="text-[11px] text-[#86868b]">Métricas agregadas para aprimorar a velocidade e usabilidade do site.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analyticsAllowed}
                    onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0071e3]"></div>
                </label>
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-end gap-2.5 pt-1">
            {!showCustomize ? (
              <button
                type="button"
                onClick={() => setShowCustomize(true)}
                className="rounded-full border border-black/[0.1] bg-white px-4 py-2 text-xs font-medium text-[#1d1d1f] hover:bg-black/[0.02]"
              >
                Personalizar
              </button>
            ) : (
              <button
                type="button"
                onClick={() => saveConsent(analyticsAllowed)}
                className="rounded-full border border-black/[0.1] bg-white px-4 py-2 text-xs font-medium text-[#1d1d1f] hover:bg-black/[0.02]"
              >
                Salvar preferências
              </button>
            )}

            <button
              type="button"
              onClick={() => saveConsent(false)}
              className="rounded-full border border-black/[0.1] bg-white px-4 py-2 text-xs font-medium text-[#1d1d1f] hover:bg-black/[0.02]"
            >
              Apenas essenciais
            </button>

            <button
              type="button"
              onClick={() => saveConsent(true)}
              className="rounded-full bg-[#0071e3] px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#0077ed]"
            >
              Aceitar todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
