export interface Medium {
  url: string;
  type: string;
}

export interface Checklist {
  title: string;
  description: string;
}

export interface Seo {
  title: string;
  description: string;
}

export interface CtaText {
  primary: string;
  secondary?: string;
}

export interface Section {
  title: string;
  content: string;
}

export interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}
