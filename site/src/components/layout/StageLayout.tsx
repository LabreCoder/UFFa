import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StageSideNav } from "./StageSideNav";
import { PageId, Stage } from "../../types";

interface StageLayoutProps {
  stage: PageId;
  navigate: (stage: Stage) => void;
  children: ReactNode;
}

// Moldura comum de toda página de etapa: menu, conteúdo e rodapé.
export function StageLayout({ stage, navigate, children }: StageLayoutProps) {
  return (
    <>
      <Navbar stage={stage} navigate={navigate} />
      <main>{children}</main>
      <StageSideNav stage={stage} navigate={navigate} />
      <Footer navigate={navigate} />
    </>
  );
}
