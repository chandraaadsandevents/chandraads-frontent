export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  badge: string;
  features: string[];
  alignment: 'left' | 'right';
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface StatItem {
  id: number;
  number: string;
  label: string;
  delay?: string;
}