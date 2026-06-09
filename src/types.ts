export interface GuideStep {
  id: string;
  stepNumber: string; // e.g. "01", "04"
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  mockupState: 'dashboard' | 'detail' | 'promo' | 'topup';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatarUrl?: string;
  avatarInitials: string;
}

export interface PartnerBrand {
  name: string;
  logoType: 'text' | 'svg';
  logoSvg?: string;
}