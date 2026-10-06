// Single source of truth for portfolio content.
// Every claim here comes from the owner's notes or repos. Items marked TODO are unconfirmed.

export const person = {
  name: "Aldian Yohanes",
  role: "Full-stack developer",
  intro:
    "Full-stack developer and student founder building software for healthcare and small business in Jakarta.",
  email: "aldianyhs@gmail.com",
  github: "https://github.com/AldianYohanes",
  linkedin: "https://www.linkedin.com/in/aldianyohanes/", // verified from the profile
  instagram: "https://www.instagram.com/aldianyhs/", // handle shown on the LinkedIn banner
  cv: "/cv/Aldian-Yohanes-CV.pdf",
  profileImage: "/images/profile.jpg",
};

// Graphic assets from Alleyway Muse (posters, voucher, product photography), optimized into /public/images/design.
export interface DesignItem {
  src: string;
  w: number;
  h: number;
  alt: string;
  contain?: boolean;
}

export const designIntro = "Posters, vouchers and product photography I made for Alleyway Muse.";

const d = (name: string, w: number, h: number, alt: string, contain = false, dir = "design"): DesignItem => ({
  src: `/images/${dir}/${name}.webp`,
  w,
  h,
  alt,
  contain,
});

export const design: DesignItem[] = [
  d("poster-share-your-drink", 1080, 1440, "Share Your Drink promo poster: a hand holding an Alleyway Muse cup, 50% off the next purchase"),
  d("bottles-trio", 1100, 1466, "Three Alleyway Muse bottled drinks in green, brown and berry on a dark background"),
  d("voucher", 1500, 600, "Alleyway Muse 50% off voucher with line illustrations"),
  d("hand-cup", 1100, 1956, "A hand holding an Alleyway Muse cup of cream-colored drink"),
  d("poster-campus-connect", 1080, 1920, "Poster announcing the Alleyway Muse booth at Campus Connect, September 2026"),
  d("macchi-spill", 900, 568, "Macchi, the Alleyway Muse calico cat, tumbling out of a spilled cup", true, "brand"),
  d("green-bottle", 1100, 1467, "A single green bottled drink with the Alleyway Muse label"),
  d("coffee-gear", 1100, 1467, "A French press and two moka pots on a white surface"),
  d("berry-cup", 1100, 1467, "A hand holding a berry-colored iced drink against a white wall"),
  d("cup-outdoors", 1100, 1956, "An iced latte in an Alleyway Muse cup on a concrete ledge on campus"),
  d("matcha-hand", 1100, 1650, "A hand holding a layered matcha drink in an Alleyway Muse cup"),
  d("coffee-bag", 1100, 1956, "A bag of coffee beans and a mug of milk coffee on a shelf"),
  d("cups-sky", 1100, 1650, "Three iced drinks lined up on a table in front of a window"),
  d("iced-coffee", 1100, 1467, "Iced coffee with coffee beans scattered around the cup"),
];

export const statement =
  "I build software for real operations, and I run one of those operations myself. That keeps the work honest.";

export const about = [
  "I am an Informatics Engineering student at Universitas Tarumanagara, class of 2023. I build web and mobile products with React, Next.js, TypeScript and Flutter, backed by PostgreSQL and Supabase.",
  "Outside class I run Alleyway Muse, a campus beverage business, and write the software that runs it. That mix of shipping code and serving real customers shapes how I design: clear, usable, and useful on a busy day.",
];

export const education = [
  {
    logo: "/images/brand/org-untar.webp",
    school: "Universitas Tarumanagara",
    detail: "Informatics Engineering",
    period: "Aug 2023 - present",
    note: "KMK Adhyatmaka, Faculty of IT Student Representative Council (DPM FTI)",
  },
  {
    school: "SMA Negeri 23 Jakarta",
    detail: "High school",
    period: "Jul 2020 - Jul 2023",
    note: "Rohkris, Paskibra, Language Club",
  },
];

export interface Experience {
  role: string;
  org: string;
  period: string;
  points: string[];
  image: string;
  imageAlt: string;
  logo?: { src: string; alt: string; plate: boolean };
}

