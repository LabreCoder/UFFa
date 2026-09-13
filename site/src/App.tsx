import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Problema", href: "#problema" },
  { label: "Pesquisa", href: "#pesquisa" },
  { label: "Descobertas", href: "#descobertas" },
  { label: "Próximos Passos", href: "#proximos" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-uffa-bg/95 backdrop-blur-sm border-b border-uffa-navy/10 shadow-sm"
          : "bg-transparent"
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
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-uffa-navy/70 hover:text-uffa-blue transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-uffa-navy transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-5 h-0.5 bg-uffa-navy transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-uffa-navy transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-uffa-bg border-t border-uffa-navy/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => { scrollTo(link.href); setMenuOpen(false); }}
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

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroIllustration() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-md mx-auto select-none" style={{ height: 180 }}>
      {/* Lost item — left */}
      <div className="absolute left-0 flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-xl bg-uffa-coral/15 border-2 border-uffa-coral/40 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="4" y="10" width="24" height="18" rx="3" stroke="#F2766B" strokeWidth="2"/>
            <path d="M11 10V8a5 5 0 0 1 10 0v2" stroke="#F2766B" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="19" r="2" fill="#F2766B"/>
            <path d="M16 21v3" stroke="#F2766B" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="text-xs font-medium text-uffa-coral tracking-wide uppercase">Perdido</span>
      </div>

      {/* Dotted connecting line */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid meet">
        <path
          d="M 80 90 C 140 60, 260 120, 320 90"
          stroke="#2457A6"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          fill="none"
          opacity="0.5"
        />
        {/* Pin at center */}
        <circle cx="200" cy="90" r="10" fill="#2457A6" opacity="0.12"/>
        <circle cx="200" cy="90" r="5" fill="#2457A6" opacity="0.6"/>
        <path d="M200 95 L200 110" stroke="#2457A6" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>

      {/* Found item — right */}
      <div className="absolute right-0 flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-xl bg-uffa-yellow/20 border-2 border-uffa-yellow/60 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="14" cy="14" r="8" stroke="#C8A200" strokeWidth="2"/>
            <path d="M20 20 L27 27" stroke="#C8A200" strokeWidth="2" strokeLinecap="round"/>
            <path d="M10 14 L13 17 L18 11" stroke="#C8A200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-xs font-medium text-amber-700 tracking-wide uppercase">Achado</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-medium tracking-widest uppercase text-uffa-blue/70 mb-8">
          Projeto de Interação Humano-Computador&nbsp;·&nbsp;Universidade Federal Fluminense
        </p>

        <h1 className="font-display text-5xl md:text-7xl text-uffa-navy leading-tight mb-6">
          UFFa —<br />
          <span className="italic">Achados e Perdidos</span>
        </h1>

        <p className="text-lg md:text-xl text-uffa-navy/65 max-w-2xl mx-auto leading-relaxed mb-14">
          Como podemos tornar mais simples, seguro e confiável encontrar e devolver objetos dentro da UFF?
        </p>

        <HeroIllustration />

        <button
          onClick={() => scrollTo("#problema")}
          className="mt-14 inline-flex items-center gap-2 text-sm font-medium text-uffa-blue hover:text-uffa-navy transition-colors duration-200 group"
        >
          Conheça a pesquisa
          <span className="block transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
        </button>
      </div>
    </section>
  );
}

// ─── O Problema ───────────────────────────────────────────────────────────────

const CHANNELS = [
  { icon: "💬", label: "Grupos de WhatsApp", desc: "Turmas, DCE, grupos de departamento" },
  { icon: "🏢", label: "Portaria e Segurança", desc: "Ponto físico de entrega e registro" },
  { icon: "📋", label: "Secretaria", desc: "Comunicação formal interna" },
  { icon: "📌", label: "Achados e Perdidos", desc: "Quando existe — localização variável" },
  { icon: "👥", label: "Colegas e Professores", desc: "Redes pessoais e de confiança" },
  { icon: "📱", label: "Redes Sociais", desc: "Instagram, Facebook, grupos abertos" },
];

