import { StageLayout } from "../components/layout/StageLayout";
import { Personas } from "../components/sections/Personas/Personas";
import { Scenarios } from "../components/sections/Scenarios/Scenarios";
import { Tasks } from "../components/sections/Tasks/Tasks";
import { Ideation } from "../components/sections/Ideation/Ideation";
import { DigitalPrototype } from "../components/sections/DigitalPrototype/DigitalPrototype";
import { Team } from "../components/sections/Team/Team";
import { Stage } from "../types";

interface Props {
  navigate: (stage: Stage) => void;
}

export function Etapa2Page({ navigate }: Props) {
  return (
    <StageLayout stage="etapa-2" navigate={navigate}>
      <Scenarios />
      <Personas />
      <Tasks />
      <Ideation />
      <DigitalPrototype />
      <Team colorDefault="bg-uffa-lightblue" />
    </StageLayout>
  );
}
