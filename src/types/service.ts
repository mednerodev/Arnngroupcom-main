export interface ServiceHeroData {
  headline: string;
  subheadline: string;
  description: string;
  mediaType: 'video' | 'image';
  mediaUrl: string;
  badge?: string;
}

export interface ServiceOverviewData {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  highlights?: string[];
  image?: string;
}

export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
  details?: string;
}

export interface ServiceFeaturesData {
  title: string;
  subtitle?: string;
  items: ServiceFeature[];
  layout?: 'grid' | 'bento' | 'masonry';
  backgroundVideo?: string; // Optional custom video URL for this section
}

export interface ServiceProcessStep {
  number: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceProcessData {
  title: string;
  subtitle?: string;
  steps: ServiceProcessStep[];
}

export interface ServiceStat {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: string;
}

export interface ServiceStatsData {
  title?: string;
  items: ServiceStat[];
}

export interface ServiceShowcaseData {
  title: string;
  subtitle?: string;
  images: string[];
  layout: 'masonry' | 'carousel' | 'grid';
}

export interface ServiceBenefit {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceBenefitsData {
  title: string;
  subtitle?: string;
  items: ServiceBenefit[];
}

export interface ServiceTestimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
}

export interface ServiceTestimonialsData {
  title: string;
  items: ServiceTestimonial[];
}

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

export interface ServiceFAQData {
  title: string;
  items: ServiceFAQItem[];
}

export interface ServiceCTAData {
  headline: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  backgroundType?: 'gradient' | 'video' | 'image';
  backgroundUrl?: string;
}

export interface ServiceSuccessStory {
  title: string;
  description: string;
  achievement: string;
  region: string;
  icon?: string;
}

export interface ServiceSuccessData {
  title: string;
  subtitle?: string;
  stories: ServiceSuccessStory[];
}

export interface ServiceData {
  // Basic Info
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon?: string;
  color: string; // Primary brand color for the service
  
  // Sections (all optional except hero and cta)
  hero: ServiceHeroData;
  overview?: ServiceOverviewData;
  features?: ServiceFeaturesData;
  process?: ServiceProcessData;
  stats?: ServiceStatsData;
  success?: ServiceSuccessData;
  showcase?: ServiceShowcaseData;
  benefits?: ServiceBenefitsData;
  testimonials?: ServiceTestimonialsData;
  faq?: ServiceFAQData;
  cta: ServiceCTAData;
  
  // Navigation
  nextService?: string; // slug of next service
  prevService?: string; // slug of previous service
}
