export const siteConfig = {
  name: "Telaynew Ambachew",
  shortName: "Telaynew",
  title: "AI Software Engineer",
  subtitle: "Full Stack Developer",
  description:
    "AI Software Engineer and Full Stack Developer building enterprise AI products, scalable backend systems, and production-grade platform experiences.",
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
  { value: "2+", label: "Years of production experience" },
  { value: "10+", label: "Shipped software projects" },
  { value: "5+", label: "AI systems deployed to Azure" },
  { value: "RAG", label: "LLM pipelines in production" },
];

export const heroHighlights = [
  "Enterprise AI",
  "Azure OpenAI",
  "FastAPI + NestJS",
  "RAG systems",
  "Cloud architecture",
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Telaynew has a rare combination of strong backend instincts and a deep understanding of AI systems. He delivered production-ready results faster than any junior engineer I've worked with.",
    name: "Biruk Tadesse",
    role: "Engineering Lead",
    company: "IE Network Solutions",
    initials: "BT",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    quote:
      "The AI copilot Telaynew built reduced our knowledge-lookup time by over 60%. He understood the business problem and engineered something that actually gets used every day.",
    name: "Selamawit Girma",
    role: "Product Manager",
    company: "IE Network Solutions",
    initials: "SG",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    quote:
      "Working with Telaynew on the CRM backend was a great experience. Clean code, solid architecture, and he proactively caught issues before they became problems.",
    name: "Dawit Haile",
    role: "Senior Software Engineer",
    company: "IE Network Solutions",
    initials: "DH",
    color: "from-emerald-500 to-teal-500",
  },
];

export const proofPoints = [
  {
    label: "Focus",
    title: "Enterprise AI applications",
    description:
      "Designing assistants, automation tools, and data products that solve operational problems.",
  },
  {
    label: "Strength",
    title: "Backend systems that scale",
    description:
      "Building APIs, workflows, and service layers that stay maintainable as complexity grows.",
  },
  {
    label: "Outcome",
    title: "Business impact through engineering",
    description:
      "Turning AI experiments into usable tools with reliable deployment, observability, and adoption.",
  },
];

export const aboutMetrics = [
  { value: "AI", label: "Assistants and copilots" },
  { value: "API", label: "Backend-first architecture" },
  { value: "Cloud", label: "Azure deployment workflows" },
  { value: "Data", label: "RAG and document pipelines" },
];

