import { NavLink, StageInfo } from "../types";
import { NAV_LINKS } from "./navigtation";
import { ETAPA2_NAV_LINKS } from "./etapa2";
import { ETAPA3_NAV_LINKS } from "./etapa3";

// Registro único das etapas do site. Para criar uma etapa nova:
// 1) acrescente o id em StageId (types/index.ts);
// 2) acrescente a etapa aqui;
// 3) crie a página e registre-a em PAGES (App.tsx).
export const STAGES: StageInfo[] = [
  {
    id: "etapa-1",
    label: "Etapa 1",
    desc: "Pesquisa: matriz CSD, análise competitiva, mapa de empatia e instrumentos.",
    navLinks: NAV_LINKS,
    brandTarget: "#hero",
  },
  {
    id: "etapa-2",
    label: "Etapa 2",
    desc: "Personas, cenários-problema, tarefas, ideação (Crazy 4), protótipo em papel e protótipo digital.",
    navLinks: ETAPA2_NAV_LINKS,
    brandTarget: "#cenarios",
  },
  {
    id: "etapa-3",
    label: "Etapa 3",
    desc: "Avaliação heurística: lista consolidada de problemas, gráficos por heurística e severidade e teste First Click.",
    navLinks: ETAPA3_NAV_LINKS,
    brandTarget: "#metodo",
  },
];

// Página própria de Uso de IA, acessada pelo menu de todas as páginas.
export const AI_PAGE: { id: "uso-de-ia"; label: string; navLinks: NavLink[]; brandTarget: string } = {
  id: "uso-de-ia",
  label: "Uso de IA",
  navLinks: STAGES.map((s) => ({ label: `IA na ${s.label}`, href: `#ia-${s.id}` })),
  brandTarget: "#uso-de-ia",
};
