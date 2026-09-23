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