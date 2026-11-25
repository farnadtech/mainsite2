export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  side: 'left' | 'right';
  highlights: string[];
  startingPrice: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  image: string;
  summary: string;
  deliverables: string[];
  metrics: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  featured: boolean;
  iconType: 'mobile' | 'seo' | 'web';
  features: string[];
  ctaLabel: string;
  serviceId: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  iconType: 'search' | 'check' | 'code' | 'clipboard' | 'message';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  content: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  avatar: string;
  experience: string;
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconType: 'shield' | 'zap' | 'code' | 'target';
}

export interface CompanyMilestone {
  year: string;
  title: string;
  description: string;
  highlight: string;
}

export interface ContactFormInput {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

export interface ConsultationFormInput {
  fullName: string;
  contact: string;
  service: string;
  notes: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<string, string>>;
}

export interface ServiceDetailExtended {
  id: string;
  title: string;
  startingPrice: string;
  badge: string;
  headline: string;
  subheadline: string;
  heroImage: string;
  overview: string;
  features: Array<{
    title: string;
    description: string;
    iconType: 'code' | 'zap' | 'shield' | 'layers' | 'sparkles' | 'target';
  }>;
  process: Array<{
    step: string;
    title: string;
    duration: string;
    description: string;
  }>;
  packages: Array<{
    id: string;
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
  }>;
  faqs: Array<{
    q: string;
    a: string;
  }>;
}

export const TECH_STACK = [
  { name: 'React', image: '/images/tech-react.png' },
  { name: 'Laravel', image: '/images/tech-laravel.png' },
  { name: 'Node.js', image: '/images/tech-js.png' },
  { name: 'Python', image: '/images/tech-python.png' },
  { name: 'Flutter', image: '/images/tech-flutter.png' },
  { name: 'WordPress', image: '/images/tech-wp.png' },
];

export const ECOSYSTEM_SERVICES: ServiceItem[] = [
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Design and development of custom Android and iOS mobile applications',
    image: '/assets/aistudio/ChatGPT_Image_Nov_25__2026__10_33_31_AM-4_21c87d17.png',
    side: 'left',
    startingPrice: 'From $2,500',
    highlights: [
      'Cross-platform Flutter & React Native or native Swift/Kotlin',
      'Offline-ready local caching & push notifications',
      'App Store & Google Play release management',
    ],
  },
  {
    id: 'telegram-bot',
    title: 'Telegram Bots',
    description: 'Building smart and practical bots on Telegram',
    image: '/assets/aistudio/ChatGPT_Image_Nov_25__2026__10_33_41_AM-5_c73a4ed2.png',
    side: 'left',
    startingPrice: 'From $490',
    highlights: [
      'Automated customer support, ordering & payment flows',
      'Telegram Mini Apps (WebApps) integrated with your backend',
      'CRM, ERP & Webhook real-time synchronization',
    ],
  },
  {
    id: 'trading-bots',
    title: 'Trading & Expert Bots',
    description: 'Designing automated trading bots and professional expert advisors',
    image: '/assets/aistudio/ChatGPT_Image_Nov_25__2026__10_33_42_AM-6_c3e03239.png',
    side: 'left',
    startingPrice: 'From $890',
    highlights: [
      'Algorithmic trading bots for crypto, forex & exchange APIs',
      'MetaTrader (MQL4/MQL5) & TradingView webhook expert advisors',
      'Backtesting engines, risk guardrails & real-time telemetry alerts',
    ],
  },
  {
    id: 'website-design',
    title: 'Website Design',
    description: 'Designing e-commerce, corporate, and personal websites',
    image: '/assets/aistudio/ChatGPT_Image_Nov_25__2026__10_33_27_AM-2_47b8f00b.png',
    side: 'right',
    startingPrice: 'From $990',
    highlights: [
      'Custom responsive UI/UX tailored to your brand identity',
      'Next.js, Laravel, or high-speed WordPress engineering',
      'Core Web Vitals optimization and hardened security',
    ],
  },
  {
    id: 'seo',
    title: 'SEO (Search Engine Optimization)',
    description: 'Boosting rankings, targeted traffic, and business growth',
    image: '/assets/aistudio/ChatGPT_Image_Nov_25__2026__10_33_29_AM-3_5ed924a8.png',
    side: 'right',
    startingPrice: 'From $290 / month',
    highlights: [
      'Full technical audit, schema markup & crawl budget tuning',
      'High-intent keyword strategy & content roadmap',
      'Transparent monthly ranking & organic conversion reports',
    ],
  },
  {
    id: 'ai-model',
    title: 'AI Models & Smart Bots',
    description: 'AI-driven design, automation, and intelligent business solutions',
    image: '/assets/aistudio/ChatGPT_Image_Nov_25__2026__10_33_44_AM-7_ad1ba839.png',
    side: 'right',
    startingPrice: 'From $1,800',
    highlights: [
      'Custom RAG knowledge assistants & workflow automation',
      'Intelligent document parsing & lead qualification agents',
      'Secure API orchestration with predictable cost controls',
    ],
  },
];

