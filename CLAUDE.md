@AGENTS.md

# CLAUDE.md — dariondata-site

Guia de referência para trabalhar neste repositório. Este projeto é **independente** dos demais projetos existentes na pasta `dariondata` (`darion-data` e `dariondata-landing`) — nenhum código, dependência ou histórico deve ser compartilhado ou copiado diretamente entre eles.

## Visão geral

Site institucional público da Darion Data, a ser publicado em **dariondata.com.br**. Apresenta a empresa, suas soluções, cases de sucesso, conteúdo educativo sobre a tecnologia utilizada, e um canal de SAC (Serviço de Atendimento ao Cliente) com formulário de contato/reclamação/sugestão.

O site deve nascer **preparado para, futuramente, receber uma área operacional privada**, acessível somente após autenticação, restrita a contas validadas pelo domínio corporativo `dariondata.com.br`. Essa área **não deve ser implementada agora** — apenas a estrutura (rotas, convenções, pontos de extensão) deve deixar espaço para ela sem retrabalho estrutural.

### Proposta de valor (base para textos e copy)

> À medida que sua empresa evolui, processos manuais podem limitar a produtividade. A Darion Data automatiza fluxos, integra sistemas e escala a operação do cliente com uma plataforma agêntica.

Referência de mercado/estilo (não copiar texto nem design literalmente, usar como inspiração de proposta e tom): `https://plataforma.browsermate.io/rpa/`

## Objetivo

- Comunicar com clareza a proposta de automação de fluxos e integração de sistemas via plataforma agêntica.
- Gerar credibilidade (cases, explicações técnicas acessíveis) e capturar contato de leads.
- Oferecer um canal de SAC funcional (reclamação, sugestão, contato geral) com envio confiável.
- Ser responsivo (mobile-first) e performático (Core Web Vitals saudáveis).
- Deixar a arquitetura pronta para acoplar, no futuro, autenticação e uma área operacional privada, sem exigir migração de stack.

## Stack

- **Framework:** Next.js (App Router), última versão estável — permite rotas de API/Server Actions no mesmo projeto, necessárias para o formulário de SAC e, futuramente, para autenticação e áreas privadas.
- **UI:** React + Tailwind CSS.
- **Linguagem:** JavaScript (`.js`/`.jsx`), consistente com os demais projetos da empresa. Não introduzir TypeScript parcialmente — se adotado, deve ser no projeto inteiro, e isso é uma decisão a rediscutir, não a tomar ad-hoc.
- **Gerenciador de pacotes:** npm (usar `package-lock.json`, não misturar com yarn/pnpm).
- **Hospedagem alvo:** Vercel.
- **E-mail/formulário de SAC:** provedor a definir no checkpoint correspondente (ex.: Resend, Nodemailer+SMTP). Não decidir/implementar credenciais sem confirmação explícita.

## Comandos

```bash
npm install        # instalar dependências
npm run dev         # ambiente de desenvolvimento (http://localhost:3000)
npm run build        # build de produção
npm run start        # servir build de produção localmente
npm run lint         # ESLint
```

(Comandos de teste serão adicionados quando o framework de testes for introduzido — ver seção Testes.)

## Arquitetura

Estrutura prevista (App Router):

```
src/
  app/
    layout.js              # layout raiz, metadata, fontes
    page.js                 # home
    solucoes/                # página(s) de soluções
    cases/                    # cases de sucesso
    tecnologia/                # explicações da tecnologia/FAQ
    sac/                        # formulário de SAC (página)
    api/
      sac/route.js              # endpoint que recebe e encaminha o formulário
    (privado)/                    # grupo de rotas reservado para a futura área autenticada
                                    # NÃO implementar lógica de negócio aqui ainda —
                                    # apenas manter a pasta/convenção reservada, se criada.
  components/                   # componentes de UI compartilhados
  lib/                           # utilidades (validação, clients de e-mail, etc.)
public/                           # assets estáticos (imagens, logo, favicon)
```

