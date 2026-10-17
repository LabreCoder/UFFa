import { useStageRoute } from "./hooks/useStageRoute";
import { HomePage } from "./pages/HomePage";
import { Etapa1Page } from "./pages/Etapa1Page";
import { Etapa2Page } from "./pages/Etapa2Page";

export default function App() {
  const { stage, navigate } = useStageRoute();

  return (
    <div className="bg-uffa-bg text-uffa-navy font-body selection:bg-uffa-blue/10 selection:text-uffa-blue">
      {stage === "home" && <HomePage navigate={navigate} />}
      {stage === "etapa-1" && <Etapa1Page navigate={navigate} />}
      {stage === "etapa-2" && <Etapa2Page navigate={navigate} />}
    </div>
  );
}