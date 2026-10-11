"use client";

import { useState } from "react";
import Link from "next/link";

export default function ComplianceAccordions() {
  // Estado para controlar quais acordeões estão abertos
  // Inicializamos com o primeiro aberto por conveniência de leitura
  const [openSections, setOpenSections] = useState({
    privacidade: true,
    seguranca: false,
    etica: false,
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const expandAll = () => {
    setOpenSections({
      privacidade: true,
      seguranca: true,
      etica: true,
    });
  };

  const collapseAll = () => {
    setOpenSections({
      privacidade: false,
      seguranca: false,
      etica: false,
    });
  };

  return (
    <div className="space-y-6">
      {/* Barra de controle rápido */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-black/[0.06]">
        <div className="text-xs text-[#86868b]">
          Políticas institucionais vigentes para clientes, parceiros e colaboradores
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={expandAll}
            className="text-xs text-[#0071e3] hover:underline"
          >
            Expandir todas
          </button>
          <span className="text-xs text-[#86868b]">•</span>
          <button
            type="button"
            onClick={collapseAll}
            className="text-xs text-[#0071e3] hover:underline"
          >
            Recolher todas
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1. POLÍTICA DE PRIVACIDADE DARION DATA                    */}
      {/* ========================================================= */}
      <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-sm transition-all">
        <button
          type="button"
          onClick={() => toggleSection("privacidade")}
          className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-black/[0.02]"
          aria-expanded={openSections.privacidade}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0071e3]/10 text-xs font-semibold text-[#0071e3]">
              01
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-[#1d1d1f]">
                Política de Privacidade Darion Data
              </h2>
              <p className="text-xs text-[#86868b] mt-0.5">
                LGPD (Lei nº 13.709/2018), GDPR, diretrizes de cookies, direitos dos titulares e escopo B2B
              </p>
            </div>
          </div>
          <div className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] text-[#1d1d1f] transition-transform duration-200">
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${
                openSections.privacidade ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {openSections.privacidade && (
          <div className="border-t border-black/[0.06] px-6 py-8 text-[13px] leading-relaxed text-[#424245] space-y-7 bg-[#ffffff]">
            {/* Disposições Gerais */}
            <section className="space-y-3">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Disposições Gerais
              </h3>
              <p>
                A <strong>Darion Data</strong>, como consultoria especializada em Automação de Processos, Integração de Sistemas, Infraestrutura de Redes Corporativas e Segurança da Informação, tem como objetivo ser exemplo na conformidade com regulações globais de proteção de dados e agir com solidez e exatidão na proteção dos dados dos seus clientes.
              </p>
              <p>
                A presente Política de Privacidade é fundamentada na <strong>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong> e desenvolvida com apoio em regulações internacionais de referência, como a <strong>General Data Protection Regulation (GDPR)</strong>.
              </p>
              <p>
                Entende-se que a <strong>Darion Data</strong> é uma empresa que atua única e exclusivamente no relacionamento com outras empresas, consolidando assim um nicho estritamente <em>business-to-business (B2B)</em>.
              </p>
              <div className="rounded-xl bg-[#f5f5f7] p-4 text-[#1d1d1f] border border-black/[0.04]">
                <p className="font-medium">
                  Por essas características operacionais, dados pessoais sensíveis ou cadastrais de pessoas físicas como RG, CPF, Idade, Endereço residencial e outros dados inerentes a indivíduos particulares <u>não são requeridos e nem colecionados</u> no que condiz ao público aberto e clientes empresariais.
                </p>
              </div>
              <p>
                Dados pessoais do indivíduo são única e exclusivamente requisitados para os colaboradores diretos da Darion Data.
              </p>
              <p className="font-medium text-[#1d1d1f]">
                A Política de Privacidade da Darion Data visa demonstrar o comprometimento da organização em:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#515154]">
                <li>Respeitar e proteger os direitos dos colaboradores, clientes e parceiros;</li>
                <li>Aplicar efetivamente processos e regras que possam mitigar riscos, assegurando proteção de dados pessoais dentro dos mais altos limites tecnológicos vigentes;</li>
                <li>Ser transparente sobre a forma que a Darion Data trata qualquer dado;</li>
                <li>Aplicar medidas contínuas de mitigação de riscos de conformidade com regulações de proteção de dados e na segurança das informações corporativas.</li>
              </ul>
            </section>

            {/* Escopo e Aplicabilidade */}
            <section className="space-y-3 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Escopo e Aplicabilidade
              </h3>
              <p>
                A Política de Privacidade expõe como a Darion Data coleta e usa dados, descrevendo os direitos que o Titular possui com relação a eventuais dados pessoais sob custódia.
              </p>
              <p>
                A política se aplica em todos os serviços entregues pela Darion Data, tendo como ponto excludente soluções providas como <em>Software como Serviço (SaaS)</em> de terceiros onde a Darion Data não possua nenhum acesso, administração ou responsabilidade direta pela manutenção. Em linhas gerais, a Política de Privacidade da Darion Data é aplicada diretamente em:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-[#515154]">
                <li>Serviços de suporte e sustentação de soluções;</li>
                <li>Serviços de gerenciamento e comodato;</li>
                <li>Serviços de implantações, integração e consultorias;</li>
                <li>Serviços de capacitação e treinamento;</li>
                <li>Dados dos colaboradores internos;</li>
                <li>Sistemas institucionais de comunicação e marketing.</li>
              </ul>
            </section>

            {/* Sobre a Política de Cookies */}
            <section className="space-y-3 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Sobre a Política de Cookies
              </h3>
              <p>
                Todo visitante no website da Darion Data pode selecionar os cookies que deseja permitir a coleta de dados, desde que não sejam categorizados como &ldquo;Essenciais&rdquo; para o funcionamento da plataforma e para a garantia de conformidade com regulações de proteção de dados. São categorias de cookies utilizados pela Darion Data:
              </p>
              <div className="grid gap-2.5 sm:grid-cols-2 pt-1">
                <div className="rounded-xl border border-black/[0.06] bg-[#fafafc] p-3">
                  <div className="font-semibold text-[#1d1d1f]">○ Essencial</div>
                  <div className="text-xs text-[#6e6e73] mt-0.5">
                    Utilizado para garantir o funcionamento elementar e a aplicação da conformidade com a LGPD.
                  </div>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-[#fafafc] p-3">
                  <div className="font-semibold text-[#1d1d1f]">○ Análise e Personalização</div>
                  <div className="text-xs text-[#6e6e73] mt-0.5">
                    Cookies utilizados para mensurar navegação e aperfeiçoar a experiência de uso do website.
                  </div>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-[#fafafc] p-3">
                  <div className="font-semibold text-[#1d1d1f]">○ Publicidade</div>
                  <div className="text-xs text-[#6e6e73] mt-0.5">
                    Auxiliam a veicular conteúdo institucional e técnico relevante aos tomadores de decisão.
                  </div>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-[#fafafc] p-3">
                  <div className="font-semibold text-[#1d1d1f]">○ Desempenho e Funcionalidade</div>
                  <div className="text-xs text-[#6e6e73] mt-0.5">
                    Facilitam a medição técnica e análise para otimizar velocidade e renderização das páginas.
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#6e6e73]">
                ○ <strong>Redes sociais:</strong> cookies que permitem interações institucionais, como compartilhamento de publicações corporativas.
              </p>
            </section>

            {/* Sobre os Dados Pessoais */}
            <section className="space-y-4 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Sobre os Dados Pessoais
              </h3>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-[#1d1d1f]">Comunidade e Indivíduos</h4>
                <p>
                  Sobre os indivíduos que navegam no website da Darion Data, as informações coletadas são única e exclusivamente oriundas de cookies fornecidos pelo navegador do visitante:
                </p>
                <ul className="list-disc pl-5 space-y-0.5 text-[#515154]">
                  <li>Endereço IP corporativo ou de acesso;</li>
                  <li>Geolocalização aproximada;</li>
                  <li>Dispositivo, sistema operacional e navegador.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-[#1d1d1f]">Clientes (Pessoas Jurídicas / Empresas)</h4>
                <p>Os dados que a Darion Data tem acesso no relacionamento com clientes B2B são:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#515154] bg-[#f5f5f7] p-3.5 rounded-xl border border-black/[0.04]">
                  <div>• Razão Social da empresa</div>
                  <div>• CNPJ</div>
                  <div>• Inscrição Estadual (se aplicável)</div>
                  <div>• Endereço sede da empresa</div>
                  <div>• Contrato Social (se aplicável)</div>
                  <div>• Telefone da empresa ou telefone corporativo</div>
                  <div>• Nome Completo do(s) ponto(s) de contato</div>
                  <div>• E-mail corporativo do(s) contato(s)</div>
                  <div>• Número de celular comercial (caso disponibilizado)</div>
                  <div>• Dados Bancários da empresa (se aplicável)</div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-[#1d1d1f]">Parceiros e Fornecedores</h4>
                <p>Os dados que a Darion Data tem acesso no relacionamento com parceiros e fornecedores corporativos são:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#515154] bg-[#f5f5f7] p-3.5 rounded-xl border border-black/[0.04]">
                  <div>• Razão Social da empresa</div>
                  <div>• CNPJ</div>
                  <div>• Inscrição Estadual (se aplicável)</div>
                  <div>• Endereço da empresa</div>
                  <div>• Contrato Social (se aplicável)</div>
                  <div>• Telefone corporativo</div>
                  <div>• Nome Completo do(s) representante(s)</div>
                  <div>• E-mail corporativo do(s) contato(s)</div>
                  <div>• Número de celular corporativo (caso disponibilizado)</div>
                  <div>• Dados Bancários para faturamento (se aplicável)</div>
                </div>
              </div>
            </section>

            {/* Finalidades dos Dados */}
            <section className="space-y-4 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Finalidades dos Dados Coletados
              </h3>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-[#1d1d1f]">Comunidade e Indivíduos</h4>
                <p>Os dados coletados por cookies possuem as seguintes finalidades legítimas:</p>
                <ul className="list-disc pl-5 space-y-1 text-[#515154]">
                  <li>Assegurar a conformidade regulatória para consentimento e auditoria de cookies;</li>
                  <li>Personalizar e enriquecer a experiência durante a navegação das soluções;</li>
                  <li>Analisar telemetria e volume agregado de acessos ao site;</li>
                  <li>Compreender como os tomadores de decisão interagem com os recursos das páginas;</li>
                  <li>Monitorar e fazer cumprir os termos corporativos aplicáveis;</li>
                  <li>Conduzir revisões técnicas de qualidade e de gestão de riscos de segurança da informação.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-[#1d1d1f]">Clientes (Empresas)</h4>
                <ul className="list-disc pl-5 space-y-1 text-[#515154]">
                  <li>Manter contatos e alinhamentos comerciais e técnicos;</li>
                  <li>Disponibilizar materiais informativos sobre novidades, automações e segurança;</li>
                  <li>Comunicação via e-mail corporativo, com política rígida de envio máximo de 2 newsletters informativas ao mês;</li>
                  <li>Emissão de notas fiscais de serviços e produtos;</li>
                  <li>Estabelecimento de acordos, propostas, ordens de serviço e contratos (SLA);</li>
                  <li>Execução de processos financeiros e contábeis regulares.</li>
                </ul>
              </div>

              <div className="rounded-xl bg-[#fafafc] border border-black/[0.06] p-4 space-y-2">
                <h4 className="font-semibold text-[#1d1d1f]">
                  Como a Darion Data obtém contatos comerciais de clientes?
                </h4>
                <p className="text-xs text-[#515154]">
                  Ao contrário de práticas predatórias comuns de mercado, <strong>a Darion Data não compra bases nem listas de terceiros</strong>. Todos os nossos contatos corporativos são obtidos de maneira ética e orgânica por meio de:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-[#1d1d1f] pt-1">
                  <div className="rounded-lg bg-white p-2 border border-black/[0.06]">✓ Indicações diretas</div>
                  <div className="rounded-lg bg-white p-2 border border-black/[0.06]">✓ Landing Pages oficiais</div>
                  <div className="rounded-lg bg-white p-2 border border-black/[0.06]">✓ Eventos e workshops</div>
                  <div className="rounded-lg bg-white p-2 border border-black/[0.06]">✓ Histórico dos sistemas</div>
                  <div className="rounded-lg bg-white p-2 border border-black/[0.06]">✓ LinkedIn institucional</div>
                  <div className="rounded-lg bg-white p-2 border border-black/[0.06]">✓ E-mails dedicados 1 a 1</div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-[#1d1d1f]">Parceiros e Fornecedores</h4>
                <ul className="list-disc pl-5 space-y-1 text-[#515154]">
                  <li>Manter contatos de suporte e gestão operacional;</li>
                  <li>Emissão e recepção de notas fiscais e documentação fiscal;</li>
                  <li>Estabelecimento de contratos de parceria, acordos de confidencialidade e níveis de serviço;</li>
                  <li>Execução de processos financeiros de faturamento e pagamentos.</li>
                </ul>
              </div>
            </section>

            {/* Compartilhamento e Processamento de Dados */}
            <section className="space-y-3 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Compartilhamento e Processamento de Dados
              </h3>
              <p>
                A <strong>Darion Data não armazena, manipula, processa ou compartilha NENHUM dado pessoal de clientes ou terceiros</strong> para finalidades comerciais externas, tendo em vista o seu estrito nicho de atuação em Automação de Processos e Segurança da Informação B2B.
              </p>
              <p>Dados corporativos somente são compartilhados pela Darion Data por estritos motivos legais:</p>
              <ul className="list-disc pl-5 space-y-1 text-[#515154]">
                <li>Cumprimento de determinação legal ou regulatória de autoridade competente;</li>
                <li>Promover ou defender os direitos da organização em processo judicial, administrativo ou arbitral;</li>
                <li>Responder a uma solicitação legal válida relacionada a investigações criminais ou atos que possam expor a Darion Data e seus parceiros a responsabilização jurídica.</li>
              </ul>
            </section>

            {/* Segurança e Conformidade */}
            <section className="space-y-3 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Sobre Segurança da Informação e Conformidade
              </h3>
              <p>
                A Darion Data possui Política de Segurança da Informação estabelecida, publicada, distribuída e implementada com rigor técnico, compreendendo também o manuseio adequado de dados, bem como medidas contínuas de mitigação de riscos de conformidade regulatória, salvaguardando a <strong>Confidencialidade</strong>, <strong>Integridade</strong> e <strong>Disponibilidade</strong> das informações.
              </p>
            </section>

            {/* Direitos dos Titulares */}
            <section className="space-y-4 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Direitos dos Titulares dos Dados (LGPD)
              </h3>
              <p>
                Ainda que o escopo de atuação da Darion Data tenha foco <strong>ÚNICA E EXCLUSIVAMENTE EM EMPRESAS (B2B)</strong>, fica expressamente garantido que qualquer titular pessoa física pode exercer prontamente suas requisições com base na LGPD através do nosso canal oficial:
              </p>
              
              <div className="rounded-xl border border-[#0071e3]/30 bg-[#0071e3]/5 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="font-semibold text-[#1d1d1f]">Canal de Atendimento ao Titular de Dados (DSR / LGPD)</div>
                  <div className="text-xs text-[#515154] mt-0.5">
                    Envie solicitações sobre confirmação, atualização ou exclusão de dados pessoais.
                  </div>
                </div>
                <Link
                  href="/sac"
                  className="inline-flex items-center justify-center rounded-full bg-[#0071e3] px-4 py-2 text-xs font-medium text-white transition-all hover:bg-[#0077ed]"
                >
                  Acessar Canal DSR / SAC ❯
                </Link>
              </div>

              <div className="space-y-3 pt-2">
                <p className="font-medium text-[#1d1d1f]">
                  São plenamente garantidos os seguintes direitos pela Política de Privacidade da Darion Data:
                </p>
                <div className="space-y-2 text-xs text-[#515154]">
                  <p>
                    ○ <strong className="text-[#1d1d1f]">Acesso:</strong> permite ao Indivíduo requisitar e receber uma cópia dos dados pessoais mantidos pela empresa, bem como requerer a confirmação e finalidade do tratamento realizado.
                  </p>
                  <p>
                    ○ <strong className="text-[#1d1d1f]">Retificar:</strong> permite ao Indivíduo solicitar a retificação ou correção imediata dos seus dados pessoais caso identifique erros, dados incompletos ou desatualizados.
                  </p>
                  <p>
                    ○ <strong className="text-[#1d1d1f]">Eliminação:</strong> faculta solicitar à Darion Data a exclusão definitiva dos dados pessoais mantidos em suas bases, ressalvadas as obrigações legais de guarda.
                  </p>
                  <p>
                    ○ <strong className="text-[#1d1d1f]">Oposição:</strong> direito de contestar onde e em que contexto a organização está tratando seus dados pessoais para finalidades específicas.
                  </p>
                  <p>
                    ○ <strong className="text-[#1d1d1f]">Portabilidade:</strong> fornecimento dos dados em formato interoperável e estruturado para migração a outro fornecedor, observados os segredos comerciais.
                  </p>
                  <p>
                    ○ <strong className="text-[#1d1d1f]">Confirmação:</strong> permite atestar de forma transparente a existência ou não de tratamento de dados pessoais nas bases da Darion Data.
                  </p>
                  <p>
                    ○ <strong className="text-[#1d1d1f]">Restringir Processamento / Revogação de Consentimento:</strong> faculta a retirada do consentimento dado anteriormente, sem comprometer a licitude do tratamento realizado sob o consentimento anterior.
                  </p>
                </div>
              </div>
            </section>

            {/* Política de Retenção */}
            <section className="space-y-3 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Política de Retenção
              </h3>
              <p>
                A Darion Data mantém os dados estritamente pelo período necessário para cumprir as <strong>FINALIDADES</strong> operacionais descritas nesta política.
              </p>
              <p>
                Os períodos de retenção observam os requisitos regulatórios, fiscais, civis e profissionais do ordenamento jurídico brasileiro.
              </p>
              <p>
                Para atender a exigências legais e fiscais (tais como guarda de notas fiscais, contratos sociais e livros contábeis), legislações trabalhistas, defesa em eventuais demandas administrativas e judiciais, ou para fins de auditoria, determinados dados são mantidos pelos prazos prescricionais vigentes.
              </p>
            </section>

            {/* Foro */}
            <section className="space-y-2 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Foro Competente
              </h3>
              <p>
                A Política de Privacidade da Darion Data é regida integralmente de acordo com a legislação da República Federativa do Brasil. Para dirimir eventuais controvérsias decorrentes deste documento, elege-se o foro da comarca da cidade de <strong>Belo Horizonte, MG</strong>, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
              </p>
            </section>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* 2. POLÍTICA DE SEGURANÇA DA INFORMAÇÃO                   */}
      {/* ========================================================= */}
      <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-sm transition-all">
        <button
          type="button"
          onClick={() => toggleSection("seguranca")}
          className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-black/[0.02]"
          aria-expanded={openSections.seguranca}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#34c759]/10 text-xs font-semibold text-[#34c759]">
              02
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-[#1d1d1f]">
                Política de Segurança da Informação
              </h2>
              <p className="text-xs text-[#86868b] mt-0.5">
                ISO/IEC 27001, Least Privilege (PoLP), RBAC, gestão de ativos, auditoria por até 5 anos e plano de continuidade
              </p>
            </div>
          </div>
          <div className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] text-[#1d1d1f] transition-transform duration-200">
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${
                openSections.seguranca ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {openSections.seguranca && (
          <div className="border-t border-black/[0.06] px-6 py-8 text-[13px] leading-relaxed text-[#424245] space-y-7 bg-[#ffffff]">
            {/* Objetivo */}
            <section className="space-y-3">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Objetivo
              </h3>
              <p>
                O objetivo da Política de Segurança da Informação da <strong>Darion Data</strong> é garantir que sejam aplicados meios rigorosos — processuais, físicos, materiais, técnicos e comportamentais — para mitigar riscos negativos à informação, seja ela de natureza física, verbal, digital ou materializada em qualquer outro meio tecnológico.
              </p>
              <p>
                As políticas aqui expostas servem como indicadores globais para a gestão de riscos das informações e atuam como alicerces mandatórios para procedimentos operacionais, guias e diretrizes internas em todos os níveis da empresa.
              </p>
            </section>

            {/* Abrangência */}
            <section className="space-y-3 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Abrangência
              </h3>
              <p>
                A política se aplica em sua totalidade na <strong>Darion Data Ltda.</strong>, envolvendo todos os colaboradores diretos, prestadores de serviço e toda a estrutura física, lógica e em nuvem da organização.
              </p>
            </section>

            {/* Gestão e Auditoria */}
            <section className="space-y-3 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Gestão e Auditoria
              </h3>
              <p>
                A aplicabilidade da Política de Segurança da Informação da Darion Data é gerenciada e controlada como parte integrante da <strong>Gestão de Riscos Corporativos</strong>, estando sob a responsabilidade direta do corpo diretivo da empresa.
              </p>
              <p>
                Fica estabelecido que a Segurança da Informação dentro da Darion Data é um pilar estruturante de governança corporativa, visando promover o alinhamento sinérgico entre as áreas técnicas, comerciais e operacionais para neutralizar riscos de conformidade, fraudes e incidentes cibernéticos.
              </p>
            </section>

            {/* Princípios e Políticas Centrais */}
            <section className="space-y-4 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Princípios Fundamentais da Segurança da Informação
              </h3>
              <p>
                A arquitetura das políticas da Darion Data assegura os pilares básicos e universais estabelecidos na <strong>ABNT NBR ISO/IEC 27001:2013</strong>:
              </p>
              <div className="grid gap-3 sm:grid-cols-2 pt-1">
                <div className="rounded-xl border border-black/[0.06] bg-[#fafafc] p-4">
                  <div className="font-semibold text-[#1d1d1f]">Confidencialidade (PoLP)</div>
                  <div className="text-xs text-[#515154] mt-1">
                    Garante que apenas colaboradores expressamente autorizados tenham acesso a dados e sistemas, regidos pelo princípio do privilégio mínimo (<em>Principle of Least Privilege</em>).
                  </div>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-[#fafafc] p-4">
                  <div className="font-semibold text-[#1d1d1f]">Integridade</div>
                  <div className="text-xs text-[#515154] mt-1">
                    Assegura que todas as informações corporativas sejam processadas e preservadas com total garantia de completude, acurácia, veracidade e proteção contra alterações indevidas.
                  </div>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-[#fafafc] p-4">
                  <div className="font-semibold text-[#1d1d1f]">Disponibilidade</div>
                  <div className="text-xs text-[#515154] mt-1">
                    Garante que os ativos, redes e sistemas essenciais permaneçam operacionais e acessíveis para os usuários legítimos em conformidade com os SLAs acordados.
                  </div>
                </div>
                <div className="rounded-xl border border-black/[0.06] bg-[#fafafc] p-4">
                  <div className="font-semibold text-[#1d1d1f]">Não Repúdio</div>
                  <div className="text-xs text-[#515154] mt-1">
                    Assegura a rastreabilidade e autoria inequívoca de ações realizadas nos ambientes corporativos, impossibilitando a negação de autoria de acessos autorizados.
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-3">
                <h4 className="font-semibold text-[#1d1d1f]">Políticas Centrais de Segurança da Informação</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-[#515154]">
                  <li>Toda e qualquer informação interna, de clientes, fornecedores e parceiros deve ser tratada com seriedade, ética, sigilo e em conformidade estrita com a LGPD e normativas vigentes;</li>
                  <li>As informações corporativas devem ser acessadas e tratadas estritamente para as finalidades contratuais pactuadas;</li>
                  <li>Em todo o ciclo de vida de projetos e automações, aplica-se a segregação de funções conforme a diretriz de <em>Role Based Access Control (RBAC)</em>;</li>
                  <li>Todo acesso aos recursos de rede, dados e servidores da Darion Data requer autorização explícita e formal;</li>
                  <li>A identificação digital de colaboradores e terceiros é estritamente pessoal e intransferível;</li>
                  <li>Acesso baseado no princípio do <em>Least Privilege</em>: usuários acessam apenas o estritamente necessário para sua atividade;</li>
                  <li>Uso mandatório de senhas complexas e únicas, com compartilhamento expressamente vedado e gerenciamento seguro;</li>
                  <li>Conscientização e capacitação contínua de todos os colaboradores para cumprimento da política e mitigação de vulnerabilidades.</li>
                </ul>
              </div>
            </section>

            {/* Ciclo de Vida da Informação */}
            <section className="space-y-3 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Tratamento e Ciclo de Vida da Informação
              </h3>
              <p>Toda informação sob custódia da Darion Data possui um ciclo de vida governado por controles específicos:</p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-[#1d1d1f] pt-1">
                <span className="rounded-full bg-[#f5f5f7] border border-black/[0.06] px-3 py-1">1. Criação</span>
                <span className="text-[#86868b] self-center">→</span>
                <span className="rounded-full bg-[#f5f5f7] border border-black/[0.06] px-3 py-1">2. Manuseio / Processamento</span>
                <span className="text-[#86868b] self-center">→</span>
                <span className="rounded-full bg-[#f5f5f7] border border-black/[0.06] px-3 py-1">3. Armazenamento Seguro</span>
                <span className="text-[#86868b] self-center">→</span>
                <span className="rounded-full bg-[#f5f5f7] border border-black/[0.06] px-3 py-1">4. Transporte Criptografado</span>
                <span className="text-[#86868b] self-center">→</span>
                <span className="rounded-full bg-[#f5f5f7] border border-black/[0.06] px-3 py-1">5. Descarte Seguro</span>
              </div>
            </section>

            {/* Gestão da Segurança e Processos */}
            <section className="space-y-4 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Processos de Gestão e Auditoria Técnica
              </h3>
              
              <div className="space-y-1.5">
                <h4 className="font-semibold text-[#1d1d1f]">Gestão de Conformidade e Normas de Referência</h4>
                <p className="text-[#515154]">
                  As práticas operacionais da Darion Data são balizadas por padrões técnicos consolidados internacionalmente: <strong>ABNT NBR ISO/IEC 27001:2013</strong>, <strong>ISO/IEC 27005</strong> (Gestão de Riscos de Segurança), <strong>ISO/IEC 27701</strong> (Gestão de Privacidade), <strong>COBIT 2019</strong> e publicações especiais do <strong>NIST Série 800</strong>.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-semibold text-[#1d1d1f]">Gestão de Ativos de Informação</h4>
                <p className="text-[#515154]">
                  Todos os ativos de tecnologia e informação são mapeados, rastreáveis, identificados individualmente, inventariados e monitorados com controles de acesso e manutenção atualizados de acordo com as melhores práticas dos fabricantes.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-semibold text-[#1d1d1f]">Classificação da Informação</h4>
                <p className="text-[#515154]">
                  Toda informação é classificada com base em critérios formais de confidencialidade: <strong>Confidencial</strong>, <strong>Interna</strong> ou <strong>Pública</strong>, acompanhada de marcações mandatórias exigidas pela LGPD e GDPR para ativos contendo dados cadastrais corporativos.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-semibold text-[#1d1d1f]">Gestão e Controle de Acessos</h4>
                <p className="text-[#515154]">
                  Todas as concessões, revisões periódicas e revogações de acesso seguem fluxos formais. Todo acesso aos sistemas é registrado em logs íntegros e auditáveis, armazenados de maneira segura por <strong>até 5 anos</strong> para fins de auditoria e responsabilização individual, respaldados nas normas ISO/IEC 27005, ABNT NBR ISO 31000:2018 e metodologia COSO.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-semibold text-[#1d1d1f]">Gestão de Portfólio, Projetos e Metodologias</h4>
                <p className="text-[#515154]">
                  Projetos de automação e integração de infraestrutura seguem padrões estruturados de gerenciamento com base nas melhores práticas do <em>Project Management Institute (PMI)</em> e metodologias ágeis, com avaliação mandatória de riscos em todas as fases.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-semibold text-[#1d1d1f]">Gestão de Incidentes e Resolução de Problemas</h4>
                <p className="text-[#515154]">
                  O tratamento de incidentes de segurança é conduzido em conformidade com o <strong>ITIL v4</strong> e a <strong>ISO/IEC 20000</strong>, com reporte executivo direto ao corpo diretivo, mapeamento de causa-raiz e indicadores para melhoria técnica contínua.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-semibold text-[#1d1d1f]">Continuidade dos Negócios e Recuperação de Desastres (DR)</h4>
                <p className="text-[#515154]">
                  A Darion Data mantém planos estruturados e documentados com base na <strong>ISO 22301:2019</strong> para garantir a resiliência operacional, contingência de sistemas e recuperação de desastres, mitigando interrupções nas entregas e projetos.
                </p>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-semibold text-[#1d1d1f]">Propriedade Intelectual e Acordos de Confidencialidade (NDA)</h4>
                <p className="text-[#515154]">
                  Códigos-fonte, metodologias, processos e ativos intangíveis pertencentes à Darion Data são estritamente protegidos. Todos os colaboradores, terceiros e prestadores assinam mandatoriamente um <em>Termo de Confidencialidade (Non-Disclosure Agreement — NDA)</em>, e os contratos corporativos preveem cláusulas de proteção de segredo industrial e dados.
                </p>
              </div>
            </section>

            {/* Documentos Relacionados */}
            <section className="space-y-2 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Documentos Relacionados
              </h3>
              <p className="text-xs text-[#515154]">
                Integram e complementam esta política: a <em>Política de Gestão de Riscos Corporativos e Governança</em>, a <em>Política de Privacidade</em> e a <em>Política de Conduta, Ética e Conformidade</em> da Darion Data.
              </p>
            </section>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* 3. POLÍTICA DE CONDUTA, ÉTICA E CONFORMIDADE              */}
      {/* ========================================================= */}
      <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-sm transition-all">
        <button
          type="button"
          onClick={() => toggleSection("etica")}
          className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-black/[0.02]"
          aria-expanded={openSections.etica}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#af52de]/10 text-xs font-semibold text-[#af52de]">
              03
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-[#1d1d1f]">
                Política de Conduta, Ética e Conformidade
              </h2>
              <p className="text-xs text-[#86868b] mt-0.5">
                Padrão DSC 10.000, Lei Anticorrupção (nº 12.846/2013), integridade nas relações e código de conduta profissional
              </p>
            </div>
          </div>
          <div className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] text-[#1d1d1f] transition-transform duration-200">
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${
                openSections.etica ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {openSections.etica && (
          <div className="border-t border-black/[0.06] px-6 py-8 text-[13px] leading-relaxed text-[#424245] space-y-7 bg-[#ffffff]">
            {/* Objetivo */}
            <section className="space-y-3">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Objetivo
              </h3>
              <p>
                O objetivo desta Política de Conduta, Ética e Conformidade da <strong>Darion Data</strong> é ser um guia mandatório e de referência a ser utilizado por todos os colaboradores em suas interações cotidianas, tomadas de decisão e relações institucionais, assegurando um ambiente transparente, ético e em estrita conformidade com a <strong>DSC 10.000</strong> e a <strong>Lei Anticorrupção nº 12.846/2013</strong>.
              </p>
              <p className="font-medium text-[#1d1d1f]">
                Como diretrizes institucionais inegociáveis, a Darion Data atua com as seguintes premissas:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-[#515154]">
                <li>Diligência, precisão técnica e valorização integral do trabalho humano;</li>
                <li>Busca incessante por melhoria contínua, cultural e profissional;</li>
                <li>Atuação transparente perante si, seus clientes e a sociedade;</li>
                <li>Pioneirismo em automação responsável e arquiteturas de redes seguras;</li>
                <li>Respeito equânime e dignidade para todas as pessoas.</li>
              </ul>
            </section>

            {/* Abrangência */}
            <section className="space-y-3 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Abrangência
              </h3>
              <p>
                A Política de Conduta, Ética e Conformidade da Darion Data aplica-se irrestritamente a todos os membros, diretores, colaboradores, consultores e prestadores de serviço que atuem em nome da Darion Data, mediante compromisso formal assumido por escrito.
              </p>
            </section>

            {/* Valores Corporativos */}
            <section className="space-y-3 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Valores Corporativos
              </h3>
              <p>Os valores que regem a organização são:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#515154]">
                <li>Os clientes e os clientes dos nossos clientes são a razão essencial do nosso trabalho;</li>
                <li>Respeito integral à cultura, governança e particularidades de cada cliente;</li>
                <li>Lealdade, transparência e respeito nas relações com o mercado, concorrência e parceiros de tecnologia;</li>
                <li>Busca contínua pela evolução técnica, intelectual e humanitária;</li>
                <li>Respeito irrestrito à dignidade e à diversidade;</li>
                <li>Responsabilidade socioambiental e sustentabilidade operacional;</li>
                <li>Aperfeiçoamento constante do ambiente de trabalho e da excelência dos serviços entregues.</li>
              </ul>
            </section>

            {/* Princípios Éticos */}
            <section className="space-y-4 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Princípios Éticos Fundamentais
              </h3>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-[#1d1d1f]">Integridade e Postura Anticorrupção</h4>
                <p className="text-[#515154]">
                  O princípio ético da Integridade orienta uma conduta transparente, justa e fundamentada em fatos objetivos, sem favorecimentos ou benefícios pessoais indevidos.
                </p>
                <div className="rounded-xl bg-[#f5f5f7] p-3.5 border border-black/[0.04] text-xs text-[#1d1d1f] space-y-2">
                  <p>
                    A integridade é antagônica a qualquer forma de corrupção. A Darion Data repudia veementemente e considera inaceitável qualquer tentativa ou ato de suborno, fraude, facilitação, extorsão, ocultação ou dissimulação de fatos perante clientes, parceiros ou órgãos fiscalizadores.
                  </p>
                  <p>
                    É estritamente vedado solicitar, obter, pagar, prometer, patrocinar ou autorizar, direta ou indiretamente, qualquer vantagem indevida, pecuniária ou de qualquer natureza, que represente relacionamento impróprio.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-[#1d1d1f]">Controle de Conflito de Interesses</h4>
                <p className="text-[#515154]">
                  Nenhum colaborador ou representante da Darion Data pode intervir ou influenciar decisões corporativas que possam resultar em benefícios particulares diretos ou indiretos a si, familiares, amigos ou entidades terceiras com as quais possua vínculo de qualquer natureza.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-[#1d1d1f]">Informações Privilegiadas e Proteção de Ativos</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-[#515154]">
                  <li>
                    <strong>Informações Privilegiadas:</strong> Dados classificados como &ldquo;Internos&rdquo; ou &ldquo;Confidenciais&rdquo; são protegidos por sigilo profissional absoluto, vedado o compartilhamento ou uso para proveito próprio.
                  </li>
                  <li>
                    <strong>Proteção de Ativos e Dados Pessoais:</strong> No uso de bases de dados, sistemas, manuais e códigos de software, é mandatório zelar pela propriedade intelectual da Darion Data e de nossos clientes, atuando com fidelidade aos propósitos contratuais e às exigências da LGPD.
                  </li>
                </ul>
              </div>
            </section>

            {/* Código de Conduta */}
            <section className="space-y-4 border-t border-black/[0.06] pt-6">
              <h3 className="text-sm font-semibold text-[#1d1d1f] uppercase tracking-wider">
                Código de Conduta Profissional
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-black/[0.06] bg-[#fafafc] p-4 space-y-1.5">
                  <div className="font-semibold text-[#1d1d1f]">Atuação no Cargo ou Função</div>
                  <ul className="list-disc pl-4 text-xs text-[#515154] space-y-1">
                    <li>Consciência do impacto de cada ação técnica na operação dos clientes;</li>
                    <li>Meritocracia, pontualidade e excelência na execução das tarefas;</li>
                    <li>Zelo incondicional pelo sigilo de dados das organizações atendidas.</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-black/[0.06] bg-[#fafafc] p-4 space-y-1.5">
                  <div className="font-semibold text-[#1d1d1f]">Cultura Organizacional</div>
                  <ul className="list-disc pl-4 text-xs text-[#515154] space-y-1">
                    <li>Ambiente inclusivo, igualitário e com incentivo à evolução mútua;</li>
                    <li>Tolerância zero a qualquer manifestação de assédio moral ou sexual;</li>
                    <li>Combate irrestrito a discriminações de qualquer natureza;</li>
                    <li>Estímulo ao diálogo aberto e comunicação respeitosa.</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-black/[0.06] bg-[#fafafc] p-4 space-y-1.5">
                  <div className="font-semibold text-[#1d1d1f]">Relação com Clientes</div>
                  <ul className="list-disc pl-4 text-xs text-[#515154] space-y-1">
                    <li>Relações comerciais orientadas por total transparência contratual;</li>
                    <li>Máximo zelo e confidencialidade no manuseio de redes e dados;</li>
                    <li>Acolhimento construtivo a críticas e feedbacks de clientes;</li>
                    <li>Preservação do negócio e da reputação dos nossos parceiros.</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-black/[0.06] bg-[#fafafc] p-4 space-y-1.5">
                  <div className="font-semibold text-[#1d1d1f]">Fornecedores e Parceiros</div>
                  <ul className="list-disc pl-4 text-xs text-[#515154] space-y-1">
                    <li>Seleção criteriosa de fornecedores que compartilhem os mesmos princípios éticos;</li>
                    <li>Relacionamentos duradouros, equilibrados e íntegros;</li>
                    <li>Transparência nas negociações e cumprimento pontual dos acordos.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="font-semibold text-[#1d1d1f]">Relação com Órgãos Públicos e Entidades Reguladoras</h4>
                <p className="text-xs text-[#515154]">
                  É estritamente proibido conceder, prometer, sugerir ou autorizar benefícios a agentes públicos em benefício da Darion Data ou de seus clientes. A organização cumpre rigorosamente os mecanismos nacionais e internacionais de prevenção à lavagem de dinheiro e financiamento ilícito, em consonância com as melhores práticas de governança.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="font-semibold text-[#1d1d1f]">Gestão da Ética e Canal de Comunicação</h4>
                <p className="text-xs text-[#515154]">
                  O cumprimento desta política é liderado pelo corpo diretivo da Darion Data. Mantemos canais abertos e confidenciais para que colaboradores, clientes e parceiros reportem, de boa-fé e sem receio de retaliação, qualquer conduta incompatível com as diretrizes aqui estabelecidas.
                </p>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
