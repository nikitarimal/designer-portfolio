import { Project } from '@/lib/models/project_model';

export const projects: Project[] = [
  {
    id: 1,
    title: "FREELANCE TRAVEL",
    category: "Hospitality & Leisure",
    year: "2026",
    description: "Personalized travel planning and concierge services.",
    image: "/projects/freelance-travel/hero.png",
    slug: "freelance-travel",
    websiteLink: "https://freelancetravel.com/",
    figmaLink: "https://freelancetravel.com/",
    role: "Lead UI/UX Designer",
    timeline: "3 Months (2026)",
    objective: "To create a seamless and personalized travel planning experience that connects travelers with expert concierge services, ensuring a stress-free journey from start to finish.",
    challengesAndResearch: "The primary challenge was organizing complex travel data into an intuitive interface. Through competitive analysis and user interviews, we found that travelers often feel overwhelmed by the sheer volume of options and the lack of personalized recommendations.",
    solutionsAndImpact: "We implemented a smart filtering system and a personalized concierge dashboard. This resulted in a 40% increase in user bookings and a significant improvement in customer satisfaction ratings.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    moreImages: [
      "/projects/freelance-travel/01.png",
      "/projects/freelance-travel/02.png"
    ],
    caseStudyLink: "https://www.figma.com/proto/NhQqguFZrOwMVmEM4ci8zl/my-Case-studies?node-id=5-6206&t=ePcsvmmVQyIIlW6J-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=52%3A17856"
  },
  {
    id: 11,
    title: "PETER PANS",
    category: "Hospitality & Leisure",
    year: "2026",
    description: "Personalized travel planning and concierge services.",
    image: "/projects/peter-pans/hero.png",
    slug: "peter-pans",
    websiteLink: "https://peterpans.com/",
    figmaLink: "https://play.google.com/store/apps/details?id=com.peterpans.app",
    role: "Mobile App Designer",
    timeline: "4 Months (2026)",
    objective: "Developing a mobile-first travel concierge that provides real-time support and personalized itineraries for modern explorers.",
    challengesAndResearch: "Mobile travel apps often suffer from poor offline performance and cluttered interfaces. We focused on 'offline-first' design patterns to ensure reliability even in remote locations.",
    solutionsAndImpact: "A streamlined, intuitive mobile app with offline map capabilities. The app reached 10,000+ downloads within its first 90 days with an average rating of 4.8 stars.",
    techStack: ["Flutter", "Dart", "Google Maps API", "Firebase"],
    moreImages: [
      "/projects/peter-pans/hero.png"
      ,"/projects/peter-pans/01.png"
    ]
  },
  {
    id: 2,
    title: "REFFERO",
    category: "Software as a Service",
    year: "2026",
    description: "Innovation in referral and networking platforms.",
    image: "/projects/reffero/hero.png",
    slug: "reffero",
    websiteLink: "https://reffero.com/",
    figmaLink: "https://www.figma.com/design/r9jCabuDPRSLar6flg27Rb/Untitled?node-id=1-9608&t=HqB6ubi7GlQzteGV-1",
    role: "Product Designer",
    timeline: "6 Months (2026)",
    objective: "Reimagining the referral ecosystem for modern businesses. Reffero aims to build a trust-based networking platform that simplifies the referral process while maximizing conversion rates.",
    challengesAndResearch: "Building a platform that users genuinely trust was the biggest hurdle. Our research indicated that existing referral platforms often felt 'spammy'. We needed to focus on authenticity and clear incentives.",
    solutionsAndImpact: "We developed a 'Trust-Score' algorithm and a transparent reward system. The platform successfully facilitated over 5,000 successful referrals within its first month of beta testing.",
    techStack: ["Figma", "React Native", "Firebase", "Node.js"],
    moreImages: [
      "/projects/reffero/01.png",
      "/projects/reffero/02.png"
    ]
  },
  {
    id: 5,
    title: "BALIYO VENTURES",
    category: "Venture Capital",
    year: "2026",
    description: "Strategic investments and venture building.",
    image: "/projects/baliyo-ventures/hero.png",
    slug: "baliyo-ventures",
    websiteLink: "https://www.baliyoventures.com/",
    figmaLink: "https://www.baliyoventures.com/",
    role: "Brand & UI Designer",
    timeline: "4 Months (2026)",
    objective: "To establish a strong digital presence for a forward-thinking venture capital firm, showcasing their portfolio and commitment to nurturing innovative startups.",
    challengesAndResearch: "VC websites often feel cold and corporate. We wanted to blend professionalism with an approachable, founder-friendly aesthetic. Research consistently highlighted that founders look for personal connection alongside capital.",
    solutionsAndImpact: "A clean, modern design with a focus on 'People and Portfolio'. We simplified the application process for founders, leading to a 25% increase in high-quality deal flow.",
    techStack: ["Webflow", "Motion Design", "Adobe Creative Suite"],
    moreImages: [
      "/projects/baliyo-ventures/hero.png"
    ]
  },
  {
    id: 3,
    title: "SYLLABUSAI",
    category: "Education Technology",
    year: "2026",
    description: "AI-powered educational infrastructure.",
    image: "/projects/syllabusai/hero.png",
    slug: "syllabusai",
    figmaLink: "https://www.figma.com/design/r9jCabuDPRSLar6flg27Rb/Untitled?node-id=1-29971&t=HqB6ubi7GlQzteGV-1",
    role: "UX Researcher & UI Designer",
    timeline: "5 Months (2026)",
    objective: "Leveraging AI to automate the creation and management of educational syllabi, allowing educators to focus more on teaching and less on administrative tasks.",
    challengesAndResearch: "AI can be intimidating for educators. User research showed that many were concerned about the 'black box' nature of AI. We needed an interface that made AI feel like a helpful assistant, not a replacement.",
    solutionsAndImpact: "An interactive, AI-assisted syllabus builder that's transparent and easy to customize. Early adoption by several universities showed a 60% reduction in time spent on course planning.",
    techStack: ["OpenAI API", "Next.js", "PostgreSQL", "Tailwind CSS"],
    moreImages: [
      "/projects/syllabusai/hero.png"
    ]
  },
  
  {
    id: 12,
    title: "Footsal Management System",
    category: "Software as a Service",
    year: "2026",
    description: "Comprehensive platform for managing footsal operations.",
    image: "/projects/footsal-management-system/hero.png",
    slug: "footsal-management-system",
    role: "UI/UX Designer",
    timeline: "3 Months (2026)",
    objective: "To create a robust management system that automates bookings, payments, and player management for footsal centers.",
    challengesAndResearch: "Center managers were struggling with manual, error-prone booking systems. Research showed that double-bookings were the most common pain point.",
    solutionsAndImpact: "A real-time synchronization engine for bookings and an integrated payment gateway. The system eliminated booking errors and reduced administrative overhead by 50%.",
    techStack: ["React", "Express", "MongoDB", "Redux"],
    moreImages: [
      "/projects/footsal-management-system/01.png",
      "/projects/footsal-management-system/02.png"
    ]
  }
];