export const CLIENT_PROJECTS: ProjectItem[] = [
  {
    id: 'harajino-app',
    name: 'Harajino App',
    category: 'E-commerce App',
    image: '/images/hd/proj-1.jpg',
    summary:
      'Native-feel mobile commerce application enabling instant flash deals, real-time order tracking, and biometric checkout for thousands of daily shoppers.',
    deliverables: ['iOS & Android Flutter App', 'Push Notification Engine', 'Payment Gateway Sync'],
    metrics: '4.8★ App Rating · 85K+ Downloads',
  },
  {
    id: 'allen-financial',
    name: 'Allen Financial Group',
    category: 'Corporate Website',
    image: '/images/hd/proj-2.jpg',
    summary:
      'High-trust wealth advisory portal crafted with refined dark-gold editorial aesthetics, interactive portfolio calculators, and encrypted client onboarding.',
    deliverables: ['Bespoke UI/UX Design', 'Advisory CMS Portal', 'Technical SEO Foundation'],
    metrics: '+142% Qualified Consultation Requests',
  },
  {
    id: 'niyazno',
    name: 'Niyazno',
    category: 'Service Platform',
    image: '/images/hd/proj-3.jpg',
    summary:
      'Multi-category classifieds and local service marketplace engineered for fast faceted search, verified provider badges, and real-time messaging.',
    deliverables: ['Full-Stack Web Platform', 'Geo-Search Indexing', 'Vendor Dashboard'],
    metrics: '120K+ Monthly Active Listings',
  },
  {
    id: 'harajio-script',
    name: 'Harajio Script',
    category: 'E-commerce Script',
    image: '/images/hd/proj-4.jpg',
    summary:
      'Turnkey multi-vendor e-commerce and auction engine built for rapid deployment, modular plugin extensions, and high-concurrency checkout reliability.',
    deliverables: ['Multi-Vendor Core Engine', 'Admin & Seller Analytics', 'REST & Webhook APIs'],
    metrics: '350+ Active Store Deployments',
  },
  {
    id: 'idg',
    name: 'I.D.G',
    category: 'Company Website',
    image: '/images/hd/proj-5.jpg',
    summary:
      'Modern corporate showcase for I.D.G highlighting industrial design capabilities, project milestones, and streamlined B2B RFP submissions.',
    deliverables: ['Custom Brand Website', 'Interactive Project Gallery', 'Multilingual Architecture'],
    metrics: '0.7s First Contentful Paint',
  },
  {
    id: 'autovitrin',
    name: 'Autovitrin',
    category: 'Car Listing Platform',
    image: '/images/hd/proj-6.jpg',
    summary:
      'Automotive marketplace featuring 360-degree vehicle showcases, instant financing estimators, and verified dealership inventory feeds.',
    deliverables: ['Dealer Inventory Sync', 'Advanced Spec Filtering', 'Mobile-First Showroom UI'],
    metrics: '3.4x Higher Dealer Lead Conversion',
  },
  {
    id: 'harajino-store',
    name: 'Harajino',
    category: 'Online Store',
    image: '/images/hd/proj-7.jpg',
    summary:
      'High-conversion online retail storefront with live flash-sale countdowns, smart product recommendations, and unified warehouse inventory.',
    deliverables: ['Custom Storefront Theme', 'ERP Inventory Bridge', 'SEO & Schema Optimization'],
    metrics: '+210% Organic Search Traffic',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-mobile',
    title: 'Mobile App Development',
    price: 'From $2,500',
    featured: false,
    iconType: 'mobile',
    features: [
      'Custom Android & iOS app',
      'Modern and user-friendly design',
      'Backend and API integration',
      'Testing and publication',
      '12 months of support and updates',
    ],
    ctaLabel: 'Order a Mobile App',
    serviceId: 'Mobile App Development',
  },
  {
    id: 'plan-seo',
    title: 'SEO (Search Engine Optimization)',
    price: 'From $290 / month',
    featured: true,
    iconType: 'seo',
    features: [
      'Technical SEO and site optimization',
      'Keyword research and strategy',
      'Content optimization and creation',
      'Monthly performance reporting',
      'Sustainable, long-term ranking growth',
    ],
    ctaLabel: 'Order SEO Service',
    serviceId: 'SEO (Search Engine Optimization)',
  },
  {
    id: 'plan-web',
    title: 'Website Design & Development',
    price: 'From $990',
    featured: false,
    iconType: 'web',
    features: [
      'Custom and responsive website design',
      'WordPress or custom development',
      'Speed and security optimization',
      'SEO-friendly structure',
      '12 months of support and updates',
    ],
    ctaLabel: 'Order a Website',
    serviceId: 'Website Design & Development',
  },
];

