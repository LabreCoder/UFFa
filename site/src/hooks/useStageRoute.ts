import { useState, useEffect, useCallback } from "react";
import { Stage } from "../types";
import { STAGES, AI_PAGE } from "../data/stages";

function readStage(): Stage {
  const id = window.location.hash.replace("#/", "");
  if (id === AI_PAGE.id) return AI_PAGE.id;
  const found = STAGES.find((s) => s.id === id);
  return found ? found.id : "home";
}

export function useStageRoute() {
  const [stage, setStage] = useState<Stage>(readStage);

  useEffect(() => {
    const onHashChange = () => {
      setStage(readStage());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = useCallback((next: Stage) => {
    window.location.hash = next === "home" ? "" : `/${next}`;
  }, []);

  return { stage, navigate };
}