export const experience: Experience[] = [
  {
    logo: { src: "/images/brand/org-pharos.webp", alt: "Pharos logo", plate: true },
    image: "/images/stock/clinic-hands.webp",
    imageAlt: "A hand on a tablet beside a stethoscope",
    role: "Full-Stack Developer Intern",
    org: "PT Inti Utama Solusindo (Pharos Group)",
    period: "Jan 2026 - Jan 2027",
    points: [
      "Built React and TypeScript screens for HealthyOne, a clinic information system with e-pharmacy, and connected them to a Django backend.",
      "Created server-driven UI widgets and migrated more than 50 widgets to a new front-end repository.",
      "Internship evaluation score: 97.41 / 100.",
    ],
  },
  {
    logo: { src: "/images/brand/alleyway-mark-leaf.webp", alt: "Alleyway Muse logo", plate: false },
    image: "/images/design/bottles-trio.webp",
    imageAlt: "Three Alleyway Muse bottled drinks",
    role: "Founder and Business Owner",
    org: "Alleyway Muse",
    period: "Feb 2024 - present",
    points: [
      "Founded on 26 February 2024. A campus beverage brand serving students at Universitas Tarumanagara, with more than 2,500 cups served.",
      "Handles product development, sourcing, inventory and day-to-day finances.",
      "Designs the brand identity, photography and social media, and builds the internal system behind it (see MuseUp OS).",
    ],
  },
  {
    logo: { src: "/images/brand/org-untar.webp", alt: "Universitas Tarumanagara logo", plate: true },
    image: "/images/stock/teal-dark.webp",
    imageAlt: "Soft teal gradient",
    role: "Assistant, Business and Cooperation Incubator",
    org: "IBiK, Faculty of IT, Universitas Tarumanagara",
    period: "Jan 2025 - Jan 2026",
    points: [
      "Produced posters, videos and promotional content, and ran the unit's social media.",
      "Supported workshops, seminars and mentoring for student startups, and kept program records and reports.",
    ],
  },
  {
    image: "/images/stock/green-wall.webp",
    imageAlt: "Dark green textured wall",
    role: "Project leader and committee roles",
    org: "DPM FTI, KMK Adhyatmaka, TEC",
    period: "2023 - 2025",
    points: [
      "Led Legislative Training 2024 for DPM FTI: a team of 27 and 48 new members.",
      "Vice project leader of Pekan Suci 2025 at KMK Adhyatmaka, coordinating 38 people across 6 divisions.",
      "Secretary and treasurer for several KMK events, and publication and documentation roles across events.",
    ],
  },
];

export const skillGroups = [
  { label: "Languages", image: "/images/stock/code-index.webp", items: ["TypeScript", "JavaScript", "Python", "Dart"] },
  {
    label: "Frameworks",
    image: "/images/stock/code-screens.webp",
    items: ["React", "Next.js", "Flutter", "Django", "Laravel", "Mantine", "Tailwind"],
  },
  { label: "Data and cloud", image: "/images/stock/teal-blur.webp", items: ["PostgreSQL", "Supabase", "Firebase", "Vercel"] },
  { label: "Design and tools", image: "/images/stock/workspace.webp", items: ["Figma", "Git", "GitHub", "GitLab"] },
];

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  role: string;
  status: string;
  stack: string[];
  highlights: string[];
  github?: string;
  live?: string;
  cover?: string; // file under /public, shown only when it exists
  gallery?: { src: string; alt: string }[];
  galleryShape?: "square";
  credits?: string; // photo credit line for stock images
}

