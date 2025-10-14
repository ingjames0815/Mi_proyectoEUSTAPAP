
export interface FAQ {
  question: string;
  answer: string;
}

export interface Specialization {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string; 
  imageUrl: string;
  whatYouLearn: string[];
  careerOpportunities: string[];
  idealProfile: string; 
  requirements: string[]; 
  faqs: FAQ[]; 
  brochureUrl?: string; 
}

export interface NavItem {
  name: string;
  path: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
  isMain?: boolean;
  isBottom?: boolean;
}
    