export const experiences = [
  {
    id: 1,
    role: "AI & Data Engineer",
    company: "IE Network Solutions",
    period: "2024 - Present",
    summary:
      "Built intelligent internal tooling and enterprise-facing AI systems with a strong focus on backend quality, deployment reliability, and business automation.",
    metrics: ["Azure OpenAI", "FastAPI", "RAG", "Workflow automation"],
    responsibilities: [
      "Built enterprise AI applications for internal productivity and customer workflows.",
      "Developed AI assistants with Azure OpenAI, prompt orchestration, and retrieval pipelines.",
      "Implemented CRM features and automation workflows connected to business operations.",
      "Designed and shipped REST APIs with Python and FastAPI for service integration.",
      "Deployed AI services to Azure with production-minded environment handling and scaling.",
      "Improved knowledge retrieval with RAG systems, embeddings, and document processing flows.",
    ],
  },
  {
    id: 2,
    role: "Software Developer",
    company: "IE Network Solutions",
    period: "2023 - 2024",
    summary:
      "Contributed to CRM platform engineering by building reliable backend features, authentication flows, and data models that support internal teams.",
    metrics: ["NestJS", "Authentication", "Database design", "Dashboards"],
    responsibilities: [
      "Built CRM backend capabilities using NestJS and REST-first service design.",
      "Implemented authentication flows, role-aware access patterns, and user management.",
      "Designed database structures optimized for reporting, workflows, and dashboard views.",
      "Collaborated on dashboard features that translate operational data into usable actions.",
      "Standardized API contracts and reduced friction between frontend and backend delivery.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    slug: "enterprise-crm",
    title: "Enterprise CRM",
    category: "Platform Engineering",
    overview:
      "A multi-module CRM designed for internal operations, customer management, and workflow visibility across business teams.",
    problem:
      "Teams needed a central system to track customers, activity, and operational workflows without relying on fragmented spreadsheets and disconnected tools.",
    solution:
      "I designed a modular CRM architecture with role-aware access, API-driven backend services, and reporting-oriented data structures.",
    architecture:
      "React frontend, NestJS API layer, PostgreSQL data model, and role-based modules for customer records, workflow states, and reporting.",
    impact:
      "Improved operational visibility, reduced manual coordination, and created a more scalable foundation for future business tooling.",
    challenges:
      "Balancing flexibility across multiple business workflows while keeping the data model consistent and maintainable.",
    lessons:
      "Early investment in authorization boundaries and reusable domain services pays off as enterprise complexity grows.",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20enterprise%20crm%20dashboard%2C%20dark%20ui%2C%20glassmorphism%20panels%2C%20blue%20accent%20lighting%2C%20high-end%20product%20design%2C%20realistic%20software%20interface&image_size=landscape_16_9",
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
    id: 2,
    slug: "ai-enterprise-copilot",
    title: "AI Enterprise Copilot",
    category: "Applied AI",
    overview:
      "An internal AI assistant that helps teams retrieve knowledge, automate responses, and speed up decision-making inside enterprise workflows.",
    problem:
      "Critical company knowledge was spread across documents and team memory, making it hard for employees to get accurate answers quickly.",
    solution:
      "I built a copilot backed by retrieval, prompt design, and Azure OpenAI so users could query internal knowledge through a guided interface.",
    architecture:
      "FastAPI orchestration layer, Azure OpenAI models, embeddings-based retrieval, and a frontend interface tuned for trustworthy responses.",
    impact:
      "Reduced repetitive knowledge lookups and made internal information faster to access across teams.",
    challenges:
      "Improving relevance, handling ambiguous prompts, and keeping retrieval quality high with evolving content.",
    lessons:
      "RAG quality depends as much on document structure and retrieval design as it does on the model itself.",
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
    id: 3,
    slug: "shopping-platform",
    title: "Shopping Platform",
    category: "Full Stack Commerce",
    overview:
      "A commerce platform focused on product browsing, checkout flows, and dependable backend integrations.",
    problem:
      "The product needed a clean customer experience while supporting scalable business logic on the backend.",
    solution:
      "I built a polished application architecture with strong separation between storefront UI, payment handling, and data services.",
    architecture:
      "Next.js storefront, TypeScript services, data persistence, and third-party payment integrations.",
    impact:
      "Created a foundation for reliable checkout experiences and future business growth.",
    challenges:
      "Keeping performance high while coordinating product data, cart state, and payment workflows.",
    lessons:
      "The best commerce UX is usually the result of disciplined backend and state architecture.",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=high-end%20ecommerce%20platform%20dashboard%2C%20premium%20dark%20product%20ui%2C%20modern%20cards%2C%20soft%20blue%20gradient%20lighting&image_size=landscape_16_9",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    features: [
      "Responsive storefront",
      "Checkout architecture",
      "Product management",
      "Payment integration",
    ],
    metrics: ["Fast UX", "Commerce flows", "Type-safe frontend"],
    github: siteConfig.github,
    demo: siteConfig.portfolio,
  },
  {
    id: 4,
    slug: "food-recipe-ai",
    title: "Food Recipe AI",
    category: "Product + AI",
    overview:
      "A recipe and meal planning experience combining content discovery with AI-assisted recommendations.",
    problem:
      "Users needed a more dynamic way to discover meals, adapt ingredients, and personalize recipe choices.",
    solution:
      "I blended application logic with AI-assisted recommendations to create a more engaging planning experience.",
    architecture:
      "Frontend application layer, API services, recommendation logic, and responsive browsing flows.",
    impact:
      "Made recipe exploration more interactive and useful for users with different preferences and constraints.",
    challenges:
      "Balancing creative AI-generated suggestions with practical usability and clear UX flows.",
    lessons:
      "AI features work best when they feel embedded in the product journey rather than added on top.",
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
      "An AI-assisted code editor concept focused on improving developer flow with contextual code generation and guidance.",
    problem:
      "Developers often switch between tools and lose context when they need code explanations, suggestions, or generation support.",
    solution:
      "I explored a workspace experience that brings AI suggestions into the editor while preserving control and visibility.",
    architecture:
      "Editor interface, AI completion workflow, prompt layer, and contextual code actions integrated into a focused UI.",
    impact:
      "Demonstrated how AI can be embedded into developer tooling without overwhelming the primary coding experience.",
    challenges:
      "Designing interactions that feel assistive instead of interruptive inside a productivity-heavy interface.",
    lessons:
      "Developer tooling must optimize for clarity, speed, and trust before adding more automation.",
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
      "A platform for extracting, structuring, and analyzing information from business documents using AI-driven workflows.",
    problem:
      "Teams needed a faster way to process large document sets and surface structured information for downstream decisions.",
    solution:
      "I built a document pipeline that combines ingestion, extraction, retrieval, and review-oriented interfaces.",
    architecture:
      "FastAPI services, AI extraction workflows, Azure-oriented infrastructure, and a frontend designed for review and validation.",
    impact:
      "Helped reduce manual review time and made document-heavy workflows more actionable.",
    challenges:
      "Maintaining accuracy, handling unstructured inputs, and designing reliable fallback paths.",
    lessons:
      "Document AI becomes valuable when confidence, validation, and workflow integration are treated as first-class UX concerns.",
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
    description: "Interfaces that feel fast, clean, and intentionally designed.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    title: "Backend",
    description: "Service layers and APIs optimized for reliability and maintainability.",
    items: ["NestJS", "Express", "FastAPI", "Node.js", "Python"],
  },
  {
    title: "Database",
    description: "Data models shaped for reporting, product workflows, and scale.",
    items: ["PostgreSQL", "Prisma", "MySQL"],
  },
  {
    title: "AI",
    description: "Production-minded AI patterns grounded in real product use cases.",
    items: ["OpenAI", "Azure OpenAI", "LangChain", "RAG", "Embeddings", "Agents"],
  },
  {
    title: "Cloud",
    description: "Deployment, automation, and environments built for real-world delivery.",
    items: ["Azure", "Docker", "Linux", "Nginx", "GitHub Actions"],
  },
];

