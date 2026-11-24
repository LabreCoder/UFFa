import type { ComponentType } from "react";
import { useStageRoute } from "./hooks/useStageRoute";
import { HomePage } from "./pages/HomePage";
import { Etapa1Page } from "./pages/Etapa1Page";
import { Etapa2Page } from "./pages/Etapa2Page";
import { Etapa3Page } from "./pages/Etapa3Page";
import { AiUsagePage } from "./pages/AiUsagePage";
import { PageId, Stage } from "./types";

// Uma página por etapa registrada em data/stages.ts, mais a página de Uso de IA.
const PAGES: Record<PageId, ComponentType<{ navigate: (stage: Stage) => void }>> = {
  "etapa-1": Etapa1Page,
  "etapa-2": Etapa2Page,
  "etapa-3": Etapa3Page,
  "uso-de-ia": AiUsagePage,
};

export default function App() {
  const { stage, navigate } = useStageRoute();
  const Page = stage === "home" ? null : PAGES[stage];

  return (
    <div className="bg-uffa-bg text-uffa-navy font-body selection:bg-uffa-blue/10 selection:text-uffa-blue">
      {Page ? <Page navigate={navigate} /> : <HomePage navigate={navigate} />}
    </div>
  );
}