export const WORK_PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step-1',
    title: 'Consultation & Needs Assessment',
    description: 'Understanding your goals and business requirements',
    iconType: 'search',
  },
  {
    id: 'step-2',
    title: 'Planning & Proposal',
    description: 'Providing the best solution and a clear implementation plan',
    iconType: 'check',
  },
  {
    id: 'step-3',
    title: 'Design & Development',
    description: 'UI/UX design and development based on your business needs',
    iconType: 'code',
  },
  {
    id: 'step-4',
    title: 'Testing & Quality Assurance',
    description: 'Comprehensive testing, bug fixing, and performance improvement',
    iconType: 'clipboard',
  },
  {
    id: 'step-5',
    title: 'Delivery & Support',
    description: 'Final delivery, training, and ongoing technical support',
    iconType: 'message',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'mehdi-karimi',
    quote:
      '"Farnad Tech helped us turn our idea into a professional and scalable platform. Their team is expert, responsive, and truly committed to quality. We\'re very satisfied with the results."',
    author: 'Dr. Mehdi Karimi',
    role: 'CEO, I.D.G',
    avatar: '/images/hd/testimonial-ceo.jpg',
  },
  {
    id: 'sara-ahmadi',
    quote:
      '"Within four months of launching our redesigned storefront and technical SEO campaign with Farnad Tech, our organic traffic more than doubled and checkout speed improved dramatically."',
    author: 'Sara Ahmadi',
    role: 'Founder, Harajino',
    avatar: '/images/hd/testimonial-ceo.jpg',
  },
  {
    id: 'reza-moradi',
    quote:
      '"From Telegram bot automation to our cross-platform mobile app, Farnad Tech delivered every milestone on schedule with clean architecture and dependable post-launch support."',
    author: 'Reza Moradi',
    role: 'Director, Autovitrin',
    avatar: '/images/hd/testimonial-ceo.jpg',
  },
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'ai-business-growth',
    title: 'The Role of Artificial Intelligence in Business Growth',
    date: 'Oct 22, 2025',
    readTime: '5 min read',
    category: 'AI & Automation',
    image: '/images/hd/blog-1.jpg',
    excerpt:
      'How practical AI integrations—from intelligent customer routing to automated knowledge workflows—create measurable ROI without over-engineering.',
    content: [
      'Modern businesses no longer need multi-year research budgets to benefit from artificial intelligence. Focused AI integrations embedded directly into customer support, sales qualification, and internal operations deliver immediate time savings.',
      'At Farnad Tech, we start every AI engagement by mapping repetitive bottlenecks across your web, mobile, and messaging channels—connecting reliable language models to your existing databases with strict validation and cost guardrails.',
      'Companies that pair clean software architecture with human-in-the-loop AI workflows consistently outpace competitors in response speed and customer retention.',
    ],
  },
  {
    id: 'seo-guide-2025',
    title: 'A Complete SEO Guide for 2025',
    date: 'Oct 14, 2025',
    readTime: '7 min read',
    category: 'Search Strategy',
    image: '/images/hd/blog-2.jpg',
    excerpt:
      'Core technical foundations, structured schema, and search-intent content systems that drive compounding organic visibility.',
    content: [
      'Sustainable search rankings start with clean technical architecture: fast server response times, zero crawl dead-ends, crisp semantic headings, and accurate structured data.',
      'Beyond technical hygiene, winning organic growth requires organizing content around real buyer intent—connecting informative guides directly to high-clarity service and product pages.',
      'Our monthly SEO engineering process pairs continuous Core Web Vitals monitoring with data-backed editorial updates to steadily compound qualified traffic.',
    ],
  },
  {
    id: 'professional-website-design',
    title: 'What Should a Professional Website Design Include?',
    date: 'Oct 6, 2025',
    readTime: '4 min read',
    category: 'Web Engineering',
    image: '/images/hd/blog-3.jpg',
    excerpt:
      'The essential pillars separating high-converting digital platforms from generic templates: clarity, speed, trust proof, and responsive craft.',
    content: [
      'Visitors form an impression of your credibility within seconds. A professional website combines unmistakable value messaging above the fold with disciplined visual hierarchy and frictionless mobile usability.',
      'Equally important are the elements behind the scenes: accessible semantics, optimized media assets, hardened security headers, and clear conversion paths that guide prospects naturally toward contacting your team.',
      'Every platform built by Farnad Tech is engineered to look authoritative on day one and scale effortlessly as your business expands.',
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-timeline',
    question: 'How long does it take to design and launch a custom website or mobile app?',
    answer:
      'Most bespoke corporate websites and e-commerce platforms launch within 3 to 6 weeks depending on custom integrations. Cross-platform iOS and Android apps built with Flutter or React Native typically take 6 to 10 weeks from discovery and UI prototyping through App Store and Google Play release.',
  },
  {
    id: 'faq-tech-ownership',
    question: 'Which technologies do you build with, and do we own the full source code?',
    answer:
      'We engineer solutions with Next.js, React, Laravel, Node.js, Python, Flutter, and optimized WordPress depending on your scalability goals. Upon final delivery, your business receives 100% ownership of the source code, repositories, design assets, and deployment infrastructure with zero vendor lock-in.',
  },
  {
    id: 'faq-seo-results',
    question: 'How do your monthly SEO packages work, and when do rankings start improving?',
    answer:
      'Every SEO engagement starts with a full technical crawl audit, Core Web Vitals tuning, and structured schema implementation, followed by ongoing search-intent content optimization and monthly performance reporting. Most clients see measurable ranking and organic traffic lifts within 60 to 90 days.',
  },
  {
    id: 'faq-bots-trading',
    question: 'Can Farnad Tech develop custom Telegram bots, Mini Apps, or automated trading bots?',
    answer:
      'Yes. We build interactive Telegram bots and Mini Apps integrated directly with your CRM, ERP, and payment gateways, as well as algorithmic trading bots and MetaTrader (MQL4/MQL5) or TradingView webhook expert advisors with strict backtesting and risk management guardrails.',
  },
  {
    id: 'faq-ai-integration',
    question: 'How can AI models and smart automation be tailored for our existing workflows?',
    answer:
      'We embed practical AI capabilities directly into your business channels—such as RAG knowledge assistants trained on your internal documentation, automated lead qualification, smart customer support routing, and document parsing pipelines with predictable API cost controls.',
  },
  {
    id: 'faq-support',
    question: 'What kind of post-launch support, security monitoring, and updates are included?',
    answer:
      'Website and mobile app packages include 12 months of dedicated technical support, security patching, uptime monitoring, and framework updates. Our team stays available for feature expansion and performance tuning as your customer traffic grows.',
  },
];

