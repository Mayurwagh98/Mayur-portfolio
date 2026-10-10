// Single source of truth for portfolio content. Keep in sync with the resume PDF in /public.

export const profile = {
  name: "Mayur Wagh",
  role: "MERN Full Stack Developer",
  tagline: "React · Next.js · Node.js · Express · MongoDB",
  location: "Nashik, Maharashtra",
  email: "mswagh98@gmail.com",
  phone: "+91 8208663529",
  linkedin: "https://www.linkedin.com/in/mayur--wagh/",
  github: "https://github.com/Mayurwagh98",
  githubUser: "Mayurwagh98",
  resumePdf: "/Mayur_Wagh_Full_Stack_Developer.pdf",
  summary:
    "MERN Full Stack Developer with 3+ years of experience building production-grade web applications end-to-end across React.js, Next.js, Node.js, Express.js and MongoDB. Proven track record of shipping AI-powered platforms, designing scalable REST APIs and optimizing page-load and API performance.",
};

export const stats = [
  { value: "3+", label: "Years of\nexperience" },
  { value: "100+", label: "Developers\nmentored" },
  { value: "3", label: "Companies\nshipped at" },
];

export const experiences = [
  {
    title: "MERN Full Stack Developer",
    company: "InCruiter",
    location: "Bengaluru, India",
    period: "Jul 2025 – Jun 2026",
    description:
      "Owned end-to-end delivery of feature modules across a React frontend and Node.js/Express backend for recruiter and candidate workflows.",
    achievements: [
      "Owned end-to-end delivery of multiple feature modules across a React frontend and Node.js/Express backend, working with product, design and QA.",
      "Designed and shipped REST APIs covering authentication, validation and core business logic for recruiter and candidate workflows.",
      "Implemented JWT-based authentication and role-based access control (RBAC) to secure recruiter and candidate flows.",
      "Delivered in an Agile, ticket-driven environment with clear acceptance criteria, code reviews and reliable releases.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "RBAC"],
  },
  {
    title: "MERN Full Stack Developer",
    company: "Intervue Labs Pvt. Ltd.",
    location: "Bengaluru, India",
    period: "Jun 2023 – Jul 2025",
    description:
      "Led end-to-end development of an AI-driven interview automation platform conducting hundreds of interviews per month without human intervention.",
    achievements: [
      "AI Interview Platform: architected services, designed schemas and shipped both frontend and backend for a platform running hundreds of interviews a month autonomously.",
      "Backend: built services in Node.js, Express.js and MongoDB, including schema modeling, optimized queries, indexing and secure handling of candidate data.",
      "Frontend: built a scalable React.js and Next.js frontend with server-side rendering, improving initial load time and SEO.",
      "Bot Automation: developed an interview bot that autonomously interacts with candidates, reducing recruiter effort and increasing completion rates.",
      "Reliability: owned development, testing and production deployments, ensuring high system stability and minimal post-release issues.",
    ],
    tech: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "SSR"],
  },
  {
    title: "Instructional Associate",
    company: "Masai School (EdTech)",
    location: "Bengaluru, India",
    period: "Apr 2022 – Feb 2023",
    description:
      "Mentored aspiring developers in the MERN stack and helped improve how the curriculum was delivered.",
    achievements: [
      "Mentored 100+ aspiring developers in the MERN stack through code reviews, live sessions and one-on-one problem solving.",
      "Conducted technical evaluations and helped improve curriculum effectiveness.",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Mentoring"],
  },
];

export type Project = {
  slug: "front-row" | "docspace" | "music";
  title: string;
  subtitle: string;
  year: string;
  description: string;
  highlights: string[];
  tags: string[];
  links: { live: string; github: string };
  accent: string; // tailwind gradient stops
  image: string; // real screenshot of the live app, in /public/projects
};

export const projects: Project[] = [
  {
    slug: "front-row",
    title: "Front Row",
    subtitle: "Real-Time Seat Booking Platform",
    year: "2026",
    description:
      "A cinema booking app where two users can never book the same seat, and everyone watching a screening sees seats being taken live.",
    highlights: [
      "Atomic Redis seat locks with 5-minute holds — a losing request gets a 409, not a double booking",
      "MongoDB transactions at checkout; prices read from the database, never trusted from the client",
      "Live seat updates over Socket.io for every viewer of a screening",
      "JWT auth with RBAC — admins add movies and schedule screenings",
    ],
    tags: ["React", "Express", "MongoDB", "Upstash Redis", "Socket.io", "JWT", "Tailwind"],
    links: {
      live: "https://front-row-sand.vercel.app/",
      github: "https://github.com/Mayurwagh98/front-row",
    },
    accent: "from-amber-400 via-orange-500 to-rose-500",
    image: "/projects/front-row.jpg",
  },
  {
    slug: "docspace",
    title: "DocSpace",
    subtitle: "Collaborative Document Editor",
    year: "2025",
    description:
      "A lightweight collaborative editor with rich-text editing, role-based sharing and autosave, deployed on Vercel.",
    highlights: [
      "Rich-text editing with TipTap — headings, lists, bold, italic, underline, strikethrough",
      "Role-based sharing: invite people as editor or viewer",
      "Autosave 1.5s after typing stops, plus manual save",
      "Import .docx and .txt files straight into a document",
    ],
    tags: ["React 18", "TipTap", "Node.js", "Express.js", "MongoDB", "JWT", "Vercel"],
    links: {
      live: "https://doc-editor-ruby.vercel.app/login",
      github: "https://github.com/Mayurwagh98/doc-editor",
    },
    accent: "from-sky-400 via-blue-500 to-indigo-600",
    image: "/projects/docspace.jpg",
  },
  {
    slug: "music",
    title: "NextJS Music Platform",
    subtitle: "Cadence Music Academy · Next.js App Router",
    year: "2024",
    description:
      "A full-stack music-school app: browse and search courses, play audio previews that keep going as you move around the site, sign up and enroll — server-rendered with Next.js and deployed on Vercel.",
    highlights: [
      "Course catalog with search and filters (instrument, level, instructor) kept in the URL",
      "Persistent audio player that keeps playing across page navigations",
      "Accounts and enrollment via Server Actions with Zod validation; JWT sessions in httpOnly cookies",
      "Partial prerendering, cached catalog data, per-course OG images and sitemap for SEO",
    ],
    tags: ["Next.js", "React", "TypeScript", "MongoDB", "Server Actions", "Zod", "Vercel"],
    links: {
      live: "https://nextjs-music-eight.vercel.app/",
      github: "https://github.com/Mayurwagh98/nextjs-music",
    },
    accent: "from-fuchsia-500 via-purple-500 to-violet-600",
    image: "/projects/music.jpg",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js (SSR/SSG)",
      "Redux Toolkit",
      "Tailwind CSS",
      "MUI",
      "Responsive Design",
      "Component Architecture",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "JWT Authentication",
      "RBAC",
      "Socket.io",
    ],
  },
  {
    title: "Databases",
    items: [
      "MongoDB",
      "Mongoose",
      "Schema Design",
      "Indexing",
      "Query Optimization",
      "Aggregation Pipelines",
      "Redis",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EC2, S3)", "Firebase", "Vercel", "Git & GitHub", "CI/CD basics", "Vite", "Postman"],
  },
  {
    title: "Practices",
    items: [
      "Agile / Scrum",
      "Code Reviews",
      "System Design Fundamentals",
      "Performance Optimization",
      "API Integration",
      "Production Deployments",
    ],
  },
];

// Kept for the resume modal (flat lists)
export const skills = {
  frontend: skillGroups[1].items,
  backend: skillGroups[2].items,
  databases: skillGroups[3].items,
  devops: skillGroups[4].items,
};

export const education = [
  {
    institution: "Masai School, Bengaluru",
    degree: "Full-Stack Web Development",
    period: "Nov 2021 – May 2022",
    type: "Bootcamp",
  },
  {
    institution: "Matoshri College of Engineering and Research Center, Nashik",
    degree: "B.E. in Mechanical Engineering",
    period: "Aug 2015 – Jul 2019",
    type: "Bachelor's",
  },
];

export const certifications = [
  { title: "MERN Full Stack Development", issuer: "Masai School", date: "Apr 2023" },
  { title: "Basics of Web Development", issuer: "Masai School", date: "Dec 2021" },
];
