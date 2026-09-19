// Chrome compartilhado da área restrita (ex.: sidebar, guarda de sessão)
// entra aqui quando a autenticação for implementada. Por ora só repassa
// os filhos — o acesso já é bloqueado antes disso, em src/middleware.js.
export default function PrivateLayout({ children }) {
  return children;
}
