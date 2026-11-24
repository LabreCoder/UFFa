import { StageLayout } from "../components/layout/StageLayout";
import { AiUsageIntro } from "../components/sections/AiUsageIntro/AiUsageIntro";
import { AiUsage } from "../components/sections/AiUsage/AiUsage";
import { STAGES } from "../data/stages";
import { Stage } from "../types";

interface Props {
  navigate: (stage: Stage) => void;
}

export function AiUsagePage({ navigate }: Props) {
  return (
    <StageLayout stage="uso-de-ia" navigate={navigate}>
      <AiUsageIntro />
      {STAGES.map((s, i) => (
        <AiUsage key={s.id} stage={s} colorDefault={i % 2 === 0 ? "bg-uffa-lightblue" : undefined} />
      ))}
    </StageLayout>
  );
}