export const engineeringHighlights = [
  {
    title: "Authentication & RBAC",
    description:
      "Designing permission systems that keep enterprise products secure without slowing teams down.",
  },
  {
    title: "REST APIs & Service Design",
    description:
      "Shipping backend services with clean contracts, maintainable modules, and predictable behavior.",
  },
  {
    title: "System Architecture",
    description:
      "Choosing boundaries, data flow, and infrastructure patterns that support long-term scalability.",
  },
  {
    title: "RAG & LLM Workflows",
    description:
      "Building retrieval, prompting, and orchestration layers that make AI useful in production contexts.",
  },
  {
    title: "Cloud Deployment",
    description:
      "Deploying services to Azure with practical workflows for environments, updates, and reliability.",
  },
  {
    title: "Performance Optimization",
    description:
      "Improving responsiveness across frontend rendering, API latency, and data-heavy workflows.",
  },
];

export const githubSnapshot = {
  stats: [
    { label: "Repositories", value: "16" },
    { label: "Pinned focus", value: "AI + Full Stack" },
    { label: "Primary signal", value: "Production-minded builds" },
  ],
  languages: ["TypeScript", "Python", "JavaScript", "Go", "SQL", "CSS"],
  pinned: [
    {
      name: "food-recipe",
      description:
        "Recipe platform with backend integrations, responsive UI, and production-focused architecture.",
      url: "https://github.com/telaynew12/food-recipe",
      stack: ["Go", "Hasura", "Nuxt 3", "PostgreSQL", "Docker"],
    },
    {
      name: "FinalProject",
      description:
        "Portfolio and product experimentation repo that reflects frontend polish and full-stack iteration.",
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
      "How I think about module boundaries, authorization, and reporting workflows when building CRM systems.",
    slug: "enterprise-crm-nestjs",
    readingTime: "6 min read",
    tags: ["NestJS", "Architecture", "CRM"],
    takeaways: [
      "Design domain boundaries early.",
      "Keep auth logic explicit.",
      "Model data for reporting, not just CRUD.",
    ],
  },
  {
    id: 2,
    title: "Building AI Assistants",
    date: "2024-02-20",
    excerpt:
      "Practical lessons from turning AI assistance into something users can trust inside real workflows.",
    slug: "building-ai-assistants",
    readingTime: "5 min read",
    tags: ["AI", "Product", "LLMs"],
    takeaways: [
      "Trust matters more than novelty.",
      "Prompting is only one layer.",
      "UX determines whether AI gets adopted.",
    ],
  },
  {
    id: 3,
    title: "Azure OpenAI Integration",
    date: "2024-03-10",
    excerpt:
      "The integration patterns, operational concerns, and API design decisions behind Azure OpenAI features.",
    slug: "azure-openai-integration",
    readingTime: "7 min read",
    tags: ["Azure", "OpenAI", "Backend"],
    takeaways: [
      "Separate orchestration from UI.",
      "Guardrails belong in the backend.",
      "Deployment discipline matters.",
    ],
  },
  {
    id: 4,
    title: "RAG Systems",
    date: "2024-04-05",
    excerpt:
      "What makes a retrieval pipeline useful in production, from chunking quality to answer grounding.",
    slug: "rag-systems",
    readingTime: "8 min read",
    tags: ["RAG", "Embeddings", "AI"],
    takeaways: [
      "Retrieval quality drives trust.",
      "Documents need structure.",
      "Evaluation should be ongoing.",
    ],
  },
  {
    id: 5,
    title: "Authentication Best Practices",
    date: "2024-05-01",
    excerpt:
      "A backend-oriented look at authentication, authorization, and access boundaries in modern applications.",
    slug: "authentication-best-practices",
    readingTime: "4 min read",
    tags: ["Security", "Auth", "APIs"],
    takeaways: [
      "Keep auth explicit.",
      "Treat RBAC as product design.",
      "Secure defaults reduce mistakes.",
    ],
  },
];
