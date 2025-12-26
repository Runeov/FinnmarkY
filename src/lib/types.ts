import { LucideIcon } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GuideStep {
  id: string;
  title: string;
  content: string;
  callout?: { type: 'info' | 'warning' | 'error' | 'success'; title: string; content: string };
  subSteps?: string[];
  image?: string;
}

export interface Guide {
  id: string;
  title: string;
  titleNo: string;
  summary: string;
  summaryNo: string;
  keywords: string[];
  category: GuideCategory;
  interface: 'mingat' | 'gatgo' | 'all';
  complexity: 'basic' | 'intermediate' | 'advanced';
  estimatedTime?: string;
  steps: GuideStep[];
  relatedGuides?: string[];
  faq?: FAQItem[];
}

export type GuideCategory = 'authentication' | 'shift-management' | 'time-tracking' | 'mobile' | 'navigation' | 'compliance' | 'troubleshooting';

export interface CategoryInfo {
  id: GuideCategory;
  nameNo: string;
  descriptionNo: string;
  icon: LucideIcon;
  color: string;
}

export interface SearchSuggestion {
  id: string;
  text: string;
  type: 'guide' | 'category' | 'keyword';
  guideId?: string;
  category?: GuideCategory;
}

export interface SupportContact {
  id: string;
  categoryNo: string;
  descriptionNo: string;
  contactPoint: string;
  contactDetails: string;
  escalationCriteria: string[];
}