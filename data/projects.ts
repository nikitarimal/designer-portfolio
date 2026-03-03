export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  slug: string;
  websiteLink?: string;
  figmaLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FREELANCE TRAVEL",
    category: "Hospitality & Leisure",
    year: "2026",
    description: "Personalized travel planning and concierge services.",
    image: "/projects/freelance-landing.png",
    slug: "freelance-travel",
    websiteLink: "https://freelancetravel.com/",
    figmaLink: "https://freelancetravel.com/"
  },
 
  {
    id: 2,
    title: "REFFERO",
    category: "Software as a Service",
    year: "2026",
    description: "Innovation in referral and networking platforms.",
    image: "/projects/reffero.png",
    slug: "reffero",
    websiteLink: "https://reffero.com/",
    figmaLink: "https://www.figma.com/design/r9jCabuDPRSLar6flg27Rb/Untitled?node-id=1-9608&t=HqB6ubi7GlQzteGV-1"
  },
  {
    id: 3,
    title: "SYLLABUSAI",
    category: "Education Technology",
    year: "2026",
    description: "AI-powered educational infrastructure.",
    image: "/projects/syllabusai.png",
    slug: "syllabusai",
    websiteLink: "https://syllabusai.com/",
    figmaLink: "https://www.figma.com/design/r9jCabuDPRSLar6flg27Rb/Untitled?node-id=1-29971&t=HqB6ubi7GlQzteGV-1"
  },
  // {
  //   id: 4,
  //   title: "SYANGDEN HOLIDAYS",
  //   category: "Travel & Tourism",
  //   year: "2026",
  //   description: "Premium holiday experiences in the Himalayas.",
  //   image: "/projects/syangden-holidays.png",
  //   slug: "syangden-holidays",
  //   websiteLink: "https://syangdenholidays.com/",
  //   figmaLink: "https://figma.com/file/placeholder4"
  // },
  {
    id: 5,
    title: "BALIYO VENTURES",
    category: "Venture Capital",
    year: "2026",
    description: "Strategic investments and venture building.",
    image: "/projects/baliyo-landing.png",
    slug: "baliyo-ventures",
    websiteLink: "https://www.baliyoventures.com/",
    figmaLink: "https://www.figma.com/design/r9jCabuDPRSLar6flg27Rb/Untitled?node-id=1-58061&t=HqB6ubi7GlQzteGV-1"
  },
  {
    id: 6,
    title: "TREK BOOKING",
    category: "Travel & Tourism",
    year: "2026",
    description: "Booking platform for treks and adventures.",
    image: "/projects/trek-booking.png",
    slug: "trek-booking",
    figmaLink: "https://www.figma.com/design/r9jCabuDPRSLar6flg27Rb/Untitled?node-id=1-100356&t=HqB6ubi7GlQzteGV-1"
  },
   {
    id: 11,
    title: "PETER PANS",
    category: "Hospitality & Leisure",
    year: "2026",
    description: "Personalized travel planning and concierge services.",
    image: "/projects/peter-pans.png",
    slug: "peter-pans",
    figmaLink: "https://www.figma.com/design/r9jCabuDPRSLar6flg27Rb/Untitled?node-id=1-164637&t=RwDgt8EVLiMMXwV2-1"
  },
];
