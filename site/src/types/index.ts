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
export type Stage = "home" | "etapa-1" | "etapa-2";

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
  stage: "Etapa 1" | "Etapa 2";
  prompt: string;
}
