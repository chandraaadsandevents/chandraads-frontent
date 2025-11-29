export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
  alignment: 'left' | 'right';
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface MediaPartner {
  id: number;
  logo: string;
  alt: string;
}
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface ValueCard {
  icon: string;
  title: string;
  description: string;
}

export interface WorkItem {
  id: number;
  image: string; // This will be the imported image
  alt: string;
  category: string;
  title: string;
  description: string;
}
export interface BrandingCard {
  id: number;
  icon: string;
  title: string;
  description: string | string[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  features: string[];
}
export interface ContactCard {
  id: number;
  icon: string;
  title: string;
  description: string;
  link: string;
  linkType: 'tel' | 'mailto' | 'external';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  file: File | null;
  honeypot: string;
}

export interface FloatingElement {
  id: number;
  icon: string;
  class: string;
  left: string;
  animationDelay: string;
  fontSize: string;
}

export interface AdService {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing: {
    basic: string;
    standard: string;
    premium: string;
  };
  image: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}