function OProblema() {
  return (
    <section id="problema" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-uffa-coral">O Problema</span>
          <h2 className="font-display text-4xl md:text-5xl text-uffa-navy mt-3 mb-6 leading-tight">
            A busca passa por canais<br />dispersos e desconectados
          </h2>
          <p className="text-uffa-navy/65 max-w-xl leading-relaxed">
            Quando alguém perde um objeto nos campi da UFF em Niterói, o processo de recuperação depende de iniciativa própria e sorte — não de um sistema claro. Parte da nossa investigação é entender como isso funciona na prática.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {CHANNELS.map((ch) => (
            <div
              key={ch.label}
              className="bg-white border border-uffa-navy/8 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-2xl mb-3 block">{ch.icon}</span>
              <p className="font-semibold text-uffa-navy text-sm mb-1">{ch.label}</p>
              <p className="text-xs text-uffa-navy/55 leading-relaxed">{ch.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlight quote */}
        <div className="bg-uffa-navy rounded-3xl px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-1 h-16 bg-uffa-yellow rounded-full shrink-0 hidden md:block" />
          <p className="font-display text-3xl md:text-4xl text-white italic leading-snug">
            "A informação existe,<br />mas está espalhada."
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Pergunta de Pesquisa ─────────────────────────────────────────────────────

function PerguntaDePesquisa() {
  return (
    <section className="py-24 px-6 bg-uffa-lightblue">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-medium tracking-widest uppercase text-uffa-blue/70 block mb-10">
          Pergunta de Pesquisa
        </span>
        <blockquote className="font-display text-2xl md:text-4xl text-uffa-navy leading-relaxed">
          "Como as pessoas que circulam pela UFF em Niterói{" "}
          <span className="italic">procuram, entregam e recuperam objetos</span>{" "}
          hoje, e quais condições tornam esse processo{" "}
          <span className="text-uffa-blue">compreensível, acessível e confiável</span>?"
        </blockquote>
      </div>
    </section>
  );
}

// ─── Nossa Pesquisa (Timeline) ────────────────────────────────────────────────

const RESEARCH_STEPS = [
  {
    label: "Análise da Situação Atual",
    desc: "Mapeamento do contexto e dos atores envolvidos no processo de achados e perdidos nos campi.",
    done: true,
  },
  {
    label: "Matriz CSD",
    desc: "Organização das certezas, suposições e dúvidas do grupo sobre o problema.",
    done: true,
  },
  {
    label: "Análise Competitiva",
    desc: "Estudo de soluções existentes — diretas, indiretas e inspiradoras.",
    done: true,
  },
  {
    label: "Mapa de Empatia",
    desc: "Hipóteses sobre o que o usuário faz, fala, pensa e sente nessa situação.",
    done: true,
  },
  {
    label: "Roteiro de Entrevistas",
    desc: "Instrumento semiestruturado definido para quem perdeu, encontrou, docentes, técnicos e atendentes.",
    done: true,
  },
  {
    label: "Questionário",
    desc: "Instrumento quantitativo elaborado para ampliar a escala da coleta.",
    done: true,
  },
  {
    label: "Coleta de Campo",
    desc: "Realização das entrevistas e aplicação do questionário — em andamento.",
    done: false,
  },
];

function NossaPesquisa() {
  return (
    <section id="pesquisa" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-uffa-blue/70">Nossa Pesquisa</span>
          <h2 className="font-display text-4xl md:text-5xl text-uffa-navy mt-3 leading-tight">
            O que fizemos até aqui
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-uffa-navy/10 hidden md:block" />

          <div className="flex flex-col gap-6">
            {RESEARCH_STEPS.map((step, i) => (
              <div key={i} className="relative flex gap-6 items-start">
                {/* Dot */}
                <div className="hidden md:flex shrink-0 w-10 h-10 rounded-full border-2 items-center justify-center z-10 mt-0.5"
                  style={{
                    backgroundColor: step.done ? "#2457A6" : "#F8F7F3",
                    borderColor: step.done ? "#2457A6" : "#17233C30",
                  }}
                >
                  {step.done ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-uffa-navy/25" />
                  )}
                </div>

                <div className={`flex-1 rounded-2xl p-6 border transition-all duration-200 ${
                  step.done
                    ? "bg-white border-uffa-navy/8 hover:shadow-sm"
                    : "bg-uffa-yellow/10 border-uffa-yellow/40"
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    {!step.done && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-uffa-yellow text-uffa-navy">
                        Em andamento
                      </span>
                    )}
                    <h3 className="font-semibold text-uffa-navy">{step.label}</h3>
                  </div>
                  <p className="text-sm text-uffa-navy/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Matriz CSD ───────────────────────────────────────────────────────────────

const CSD = {
  certezas: [
    "É uma dor dos alunos da UFF",
    "É necessário um canal de divulgação da nossa solução",
    "Há muita desinformação sobre como recuperar objetos perdidos",
    "Há muita desinformação sobre como devolver objetos achados",
    "O projeto tem como objetivo facilitar a conexão entre quem perdeu e quem encontrou um objeto",
    "A plataforma pode possuir filtros por campus, categoria e período",
    "O sistema pode registrar data e local onde o objeto foi encontrado/perdido",
    "A plataforma poderia permitir o cadastro de objetos perdidos e encontrados",
  ],
  suposicoes: [
    "Muitos objetos perdidos dentro da universidade não são recuperados",
    "Atualmente, os usuários dependem de grupos de WhatsApp, Instagram ou comunicação informal para procurar objetos",
    "A falta de uma plataforma centralizada dificulta a localização dos objetos",
    "Fotos dos objetos ajudariam bastante na identificação",
    "Gamificação ou recompensas poderiam incentivar pessoas a devolverem objetos",
  ],
  duvidas: [
    "Quem são os concorrentes?",
    "Como garantir a segurança da entrega ser feita ao verdadeiro dono?",
    "Há alguma barreira legal que impeça os objetos encontrados a serem doados após muito tempo guardado?",
    "A UFF aceitaria disponibilizar um local para armazenar os objetos?",
    "Como atrair as pessoas para essa implementação?",
    "Como funciona o processo atual na faculdade para quem perde e acha objetos pelo campus?",
    "Como lidar com objetos de alto valor encontrados?",
  ],
};

function MatrizCSD() {
  return (
    <section id="descobertas" className="py-24 px-6 bg-uffa-lightblue">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-uffa-blue/70">Matriz CSD</span>
          <h2 className="font-display text-4xl md:text-5xl text-uffa-navy mt-3 leading-tight">
            Certezas, Suposições e Dúvidas
          </h2>
          <p className="mt-4 text-uffa-navy/60 max-w-lg leading-relaxed text-sm">
            Mapeamos o que sabemos, o que supomos e o que ainda precisamos investigar antes de partir para a coleta de campo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Certezas */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-uffa-green" />
              <span className="text-xs font-semibold tracking-widest uppercase text-uffa-navy/70">Certezas</span>
            </div>
            <div className="flex flex-col gap-3">
              {CSD.certezas.map((item, i) => (
                <div key={i} className="bg-uffa-green/15 border border-uffa-green/30 rounded-xl p-4 text-sm text-uffa-navy leading-relaxed hover:bg-uffa-green/20 transition-colors">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Suposições */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-uffa-yellow" />
              <span className="text-xs font-semibold tracking-widest uppercase text-uffa-navy/70">Suposições</span>
            </div>
            <div className="flex flex-col gap-3">
              {CSD.suposicoes.map((item, i) => (
                <div key={i} className="bg-uffa-yellow/20 border border-uffa-yellow/40 rounded-xl p-4 text-sm text-uffa-navy leading-relaxed hover:bg-uffa-yellow/30 transition-colors">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Dúvidas */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-uffa-coral" />
              <span className="text-xs font-semibold tracking-widest uppercase text-uffa-navy/70">Dúvidas</span>
            </div>
            <div className="flex flex-col gap-3">
              {CSD.duvidas.map((item, i) => (
                <div key={i} className="bg-uffa-coral/12 border border-uffa-coral/30 rounded-xl p-4 text-sm text-uffa-navy leading-relaxed hover:bg-uffa-coral/18 transition-colors">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Análise Competitiva ──────────────────────────────────────────────────────

const COMPETITORS = [
  {
    group: "Diretos",
    color: "uffa-coral",
    bg: "bg-uffa-coral/10",
    border: "border-uffa-coral/25",
    dot: "bg-uffa-coral",
    items: [
      { name: "ACHUSP / Unicamp Serviços", obs: "Sistemas institucionais de universidades públicas com processos formalizados" },
      { name: "UniFind / Perdi Mas Achei", obs: "Plataformas web para registro de perdas e achados em geral" },
      { name: "Finder", obs: "App móvel com matching entre perda e achado e contato mediado" },
    ],
  },
  {
    group: "Indiretos",
    color: "uffa-blue",
    bg: "bg-uffa-blue/8",
    border: "border-uffa-blue/20",
    dot: "bg-uffa-blue",
    items: [
      { name: "WhatsApp / Facebook", obs: "Grupos informais — alto alcance, baixa organização e sem histórico" },
      { name: "Marketplace / Classificados", obs: "OLX, Mercado Livre — usados por vezes para recuperar itens vendidos indevidamente" },
    ],
  },
  {
    group: "Inspiradores",
    color: "uffa-yellow",
    bg: "bg-uffa-yellow/15",
    border: "border-uffa-yellow/40",
    dot: "bg-amber-400",
    items: [
      { name: "Tinder", obs: "Modelo de match bilateral — potencial para conectar perda e achado de forma eficiente" },
      { name: "Waze", obs: "Atualização colaborativa em tempo real — prova social e confiança distribuída" },
    ],
  },
];

const OPPORTUNITIES = [
  "Busca e histórico de registros",
  "Contato protegido entre as partes",
  "Localização no campus (mapa/pin)",
  "Prova social e reputação",
  "Match automático perdido ↔ achado",
  "Atualização colaborativa de status",
];

function AnaliseCompetitiva() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-uffa-blue/70">Análise Competitiva</span>
          <h2 className="font-display text-4xl md:text-5xl text-uffa-navy mt-3 leading-tight">
            O que o mercado já faz
          </h2>
          <p className="mt-4 text-uffa-navy/60 max-w-lg leading-relaxed text-sm">
            Estudamos soluções existentes em três grupos para identificar padrões, lacunas e fontes de inspiração.
          </p>
        </div>

        <div className="flex flex-col gap-8 mb-14">
          {COMPETITORS.map((group) => (
            <div key={group.group}>
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2.5 h-2.5 rounded-full ${group.dot}`} />
                <span className="text-xs font-semibold tracking-widest uppercase text-uffa-navy/70">{group.group}</span>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {group.items.map((item) => (
                  <div key={item.name} className={`${group.bg} border ${group.border} rounded-2xl p-5 hover:shadow-sm transition-shadow`}>
                    <p className="font-semibold text-uffa-navy text-sm mb-2">{item.name}</p>
                    <p className="text-xs text-uffa-navy/60 leading-relaxed">{item.obs}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Oportunidades */}
        <div className="bg-uffa-navy rounded-3xl p-8 md:p-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-uffa-yellow mb-6">Oportunidades Identificadas</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {OPPORTUNITIES.map((opp, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/6 rounded-xl px-4 py-3">
                <span className="text-uffa-yellow mt-0.5">→</span>
                <span className="text-white/85 text-sm leading-relaxed">{opp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Mapa de Empatia ──────────────────────────────────────────────────────────

const EMPATHY = [
  {
    quadrant: "FAZ",
    icon: "⚡",
    color: "bg-uffa-blue/10 border-uffa-blue/20",
    header: "text-uffa-blue",
    items: [
      "Procura no achados e perdidos do D.A",
      "Envia em um grupo do WhatsApp",
      "Envia um email para a secretaria",
      "Identifica os objetos e se identifica",
      "Fala com os colegas",
      "Procura no achados e perdidos",
      "Onde encontrar?",
      "Deixa na portaria",
      "Fala com o professor",
      "Pergunta ao segurança",
      "Deixa com o professor",
      "Envia no Classroom e pra coordenação",
    ],
  },
  {
    quadrant: "FALA",
    icon: "💬",
    color: "bg-uffa-yellow/20 border-uffa-yellow/40",
    header: "text-amber-700",
    items: [
      "Não conseguem encontrar",
      '"Me dei mal!"',
      '"Já era!"',
      "Deixa no local que achou",
      "Falta de comunicação",
      "Desorganização geral",
      "Falta de informações",
      "Medo de ser furtado",
      "Procura o achados e perdidos",
    ],
  },
  {
    quadrant: "PENSA",
    icon: "💭",
    color: "bg-uffa-green/10 border-uffa-green/25",
    header: "text-green-700",
    items: [
      "Mais divulgação",
      "Pedir documento e registrar quem pegou",
      "Bagunça",
      "Mais informações",
      "Descrever o item",
      "Onde encontrar?",
      "Indiferença e descaso",
      "Guardar em uma sala",
      "Falta de controle e de sistema",
    ],
  },
  {
    quadrant: "SENTE",
    icon: "❤️",
    color: "bg-uffa-coral/10 border-uffa-coral/20",
    header: "text-uffa-coral",
    items: [
      "Triste e frustrado",
      "Estresse",
      "Medo",
      "Raiva com o excesso de burocracia",
      "Insegurança",
      "Chateação",
      "Ser roubado",
      "Deprimido",
      "Desespero e revolta com o descaso",
      '"Se for uma caneta, me sinto normal, mas um celular…"',
    ],
  },
];

function MapaDeEmpatia() {
  return (
    <section className="py-24 px-6 bg-uffa-lightblue">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="text-xs font-medium tracking-widest uppercase text-uffa-blue/70">Mapa de Empatia</span>
          <h2 className="font-display text-4xl md:text-5xl text-uffa-navy mt-3 leading-tight">
            Hipóteses sobre o usuário
          </h2>
        </div>
        <p className="text-sm text-uffa-navy/60 mb-12 max-w-lg leading-relaxed bg-uffa-yellow/20 border border-uffa-yellow/40 rounded-xl px-4 py-3 inline-block">
          <strong>Atenção:</strong> Este mapa representa hipóteses de investigação a validar — não dados coletados.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {EMPATHY.map((q) => (
            <div key={q.quadrant} className={`${q.color} border rounded-2xl p-6 hover:shadow-sm transition-shadow`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{q.icon}</span>
                <span className={`font-semibold text-sm tracking-widest uppercase ${q.header}`}>{q.quadrant}</span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {q.items.map((item, i) => (
                  <li key={i} className="text-sm text-uffa-navy/75 leading-relaxed flex items-start gap-2">
                    <span className="text-uffa-navy/30 mt-1">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Entrevistas e Questionário ───────────────────────────────────────────────

const PROFILES = [
  { label: "Quem perdeu um objeto", icon: "😟", desc: "Experiência de perda, canais usados, emoções, desfecho" },
  { label: "Quem encontrou um objeto", icon: "🔍", desc: "Comportamento ao encontrar, motivação para devolver, barreiras" },
  { label: "Docentes e técnicos", icon: "🏫", desc: "Rotinas de departamento, como lidam com objetos deixados" },
  { label: "Atendentes de ocorrências", icon: "🛡️", desc: "Portaria, segurança — processo atual e dificuldades" },
];

function EntrevistasQuestionario() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-uffa-blue/70">Instrumentos de Pesquisa</span>
          <h2 className="font-display text-4xl md:text-5xl text-uffa-navy mt-3 leading-tight">
            Entrevistas e Questionário
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Entrevistas */}
          <div className="bg-white border border-uffa-navy/8 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-uffa-blue/10 flex items-center justify-center text-lg">🎙️</div>
              <h3 className="font-semibold text-uffa-navy">Roteiro Semiestruturado</h3>
            </div>
            <p className="text-sm text-uffa-navy/60 leading-relaxed mb-6">
              Instrumento qualitativo elaborado para explorar experiências, motivações e barreiras em profundidade. Quatro perfis de participantes definidos:
            </p>
            <div className="flex flex-col gap-3">
              {PROFILES.map((p) => (
                <div key={p.label} className="flex items-start gap-3 bg-uffa-lightblue rounded-xl px-4 py-3">
                  <span className="text-lg shrink-0">{p.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-uffa-navy">{p.label}</p>
                    <p className="text-xs text-uffa-navy/55 leading-relaxed mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Questionário */}
          <div className="bg-white border border-uffa-navy/8 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-uffa-blue/10 flex items-center justify-center text-lg">📊</div>
              <h3 className="font-semibold text-uffa-navy">Questionário Quantitativo</h3>
            </div>
            <p className="text-sm text-uffa-navy/60 leading-relaxed mb-6">
              Instrumento de escala ampla para validar hipóteses com um número maior de respondentes dentro da comunidade UFF.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { label: "Frequência de perda/achado", sub: "Com que frequência as pessoas passam por isso?" },
                { label: "Canais utilizados", sub: "Quais meios são mais usados e percebidos como eficazes?" },
                { label: "Barreiras de confiança", sub: "O que impede as pessoas de entregar ou reclamar objetos?" },
                { label: "Disposição para uso de app", sub: "Há interesse em uma solução digital centralizada?" },
              ].map((t) => (
                <div key={t.label} className="border-l-2 border-uffa-blue/30 pl-4">
                  <p className="text-sm font-medium text-uffa-navy">{t.label}</p>
                  <p className="text-xs text-uffa-navy/50 mt-0.5">{t.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-uffa-yellow/15 border border-uffa-yellow/40 rounded-xl p-4">
              <p className="text-xs text-uffa-navy/70 leading-relaxed">
                <strong>Nota:</strong> Nenhum número apresentado aqui é dado coletado — são metas e definições do instrumento de pesquisa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Próximos Passos ──────────────────────────────────────────────────────────

const NEXT_STEPS = [
  {
    num: "01",
    label: "Realizar entrevistas e piloto",
    desc: "Conduzir as entrevistas semiestruturadas com os quatro perfis definidos e validar o roteiro com um piloto.",
  },
  {
    num: "02",
    label: "Aplicar questionário",
    desc: "Distribuir o questionário quantitativo na comunidade UFF e coletar respostas em escala.",
  },
  {
    num: "03",
    label: "Analisar dados coletados",
    desc: "Transcrição, codificação e análise qualitativa e quantitativa dos dados de campo.",
  },
  {
    num: "04",
    label: "Sintetizar necessidades e oportunidades",
    desc: "Transformar os dados em insights acionáveis: personas, jornadas, requisitos de design.",
  },
  {
    num: "05",
    label: "Propor a solução UFFa",
    desc: "Com base na síntese, projetar e prototipar a solução que dá nome ao projeto.",
  },
];

function ProximosPassos() {
  return (
    <section id="proximos" className="py-24 px-6 bg-uffa-navy">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-uffa-green/70">Próximos Passos</span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-3 leading-tight">
            O que vem a seguir
          </h2>
          <p className="mt-4 text-white/50 max-w-lg leading-relaxed text-sm">
            A pesquisa está em andamento. Estes são os passos planejados antes de propor qualquer solução.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {NEXT_STEPS.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-6 bg-white/5 hover:bg-white/8 border border-white/10 rounded-2xl px-6 py-5 transition-colors duration-200 group"
            >
              <span className="font-display text-4xl text-uffa-green/40 group-hover:text-uffa-green/60 transition-colors shrink-0 leading-none mt-1">
                {step.num}
              </span>
              <div>
                <h3 className="font-semibold text-white mb-1">{step.label}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-white/40 text-center">
          Sem prazos prometidos · Sem telas de solução ainda · Processo honesto e em andamento
        </p>
      </div>
    </section>
  );
}

// ─── Equipe ───────────────────────────────────────────────────────────────────

const TEAM = [
  { name: "João Victor Labre Machado", role: "Pesquisador" },
  { name: "Luiz Miguel Vianna Barbosa", role: "Pesquisador" },
  { name: "Felipe Giron de Castro", role: "Pesquisador" },
  { name: "João Pedro Vianna Ribeiro", role: "Pesquisador" },
  { name: "Roberth Muniz", role: "Pesquisador" },
];

function Equipe() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-center">
          <span className="text-xs font-medium tracking-widest uppercase text-uffa-blue/70">A Equipe</span>
          <h2 className="font-display text-4xl md:text-5xl text-uffa-navy mt-3">Quem faz parte</h2>
          <p className="mt-4 text-uffa-navy/55 text-sm">
            Disciplina de Interação Humano-Computador · Universidade Federal Fluminense
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-5 mb-12">
          {TEAM.map((member, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-uffa-lightblue border border-uffa-blue/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-uffa-blue/10 transition-colors">
                <span className="font-display text-xl text-uffa-blue">
                  {i + 1}
                </span>
              </div>
              <p className="font-medium text-uffa-navy text-sm">{member.name}</p>
              <p className="text-xs text-uffa-navy/50 mt-0.5">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center border-t border-uffa-navy/8 pt-10">
          <p className="text-sm text-uffa-navy/55">
            Orientação: <span className="font-medium text-uffa-navy">Profª Daniela Gorski Trevisan</span>
          </p>
          <p className="text-sm text-uffa-navy/40 mt-1">Instituto de Computação · UFF · Niterói, 2026</p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-uffa-navy py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display text-lg text-white">UFFa — Achados e Perdidos</p>
          <p className="text-xs text-white/40 mt-1">Projeto acadêmico de Interação Humano-Computador</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-white/40">Universidade Federal Fluminense — UFF</p>
          <p className="text-xs text-white/30 mt-0.5">Niterói · Rio de Janeiro · Brasil · 2026</p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-uffa-bg text-uffa-navy font-body">
      <Navbar />
      <Hero />
      <OProblema />
      <PerguntaDePesquisa />
      <NossaPesquisa />
      <MatrizCSD />
      <AnaliseCompetitiva />
      <MapaDeEmpatia />
      <EntrevistasQuestionario />
      <ProximosPassos />
      <Equipe />
      <Footer />
    </div>
  );
}