export const projects: Project[] = [
  {
    slug: "museup-os",
    name: "MuseUp OS",
    tagline: "Operations system for a multi-branch beverage business.",
    summary:
      "An internal system for Alleyway Muse that brings point of sale, stock, finance and customers into one place. It is built offline-first so a shift keeps running when the connection drops.",
    role: "Design and full-stack development",
    status: "In development. Foundation phase complete.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Playwright", "Bun"],
    highlights: [
      "Offline-first point of sale with session handling and sync.",
      "Role-based access, multi-factor authentication and audit logging.",
      "Row-level security on PostgreSQL, with migrations deployed to production.",
      "Monorepo with shared packages and end-to-end tests.",
    ],
    github: "https://github.com/AldianYohanes/museup-os",
    cover: "/images/design/cup-closeup.webp",
    gallery: [
      { src: "/images/design/bottles-trio.webp", alt: "Three Alleyway Muse bottled drinks on a dark background" },
      { src: "/images/design/coffee-gear.webp", alt: "A French press and two moka pots" },
      { src: "/images/design/iced-coffee.webp", alt: "Iced coffee with coffee beans around the cup" },
    ],
  },
  {
    slug: "stokgent",
    name: "Stokgent",
    tagline: "Multi-agent assistant for spare-parts management that runs in the browser.",
    summary:
      "My undergraduate thesis, built around the spare-parts operations of Prima Motor Volvo. A router hands each request to a specialist agent that calls tools against the inventory data, and the language model runs locally in the browser through WebGPU.",
    role: "Thesis research and development",
    status: "Thesis in progress since July 2026.",
    stack: ["Next.js", "React", "WebLLM", "Supabase", "LaTeX"],
    highlights: [
      "Progressive web app, with the thesis document written in LaTeX.",
      "Router agent plus specialist agents with tool calling.",
      "On-device language model with WebLLM, so no prompt leaves the browser.",
      "Automotive spare-parts domain with real operational questions.",
    ],
    github: "https://github.com/AldianYohanes/primamotor-intelligence",
    cover: "/images/stock/parts-grid.webp",
    gallery: [
      { src: "/images/stock/converters.webp", alt: "Catalytic converters laid out on a grid" },
      { src: "/images/stock/brake.webp", alt: "A drilled brake disc and caliper" },
      { src: "/images/stock/suspension.webp", alt: "A disassembled front suspension" },
      { src: "/images/stock/engine-parts.webp", alt: "Assorted engine and exhaust parts" },
    ],
    credits: "Stock photos by engin akyurt, Erik Mclean and Rohmer Maxime on Unsplash.",
  },
  {
    slug: "museup-pos",
    name: "MuseUp Cafe App",
    tagline: "Membership and point of sale for Alleyway Muse, on web and mobile.",
    summary:
      "A customer management and employee POS system for the cafe, built as a Next.js web app and a Flutter mobile app. It ran from September 2025 to June 2026 and is the version MuseUp OS grew out of.",
    role: "Full-stack development",
    status: "Earlier version. Succeeded by MuseUp OS.",
    stack: ["Next.js", "Flutter", "Supabase", "Zustand", "Riverpod"],
    highlights: [
      "Customer membership with Bronze, Silver and Gold tiers.",
      "QR check-in and reward redemption.",
      "Real-time POS cart with inventory management.",
      "Role-based access for cashier, manager and superadmin.",
    ],
    github: "https://github.com/AldianYohanes/museup-alleyway-react",
    cover: "/images/design/iced-coffee.webp",
    galleryShape: "square",
    gallery: [
      { src: "/images/brand/menu-choco-malt.webp", alt: "Choco malt drink topped with cream" },
      { src: "/images/brand/menu-cookies-n-cream.webp", alt: "Cookies and cream drink with a cookie on top" },
      { src: "/images/brand/menu-kopi-inspirasi.webp", alt: "Kopi Inspirasi, an iced milk coffee" },
      { src: "/images/brand/menu-matcha-latte.webp", alt: "Matcha latte with a bamboo straw" },
      { src: "/images/brand/menu-red-velvet.webp", alt: "Red velvet drink with cream and a raspberry" },
      { src: "/images/brand/menu-yoghurt.webp", alt: "Yoghurt drink with fruit pieces" },
    ],
  },
  {
    slug: "notulax",
    name: "NotulaX",
    tagline: "Turns meeting audio into structured notes in Indonesian.",
    summary:
      "An AI meeting documentation system. You upload a recording, it transcribes the speech, then summarizes the key discussion points.",
    role: "Design and development",
    status: "Built May to June 2025.",
    stack: ["Python", "Whisper", "IndoBART", "FastAPI", "Streamlit"],
    highlights: [
      "Speech recognition pipeline with Whisper for Indonesian recordings.",
      "Summarization of key discussion points with IndoBART.",
      "Web interface for upload and results with Streamlit and FastAPI.",
    ],
    github: "https://github.com/AldianYohanes/NotulaX",
    cover: "/images/stock/mic-desk.webp",
    gallery: [
      { src: "/images/stock/code-html.webp", alt: "Code on a monitor" },
      { src: "/images/stock/code-index.webp", alt: "HTML source on a dark screen" },
    ],
    credits: "Stock photos by Detail .co, Mohammad Rahmani and Pankaj Patel on Unsplash.",
  },
  {
    slug: "healthyone",
    name: "HealthyOne",
    tagline: "Clinic information system and e-pharmacy, from my internship.",
    summary:
      "A healthcare product at Pharos Group. I worked on the web front end and the widgets that drive its screens. Source code is private, so this page covers the concepts only.",
    role: "Front-end developer intern",
    status: "Internship project. Private.",
    stack: ["React", "TypeScript", "Next.js", "Django", "Mantine", "Zustand", "SWR"],
    highlights: [
      "React and TypeScript screens connected to a Django backend.",
      "Server-driven UI widgets shared across Flutter and React.",
      "Migration of more than 50 widgets to a new front-end repository.",
    ],
    cover: "/images/stock/tablet-hand.webp",
    gallery: [
      { src: "/images/stock/tablet-top.webp", alt: "Hands using a tablet next to a stethoscope" },
      { src: "/images/stock/clinic-hands.webp", alt: "A hand on a tablet with a stethoscope" },
      { src: "/images/stock/operating-room.webp", alt: "A modern operating room" },
    ],
    credits: "Stock photos by Nappy and Marcel Scholte on Unsplash.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
