export interface SkillCategory {
  id: string;
  title: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  users: string;
  tech: string[];
  role: string;
  highlight: string;
  bannerColor: string; // Tailwind background class, e.g. 'bg-[#e5ecfb]'
}

export interface ResearchItem {
  id: string;
  title: string;
  publishedIn: string;
  tags: string[];
  url: string;
}

export interface CaseImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Persona {
  name: string;
  age: number;
  occupation: string;
  quote: string;
  goals: string[];
  frustrations: string[];
}

/** The UX process phase each section belongs to, shown in the case-study stepper. */
export type ProcessPhase = 'discover' | 'define' | 'ideate' | 'design' | 'test';

interface BaseSection {
  id: string;
  title: string;
  phase: ProcessPhase;
  body?: string[];
  images?: CaseImage[];
}

export type CaseSection =
  | (BaseSection & { kind: 'text' })
  | (BaseSection & { kind: 'insights'; items: { label: string; value: string }[] })
  | (BaseSection & { kind: 'personas'; personas: Persona[] })
  | (BaseSection & { kind: 'steps'; steps: { title: string; detail: string }[] })
  | (BaseSection & { kind: 'palette'; colors: { name: string; hex: string }[]; fonts: string[] })
  | (BaseSection & { kind: 'gallery'; layout: 'mobile' | 'web' });

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  platform: 'Mobile' | 'Web' | 'Web & Mobile';
  /** Self-initiated concept work, labelled as such so it is never mistaken for client work. */
  isConcept: boolean;
  role: string;
  timeline: string;
  tools: string[];
  tags: string[];
  cover: CaseImage;
  accent: string; // hex used for the cover background and highlights
  figmaUrl?: string;
  prototypeUrl?: string;
  sections: CaseSection[];
}
