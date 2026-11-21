export const profile = {
  name: 'Eslam Mohamed',
  role: 'Senior Software Engineer',
  location: 'Cairo, Egypt',
  tagline:
    'Backend & Cloud Engineer building scalable, AI-powered applications — from AI grading and payment systems to real-time IoT control.',
  summary:
    'Senior Software Engineer with 4+ years of experience designing and building scalable backend systems, cloud-native applications and AI-powered platforms. Experienced in Laravel, FastAPI, Node.js, AWS, Docker and modern software architecture, with a proven track record of improving system performance, reducing infrastructure costs and leading the delivery of high-impact products across EdTech, Healthcare, IoT and digital solutions.',
  stats: [
    { value: '4+', label: 'Years experience' },
    { value: '×3', label: 'Performance gains' },
    { value: '4', label: 'Industries' },
  ],
  available: true,
  cv: '/Eslam_Mohamed_CV.pdf',
  photo: '/photo.webp',
  facts: [
    { label: 'Based in', value: 'Cairo, Egypt' },
    { label: 'Currently', value: 'Software Engineer at Sprints' },
    { label: 'Focus', value: 'Backend · Cloud · AI' },
    { label: 'Languages', value: 'Arabic, English' },
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
      'Led the development of high-impact platform features, improving scalability and reducing infrastructure costs through database and system performance optimizations (3× performance improvement).',
      'Built AI-powered assignment grading and enhanced submission workflows, reducing manual review effort while increasing grading speed and consistency (3× higher grading throughput).',
      'Developed subscription, payment and dynamic workflow solutions that streamlined operations and reduced reliance on third-party tools.',
      'Designed interactive learning experiences, including a Virtual Inbox simulation and analytics dashboards, to increase learner engagement.',
      'Automated certificate generation and graduation workflows, cutting graduation processing time by 50%.',
      'Led a small engineering team, driving end-to-end feature delivery, code quality and cross-functional collaboration to deliver releases on schedule.',
    ],
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade', 'PHPUnit', 'AI'],
  },
  {
    role: 'Software Engineer',
    company: 'Qeema-Tech',
    url: 'https://www.qeematech.net/',
    location: 'Nasr City, Cairo',
    period: 'Sep 2022 – Feb 2023',
    highlights: [
      'Shipped multiple medical mobile apps end-to-end with Flutter (Dart) and REST backends, working with designers and backend engineers to turn requirements into production releases.',
      'Introduced componentized UI, state management and CI checks to shorten feature lead time and reduce regressions.',
      'Optimized API consumption with request batching, caching and pagination to speed up screen loads.',
      'Wrote release runbooks and automated build pipelines (CodeMagic / CircleCI) to keep a stable weekly release cadence.',
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
      'Designed multi-home, multi-user tenancy with roles, permissions and device grouping for bulk actions, reducing taps for common routines.',
      'Aligned device protocols with backend and embedded teams; validated latency and reliability SLAs.',
      'Implemented scenes and shortcuts to orchestrate multi-device routines.',
    ],
    tags: ['Flutter', 'IoT', 'Real-time'],
  },
  {
    role: 'Software Engineer',
    company: 'Creative Way',
    url: 'https://creativeway-ad.com/',
    location: 'Dokki, Giza',
    period: 'Jan 2020 – Jan 2021',
    highlights: [
      'Developed and maintained web applications using React, Node.js and WordPress for cross-industry clients; owned backlog grooming to ship on schedule.',
      'Improved responsive UI, accessibility and SEO readiness across client sites.',
      'Led deployments on shared hosting and cloud; containerized services with Docker for faster rollbacks.',
    ],
    tags: ['React', 'Node.js', 'WordPress', 'Docker'],
  },
]

export const projects = [
  {
    title: 'ITIDA Gigs — Freelancing Program Platform',
    description:
      'Application and onboarding platform for ITIDA’s national freelancing program, run by Sprints: eligibility checks, Coderbyte assessments, ID card verification with AI OCR, and automatic seats in training rounds.',
    tags: ['Laravel', 'AI OCR', 'Webhooks', 'MySQL'],
    url: 'https://sprints.ai/en-eg/itida-gigs',
    linkLabel: 'Website',
  },
  {
    title: 'Sprints LMS — Learning & Talent Platform',
    description:
      'Laravel platform that takes learners from assessment through customized learning journeys and assignments to graduation. I lead its development: AI-assisted grading, payments and subscriptions, and 3× performance work.',
    tags: ['Laravel', 'MySQL', 'Redis', 'OpenAI'],
    url: 'https://sprints.ai/',
    linkLabel: 'Website',
  },
  {
    title: 'VoiceTut Kaggle — AI Voice Recording',
    description:
      'Open-source tool that clones voices and records Egyptian Arabic lines on Kaggle’s free GPUs, then checks every clip with speech recognition and re-records the bad ones. CLI and Tauri desktop app.',
    tags: ['Python', 'TTS / ASR', 'Tauri', 'Kaggle'],
    url: 'https://github.com/eslam733/voicetut-kaggle',
    linkLabel: 'Code',
  },
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
  { group: 'Languages', items: ['PHP', 'Python', 'JavaScript', 'Dart', 'Go', 'Java', 'C/C++'] },
  {
    group: 'Backend',
    items: ['Laravel', 'FastAPI', 'Django', 'Node.js', 'NestJS', 'RESTful APIs', 'gRPC', 'Microservices'],
  },
  { group: 'Frontend & Mobile', items: ['React', 'Flutter', 'Ionic', 'WordPress'] },
  { group: 'Databases', items: ['MySQL', 'MongoDB', 'Redis'] },
  {
    group: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Linux', 'Git', 'CI/CD (GitHub, CodeMagic, CircleCI)'],
  },
  { group: 'Tools & Practices', items: ['Cursor AI', 'Agile'] },
]

export const education = {
  degree: 'B.Sc. in Information Systems',
  school: 'Helwan University',
  detail: 'Faculty of Computers and Artificial Intelligence',
  year: '2022',
}

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Fluent' },
]
