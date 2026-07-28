export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  impact: string;
  challenges: string;
  lessons: string;
  image: string;
  images?: string[];
  techStack: string[];
  features: string[];
  metrics: string[];
  github: string;
  demo: string;
};

export const siteConfig = {
  name: "Telaynew Ambachew",
  shortName: "Telaynew",
  title: "AI Software Engineer",
  subtitle: "Full Stack Developer",
  description:
    "I build software — backend systems, AI tools, and the infrastructure to run them in production. Based in Addis Ababa, working with teams at IE Network Solutions.",
  email: "telaynew11@gmail.com",
  location: "Addis Ababa, Ethiopia",
  github: "https://github.com/telaynew12",
  linkedin: "https://www.linkedin.com/in/telaynew-ambachew-44950825a/",
  portfolio: "https://telaynew12.github.io/",
  resume:
    "https://telaynew12.github.io/Telaynew%20AI%20and%20Full%20stack.pdf",
  githubUsername: "telaynew12",
};

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#github", label: "GitHub" },
  { href: "/#tech-stack", label: "Tech Stack" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const heroStats = [
  { value: "2+", label: "Years shipping production software" },
  { value: "10+", label: "Projects I've built and deployed" },
  { value: "5+", label: "AI apps running on Azure" },
  { value: "RAG", label: "LLM pipelines in active use" },
];

export const heroHighlights = [
  "Python",
  "Node.js",
  "Azure OpenAI",
  "FastAPI + NestJS",
  "RAG & embeddings",
  "Cloud architecture",
];

export const testimonials = [
  {
    id: 1,
    quote:
      "I remember Telaynew stayed late to debug a prompt pipeline that kept hallucinating on edge cases. He didn't leave until we had a fix. Most people would've called it a day — he traced it back to a chunking issue in the retrieval layer. That's the kind of engineer he is.",
    name: "Mikias Abate",
    role: "Senior Software Developer",
    company: "IE Network Solutions",
    initials: "MA",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    quote:
      "The first time I saw the AI copilot demo I thought it was staged. But it actually worked — people on the support team started using it unprompted within a week. Telaynew didn't just build a tech demo; he built something that fit how we actually work.",
    name: "Muluken Ashenafi",
    role: "Senior Software Developer",
    company: "IE Network Solutions",
    initials: "MA",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    quote:
      "What stood out to me was how Telaynew handled a CRUD feature that was turning into a mess of nested if-else statements. He stopped, redrew the module boundaries, and shipped something we didn't have to rewrite six months later. Clean instincts.",
    name: "Raey Abebe",
    role: "Lead",
    company: "IE Network Solutions",
    initials: "RA",
    color: "from-emerald-500 to-teal-500",
  },
];

export const proofPoints = [
  {
    label: "Focus",
    title: "AI tools that actually ship",
    description:
      "I build assistants and automation that solve real operational problems — not Jupyter notebooks that look good in a presentation.",
  },
  {
    label: "Strength",
    title: "Backend services that don't break",
    description:
      "APIs, workflows, service layers. I favor boring, reliable patterns over clever ones. Maintainability beats novelty.",
  },
  {
    label: "Outcome",
    title: "Engineering that moves the business",
    description:
      "I've learned that an AI prototype is useless unless it's deployed, monitored, and actually used by someone on the team.",
  },
];

export const aboutMetrics = [
  { value: "AI", label: "Assistants and copilots shipped" },
  { value: "API", label: "Backend services designed & deployed" },
  { value: "Cloud", label: "Azure pipelines I manage daily" },
  { value: "Data", label: "RAG and document pipelines" },
];

export const experiences = [
  {
    id: 1,
    role: "Software Developer",
    company: "IE Network Solutions",
    period: "Apr 2026 - Aug 2026",
    summary:
      "Built CRM and service desk modules for internal operations — backend services, database models, and automation workflows that teams actually used day-to-day.",
    metrics: ["CRM", "Service Desk", "NestJS", "Automation"],
    responsibilities: [
      "Built CRM backend modules with NestJS — REST endpoints, service layers, data validation, and pipeline management.",
      "Developed service desk features including ticket management, escalation workflows, and SLA tracking.",
      "Designed database schemas optimized for reporting queries across CRM and service desk operations.",
      "Created automation workflows connecting CRM records with support tickets for seamless handoffs.",
      "Standardized API contracts between frontend and backend so both teams shipped faster.",
    ],
  },
  {
    id: 2,
    role: "AI & Data Engineer",
    company: "IE Network Solutions",
    period: "Jul 2025 - Apr 2026",
    summary:
      "Built internal AI tooling and customer-facing systems. My work spans the full stack — from designing retrieval pipelines in Python to deploying services on Azure and connecting them to real business workflows.",
    metrics: ["Azure OpenAI", "FastAPI", "RAG", "Workflow automation"],
    responsibilities: [
      "Built AI assistants using Azure OpenAI that employees actually use — prompt engineering, retrieval pipelines, the whole orchestration layer.",
      "Designed and deployed REST APIs with FastAPI for integrating AI services into existing business systems.",
      "Set up CI/CD and deployment workflows on Azure so the team could ship without manual steps.",
      "Built RAG systems from scratch: chunking strategies, embedding pipelines, prompt templates, and evaluation loops.",
      "Debugged production issues in AI pipelines: latency, hallucination, retrieval quality. Learned to treat observability as a feature.",
    ],
  },
  {
    id: 3,
    role: "Software Developer",
    company: "Freelance",
    period: "2024 - 2025",
    summary:
      "Worked on full-stack development projects — authentication systems, API design, database architecture, and dashboard interfaces for various clients.",
    metrics: ["NestJS", "Authentication", "Database design", "Dashboards"],
    responsibilities: [
      "Implemented auth from scratch: JWT flows, refresh tokens, role-based access that didn't get in the way.",
      "Designed PostgreSQL schemas for reporting queries, not just CRUD. Learned that bad schema design kills dashboard performance.",
      "Created dashboard views that translated raw operational data into something managers could actually act on.",
      "Built full-stack web applications for clients — from API design to frontend integration.",
      "Standardized API contracts between frontend and backend systems for clean, predictable data flow.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    slug: "shopping-platform",
    title: "Shopping Platform",
    category: "Full Stack Commerce",
    overview:
      "A commerce app with product browsing, cart management, and checkout flows. The challenge was making the frontend feel fast while keeping the backend simple.",
    problem:
      "The team wanted a clean customer experience, but the backend needed to handle products, inventory, payments, and orders without turning into spaghetti.",
    solution:
      "I focused on clean separation between the storefront (Next.js), the API layer, and the data model. Stripe for payments, PostgreSQL for everything else.",
    architecture:
      "Next.js storefront with server components for performance. TypeScript API layer manages product data, cart state, and order workflows. Stripe integration on the backend.",
    impact:
      "Shipped a reliable checkout flow. The architecture made it easy to add features without breaking existing ones.",
    challenges:
      "Coordinating cart state, inventory checks, and payment confirmations without race conditions. Stripe webhooks added complexity.",
    lessons:
      "Good commerce UX is mostly about disciplined backend architecture. Keep payment logic asynchronous and idempotent.",
    image: "/shoping1.png",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    features: [
      "Responsive storefront",
      "Checkout architecture",
      "Product management",
      "Payment integration",
    ],
    metrics: ["Fast UX", "Commerce flows", "Type-safe frontend"],
    github: "https://github.com/telaynew12/shoping",
    demo: "https://www.youtube.com/watch?v=awxx1p03Jns",
  },
  {
    id: 2,
    slug: "enterprise-crm",
    title: "Enterprise CRM",
    category: "Platform Engineering",
    overview:
      "A multi-module CRM for internal operations. We had teams tracking customers in spreadsheets and WhatsApp — I helped build a central system that actually worked.",
    problem:
      "Teams managed customer data across spreadsheets, emails, and memory. No single source of truth, no way to track pipeline stages.",
    solution:
      "I designed the backend architecture — NestJS modules with clear domain boundaries, a PostgreSQL schema built for reporting, and role-based access patterns.",
    architecture:
      "React frontend consuming a NestJS API layer. PostgreSQL with views optimized for dashboard queries. Role-based modules for customers, pipelines, and reporting.",
    impact:
      "Eliminated manual coordination. Teams had a single view of their customers and pipeline for the first time.",
    challenges:
      "Different teams wanted different workflows. Keeping the data model flexible without turning it into a mess of optional columns was the hardest part.",
    lessons:
      "Invest in authorization boundaries early. Reusable domain services are worth the extra time. A good schema makes dashboards fast without hacks.",
    image: "/crm1.png",
    images: ["/crm1.png", "/crm2.png"],
    techStack: ["NestJS", "React", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    features: [
      "Role-based access control",
      "Customer pipeline management",
      "Operational dashboards",
      "REST API architecture",
    ],
    metrics: ["Modular architecture", "Operational reporting", "Secure auth"],
    github: "https://github.com/telaynew12/FinalProject",
    demo: siteConfig.portfolio,
  },
  {
    id: 3,
    slug: "ai-enterprise-copilot",
    title: "AI Enterprise Copilot",
    category: "Applied AI",
    overview:
      "An internal AI assistant I built from scratch. It lets teams search company knowledge, get answers, and automate repetitive questions — and people actually use it.",
    problem:
      "Company knowledge was scattered across documents, Slack messages, and people's heads. New hires spent weeks just figuring out who to ask.",
    solution:
      "Built a retrieval-augmented generation pipeline: ingest documents, chunk them intelligently, embed them, and let users ask questions in natural language.",
    architecture:
      "FastAPI orchestrates the pipeline. Azure OpenAI handles inference. Embeddings stored in a vector index. Frontend is a chat interface with source citations so users can verify answers.",
    impact:
      "Cut knowledge-lookup time significantly. Support team adopted it within the first week without being told to.",
    challenges:
      "Retrieval quality was the bottleneck — not the model. I spent more time on chunking strategies and prompt templates than on model selection.",
    lessons:
      "RAG quality depends on document structure and retrieval design more than the model. Always show sources. Users won't trust answers they can't verify.",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=ai%20enterprise%20copilot%20interface%2C%20premium%20dark%20dashboard%2C%20search%20panel%2C%20analytics%20widgets%2C%20futuristic%20enterprise%20software%20ui&image_size=landscape_16_9",
    techStack: ["Python", "FastAPI", "Azure OpenAI", "LangChain", "React"],
    features: [
      "Conversational enterprise search",
      "RAG-powered responses",
      "Prompt orchestration",
      "Azure deployment",
    ],
    metrics: ["RAG system", "Knowledge retrieval", "AI automation"],
    github: siteConfig.github,
    demo: siteConfig.portfolio,
  },
  {
    id: 4,
    slug: "food-recipe-ai",
    title: "Food Recipe AI",
    category: "Product + AI",
    overview:
      "A recipe discovery app that uses AI to recommend meals based on what ingredients you have. I wanted to see if I could make AI recommendations feel useful instead of gimmicky.",
    problem:
      "Recipe apps mostly force you to search by name. If you have random ingredients in your fridge, you're out of luck.",
    solution:
      "Built a recommendation engine that takes ingredients as input and generates recipe ideas. The AI suggests substitutions and variations too.",
    architecture:
      "React frontend, Node.js API, MongoDB for recipe data. OpenAI powers the recommendation logic. I spent most of the time on prompt design to avoid weird suggestions.",
    impact:
      "Made recipe exploration genuinely interactive. People actually enjoyed typing in random ingredients to see what came out.",
    challenges:
      "The model suggested some truly bizarre combinations at first. I had to add guardrails and ingredient filters to keep suggestions practical.",
    lessons:
      "AI features work when they feel like a natural part of the product, not a party trick. Constrain suggestions to what's useful, not what's creative.",
    image: "/foodrecipe.png",
    techStack: ["React", "OpenAI", "Node.js", "MongoDB"],
    features: [
      "AI-guided recommendations",
      "Recipe discovery",
      "Meal planning UX",
      "Responsive product design",
    ],
    metrics: ["Recommendation UX", "Content discovery", "Product thinking"],
    github: "https://github.com/telaynew12/food-recipe",
    demo: siteConfig.portfolio,
  },
  {
    id: 5,
    slug: "ageditor-ai-code-editor",
    title: "AgEditor",
    category: "Developer Tooling",
    overview:
      "A code editor concept with AI assistance built in. I explored how AI could help developers without getting in the way — autocomplete that understands context, inline explanations, and smart suggestions.",
    problem:
      "AI coding tools often interrupt your flow. I wanted to see if I could build something that felt assistive, not intrusive.",
    solution:
      "Built an editor workspace where AI suggestions appear contextually — code completions, explanations on hover, and natural-language commands for refactoring.",
    architecture:
      "Monaco Editor as the base, TypeScript throughout, OpenAI API for completions. Prompt engineering was key — the AI needed to understand what the user was trying to do.",
    impact:
      "Proved that AI assistance can work without breaking developer flow. The hard part was the interaction design, not the AI.",
    challenges:
      "The AI sometimes suggested code that looked right but was subtly wrong. I learned that developer tools need to prioritize trust and transparency over speed.",
    lessons:
      "Developer tooling is about clarity first, automation second. Users won't trust AI suggestions if they can't understand why the AI made them.",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=ai%20code%20editor%20interface%2C%20premium%20developer%20tooling%2C%20dark%20theme%2C%20blue%20glow%2C%20high-end%20desktop%20software%20design&image_size=landscape_16_9",
    techStack: ["TypeScript", "Monaco Editor", "OpenAI", "Electron"],
    features: [
      "Contextual AI assistance",
      "Code explanation flows",
      "Developer-first UX",
      "Editor-centric interaction model",
    ],
    metrics: ["Tooling UX", "Contextual AI", "Interface systems"],
    github: siteConfig.github,
    demo: siteConfig.portfolio,
  },
  {
    id: 6,
    slug: "document-intelligence-platform",
    title: "Document Intelligence Platform",
    category: "Document AI",
    overview:
      "A platform that extracts, structures, and analyzes information from business documents. Teams were manually reviewing hundreds of documents — I automated the boring parts.",
    problem:
      "Teams spent hours manually extracting data from invoices, contracts, and reports. Error-prone, slow, and nobody wanted to do it.",
    solution:
      "Built a document processing pipeline: ingest files, extract content with AI, structure the output, and present it in a review interface.",
    architecture:
      "FastAPI services handle document ingestion and extraction. Azure AI for OCR and document analysis. React frontend for review and validation workflows.",
    impact:
      "Reduced manual document review time significantly. The validation interface meant humans still checked the output, but they reviewed instead of typed.",
    challenges:
      "Documents came in every format imaginable — PDFs, scanned images, Word files. Handling edge cases without breaking the pipeline was harder than the AI part.",
    lessons:
      "Document AI only works when confidence scoring, validation workflows, and human review are built in from the start. The AI is the easy part.",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=document%20intelligence%20platform%20dashboard%2C%20premium%20dark%20enterprise%20ui%2C%20document%20analysis%20panels%2C%20soft%20blue%20lighting&image_size=landscape_16_9",
    techStack: ["Python", "Azure AI", "FastAPI", "React"],
    features: [
      "Document extraction",
      "Structured insights",
      "Review workflows",
      "Enterprise AI pipeline",
    ],
    metrics: ["Processing pipeline", "Validation UX", "AI extraction"],
    github: siteConfig.github,
    demo: siteConfig.portfolio,
  },
];

export const techStack = [
  {
    title: "Frontend",
    description: "Interfaces I build with React, Next.js, and Tailwind.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    title: "Backend",
    description: "APIs and services in NestJS, FastAPI, and Node.js.",
    items: ["NestJS", "Express", "FastAPI", "Node.js", "Python"],
  },
  {
    title: "Database",
    description: "SQL schemas, Prisma ORM, data I actually query.",
    items: ["PostgreSQL", "Prisma", "MySQL"],
  },
  {
    title: "AI",
    description: "Production patterns — RAG, agents, embeddings, orchestration.",
    items: ["OpenAI", "Azure OpenAI", "LangChain", "RAG", "Embeddings", "Agents"],
  },
  {
    title: "Cloud",
    description: "Azure, Docker, Linux — whatever it takes to ship.",
    items: ["Azure", "Docker", "Linux", "Nginx", "GitHub Actions"],
  },
];

export const engineeringHighlights = [
  {
    title: "Authentication & RBAC",
    description:
      "I've built auth systems from scratch — JWT flows, refresh tokens, role-based access that doesn't get in the way.",
  },
  {
    title: "REST APIs",
    description:
      "Clean contracts, predictable behavior, maintainable modules. I write APIs that frontend teams enjoy consuming.",
  },
  {
    title: "System Architecture",
    description:
      "Choosing the right boundaries, data flow, and deployment patterns before writing code. I've learned this the hard way.",
  },
  {
    title: "RAG & LLM Workflows",
    description:
      "Retrieval, prompting, orchestration. I build AI pipelines that work in production, not just in notebooks.",
  },
  {
    title: "Cloud Deployment",
    description:
      "Azure, CI/CD, environment management. I ship code to production and keep it running.",
  },
  {
    title: "Performance",
    description:
      "Frontend rendering, API latency, database queries. I chase the bottlenecks that actually matter.",
  },
];

export const githubSnapshot = {
  stats: [
    { label: "Repositories", value: "80" },
    { label: "Focus", value: "AI + Full Stack" },
    { label: "Signal", value: "I ship more than I talk" },
  ],
  languages: ["TypeScript", "Python", "JavaScript", "Go", "SQL", "CSS"],
  pinned: [
    {
      name: "food-recipe",
      description:
        "Recipe platform with AI recommendations, Go backend, and a Nuxt frontend. One of my more fun projects.",
      url: "https://github.com/telaynew12/food-recipe",
      stack: ["Go", "Hasura", "Nuxt 3", "PostgreSQL", "Docker"],
    },
    {
      name: "FinalProject",
      description:
        "Portfolio and full-stack experiments. Where I try things that don't always work — and sometimes they do.",
      url: "https://github.com/telaynew12/FinalProject",
      stack: ["HTML", "CSS", "JavaScript"],
    },
  ],
};

export const blogPosts = [
  {
    id: 1,
    title: "Building Enterprise CRM with NestJS",
    date: "2024-01-15",
    excerpt:
      "What I learned about NestJS module design, authorization patterns, and building CRM systems that don't fall apart as features accumulate.",
    slug: "enterprise-crm-nestjs",
    readingTime: "6 min read",
    tags: ["NestJS", "Architecture", "CRM"],
    takeaways: [
      "Module boundaries should hurt when you cross them.",
      "Auth logic belongs in guards, not scattered across controllers.",
      "Design your schema for the queries you'll actually run, not the objects you think you have.",
    ],
  },
  {
    id: 2,
    title: "Building AI Assistants",
    date: "2024-02-20",
    excerpt:
      "Practical lessons from building AI assistants that people actually trust and use in their daily work.",
    slug: "building-ai-assistants",
    readingTime: "5 min read",
    tags: ["AI", "Product", "LLMs"],
    takeaways: [
      "If users can't verify the answer, they won't trust it — always show sources.",
      "Prompting is 20% of the work. Retrieval and UX are the other 80%.",
      "Ship early, even if the AI is dumb at first. Users will tell you what matters.",
    ],
  },
  {
    id: 3,
    title: "Azure OpenAI Integration",
    date: "2024-03-10",
    excerpt:
      "The integration patterns, API design, and operational gotchas I hit while building Azure OpenAI features.",
    slug: "azure-openai-integration",
    readingTime: "7 min read",
    tags: ["Azure", "OpenAI", "Backend"],
    takeaways: [
      "Separate your orchestration layer from your UI layer. Always.",
      "Rate limits, content filters, and latency are production problems you will hit.",
      "Log everything. Debugging AI pipelines without logs is impossible.",
    ],
  },
  {
    id: 4,
    title: "RAG Systems",
    date: "2024-04-05",
    excerpt:
      "What I learned building retrieval pipelines for production — chunking, embeddings, evaluation, and the stuff that actually matters.",
    slug: "rag-systems",
    readingTime: "8 min read",
    tags: ["RAG", "Embeddings", "AI"],
    takeaways: [
      "Chunking strategy matters more than the embedding model you choose.",
      "Evaluate retrieval quality separately from generation quality.",
      "If your documents are messy, no model will fix that.",
    ],
  },
  {
    id: 5,
    title: "Authentication Best Practices",
    date: "2024-05-01",
    excerpt:
      "A practical look at auth in modern applications — JWT, refresh tokens, RBAC, and the mistakes I've made along the way.",
    slug: "authentication-best-practices",
    readingTime: "4 min read",
    tags: ["Security", "Auth", "APIs"],
    takeaways: [
      "Never roll your own crypto. Use proven libraries.",
      "Refresh tokens should be revocable, not just long-lived JWTs.",
      "RBAC is a product decision, not just a security one. Design it with the team that will use it.",
    ],
  },
];
