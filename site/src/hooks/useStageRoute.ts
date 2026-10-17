import { useState, useEffect, useCallback } from "react";
import { Stage } from "../types";

function readStage(): Stage {
  const hash = window.location.hash;
  if (hash === "#/etapa-1") return "etapa-1";
  if (hash === "#/etapa-2") return "etapa-2";
  return "home";
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
