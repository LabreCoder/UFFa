import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero/Hero";
import { Problem } from "../components/sections/Problem/Problem";
import { ResearchQuestion } from "../components/sections/ResearchQuestion/ResearchQuestion";
import { ResearchTimeline } from "../components/sections/ResearchTimeLine/ResearchTimeline";
import { CsdMatrix } from "../components/sections/CsdMatrix/CsdMatrix";
import { CompetitiveAnalysis } from "../components/sections/CompetitiveAnalisys/CompetitiveAnalisys";
import { EmpathyMap } from "../components/sections/EmpathyMap/EmpathyMap";
import { ResearchInstruments } from "../components/sections/ResearchInstruments/ResearchInstruments";
import { NextSteps } from "../components/sections/NextSteps/NextSteps";
import { Team } from "../components/sections/Team/Team";
import { Stage } from "../types";

interface Props {
  navigate: (stage: Stage) => void;
}

export function Etapa1Page({ navigate }: Props) {
  return (
    <>
      <Navbar
        switchLabel="Ver Etapa 2"
        onSwitch={() => navigate("etapa-2")}
        onHome={() => navigate("home")}
      />
      <main>
        <Hero />
        <Problem />
        <ResearchQuestion />
        <ResearchTimeline />
        <CsdMatrix />
        <CompetitiveAnalysis />
        <EmpathyMap />
        <ResearchInstruments />
        <NextSteps />
        <Team />
      </main>
      <Footer />
    </>
  );
}
