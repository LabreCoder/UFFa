import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero/Hero";
import { Problem } from "./components/sections/Problem/Problem";
import { ResearchQuestion } from "./components/sections/ResearchQuestion/ResearchQuestion";
import { ResearchTimeline } from "./components/sections/ResearchTimeLine/ResearchTimeline";
import { CsdMatrix } from "./components/sections/CsdMatrix/CsdMatrix";
import { CompetitiveAnalysis } from "./components/sections/CompetitiveAnalisys/CompetitiveAnalisys";
import { EmpathyMap } from "./components/sections/EmpathyMap/EmpathyMap";
import { ResearchInstruments } from "./components/sections/ResearchInstruments/ResearchInstruments";
import { NextSteps } from "./components/sections/NextSteps/NextSteps";
import { Team } from "./components/sections/Team/Team";

export default function App() {
  return (
    <div className="bg-uffa-bg text-uffa-navy font-body selection:bg-uffa-blue/10 selection:text-uffa-blue">
      <Navbar />
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
    </div>
  );
}