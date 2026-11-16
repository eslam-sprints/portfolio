export const profile = {
  name: 'Eslam Mohamed',
  role: 'Software Engineer',
  location: 'Cairo, Egypt',
  tagline:
    'I build scalable web, mobile and cloud applications — from AI-powered grading and payment systems to real-time IoT control.',
  summary:
    'Software Engineer with 4+ years of experience across EdTech, Healthcare, IoT and digital solutions. At Sprints I lead development on the LMS, AI-assisted grading, payments and performance work. Before that I shipped healthcare mobile apps at Qeema-Tech, smart-home IoT apps at Impulses, and full-stack web apps at Creative Way.',
  stats: [
    { value: '4+', label: 'Years experience' },
    { value: '×3', label: 'Performance gains' },
    { value: '4', label: 'Industries' },
  ],
  links: {
    email: 'eslammohamed7333@gmail.com',
    linkedin: 'https://www.linkedin.com/in/eslam-mohamed733/',
    github: 'https://github.com/eslam733',
  },
}

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Sprints',
    url: 'https://sprints.ai/',
    location: 'Maadi, Cairo',
    period: 'Mar 2023 – Present',
    highlights: [
      'Revamped platform performance and scalability: designed large modules and high-impact epics, optimized schemas and queries for high-traffic usage — ×3 faster with lower infrastructure costs.',
      'Built AI-assisted assignment grading that reads requirements and learner submissions (code, PDFs, videos, images, text) to produce rubric-aligned grades with explanations, plus human-in-the-loop feedback to refine prompts and scoring.',
      'Extended the assignment system with team submissions, streamlined expert grading and new submission types (live code editor, video, images, PDFs) — ×3 grading throughput.',
      'Built subscription and renewal flows across multiple payment gateways, and reusable dynamic forms that centralized data ownership and cut tooling costs.',
      'Shipped a work-simulated "Virtual Inbox" that delivers corporate-style emails inside the LMS with instant feedback, admin customization and analytics.',
      'Automated certificate generation end-to-end — ×2 faster graduation processing.',
      'Led a small team delivering features end-to-end, enforcing code-quality and review standards and coordinating with product, design and infra.',
    ],
    tags: ['Laravel', 'FastAPI', 'MySQL', 'Redis', 'AWS', 'LLMs'],
  },
  {
    role: 'Software Engineer',
    company: 'Qeema-Tech',
    url: 'https://www.qeematech.net/',
    location: 'Nasr City, Cairo',
    period: 'Sep 2022 – Feb 2023',
    highlights: [
      'Shipped multiple medical mobile apps end-to-end with Flutter and REST backends.',
      'Introduced componentized UI, state management and CI checks to cut lead time and regressions.',
      'Optimized API consumption with batching, caching and pagination to reduce median screen load time.',
      'Automated build pipelines (CodeMagic / CircleCI) and wrote release runbooks for a stable weekly cadence.',
    ],
    tags: ['Flutter', 'Dart', 'CI/CD', 'REST'],
  },
  {
    role: 'Software Engineer',
    company: 'Impulses',
    url: 'https://impulses.ai/',
    location: 'Nasr City, Cairo',
    period: 'Jan 2021 – Sep 2022',
    highlights: [
      'Built and maintained Home Impulse, a cross-platform Flutter app controlling lights, ACs and fans in real time.',
      'Designed multi-home, multi-user tenancy with roles, permissions and device grouping for bulk actions.',
      'Aligned device protocols with backend and embedded teams; validated latency and reliability SLAs.',
      'Implemented scenes and shortcuts to orchestrate multi-device routines.',
    ],
    tags: ['Flutter', 'IoT', 'Real-time'],
  },
  {
    role: 'Software Engineer',
    company: 'Creative Way',
    url: 'https://creativeway-ad.com/',
    location: 'Doqi, Giza',
    period: 'Jan 2020 – Jan 2021',
    highlights: [
      'Built web applications with React, Node.js and WordPress for clients across industries.',
      'Drove responsive UI, accessibility fixes and SEO readiness.',
      'Led deployments on shared hosting and cloud; containerized services with Docker for faster rollbacks.',
    ],
    tags: ['React', 'Node.js', 'WordPress', 'Docker'],
  },
]

export const projects = [
  {
    title: 'High-Availability Web App on AWS',
    description:
      'Full CloudFormation stack that provisions networking, compute and security layers for an Apache app on EC2, with an infrastructure diagram.',
    tags: ['AWS', 'CloudFormation', 'IaC'],
    url: 'https://github.com/eslam733/EgFwd-project2-aws-high-availability-',
    linkLabel: 'Code',
  },
  {
    title: 'Auto-Deploy Superpowers (CI/CD)',
    description:
      'CI/CD pipelines for cloud delivery with deployment strategies, centralized structured logging and configuration management.',
    tags: ['CI/CD', 'AWS', 'DevOps'],
    url: 'https://github.com/eslam733/Give-Your-Application-Auto-Deploy-Superpowers',
    linkLabel: 'Code',
  },
  {
    title: 'Reservations with Docker',
    description:
      'Containerized a reservation web app with Docker and Compose — multi-stage builds, optimized layers and reproducible environments.',
    tags: ['Docker', 'Compose'],
    url: 'https://github.com/eslam733/point-of-sales',
    linkLabel: 'Code',
  },
  {
    title: 'Home Impulse',
    description:
      'Smart-home app built from scratch: authentication, device and room management, stats, roles and notifications.',
    tags: ['Flutter', 'IoT'],
    url: 'https://apps.apple.com/eg/app/impulses/id1667483597',
    linkLabel: 'App Store',
  },
  {
    title: 'Home Impulses Landing Page',
    description:
      'Web UI for the Home Impulse platform with auth, device/room management, role-based pages, logs and analytics views.',
    tags: ['Web', 'API integration'],
    url: 'https://impulses-corp.com/',
    linkLabel: 'Website',
  },
  {
    title: 'Qur’an App',
    description:
      'Fully offline Holy Qur’an reader identical to the printed Mushaf, with reminders, bookmarks and search. Published on iOS and Android.',
    tags: ['Flutter', 'Offline-first'],
    url: 'https://apps.apple.com/eg/app/id1594654239',
    linkLabel: 'App Store',
  },
  {
    title: 'Gsft — Saudi Art Association',
    description:
      'Mobile app for the Saudi Art Association to publish artworks and events, with artist registration, uploads and profiles.',
    tags: ['Flutter', 'Mobile'],
    url: 'https://apps.apple.com/eg/app/id1570029163',
    linkLabel: 'App Store',
  },
]

export const skills = [
  { group: 'Languages', items: ['PHP', 'JavaScript', 'Python', 'Dart', 'Go', 'Java', 'C/C++'] },
  {
    group: 'Frameworks',
    items: ['Laravel', 'FastAPI', 'Django', 'React', 'Node.js', 'NestJS', 'Flutter', 'Ionic', 'WordPress'],
  },
  {
    group: 'Cloud & Data',
    items: ['AWS', 'Docker', 'Linux', 'MySQL', 'MongoDB', 'Redis', 'gRPC', 'Microservices'],
  },
  {
    group: 'Practices',
    items: ['REST APIs', 'CI/CD', 'GitHub CI', 'CodeMagic', 'CircleCI', 'Agile', 'Cursor AI'],
  },
]

export const education = {
  degree: 'Bachelor of Computers and Artificial Intelligence',
  school: 'Helwan University',
  detail: 'Information Systems',
  year: '2022',
}

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Fluent' },
]
