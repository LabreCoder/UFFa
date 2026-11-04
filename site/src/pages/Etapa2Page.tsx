import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Personas } from "../components/sections/Personas/Personas";
import { Scenarios } from "../components/sections/Scenarios/Scenarios";
import { Tasks } from "../components/sections/Tasks/Tasks";
import { Ideation } from "../components/sections/Ideation/Ideation";
import { DigitalPrototype } from "../components/sections/DigitalPrototype/DigitalPrototype";
import { ETAPA2_NAV_LINKS } from "../data/etapa2";
import { Stage } from "../types";

interface Props {
  navigate: (stage: Stage) => void;
}

export function Etapa2Page({ navigate }: Props) {
  return (
    <>
      <Navbar
        links={ETAPA2_NAV_LINKS}
        brandTarget="#personas"
        switchLabel="Ver Etapa 1"
        onSwitch={() => navigate("etapa-1")}
        onHome={() => navigate("home")}
      />
      <main>
        <Personas />
        <Scenarios />
        <Tasks />
        <Ideation />
        <DigitalPrototype />
      </main>
      <Footer />
    </>
  );
}
