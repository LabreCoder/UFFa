interface AiLinkProps {
  label: string;
  onClick: () => void;
  active?: boolean;
  tone?: "light" | "dark";
  className?: string;
}

// Atalho para a página Uso de IA: link com ícone de brilho, sem o formato de pílula das etapas.
export function AiLink({ label, onClick, active = false, tone = "light", className = "" }: AiLinkProps) {
  const dark = tone === "dark";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`group inline-flex items-center gap-2 min-h-11 rounded-sm whitespace-nowrap text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-uffa-gold ${
        dark ? "text-white hover:text-uffa-gold" : "text-uffa-azulpetroleo hover:text-uffa-azulpetroleo-dark"
      } ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="w-5 h-5 text-uffa-gold transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
        fill="currentColor"
      >
        <path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9L12 2z" />
        <path d="M19 15l.9 2.6L22.5 18.5l-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9L19 15z" opacity="0.7" />
      </svg>
      <span className={`border-b-2 pb-0.5 ${active ? "border-uffa-gold" : "border-transparent group-hover:border-uffa-gold/60"}`}>
        {label}
      </span>
    </button>
  );
}