export function cycleIndex(current: number, delta: number, total: number): number {
  if (total <= 0) return 0;
  return ((current + delta) % total + total) % total;
}

export function getRelativeProjectOffset(index: number, activeIndex: number, total: number): number {
  if (total <= 0) return 0;
  let diff = index - activeIndex;
  const half = Math.floor(total / 2);
  if (diff > half) diff -= total;
  if (diff < -half) diff += total;
  return diff;
}

export function getContinuousRollerOffset(index: number, position: number, total: number): number {
  if (total <= 0) return 0;
  let diff = (((index - position) % total) + total) % total;
  if (diff > total / 2) diff -= total;
  return diff;
}

export function validateConsultationForm(input: ConsultationFormInput): ValidationResult {
  const errors: Partial<Record<keyof ConsultationFormInput, string>> = {};
  const trimmedName = input.fullName.trim();
  const trimmedContact = input.contact.trim();

  if (trimmedName.length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedContact);
  const digitsOnly = trimmedContact.replace(/\D/g, '');
  const isPhone = digitsOnly.length >= 7 && digitsOnly.length <= 15;

  if (!trimmedContact) {
    errors.contact = 'Please enter an email address or phone number.';
  } else if (!isEmail && !isPhone) {
    errors.contact = 'Enter a valid email address or phone number.';
  }

  if (!input.service.trim()) {
    errors.service = 'Please select a service.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'arash-farhad',
    name: 'Arash Farhad',
    role: 'Founder & Managing Director',
    specialty: 'Digital Product Strategy & Systems Architecture',
    bio: 'Over 12 years leading enterprise software delivery, high-performance web engineering, and digital transformation for Middle Eastern & international enterprises.',
    avatar: '/images/hd/testimonial-ceo.jpg',
    experience: '12+ Years',
  },
  {
    id: 'dr-mehdi-karimi',
    name: 'Dr. Mehdi Karimi',
    role: 'Strategic Technical Advisor',
    specialty: 'Enterprise Scaling & Platform Reliability',
    bio: 'Former CEO at I.D.G and enterprise technology consultant advising on distributed systems, data privacy, and multi-tenant cloud architectures.',
    avatar: '/images/testimonial-mehdi.png',
    experience: '15+ Years',
  },
  {
    id: 'parisa-rad',
    name: 'Parisa Rad',
    role: 'Head of UI/UX & Design Systems',
    specialty: 'Human-Centered UI/UX & Conversion Engineering',
    bio: 'Specialist in modern design systems, glassmorphic interfaces, accessibility standards, and friction-free user journeys across mobile and web.',
    avatar: '/images/hd/testimonial-ceo.jpg',
    experience: '8+ Years',
  },
  {
    id: 'alireza-hosseini',
    name: 'Alireza Hosseini',
    role: 'Lead Full-Stack Architect',
    specialty: 'Next.js, Node.js, Laravel & High-Concurrency APIs',
    bio: 'Architecting rock-solid backend services, multi-tenant databases, micro-frontends, and automated CI/CD pipelines with sub-second response times.',
    avatar: '/images/hd/testimonial-ceo.jpg',
    experience: '9+ Years',
  },
  {
    id: 'nima-rahimi',
    name: 'Nima Rahimi',
    role: 'Lead AI & Algorithmic Systems Engineer',
    specialty: 'RAG Knowledge Pipelines, Telegram Mini Apps & Trading Bots',
    bio: 'Specializing in production LLM integrations, automated MQL/Python trading bots, risk control guardrails, and real-time event streaming.',
    avatar: '/images/hd/testimonial-ceo.jpg',
    experience: '7+ Years',
  },
];

