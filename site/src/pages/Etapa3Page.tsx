import { StageLayout } from "../components/layout/StageLayout";
import { EvaluationMethod } from "../components/sections/EvaluationMethod/EvaluationMethod";
import { EvaluationResults } from "../components/sections/EvaluationResults/EvaluationResults";
import { ProblemList } from "../components/sections/ProblemList/ProblemList";
import { FirstClick } from "../components/sections/FirstClick/FirstClick";
import { Team } from "../components/sections/Team/Team";
import { Stage } from "../types";

interface Props {
  navigate: (stage: Stage) => void;
}

export function Etapa3Page({ navigate }: Props) {
  return (
    <StageLayout stage="etapa-3" navigate={navigate}>
      <EvaluationMethod />
      <EvaluationResults />
      <ProblemList />
      <FirstClick />
      <Team />
    </StageLayout>
  );
}
