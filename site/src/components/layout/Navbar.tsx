import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/navigtation";
import { useScrollTo } from "../../hooks/useScrollTo";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { SectionImage } from "../ui/SectionImage";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollTo } = useScrollTo();
  const activeSection = useScrollSpy(
    NAV_LINKS.map((link) => link.href.replace("#", "")),
    120
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-uffa-navy ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-uffa-navy/10 shadow-sm"
          : "bg-transparent border-uffa-navy/10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <button
          onClick={() => scrollTo("#hero")}
          className="font-display text-lg text-uffa-blue tracking-tight hover:opacity-80 transition-opacity"
        >
          UFFa
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-uffa-blue font-semibold"
                      : "text-black hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-0.5 bg-uffa-navy transition-transform duration-200 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-uffa-navy transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-uffa-navy transition-transform duration-200 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>
      <SectionImage image="image3" />

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-uffa-bg border-t border-uffa-navy/10 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => {
                scrollTo(link.href);
                setMenuOpen(false);
              }}
              className="text-sm font-medium text-uffa-navy/70 hover:text-uffa-blue text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}