export const COMPANY_VALUES: CompanyValue[] = [
  {
    id: 'engineering-rigor',
    title: 'Engineering Rigor & Quality',
    description:
      'We write clean, strictly-typed, and maintainable code built to scale for years. No hasty shortcuts or unverified technical debt.',
    badge: 'Code Integrity',
    iconType: 'code',
  },
  {
    id: 'full-ownership',
    title: '100% Client Code Ownership',
    description:
      'You own all repository commits, infrastructure scripts, and design artifacts. Zero vendor lock-in or proprietary traps.',
    badge: 'Zero Lock-in',
    iconType: 'shield',
  },
  {
    id: 'measurable-roi',
    title: 'Measurable Business ROI',
    description:
      'We design for business impact—higher conversion rates, lightning-fast load times, and automated operational efficiency.',
    badge: 'Outcomes First',
    iconType: 'target',
  },
  {
    id: 'enduring-support',
    title: '12 Months Dedicated Support',
    description:
      'Every major deployment comes backed by a year of hands-on monitoring, security hardening, and framework maintenance.',
    badge: 'Guaranteed Reliability',
    iconType: 'zap',
  },
];

export const COMPANY_MILESTONES: CompanyMilestone[] = [
  {
    year: '2013',
    title: 'The Foundation',
    description:
      'Farnad Tech started in Tehran with a focused group of software craftsmen dedicated to building bespoke, high-performance web systems.',
    highlight: 'First 20 Enterprise Clients',
  },
  {
    year: '2016',
    title: 'Scalable E-Commerce & Systems',
    description:
      'Engineered turnkey multi-vendor commerce engines and API-driven architectures serving hundreds of concurrent transactions.',
    highlight: '100+ Live Platforms',
  },
  {
    year: '2019',
    title: 'Mobile & Cross-Platform Expansion',
    description:
      'Expanded into native iOS/Android and Flutter development, creating intuitive mobile commerce and service apps with offline capabilities.',
    highlight: 'Top Rated App Store Releases',
  },
  {
    year: '2022',
    title: 'Fintech & Telegram Ecosystems',
    description:
      'Pioneered automated algorithmic trading bots, MetaTrader expert advisors, and full Telegram Mini App systems with CRM hooks.',
    highlight: 'High-Frequency Automation',
  },
  {
    year: '2024–2026',
    title: 'Intelligent AI Ecosystems & Cloud Scale',
    description:
      'Integrating practical RAG AI assistants, automated data extraction agents, and cloud-native digital ecosystems with continuous support.',
    highlight: '350+ Global Deployments',
  },
];

