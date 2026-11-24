export interface NavLink {
  label: string;
  href: string;
}

export interface ProblemChannel {
  icon: string;
  label: string;
  desc: string;
}

export interface ResearchStep {
  label: string;
  desc: string;
  done: boolean;
}

export interface CsdData {
  certezas: string[];
  suposicoes: string[];
  duvidas: string[];
}

export interface CompetitorGroup {
  group: string;
  color: string;
  bg: string;
  border: string;
  dot: string;
  items: {
    name: string;
    obs: string;
  }[];
}

export interface EmpathyQuadrant {
  quadrant: string;
  icon: string;
  color: string;
  header: string;
  questions: string[];
  items: string[];
}

export interface ResearchProfile {
  label: string;
  icon: string;
  desc: string;
}

export interface NextStepItem {
  num: string;
  label: string;
  desc: string;
}

export interface TeamMember {
  name: string;
  role: string;
}
export type StageId = "etapa-1" | "etapa-2" | "etapa-3";
export type PageId = StageId | "uso-de-ia";
export type Stage = "home" | PageId;

export interface StageInfo {
  id: StageId;
  label: string;
  desc: string;
  navLinks: NavLink[];
  brandTarget: string;
}

export interface Persona {
  id: string;
  initials: string;
  givenName: string;
  age: number;
  bio: string;
  name: string;
  role: string;
  basis: string;
  basisTone: "blue" | "gold";
  scenarios: string[];
  quote?: string;
  goal: string;
  pains: string[];
  variation?: string;
  evidence?: string[];
}

export interface Scenario {
  code: string;
  title: string;
  persona: string;
  problem: string;
}

export interface PrototypeImage {
  title: string;
  caption: string;
  src?: string;
}

export interface PrototypeView {
  id: string;
  title: string;
  description: string;
  images: PrototypeImage[];
}

export interface TaskGroup {
  persona: string;
  tasks: string[];
}

export interface CrazyFollowed {
  title: string;
  how: string;
  stage1?: {
    outcome: "realidade" | "expectativa";
    source: string;
    note: string;
  };
}

export interface CrazyDiscarded {
  title: string;
  reason: string;
}

export interface Technique {
  id: string;
  label: string;
  question: string;
  answer: string;
  evidence: string[];
}

export interface AiUsageItem {
  num: string;
  title: string;
  summary: string;
  tool: string;
  stage: "Etapa 1" | "Etapa 2" | "Etapa 3";
  prompt: string;
}

// Etapa 3 — avaliação heurística
export type Severity = 1 | 2 | 3 | 4;

export interface Heuristic {
  id: number;
  name: string;
}

export interface EvaluatorFinding {
  evaluator: string;
  severity: Severity;
}

export interface HeuristicProblem {
  id: string;
  problem: string;
  screen: string;
  heuristics: number[];
  findings: EvaluatorFinding[];
  recommendation: string;
}

export interface FirstClickTask {
  id: string;
  title: string;
  target: string;
  result: string;
  confidence: number;
  image: string;
}
