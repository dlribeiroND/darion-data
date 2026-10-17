import Link from "next/link";
import { site } from "@/content/site.config";

export const metadata = {
  title: "Política de Privacidade | Darion Data",
  description:
    "Transparência no tratamento de dados pessoais pela Darion Data, em conformidade com a LGPD (Lei nº 13.709/2018).",
};

export default function PrivacidadePage() {
  return (
    <div className="pb-24">
      <section className="mx-auto max-w-4xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-medium text-[#0071e3] shadow-xs">
            Governança e Proteção de Dados
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-sm text-[#6e6e73]">
            Em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-black/[0.06] bg-white p-8 sm:p-12 text-xs sm:text-sm leading-relaxed text-[#424245] space-y-8">
          {/* Identificação do Controlador e Encarregado */}
          <section className="space-y-3">
            <h2 className="text-base font-semibold text-[#1d1d1f]">
              1. Controlador dos Dados e Encarregado de Privacidade (DPO)
            </h2>
            <p>
              O controlador dos dados pessoais tratados no âmbito deste site e dos relacionamentos institucionais é:
            </p>
            <div className="rounded-xl bg-[#fafafc] border border-black/[0.06] p-4 text-xs space-y-1">
              <p><strong>Razão Social:</strong> {site.legalName}</p>
              <p><strong>CNPJ:</strong> {site.cnpj}</p>
              <p><strong>Sede:</strong> {site.city} — {site.state}</p>
            </div>
            <p>
              <strong>Encarregado de Proteção de Dados (DPO):</strong> Diego Ribeiro.
            </p>
            <p>
              <strong>Canal de atendimento do Encarregado:</strong> As requisições de titulares de dados devem ser encaminhadas pelo nosso canal oficial de{" "}
              <Link href="/sac" className="text-[#0071e3] underline hover:text-[#0077ed]">
                SAC (tipo &ldquo;Privacidade e dados pessoais (LGPD)&rdquo;)
              </Link>{" "}
              ou diretamente pelo e-mail <code>{site.emailPrivacy}</code>.
            </p>
          </section>

          {/* Dados Coletados */}
          <section className="space-y-3 border-t border-black/[0.06] pt-6">
            <h2 className="text-base font-semibold text-[#1d1d1f]">
              2. Dados que Coletamos
            </h2>
            <p>Coletamos estritamente os dados necessários para o atendimento e a segurança do serviço:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Formulário de Contato Comercial:</strong> nome completo, empresa, cargo, e-mail corporativo, telefone ou WhatsApp (se informado), assunto do projeto, tamanho do ambiente (se informado) e mensagem descritiva.
              </li>
              <li>
                <strong>Formulário do SAC:</strong> nome completo, e-mail, telefone (se informado), empresa (se informada), tipo da solicitação, conteúdo da mensagem e número de protocolo gerado automaticamente.
              </li>
              <li>
                <strong>Dados técnicos de navegação:</strong> endereço IP, registros de data e hora de requisições, tipo de navegador, sistema operacional e páginas acessadas para fins de segurança, auditoria e prevenção contra abusos.
              </li>
              <li>
                <strong>Cookies:</strong> cookies essenciais ao funcionamento técnico do site e, mediante autorização prévia no banner, cookies agregados para medição de telemetria e desempenho.
              </li>
            </ul>
          </section>

          {/* Finalidades e Bases Legais */}
          <section className="space-y-3 border-t border-black/[0.06] pt-6">
            <h2 className="text-base font-semibold text-[#1d1d1f]">
              3. Finalidades e Bases Legais do Tratamento
            </h2>
            <div className="space-y-3">
              <p>
                <strong>Atendimento e relacionamento comercial:</strong> os dados preenchidos no formulário de contato são tratados com base em procedimentos preliminares relacionados a contrato ou consentimento manifesto, visando responder solicitações e elaborar propostas técnicas.
              </p>
              <p>
                <strong>Registro e resolução de chamados no SAC:</strong> os dados do SAC são tratados com base no cumprimento de obrigações legais, regulatórias e legítimo interesse para formalizar o atendimento, emitir protocolo e responder a dúvidas, sugestões ou reclamações.
              </p>
              <p>
                <strong>Segurança da informação e auditoria:</strong> registros técnicos de acesso (IP e logs) são mantidos com base em obrigação legal (Marco Civil da Internet — Lei nº 12.965/2014) e legítimo interesse para resguardar a integridade da plataforma.
              </p>
              <p>
                <strong>Estatísticas de uso:</strong> métricas de desempenho e telemetria são coletadas exclusivamente mediante consentimento expresso fornecido no banner de cookies.
              </p>
            </div>
          </section>

          {/* Compartilhamento de Dados */}
          <section className="space-y-3 border-t border-black/[0.06] pt-6">
            <h2 className="text-base font-semibold text-[#1d1d1f]">
              4. Compartilhamento de Dados
            </h2>
            <p>
              A Darion Data não comercializa dados pessoais. O compartilhamento ocorre estritamente com provedores de infraestrutura e serviços de transmissão de e-mail estritamente necessários para a operação dos formulários, todos submetidos a acordos de confidencialidade e segurança, ou quando expressamente determinado por autoridade judicial ou regulatória competente.
            </p>
          </section>

          {/* Papéis em Projetos (Controlador vs Operador) */}
          <section className="space-y-3 border-t border-black/[0.06] pt-6">
            <h2 className="text-base font-semibold text-[#1d1d1f]">
              5. Papéis em Projetos e Serviços a Clientes
            </h2>
            <p>
              Quando a Darion Data presta serviços de engenharia de redes, automação de processos, integração de sistemas ou análise de Shadow AI dentro do ambiente de uma organização contratante, <strong>o cliente é o controlador dos dados pessoais</strong> e a <strong>Darion Data atua como operadora</strong>.
            </p>
            <p>
              Nesses cenários, atuamos estritamente sob as instruções lícitas do contratante, observando as cláusulas do contrato de prestação de serviços, termos de confidencialidade (NDA) e diretrizes de menor privilégio.
            </p>
          </section>

          {/* Retenção de Dados */}
          <section className="space-y-3 border-t border-black/[0.06] pt-6">
            <h2 className="text-base font-semibold text-[#1d1d1f]">
              6. Retenção e Descarte
            </h2>
            <p>
              Os dados pessoais são armazenados pelo tempo estritamente necessário para cumprir as finalidades para as quais foram coletados:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Registros de chamados do SAC são mantidos pelo tempo necessário à conclusão do atendimento e resguardo de obrigações legais e regulatórias.</li>
              <li>Dados de propostas comerciais não contratadas são descartados ou anonimizados periodicamente.</li>
              <li>Registros de conexão ao site são mantidos pelos prazos legais previstos no Marco Civil da Internet.</li>
            </ul>
          </section>

          {/* Direitos dos Titulares */}
          <section className="space-y-3 border-t border-black/[0.06] pt-6">
            <h2 className="text-base font-semibold text-[#1d1d1f]">
              7. Direitos dos Titulares (Artigo 18 da LGPD)
            </h2>
            <p>
              Você, como titular de dados pessoais, tem o direito de solicitar a qualquer momento:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Confirmação da existência de tratamento de dados;</li>
              <li>Acesso aos dados pessoais mantidos;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
              <li>Portabilidade dos dados a outro fornecedor, observados os segredos comerciais;</li>
              <li>Eliminação dos dados tratados com consentimento, ressalvadas as hipóteses legais de guarda;</li>
              <li>Informação sobre entidades públicas e privadas com as quais houve compartilhamento;</li>
              <li>Revogação do consentimento concedido anteriormente.</li>
            </ul>
            <p className="pt-2">
              Para exercer qualquer um desses direitos, acesse o canal de{" "}
              <Link href="/sac" className="text-[#0071e3] underline hover:text-[#0077ed]">
                SAC da Darion Data
              </Link>{" "}
              selecionando a opção <strong>&ldquo;Privacidade e dados pessoais (LGPD)&rdquo;</strong>.
            </p>
          </section>

          {/* Foro Competente */}
          <section className="space-y-3 border-t border-black/[0.06] pt-6">
            <h2 className="text-base font-semibold text-[#1d1d1f]">
              8. Legislação Aplicável e Foro
            </h2>
            <p>
              Esta Política é regida pelas leis da República Federativa do Brasil, em especial a Lei nº 13.709/2018 (LGPD). Para dirimir quaisquer litígios decorrentes deste documento, fica eleito o Foro da Comarca de <strong>Belo Horizonte — MG</strong>, com renúncia expressa a qualquer outro.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
