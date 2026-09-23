export function HeroIllustration() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-md mx-auto select-none" style={{ height: 180 }}>
      {/* Lost item — left */}
      <div className="absolute left-0 flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-xl bg-uffa-coral/15 border-2 border-uffa-coral/40 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="4" y="10" width="24" height="18" rx="3" stroke="var(--color-uffa-coral)" strokeWidth="2"/>
            <path d="M11 10V8a5 5 0 0 1 10 0v2" stroke="var(--color-uffa-coral)" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="19" r="2" fill="var(--color-uffa-coral)"/>
            <path d="M16 21v3" stroke="var(--color-uffa-coral)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="text-xs font-medium text-uffa-coral tracking-wide uppercase">Perdido</span>
      </div>

      {/* Dotted connecting line */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid meet">
        <path
          d="M 80 90 C 140 60, 260 120, 320 90"
          stroke="var(--color-uffa-blue)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          fill="none"
          opacity="0.5"
        />
        <circle cx="200" cy="90" r="10" fill="var(--color-uffa-blue)" opacity="0.12"/>
        <circle cx="200" cy="90" r="5" fill="var(--color-uffa-blue)" opacity="0.6"/>
        <path d="M200 95 L200 110" stroke="var(--color-uffa-blue)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>

      {/* Found item — right */}
      <div className="absolute right-0 flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-xl bg-uffa-yellow/20 border-2 border-uffa-yellow/60 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="14" cy="14" r="8" stroke="var(--color-uffa-yellow)" strokeWidth="2"/>
            <path d="M20 20 L27 27" stroke="var(--color-uffa-yellow)" strokeWidth="2" strokeLinecap="round"/>
            <path d="M10 14 L13 17 L18 11" stroke="var(--color-uffa-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-xs font-medium text-uffa-yellow tracking-wide uppercase">Achado</span>
      </div>
    </div>
  );
}