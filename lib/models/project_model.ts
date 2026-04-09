export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string; // Hero image
  slug: string;
  websiteLink?: string;
  figmaLink?: string;
  caseStudyLink?: string;
  
  // New fields for project details
  role?: string;
  timeline?: string;
  objective?: string;
  challengesAndResearch?: string;
  solutionsAndImpact?: string;
  techStack?: string[];
  
  // For the more image section
  moreImages?: string[];
  
  // Should also support images within sections if we want to be more premium
  // But for now, let's keep it simple and follow requirements:
  // "images tht takes full width"
  // "with more image section"
}
