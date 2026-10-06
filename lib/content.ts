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

export interface Chapter {
  when: string;
  title: string;
  text: string;
}

// Sources: LinkedIn profile, Alleyway Muse journey notes (approved 29 Sep 2026), internship report, thesis notes.
export const chapters: Chapter[] = [
  {
    when: "2020 to 2023",
    title: "School",
    text: "At SMA Negeri 23 Jakarta I led the Paskibra flag-raising squad and was secretary of the Language Club. I also sat on the Christian fellowship committee.",
  },
  {
    when: "2023 to 2025",
    title: "Informatics, and a lot of committees",
    text: "I started Informatics Engineering at Universitas Tarumanagara in August 2023 and joined the English club TEC, the student group KMK Adhyatmaka and the faculty council DPM FTI. I ran logistics for new-student orientation, led Legislative Training 2024 and was vice project leader of Pekan Suci 2025.",
  },
  {
    when: "February 2024",
    title: "A drink stand",
    text: "On 26 February 2024 I started Alleyway Muse and began selling to students at Untar. The first booth came in June 2024 at I/O Festival, a crew of student sellers formed in 2025, and in September 2026 we opened at iNews Campus Connect. More than 2,500 cups so far.",
  },
  {
    when: "2025 to 2026",
    title: "Software for real work",
    text: "The business needed better tools, so I built them: a web app for orders, stock and payroll, then MuseUp OS. In January 2026 I joined Pharos as an intern on a healthcare product, starting in Flutter and moving to React and Django. Since July 2026 my thesis, Stokgent, tests whether a language model running in the browser can manage a parts shop's stock safely.",
  },
  {
    when: "Now",
    title: "Thread through it all",
    text: "I split my time between the thesis, MuseUp OS and the Pharos internship. The thread is the same each time: build tools for real operations, and say plainly what they can and cannot do.",
  },
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
    role: "Front-end, then Full-Stack Developer Intern",
    org: "PT Inti Utama Solusindo (Pharos Group)",
    period: "Jan 2026 - Jan 2027",
    points: [
      "Started in January 2026 on the Flutter front end of HealthyOne, a clinic information system with e-pharmacy, and moved to React, Next.js and a Django backend from mid-April.",
      "Built server-driven UI widgets, where the layout of each screen arrives as JSON from the backend, and moved Flutter widgets to a newer Flutter version.",
      "Across the internship: 33 widget fix and improvement tasks, 16 new React modules and screens, and 6 tasks aligning the front end with backend APIs. The inventory dashboard, which needed a new endpoint, is the piece I would point to.",
      "Worked in OpenProject and GitLab with merge-request review.",
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
      "Founded on 26 February 2024 and began selling to students at Universitas Tarumanagara. More than 2,500 cups served.",
      "Took the stand to events: the first booth at I/O Festival in June 2024, then Creative Boulevard in September 2025, I/O Festival 2025 and 2026, and iNews Campus Connect on 29 and 30 September 2026.",
      "Recruits and manages a crew of student sellers, and runs campaigns such as exam-week promos and an anniversary spin wheel.",
      "Handles product development, sourcing, inventory and finances, and designs the brand, photos and posters.",
      "Built the software behind it, from the first web app to MuseUp OS. A community-service study of its TikTok promotion by Untar communications researchers appeared in the journal Serina Abdimas in August 2026.",
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

export interface StorySection {
  title: string;
  paragraphs?: string[];
  points?: string[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  role: string;
  status: string;
  stack: string[];
  highlights: string[];
  story: StorySection[];
  lessons: string[];
  github?: string;
  live?: string;
  cover?: string; // file under /public, shown only when it exists
  gallery?: { src: string; alt: string }[];
  galleryShape?: "square";
  credits?: string; // photo credit line for stock images
}

// Case-study sources: MuseUp OS (vault ADR 01-03, git log, status note 6 Oct 2026), Stokgent (vault Thesis notes,
// repo log and evaluation runs, 3 Oct 2026), NotulaX (course report, 18 Jun 2025), HealthyOne (internship report, concepts only).
export const projects: Project[] = [
  {
    slug: "museup-os",
    name: "MuseUp OS",
    tagline: "Operations system for a multi-branch beverage business.",
    summary:
      "An internal system for Alleyway Muse that brings point of sale, stock, finance and customers into one place. It is built offline-first so a shift keeps running when the connection drops.",
    role: "Design and full-stack development",
    status: "In development. Foundation phase is live; the POS features are done locally and not yet tested on crew phones.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Bun"],
    highlights: [
      "A sale that already happened is never rejected, only flagged.",
      "Offline-first POS with idempotent sync and versioned menu catalogs.",
      "No hard deletes: every void and correction leaves an audit trail.",
    ],
    story: [
      {
        title: "Why it exists",
        paragraphs: [
          "Alleyway Muse began as a student-run stand at Universitas Tarumanagara and grew into booths, roaming sales and delivery. Its first web app, started in March 2026, did the job but carried messy product data and bugs in reports and payroll.",
          "MuseUp OS replaces it with a small ERP for several branches: offline point of sale, cash sessions, stock by lot with cost of goods, finance, staff and members.",
        ],
      },
      {
        title: "Decisions that shaped it",
        points: [
          "A sale that already happened is never rejected. Odd data, such as a price mismatch, a stale menu or a clock more than 10 minutes off, is accepted and flagged for review.",
          "The POS is a PWA with a local database. Sync sends idempotent mutations, so retrying after a dropped connection is safe.",
          "Menus are versioned. Each order stores the catalog version and the server recalculates the price.",
          "Logic lives in one TypeScript core over Postgres with row-level security. The client never writes to the database directly.",
          "No hard deletes. Voids, archives and corrections need a reason and are audited, and sensitive roles need multi-factor authentication.",
          "Dynamic QRIS goes through Midtrans, starting in sandbox, with a cash or static QRIS fallback when offline.",
        ],
      },
      {
        title: "How it got built",
        paragraphs: [
          "The first commit landed on 24 September 2026. By 1 October the foundation phase was done: a Bun monorepo, CI, a schema with an append-only ledger, audit triggers, approval gates and Indonesian and English text.",
          "On 5 and 6 October the POS followed: shell, sync, sessions, cash checkout, payments, refunds, recipe cards with a barista queue, and members. That is 73 commits in total so far.",
        ],
      },
      {
        title: "Where it stands",
        paragraphs: [
          "The foundation runs on production: 20 migrations, row-level security on, and owner login with Google and a one-time code. The POS features pass their tests locally.",
          "It has not been tried on real crew phones, Midtrans is still mocked, and there are no users yet. A pilot is planned for around April 2027, which is an estimate and not a result.",
        ],
      },
    ],
    lessons: [
      "Database access through the Postgres role skips row-level security, so authorization has to live in the TypeScript layer too.",
      "A wrong Supabase site URL sent logins to localhost, and a Vercel build ran the wrong command until I added a config file. Small settings cost real hours.",
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
      "My undergraduate thesis, built around the spare-parts shop of Prima Motor Volvo. A router hands each request to a specialist agent, and the language model runs locally in the browser through WebGPU.",
    role: "Thesis research and development",
    status: "Thesis in progress. Proposal chapters approved; formal results not yet written.",
    stack: ["Next.js", "React", "WebLLM", "Supabase", "LaTeX"],
    highlights: [
      "Router, query, transaction and monitoring agents.",
      "The model reads language; the server validates and executes.",
      "Stock changes need a staff PIN, whatever the model says.",
    ],
    story: [
      {
        title: "The problem",
        paragraphs: [
          "The shop records stock by hand in notebooks and slips. Moving parts between warehouse and shop is inconsistent, stock gaps have been found, the shop's internet is unstable, and one component fits several car models.",
        ],
      },
      {
        title: "How it is built",
        points: [
          "Three layers: a PWA, agents running on the device with WebLLM, and Supabase for data.",
          "Four agents. A router sorts each message into a query, a transaction or off-topic. The query agent only reads. The transaction agent only proposes stock changes. The monitoring agent is not an LLM at all, just a scheduled reorder-point check.",
          "The model only interprets language. Validation, authorization and execution are deterministic and live on the server, with row-level security as a second defense.",
          "Offline, the app can read from a cache but deliberately cannot queue writes.",
        ],
      },
      {
        title: "How it got built",
        paragraphs: [
          "The first commit was on 14 July 2026. Cross-repository analysis came on 25 September, role-based access and an evaluation harness on 27 September, and then 27 evaluation runs through 3 October. The interface moved to shadcn on 2 October. The repository is at 97 commits.",
        ],
      },
      {
        title: "What the early runs show",
        paragraphs: [
          "These are preliminary results from draft scenarios, not official runs. The default model is Qwen2.5-3B. A one-step transaction tool fixed the failing case: 9 of 9 for the multi-agent setup against 8 of 9 for a single agent. The first end-to-end transaction worked in run 13.",
          "On security, the system invariants held in 12 of 12 cases, so no stock changed without a PIN. The model itself was still fooled by prompt injection in 1 of 6 multi-agent cases, which is exactly why the checks sit outside it.",
          "Speed is a weak point. Median latency was 72 to 91 seconds for multi-agent against 110 to 119 seconds for single-agent on a Snapdragon laptop. A 1.5B model on an older GPU was not viable.",
        ],
      },
    ],
    lessons: [
      "WebLLM only allows a tools parameter for a few models, so the others needed a prompt protocol of my own.",
      "Windows kept resetting the GPU driver on some laptops. On-device AI also means debugging hardware you do not control.",
      "One run scored zero because of a bug in my business ID, not the model, so a failing run is not always the model's fault.",
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
    tagline: "Membership, orders and crew management for Alleyway Muse.",
    summary:
      "The first system behind Alleyway Muse: a Next.js web app for orders, inventory, payroll and KPIs, plus an early Flutter app for membership. MuseUp OS grew out of it.",
    role: "Full-stack development",
    status: "Earlier version. Succeeded by MuseUp OS.",
    stack: ["Next.js", "Flutter", "Supabase", "Mantine"],
    highlights: [
      "Public ordering without login, then a queue with recipe cards.",
      "Cost of goods per ingredient and per product.",
      "Attendance, shifts and automatic payroll, event crew included.",
    ],
    story: [
      {
        title: "What it did",
        points: [
          "Customers could order without logging in. Orders arrived as pending and moved through a staff queue with vouchers and a recipe modal.",
          "Inventory tracked ingredients and expenses, with cost of goods for each ingredient and product.",
          "Crew checked in and out of shifts, and payroll was calculated automatically, including for event crew.",
          "Managers had KPIs and a dashboard, there was a recruitment form, and a small service sent WhatsApp messages.",
          "A Flutter app covered membership with Bronze, Silver and Gold tiers and QR check-in, but it was dropped and the web app carried on.",
        ],
      },
      {
        title: "How it got built",
        paragraphs: [
          "The Flutter app's four commits are from 3 February 2026. The web app's history runs from 13 March to 10 August 2026, 205 commits, busiest in March, April and May.",
        ],
      },
      {
        title: "Why it was replaced",
        paragraphs: [
          "Real use exposed dirty product data and bugs in reports and payroll. Rather than patch it, I planned MuseUp OS as its replacement and carried the old data over with a migration that is safe to run again.",
        ],
      },
    ],
    lessons: [
      "Moving fast with a real business as the user is the best requirements document, and also how bad data sneaks in.",
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
      "A natural language processing course project. You upload a meeting recording, it transcribes the speech, then summarizes the key discussion points.",
    role: "Design and development",
    status: "Course project, finished June 2025. No formal accuracy evaluation.",
    stack: ["Python", "FastAPI", "Streamlit"],
    highlights: [
      "Whisper for Indonesian speech to text.",
      "IndoBART for summaries of key points.",
      "Streamlit front end on a FastAPI back end.",
    ],
    story: [
      {
        title: "The problem",
        paragraphs: [
          "Writing meeting minutes by hand is slow, and Indonesian speech is hard for off-the-shelf tools: accents, informal words and code-mixing between Indonesian and English.",
        ],
      },
      {
        title: "How it works",
        points: [
          "A Streamlit page uploads the audio to a FastAPI endpoint that transcribes and summarizes in one call.",
          "Audio becomes mono at 16 kHz and is cut into 29-second chunks for Whisper large, used zero-shot.",
          "A regex pass cleans the transcript, then IndoBART v2 with a 132 million parameter model writes the summary, using beam search and a length range of 40 to 150 tokens.",
          "It ran on Google Colab through a tunnel, and results can be downloaded as a text file.",
        ],
      },
      {
        title: "What it did not do",
        paragraphs: [
          "I only checked quality by reading outputs, so there are no WER or ROUGE scores to quote. Known limits: heavy memory use, weak cleanup of filler words, a fixed summary length, no speaker labels and no real-time mode.",
        ],
      },
    ],
    lessons: [
      "Next steps I wrote down: lazy-load the models, try a smaller or quantized Whisper, fine-tune IndoBART, and let users edit the result.",
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
      "A healthcare product at Pharos Group. I worked on the screens and widgets that drive it, first in Flutter and then in React. Source code is private, so this page covers the concepts only.",
    role: "Front-end developer intern, later full-stack",
    status: "Internship project. Private.",
    stack: ["Flutter", "React", "TypeScript", "Next.js", "Django"],
    highlights: [
      "Server-driven UI: screens arrive as JSON from the backend.",
      "33 widget fix and improvement tasks, 16 new React modules.",
      "Front end aligned with Django APIs, including a new endpoint.",
    ],
    story: [
      {
        title: "The idea behind it",
        paragraphs: [
          "HealthyOne uses server-driven UI. The backend sends a JSON description of each screen, and the app turns it into widgets, so a layout can change without shipping a new app version.",
        ],
      },
      {
        title: "My part",
        points: [
          "In January 2026 I learned the pattern by building basic widgets such as tab views, text and text fields.",
          "I moved Flutter widgets to a newer Flutter version and an MVC structure.",
          "Across the internship the report counts 33 widget fix and improvement tasks, 16 new React modules and screens, and 6 tasks aligning the front end with backend APIs.",
          "From mid-April I moved from Flutter to React, Next.js and a Django backend. The inventory dashboard needed a new endpoint, and it is the piece I would point to first.",
        ],
      },
      {
        title: "How we worked",
        paragraphs: [
          "Tasks lived in OpenProject, code went through merge requests on GitLab, and front end, back end, QA and product sat in the same room.",
        ],
      },
    ],
    lessons: [
      "My mentor named code care, performance and debugging efficiency as the areas to grow in.",
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
