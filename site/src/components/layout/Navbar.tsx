import { useState, useEffect, useMemo } from "react";
import { STAGES, AI_PAGE } from "../../data/stages";
import { useScrollTo } from "../../hooks/useScrollTo";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { PageId, Stage } from "../../types";
import { Logo } from "../ui/Logo";
import { AiLink } from "../ui/AiLink";

interface NavbarProps {
  stage: PageId;
  navigate: (stage: Stage) => void;
}

export function Navbar({ stage, navigate }: NavbarProps) {
  const current = stage === AI_PAGE.id ? AI_PAGE : STAGES.find((s) => s.id === stage) ?? STAGES[0];
  const onAiPage = stage === AI_PAGE.id;
  const links = current.navLinks;
  const brandTarget = current.brandTarget;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const { scrollTo } = useScrollTo();
  const sectionIds = useMemo(() => links.map((link) => link.href.replace("#", "")), [links]);
  const activeSection = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-uffa-lightblue ${
        scrolled
          ? "bg-uffa-lightblue backdrop-blur-sm border-b border-uffa-navy/10 shadow-sm"
          : "bg-uffa-lightblue border-uffa-navy/10"
      }`}
    >
      {/* max-w-screen-2xl com espaçamentos sincronizados */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 xl:px-16 flex items-center justify-between h-16">
        <button
          onClick={() => scrollTo(brandTarget)}
          className="text-3xl tracking-tight hover:opacity-80 transition-opacity"
        >
          <Logo />
        </button>

        {/* Desktop nav */}
        <ul className="hidden xl:flex items-center gap-5 2xl:gap-10">
          {links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`whitespace-nowrap text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-uffa-blue font-semibold"
                      : "text-uffa-navy hover:text-uffa-blue"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
          <li className="flex items-center gap-5 2xl:gap-10">
            <span aria-hidden="true" className="h-6 w-px bg-uffa-navy/20" />
            <AiLink label={AI_PAGE.label} active={onAiPage} onClick={() => navigate(AI_PAGE.id)} />
          </li>
          <li>
            <button
              onClick={() => navigate("home")}
              className="whitespace-nowrap text-sm font-semibold px-4 py-2 rounded-full border-2 border-uffa-azulpetroleo text-uffa-azulpetroleo hover:bg-uffa-azulpetroleo/10 transition-colors duration-200"
            >
              Início das etapas
            </button>
          </li>
          <li>
            <div className="flex items-center gap-1 rounded-full border-2 border-uffa-azulpetroleo p-0.5">
              {STAGES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => navigate(s.id)}
                  aria-current={s.id === stage ? "page" : undefined}
                  className={`whitespace-nowrap text-sm font-semibold px-3 py-1.5 rounded-full transition-colors ${
                    s.id === stage ? "bg-uffa-azulpetroleo text-white" : "text-uffa-azulpetroleo hover:bg-uffa-azulpetroleo/10"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden flex flex-col gap-1.5 p-2.5"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-uffa-navy transition-transform duration-200 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-uffa-navy transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-uffa-navy transition-transform duration-200 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>
      <div aria-hidden="true" className="absolute left-0 top-16 -mt-0.5 h-0.5 w-full origin-left bg-uffa-blue" style={{ transform: `scaleX(${progress})` }} />

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden bg-uffa-bg border-t border-uffa-navy/10 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => {
                scrollTo(link.href);
                setMenuOpen(false);
              }}
              className={`text-base text-left transition-colors ${
                activeSection === link.href.replace("#", "") ? "font-semibold text-uffa-blue" : "font-medium text-uffa-navy/70 hover:text-uffa-blue"
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-uffa-navy/10">
            <AiLink label={AI_PAGE.label} active={onAiPage} onClick={() => navigate(AI_PAGE.id)} className="w-full" />
            <button
              onClick={() => navigate("home")}
              className="text-sm font-semibold px-4 py-2 rounded-full border-2 border-uffa-azulpetroleo text-uffa-azulpetroleo hover:bg-uffa-azulpetroleo/10 transition-colors"
            >
              Início das etapas
            </button>
            {STAGES.map((s) => (
              <button
                key={s.id}
                onClick={() => navigate(s.id)}
                aria-current={s.id === stage ? "page" : undefined}
                className={`text-sm font-semibold px-4 py-2 rounded-full border-2 border-uffa-azulpetroleo transition-colors ${
                  s.id === stage ? "bg-uffa-azulpetroleo text-white" : "text-uffa-azulpetroleo hover:bg-uffa-azulpetroleo/10"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}