export function validateContactPageForm(input: ContactFormInput): ValidationResult {
  const errors: Partial<Record<string, string>> = {};
  const trimmedName = input.fullName.trim();
  const trimmedEmail = input.email.trim();
  const trimmedPhone = input.phone.trim();
  const trimmedMessage = input.message.trim();

  if (trimmedName.length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
  if (!trimmedEmail) {
    errors.email = 'Please enter your email address.';
  } else if (!isEmail) {
    errors.email = 'Please enter a valid email address.';
  }

  const digitsOnly = trimmedPhone.replace(/\D/g, '');
  const isPhone = digitsOnly.length >= 7 && digitsOnly.length <= 15;
  if (!trimmedPhone) {
    errors.phone = 'Please enter your phone or mobile number.';
  } else if (!isPhone) {
    errors.phone = 'Please enter a valid phone number (at least 7 digits).';
  }

  if (!input.service.trim()) {
    errors.service = 'Please select a service category.';
  }

  if (trimmedMessage.length < 10) {
    errors.message = 'Please provide a brief description of your project (at least 10 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function getServiceExtendedData(serviceId: string): ServiceDetailExtended {
  const baseService =
    ECOSYSTEM_SERVICES.find((s) => s.id === serviceId) ||
    ECOSYSTEM_SERVICES.find((s) => s.id === 'website-design') ||
    ECOSYSTEM_SERVICES[0];

  if (serviceId === 'website-design' || !serviceId) {
    return {
      id: 'website-design',
      title: 'Website Design & Development',
      startingPrice: 'From $990',
      badge: 'Flagship Engineering Service',
      headline: 'High-Performance Website Design & Full-Stack Development',
      subheadline:
        'We engineer bespoke, conversion-driven digital platforms built on Next.js, React, and Laravel—optimized for sub-second speeds, superior SEO rankings, and complete code ownership.',
      heroImage: '/assets/aistudio/ChatGPT_Image_Nov_25__2026__10_33_27_AM-2_47b8f00b.png',
      overview:
        'Your website is the single most critical asset in your digital ecosystem. At Farnad Tech, we build custom digital platforms from the ground up—combining conversion-focused UI/UX design with clean, high-concurrency code. Every website includes responsive mobile layouts, complete source code handover, and 12 months of dedicated technical maintenance.',
      features: [
        {
          title: 'Custom UI/UX & Brand Identity',
          description:
            'Pixel-perfect Figma designs customized specifically for your brand aesthetics, target audience, and frictionless customer journey.',
          iconType: 'sparkles',
        },
        {
          title: 'Next.js 15 SSR & Edge Performance',
          description:
            'Server-side rendering, sub-second First Contentful Paint (<0.7s), and 95+ Google PageSpeed scores across mobile and desktop.',
          iconType: 'zap',
        },
        {
          title: 'Technical SEO & Structured Schema',
          description:
            'Deep search-intent markup, JSON-LD rich snippets, OpenGraph cards, XML sitemaps, and canonical URL structure for maximum organic visibility.',
          iconType: 'target',
        },
        {
          title: 'Scalable CMS & Admin Dashboards',
          description:
            'Intuitive, secure administrative panels enabling your team to manage content, products, orders, and customer leads effortlessly.',
          iconType: 'layers',
        },
        {
          title: 'Hardened Security & Data Integrity',
          description:
            'SSL/TLS encryption, automated backups, DDoS mitigation, and sanitization guardrails to protect your customer data 24/7.',
          iconType: 'shield',
        },
        {
          title: '100% Code & Database Ownership',
          description:
            'Complete Git repository handover, deployment scripts, database schemas, and documentation with zero vendor lock-in.',
          iconType: 'code',
        },
      ],
      process: [
        {
          step: '01',
          title: 'Discovery & Architecture Spec',
          duration: 'Days 1 – 4',
          description:
            'Analyzing your business model, customer workflows, technical requirements, and competitor landscape to produce a detailed architecture roadmap.',
        },
        {
          step: '02',
          title: 'Interactive UI/UX Prototyping',
          duration: 'Days 5 – 10',
          description:
            'Crafting high-fidelity interactive wireframes and visual design screens in Figma with collaborative milestone review rounds.',
        },
        {
          step: '03',
          title: 'Full-Stack Development',
          duration: 'Days 11 – 22',
          description:
            'Writing clean, strictly-typed Next.js or Laravel code, integrating APIs, payment gateways, and responsive mobile layouts.',
        },
        {
          step: '04',
          title: 'Quality Assurance & Speed Tuning',
          duration: 'Days 23 – 26',
          description:
            'Cross-browser testing, accessibility compliance, Core Web Vitals optimization, and security vulnerability scans.',
        },
        {
          step: '05',
          title: 'Production Launch & 12M Support',
          duration: 'Day 28+',
          description:
            'Zero-downtime deployment, DNS setup, team training walkthrough, and commencement of your 12-month technical warranty.',
        },
      ],
      packages: [
        {
          id: 'pkg-corporate',
          name: 'Corporate Brand Platform',
          price: '$990',
          description:
            'Ideal for established businesses and professional firms needing a credible, modern web presence that converts visitors into leads.',
          features: [
            'Up to 8 bespoke responsive pages',
            'Next.js 15 or optimized WordPress core',
            'Full technical SEO & schema setup',
            'Speed tuned for 90+ PageSpeed',
            'Contact & consultation lead forms',
            '12 months security updates & support',
            'Full source code & Git repo transfer',
          ],
        },
        {
          id: 'pkg-ecommerce',
          name: 'High-Volume Online Store',
          price: '$1,850',
          description:
            'Engineered for digital retailers requiring high-speed checkout, inventory sync, and multi-gateway payment processing.',
          features: [
            'Unlimited product catalog architecture',
            'Instant search & faceted product filtering',
            'Direct Iranian & international payment gateways',
            'Order tracking & automated SMS/Email alerts',
            'ERP / Accounting inventory sync hook',
            'Abandoned cart recovery workflows',
            '12 months high-priority support SLA',
          ],
          popular: true,
        },
        {
          id: 'pkg-enterprise',
          name: 'Custom Web Application / Portal',
          price: '$3,200+',
          description:
            'Tailor-made portals, SaaS platforms, or booking marketplaces with custom backend logic, role-based access, and API integrations.',
          features: [
            'Custom Next.js & Laravel / Node.js architecture',
            'Role-based access control (RBAC)',
            'Custom database modeling & indexing',
            'Third-party CRM, ERP & Webhook pipelines',
            'Staging & production automated CI/CD',
            'Dedicated technical project manager',
            '12 months premium 24/7 emergency support',
          ],
        },
      ],
      faqs: [
        {
          q: 'How long does it take to design and launch our website?',
          a: 'A standard corporate platform typically launches within 3 to 4 weeks. Complex e-commerce stores and custom portals with extensive integrations take 4 to 8 weeks with clearly defined weekly milestones.',
        },
        {
          q: 'Which technologies and frameworks will you use?',
          a: 'We build with modern frameworks like Next.js 15 (React), TypeScript, Tailwind CSS, Laravel, Node.js, and high-performance headless architectures based on your scalability needs.',
        },
        {
          q: 'Will our website be mobile-responsive and optimized for search engines?',
          a: 'Every platform we engineer is mobile-first, fluid across all screen sizes, and includes comprehensive technical SEO foundations (schema.org markup, semantic headings, OpenGraph cards, and sub-second load times).',
        },
        {
          q: 'Can you integrate payment gateways, SMS panels, and internal CRMs?',
          a: 'Yes. We integrate banking gateways (Saman, Mellat, Zarinpal, Stripe, crypto), SMS notification providers (Kavenegar, Faraz), and CRM/ERP systems via secure REST and Webhook APIs.',
        },
        {
          q: 'Do we own 100% of the source code and database?',
          a: 'Yes, unconditionally. Upon final delivery, all Git repositories, Figma design assets, databases, and deployment keys are transferred to your organization with zero vendor lock-in.',
        },
      ],
    };
  }

  return {
    id: baseService.id,
    title: baseService.title,
    startingPrice: baseService.startingPrice,
    badge: 'Specialized Digital Solution',
    headline: `Professional ${baseService.title}`,
    subheadline: baseService.description,
    heroImage: baseService.image,
    overview: `${baseService.description}. Engineered with rigorous quality standards, clean architectures, and dedicated 12-month post-launch support by Farnad Tech.`,
    features: baseService.highlights.map((h, i) => ({
      title: h.split('&')[0].trim(),
      description: h,
      iconType: i % 2 === 0 ? 'zap' : 'shield',
    })),
    process: [
      {
        step: '01',
        title: 'Requirements & Scope Analysis',
        duration: 'Week 1',
        description: 'Deep dive into your business logic, target milestones, and technical specifications.',
      },
      {
        step: '02',
        title: 'Architecture & System Design',
        duration: 'Week 2',
        description: 'Creating interface prototypes, data schemas, and API integration contracts.',
      },
      {
        step: '03',
        title: 'Core Engineering & Implementation',
        duration: 'Weeks 3 – 5',
        description: 'Developing rock-solid code with automated unit tests and continuous integration.',
      },
      {
        step: '04',
        title: 'Testing & Production Deployment',
        duration: 'Week 6',
        description: 'Rigorous security audits, user acceptance testing, and seamless go-live.',
      },
    ],
    packages: [
      {
        id: `pkg-${baseService.id}-standard`,
        name: 'Standard Package',
        price: baseService.startingPrice,
        description: 'Turnkey implementation engineered for high reliability and rapid launch.',
        features: [
          ...baseService.highlights,
          '12 Months technical support',
          '100% Code and asset ownership',
        ],
        popular: true,
      },
    ],
    faqs: [
      {
        q: `What is included with ${baseService.title}?`,
        a: `Our ${baseService.title} service includes end-to-end design, implementation, QA testing, production deployment, and 12 months of warranty and maintenance.`,
      },
      {
        q: 'Do we receive full ownership of the source code?',
        a: 'Yes. You receive 100% ownership of all source code, deployment scripts, and configuration assets upon delivery.',
      },
    ],
  };
}