Princípios:
- Páginas públicas são estáticas/SSG sempre que possível; usar Server Components por padrão e `"use client"` apenas onde houver interatividade real (formulários, animações).
- O formulário de SAC deve submeter para uma rota de API própria (`app/api/sac/route.js`) — nunca expor chaves de provedor de e-mail no client.
- A futura área autenticada deve ser isolada em um route group próprio (ex.: `app/(privado)/`) protegido por `middleware.js`, para que a introdução de auth não exija reestruturar as páginas públicas.
- Sem backend/banco de dados neste momento além do necessário para processar o SAC (e-mail transacional). Não introduzir banco de dados especulativamente.

## Convenções

- Nomes de arquivos e pastas em `kebab-case`; componentes React em `PascalCase`.
- Texto de interface em português (pt-BR); atributos técnicos (`className`, nomes de variáveis) em inglês, seguindo o padrão já usado nos outros projetos da empresa.
- Estilização exclusivamente via Tailwind (classes utilitárias); evitar CSS customizado fora de `globals.css`, salvo animações que não sejam viáveis em utilitário puro.
- Commits pequenos e descritivos, em português, no imperativo (ex.: "Adiciona formulário de SAC").
- Nenhuma dependência nova sem necessidade concreta — preferir recursos nativos do Next.js/React a bibliotecas externas.

## Testes

Ainda não há framework de testes configurado. Padrão mínimo a seguir enquanto isso:
- `npm run lint` e `npm run build` devem passar sem erros antes de qualquer entrega.
- Checklist manual de QA (documentar no PR/checkpoint) cobrindo: layout em mobile (360–420px), tablet e desktop; envio do formulário de SAC com sucesso e com erro de validação; navegação entre todas as páginas públicas.
- Quando testes automatizados forem introduzidos: Vitest + Testing Library para componentes, Playwright para o fluxo crítico do formulário de SAC. Isso deve ser proposto como checkpoint explícito, não adicionado silenciosamente.

## Critérios de validação

Antes de considerar uma entrega concluída:
- [ ] `npm run build` e `npm run lint` sem erros.
- [ ] Responsividade verificada em mobile, tablet e desktop.
- [ ] Formulário de SAC valida campos obrigatórios e trata erro de envio.
- [ ] Nenhum segredo (chave de API, SMTP, etc.) commitado no repositório.
- [ ] Textos revisados (sem placeholder tipo "lorem ipsum" ou copy de teste em produção).
- [ ] Nenhuma rota da futura área privada acessível/publicada sem autenticação real implementada.

## Arquivos proibidos

Nunca ler, editar, mover ou commitar:
- `.env`, `.env.local` e qualquer variante com credenciais (chaves de e-mail, tokens).
- Qualquer arquivo dentro de `darion-data/` ou `dariondata-landing/` (projetos irmãos, fora do escopo deste repositório).
- `node_modules/`, `.next/` — apenas gerados, nunca versionados nem editados manualmente.
- Dados reais de clientes recebidos via SAC (reclamações, e-mails, telefones) — não devem ser persistidos no repositório em nenhuma hipótese (ex.: logs de teste, fixtures).

## Regras de segurança

- O formulário de SAC deve validar e sanitizar entradas no servidor (rota de API), nunca confiar apenas em validação client-side.
- Aplicar rate limiting básico na rota de SAC para mitigar spam/abuso.
- Nenhuma credencial (SMTP, API de e-mail, futuras chaves de auth) deve ser hardcoded — sempre via variáveis de ambiente, nunca commitadas.
- A futura autenticação deve validar o domínio corporativo (`dariondata.com.br`) no servidor, nunca apenas no client.
- Servir sempre via HTTPS (garantido pela Vercel); não desabilitar redirecionamento HTTPS.
- Não expor headers, stack traces ou mensagens de erro detalhadas do servidor ao usuário final na rota de SAC.
