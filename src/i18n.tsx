import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

type Lang = 'en' | 'ar';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // ──── Navbar ────
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'nav.login': 'Contact Us',
    'nav.brand': 'Archi Platform',
    'nav.manage': 'Capabilities',
    'nav.overview': 'Tech Stack & Stats',
    'nav.analytics': 'Security & Compliance',
    'nav.users': 'Speed & Performance',
    'nav.settings': 'Data Sovereignty',
    'nav.grow': 'The Engine',
    'nav.pricing': 'How it Works',
    'nav.subscriptions': 'Archi Business (Brain)',
    'nav.billing': 'Archi Dev (Muscle)',
    'nav.resources': 'Company',
    'nav.integrations': 'About Rewan',
    'nav.documentation': 'Book a Demo',
    'nav.api': 'Contact Us',
    'nav.changelog': 'Smart Scoping',

    // ──── Hero Section ────
    'hero.badge': 'Built in Oman | By Rewan',
    'hero.h1.line1': 'We  ',
    'hero.h1.line2': "don't",
    'hero.h1.line3': 'just build',
    'hero.h1.line4': 'your app.',
    'hero.paragraph': "Tired of random AI results built on assumptions? Archi solves this. We lock down your exact logic first, then compile a flawless, production-ready application.",
    'hero.h2.line1': 'We build',
    'hero.h2.line2': 'your',
    'hero.h2.line3': ' idea first.',
    'hero.cta.demo': 'Book a Demo',
    'hero.cta.how': 'See How It Works',

    // ──── Loader Section ────
    'loader.line1': 'From idea..',
    'loader.line2': 'to planning..',
    'loader.line3': 'to execution.',
    'loader.brand': 'By Rewan Company',

    // ──── What is Archi Section ────
    'archi.heading': 'Our Proprietary Software Engineering Engine',
    'archi.concept.title': 'The Core Concept',
    'archi.concept.p1': 'Archi is a private, bimodal AI ecosystem developed and owned exclusively by Rewan Company. It permanently bridges the gap between human business ideas and high-quality technical code.',
    'archi.concept.p2': 'Instead of relying on human developers to manually interpret your requirements over months of slow meetings, Archi uses a hyper-intelligent matrix of AI agents to instantly lock down your logic and compile production-ready software in Hours.',
    'archi.components.title': 'The Two Essential Core Components:',
    'archi.business.name': 'Archi Business (The Brain)',
    'archi.business.desc': 'An interactive cognitive engine that interviews you, structures your unstructured thoughts, and automatically builds flawless technical specs, roadmaps, and feature backlogs.',
    'archi.dev.name': 'Archi Dev (The Muscle)',
    'archi.dev.desc': 'A secure, advanced development suite that pulls your finalized roadmaps and autonomously codes the full application—including user interfaces, secure databases, user login layers, and automated safety tests.',
    'archi.dev.hero.heading': 'Archi Dev\nThe Autonomous {Code Engine}.',
    'archi.dev.hero.desc': 'Watch your blueprints compile into clean, production-grade applications. From secure database schemas to local payment gateways like Thawani, Archi Dev codes and deploys the entire stack autonomously.',

    // Archi Dev Feature Mockup Cards
    'archi.features.c1.heading': 'Instant codebase context',
    'archi.features.c1.desc': 'Fast Context finds the exact files and lines your agent needs—in milliseconds.',
    'archi.features.c1.title': 'Fast Context Where is reconciliati...',
    'archi.features.c1.summary': 'Found where updates enqueue onto the root. Following how the scheduler selects lanes and enters the work loop to begin rendering.',
    'archi.features.c1.item1': 'Read ReactFiberRootScheduler.js',
    'archi.features.c1.item2': 'grep \'ensureRootIsScheduled\'',
    'archi.features.c1.item3': 'grep \'performWorkOnRoot\'',
    'archi.features.c1.item4': 'Read ReactFiberWorkLoop.js',
    'archi.features.c1.item5': 'grep \'renderRootSync\'',
    'archi.features.c1.item6': 'grep \'renderRootConcurrent\'',
    'archi.features.c1.item7': 'grep \'workLoopSync\'',
    'archi.features.c1.item8': 'Read ReactFiberBeginWork.js',

    'archi.features.c2.heading': 'Never miss a detail',
    'archi.features.c2.desc': 'Rapidly (or deeply) review every agent diff—before you push.',
    'archi.features.c2.bugs': '1 Bug',
    'archi.features.c2.bugText': 'setFakeTimerMarker sets clock to fal...',
    'archi.features.c2.bugSub': 'Bug FakeTimers.zig:188',
    'archi.features.c2.flags': '3 Flags',
    'archi.features.c2.markRead': 'Mark all as read',
    'archi.features.c2.flag1Text': 'Test order dependency - first test as...',
    'archi.features.c2.flag1Sub': 'Investigate 25869.test.ts:20-23',
    'archi.features.c2.flag2Text': 'setFakeTimerMarker silently ignores ...',
    'archi.features.c2.flag2Sub': 'Informational FakeTimers.zig:179-189',
    'archi.features.c2.flag3Text': 'Comment at line 185-187 is inconsist...',
    'archi.features.c2.flag3Sub': 'Informational FakeTimers.zig:185-187',

    'archi.features.c3.heading': 'Free world-class models',
    'archi.features.c3.desc': 'Unlimited access to SWE-1.6, the fastest coding model in the world.',
    'archi.features.c3.title': 'SWE-Bench Pro',

    'archi.features.c4.heading': 'Effortless handoff to the cloud',
    'archi.features.c4.desc': 'The only IDE designed for you to close your laptop.',
    'archi.features.c4.title': 'plan.md',
    'archi.features.c4.summary': 'To build a dashboard for real-time store sales data, we will stream events from Kafka over websockets and render them onto a three.js globe.',
    'archi.features.c4.view': 'View plan',
    'archi.features.c4.status': 'Implemented',
    'archi.features.c4.thought': 'Thought for 6s',

    // ──── Process Section ────
    'process.text1.line1': 'Simple Prompts Build',
    'process.text1.line2': 'Broken Apps',
    'process.text2.archi': 'Archi',
    'process.text2.line2': 'Build Ideas',
    'process.text2.line3': 'THEN Code',
    'process.pillar1.title': 'Ministry Approved Security',
    'process.pillar1.subtext': 'Fully certified by the Ministry of Communications and Information Technology.',
    'process.pillar2.title': '182 Specialized AI Experts',
    'process.pillar2.subtext': 'Digital employees handling everything from business analysis to cyber security.',
    'process.pillar3.title': 'Accelerated High-Quality Delivery',
    'process.pillar3.subtext': 'Shifting timelines from months to days while maintaining flawless, elite code.',
    'process.pillar4.title': '100% Tailored to Your Stack',
    'process.pillar4.subtext': 'Completely customizable to your company’s internal workflow and private servers.',

    // ──── Idea To Production ────
    'itp.heading': 'From Idea to Production',
    'itp.card1.title': 'Perfect Your Concept First',
    'itp.card1.desc': 'Our intelligent AI interviews you to fix logical flaws and finalize your feature list before building.',
    'itp.card1.mode': 'idea mode on (shift+tab to cycle)',
    'itp.card2.title': 'Automatic Technical Blueprints',
    'itp.card2.desc': 'Archi instantly converts your raw thoughts into clean developer tasks, visual roadmaps, and project boards.',
    'itp.card2.mode': 'plan mode on (shift+tab to cycle)',
    'itp.card3.title': 'Production Ready Code',
    'itp.card3.desc': 'Archi Dev compiles your roadmap into a fast, secure, error-free application.',
    'itp.card3.mode': 'ship mode on (shift+tab to cycle)',
    'itp.m1.user_msg': 'I want a chatbot that reads uploaded Excel sheets.',
    'itp.m1.ai_msg': 'Got it! Should users only search their own private files, or search all uploaded files together?',
    'itp.m1.action1': 'Make files private per user',
    'itp.m1.action2': 'What if data conflicts?',
    'itp.m1.placeholder': 'Ask Archi...',
    'itp.m2.tag1': 'Web App',
    'itp.m2.tag2': 'Secure Database',
    'itp.m2.tag3': 'Feature Mapped',
    'itp.m2.title': '"As a florist merchant, I want to upload a CSV of my inventory so the system automatically imports products, stock levels, and prices to the online shop."',
    'itp.m3.header': 'Archi Dev Progress',
    'itp.m3.pending': '1 Task in Progress',
    'itp.m3.active_task': 'Compiling geo-routing mapping engine & Thawani payment API...',
    'itp.m3.completed': '3 Steps Completed',
    'itp.m3.done1': 'Spreadsheet parser & inventory MongoDB schema initialized',
    'itp.m3.done2': 'Courier live tracking APIs integrated & secured',
    'itp.m3.done3': 'Thawani checkout gateway connected in sandbox mode',
    'schematic.customer': 'Business Idea',
    'schematic.code': 'App Blueprint',
    'schematic.bug': 'User Story',
    'schematic.issues': 'Milestone',
    'schematic.ticket': 'Database Schema',
    'schematic.commit': 'API Integration',
    'schematic.pr': 'Compiled App',

    // ──── How It Works ────
    'hiw.label': 'How it works?',
    'hiw.three': 'Three steps.',
    'hiw.then': 'Then it ',
    'hiw.runs': 'runs itself.',
    'hiw.step1': 'Step 1',
    'hiw.step2': 'Step 2',
    'hiw.step3': 'Step 3',
    'hiw.step4': 'Step 4',
    'hiw.step5': 'Step 5',
    'hiw.form.title': 'Vision & Scope',
    'hiw.form.desc': 'Describe your project vision, target audience, and primary goals to synthesize the foundational blueprint.',
    'hiw.form.subtitle': 'Provide key details below and our AI will synthesize a complete, professional Business Requirements Document.',
    'hiw.form.vision': 'Vision Statement & Core Purpose',
    'hiw.form.vision.placeholder': 'e.g. Transforming habit consistency into a simple daily experience.',
    'hiw.form.problem': 'The Problem & Value Proposition',
    'hiw.form.problem.placeholder': 'e.g. Existing tools are bloated. We provide a mobile-first experience.',
    'hiw.form.audience': 'Target Audience',
    'hiw.form.audience.placeholder': 'e.g. Students, young professionals ages 16-40.',
    'hiw.form.features': 'Key Features (In-Scope)',
    'hiw.form.features.placeholder': 'e.g. Habit CRUD, Daily dashboard, Streak rewards.',
    'hiw.form.outOfScope': 'Out of Scope (V1)',
    'hiw.form.outOfScope.placeholder': 'e.g. Social features, Apple Watch integration.',
    'hiw.form.goals': 'Business Goals & KPIs',
    'hiw.form.goals.placeholder': 'e.g. Increase 30-day retention to 40%.',
    'hiw.form.cancel': 'Cancel',
    'hiw.form.generate': 'Generate BRD',
    // AI Product Manager Mockup
    'hiw.pm.back': 'Back',
    'hiw.pm.title': 'AI Product Manager',
    'hiw.pm.discovery': 'Discovery',
    'hiw.pm.active': 'PM ACTIVE',
    'hiw.pm.hello': 'Hello! I am your AI Product Manager. I\'m excited to help you scope and initialize your new venture. To start, what is the name or working title of your project, and what is your target due date?',
    'hiw.pm.replyPlaceholder': 'Reply to the AI Product Manager...',
    'hiw.pm.send': 'Send',
    'hiw.pm.ledger': 'Discovery Ledger',
    'hiw.pm.ventureTitle': 'VENTURE TITLE',
    'hiw.pm.extracting': 'Extracting name',
    'hiw.pm.understanding': 'PROJECT UNDERSTANDING',
    'hiw.pm.phase': 'Phase: Project Name',
    'hiw.pm.check1': 'Venture Working Title',
    'hiw.pm.check2': 'Audience & User Problems',
    'hiw.pm.check3': 'Functional Requirements',
    'hiw.pm.check4': 'Integrations & Constraints',
    'hiw.pm.userMsg1': "I want to build a mobile app for tracking daily habits, let's call it HabitArc. Target due date is end of next month.",
    'hiw.pm.botMsg2': "Great name! 'HabitArc' sounds promising. I've logged the venture title in your ledger. Now, who is the target audience for HabitArc, and what core problems are we solving for them?",
    'hiw.pm.userName': 'You',
    'hiw.design.title': 'Design Configuration',
    'hiw.design.desc': 'Upload branding assets, choose brand colors, select custom fonts, and instantly preview your dashboard layout.',
    'hiw.design.logo': 'Application Logo',
    'hiw.design.logo.active': 'Currently Active Logo',
    'hiw.design.logo.none': 'No logo uploaded',
    'hiw.design.logo.upload': 'Supports PNG, JPG, JPEG, or SVG (Max 2MB)',
    'hiw.design.brandColor': 'Primary Brand Color',
    'hiw.design.brandColor.desc': 'Used for primary actions, headers, and active states.',
    'hiw.design.accentColor': 'Secondary Accent Color',
    'hiw.design.accentColor.desc': 'Used for accents, badges, highlights, and secondary info.',
    'hiw.design.typography': 'Typography Profile',
    'hiw.design.typography.desc': 'Select the global font family for titles, text body, and buttons.',
    'hiw.design.mockup': 'Live Application Mockup',
    'hiw.design.overview': 'Overview',
    'hiw.design.status': 'Active Status',
    'hiw.design.metric': 'Primary Metric',
    'hiw.design.primaryBtn': 'Primary Button',
    'hiw.design.accentBtn': 'Accent Action',
    // Phase 01
    'hiw.phase01.title': 'The Smart Interview',
    'hiw.phase01.desc': "We don't just take an order. Our AI-driven analyst interviews you to uncover hidden business logic and lock down your true project scope.",
    'hiw.phase01.brand': '',
    'hiw.phase01.descEnd': '',
    'hiw.phase01.url': 'engine://smart-scoping',
    'hiw.phase01.client': 'Client Hub (Muscat, OM)',
    'hiw.phase01.userMsg': 'I want to build a high-end food delivery app for my restaurant chain in Oman.',
    'hiw.phase01.coreAnalytics': 'Archi Core Analytics',
    'hiw.phase01.specRequest': 'System Specification Request',
    'hiw.phase01.specDesc': "Initial prompt processed successfully. Let's isolate three regional constraints to secure deterministic architectural alignment:",
    'hiw.phase01.q1.label': 'Local Payment Infrastructure',
    'hiw.phase01.q1.desc': 'Are you authenticating local gateways like Thawani or direct Bank Muscat API integrations?',
    'hiw.phase01.q2.label': 'Geospatial Routing Architecture',
    'hiw.phase01.q2.desc': 'How will dispatchers parse pinpoint locations natively without reliance on formal municipal street addresses?',
    'hiw.phase01.q3.label': 'Compliance & Safety Shield',
    'hiw.phase01.q3.desc': 'Should the system hook into automated regional background screening registries for courier activation?',
    'hiw.phase01.footer': 'Awaiting partner resolution...',
    'hiw.phase01.footerAr': 'في انتظار إجابتك لرسم المخطط',

    // Analyst Clone keys
    'hiw.analyst.title': 'The Analyst',
    'hiw.analyst.project': 'Project: My Chat bot',
    'hiw.analyst.restart': 'Restart Session',
    'hiw.analyst.botName': 'Archi - The Analyst',
    'hiw.analyst.status': 'Online & Recording Requirements',
    'hiw.analyst.botHello': "Hello! I am The Analyst for the 'My Chat bot ' project. I see you've already uploaded a Business Requirements Document (BRD). We can start refining it, or you can click 'Auto-Generate Backlog' to have me build out the Epics and Stories.",
    'hiw.analyst.userStep': 'AUTO-GENERATION STEP 1: Analyze the BRD and create all necessary Epics based on the vision. Do NOT create Features or Stories yet. Reply briefly when done.',
    'hiw.analyst.inputNote': 'Archi will automatically parse your input into Epics, Features, and Stories in the Live Backlog.',
    'hiw.analyst.autoGen': 'Auto-Generate Backlog',
    'hiw.analyst.placeholder': 'Describe a feature, user story, or project vision...',
    'hiw.analyst.send': 'Send',
    'hiw.analyst.backlog': 'Live Backlog',
    'hiw.analyst.autoSync': 'Auto-syncing',
    'hiw.analyst.item1Title': 'Data Processing Optimization',
    'hiw.analyst.item1Features': '2 Features',
    'hiw.analyst.item1Desc': 'Enhance data processing capabilities to ensure quick and accurate results.',
    'hiw.analyst.sub1Title': 'Data Accuracy Improvement',
    'hiw.analyst.sub1Story': 'As a quality assurance engineer, I want to to i...',
    'hiw.analyst.sub2Title': 'Real-time Data Processing',
    'hiw.analyst.sub2Story': 'As a data analyst, I want to the system to proc...',
    'hiw.analyst.new': 'New',
    'hiw.analyst.item2Title': 'AI Search Implementation',
    'hiw.analyst.item2Features': '3 Features',
    'hiw.analyst.item3Title': 'System Integration',
    'hiw.analyst.item3Features': '2 Features',

    // Stories keys
    'hiw.stories.title': 'User Stories',
    'hiw.stories.project': 'For Project: My Chat bot',
    'hiw.stories.back': 'Back to Project',
    'hiw.stories.add': 'Add User Story',
    'hiw.stories.c1Role': 'As a developer',
    'hiw.stories.c1Want': 'I want to to develop APIs that allow integration with existing systems',
    'hiw.stories.c1Benefit': 'so that I can the AI search tool can retrieve data seamlessly.',
    'hiw.stories.c1Tag': 'Integration APIs',
    'hiw.stories.c2Role': 'As a user',
    'hiw.stories.c2Want': 'I want to to use a simple UI to enter search queries',
    'hiw.stories.c2Benefit': 'so that I can I can quickly find data in Excel sheets.',
    'hiw.stories.c2Tag': 'User Interface Design',
    'hiw.stories.c3Role': 'As a AI developer',
    'hiw.stories.c3Want': 'I want to to develop an AI algorithm',
    'hiw.stories.c3Benefit': 'so that I can it efficiently retrieves data from large Excel sheets.',
    'hiw.stories.c3Tag': 'AI Search Algorithm',
    'hiw.stories.c4Role': 'As a data analyst',
    'hiw.stories.c4Want': 'I want to the system to process data in real time',
    'hiw.stories.c4Benefit': 'so that I can I can make timely decisions based on the latest insights.',
    'hiw.stories.c4Tag': 'Integration APIs',
    'hiw.stories.c5Role': 'As a quality assurance engineer',
    'hiw.stories.c5Want': 'I want to to implement accuracy checks',
    'hiw.stories.c5Benefit': 'so that I can ensure data integrity during processing.',
    'hiw.stories.c5Tag': 'User Interface Design',
    'hiw.stories.c6Role': 'As a IT administrator',
    'hiw.stories.c6Want': 'I want to to ensure the AI search tool is compatible with all system environments',
    'hiw.stories.c6Benefit': 'so that I can there are no integration issues.',
    'hiw.stories.c6Tag': 'AI Search Algorithm',
    'hiw.stories.new': 'New',

    // Compilation Keys
    'hiw.compilation.title': 'QA Platform Business Requirements',
    'hiw.compilation.botTitle': 'Archi Chatbot',
    'hiw.compilation.botMsg': 'Give me your Excel file',
    'hiw.compilation.inputPlaceholder': 'Upload Excel file...',
    'hiw.compilation.askAnything': 'Ask anything...',
    'hiw.compilation.build': 'Build',
    'hiw.compilation.models': 'Models',

    // Phase 02
    'hiw.phase02.title': 'One-Click Breakdown',
    'hiw.phase02.desc': 'Your verified ideas are instantly mapped into professional milestones and a clear Kanban tracking board you can monitor in real time.',
    'hiw.phase02.url': 'engine://milestone-roadmap',
    'hiw.phase02.row1.title': 'Identity Infrastructure & Security Shield',
    'hiw.phase02.row1.badge': 'Scope Locked',
    'hiw.phase02.row2.title': 'Enterprise Token Authentication & Federated SSO',
    'hiw.phase02.row2.badge': 'Aligned',
    'hiw.phase02.row3.title': 'Omani Telecommunications SMS Gateway Integration',
    'hiw.phase02.row3.badge': 'Verified Ready',

    // Phase 03
    'hiw.phase03.title': 'Autonomous Compilation',
    'hiw.phase03.desc': 'The Rewan team feeds your locked roadmap into ',
    'hiw.phase03.brand': 'Archi Dev',
    'hiw.phase03.descEnd': ', instantly compiling full screens, secure databases, and automated safety tests.',
    'hiw.phase03.url': 'engine://assembly-hub',
    'hiw.phase03.modules': 'Assembly Modules',
    'hiw.phase03.m1': 'Client Engine Shell',
    'hiw.phase03.m2': 'Relational Financial Schema',
    'hiw.phase03.m3': 'State Cryptography Matrices',
    'hiw.phase03.diagnostics': 'System Diagnostics',
    'hiw.phase03.p1': 'User Interface Assembly',
    'hiw.phase03.p2': 'Distributed Infrastructure',
    'hiw.phase03.p3': 'Automated Validation Protocols',
    'hiw.phase03.footer': 'System verification optimized. Production payload compiled.',

    // ──── Features Section ────
    'features.divider': 'Meet Rewan Archi',
    'features.heading': 'A complete AI development team',
    'features.desc': 'Archi completely automates how software is built. It acts as both your expert business analyst and your lead engineering team, working together in perfect sync.',
    'features.f1.title': 'Automation',
    'features.f1.desc': 'Deflect repetitive inquiries with AI workflows that connect to your data and tools.',
    'features.f2.title': 'Agent Assist',
    'features.f2.desc': 'Suggested replies, summaries, and insights right where your agents work.',
    'features.f3.title': 'Governance',
    'features.f3.desc': 'Guardrails, approvals, and analytics so you stay safe, accurate, and consistent.',

    // ──── Tech Stack Section ────
    'techstack.label': '04 / TECH STACK',
    'techstack.headline': 'Any Tech Stack. Engineered Automatically.',
    'techstack.group1.label': 'Modern Stacks & Frontend UI',
    'techstack.group2.label': 'Backend, Runtimes & Enterprise Core',
    'techstack.group3.label': 'Data, Infrastructure & Cloud Automation',
    'techstack.group4.label': 'Mobile, AI & Quality Assurance',
    'techstack.stat1.value': '95',
    'techstack.stat1.accent': '%',
    'techstack.stat1.title': 'Repetitive Dev Work Eliminated',
    'techstack.stat1.desc': 'Archi writes the entire foundational layer instantly, freeing engineers to focus entirely on your business logic and investment goals.',
    'techstack.stat2.value': '720',
    'techstack.stat2.accent': 'x',
    'techstack.stat2.title': 'Architecture Speed Multiplier',
    'techstack.stat2.desc': 'What used to require a week of technical meetings is now engineered with perfect precision in just 10 minutes.',
    'techstack.stat3.value': '14',
    'techstack.stat3.accent': 'x',
    'techstack.stat3.title': 'Faster Time to Execution',
    'techstack.stat3.desc': 'Your project goes from an approved idea to a live, production-ready application in 2–3 days instead of months.',
    'techstack.stat4.value': '100',
    'techstack.stat4.accent': '%',
    'techstack.stat4.title': 'Full Data Sovereignty',
    'techstack.stat4.desc': 'Built to run on your own servers. Your data and source code never leave the boundaries of your organisation or country.',

    // ──── Core Features Section ────
    'core.badge': 'Core Features',
    'core.h2.line1': 'From Scoping to Code.',
    'core.h2.line2': 'All in One Engine.',
    'core.desc': 'Archi drives your software development lifecycle. It structures your raw requirements, outlines technical user stories, and compiles production-ready code with complete logic verification.',
    'core.tab.community': 'Community',
    'core.tab.courses': 'Courses',
    'core.tab.events': 'Events',
    'core.tab.members': 'Members',
    'core.invite': 'Invite',
    'core.sidebar.chat': 'Chat',
    'core.sidebar.courses': 'Courses',
    'core.sidebar.events': 'Events',
    'core.sidebar.members': 'Members',
    'core.sidebar.leaderboard': 'Leaderboard',
    'core.sidebar.coursesLabel': 'Courses',
    'core.sidebar.c1': 'User Research Methods',
    'core.sidebar.c2': 'Product Thinking',
    'core.sidebar.c3': 'Design Systems',
    'core.sidebar.c4': 'Framer Course',
    'core.sidebar.c5': 'Start here',
    'core.input.placeholder': "What's on your mind?",
    'core.input.discussion': 'Discussion',
    'core.input.questions': 'Questions',
    'core.input.resources': 'Resources',

    // ──── Features Stack Section ────
    'stack.badge': 'What you get',
    'stack.h2.line1': 'Set up once.',
    'stack.h2.line2': 'Run it the way you want.',
    'stack.desc': "Archi is built so you spend time with your business, not configuring it. From your first setting to your hundredth workflow, the platform stays out of your way.",
    'stack.card1.tag': 'Your front door',
    'stack.card1.title': 'A community overview page that sells itself.',
    'stack.card1.desc': 'Customize your hero with a static color or animated gradient. Add a headline, a description and member avatars. Your overview page is the first thing a visitor sees — make it yours.',
    'stack.card2.tag': 'Customizable spaces',
    'stack.card2.title': 'Create spaces tailored to your needs.',
    'stack.card2.desc': "Whether it's a private corner for leadership or a public space for community members, configure access, layout, and tools to match the exact needs of your group.",
    'stack.card3.tag': 'Seamless integrations',
    'stack.card3.title': 'Connect the tools you already use.',
    'stack.card3.desc': 'Integrate with Slack, Discord, Notion, and more. Keep your community in sync without forcing them to learn new platforms or abandon their favorite tools.',

    // ──── Footer ────
    'footer.cta.heading': 'Ready to lock down your exact vision?',
    'footer.cta.button': 'Book a Demo',
    'footer.brand': 'Archi',
    'footer.slogan': '{Architecting} the future of software, autonomously. Crafted in {Salalah}.',
    'footer.tagline': 'Empowering businesses in Oman with cutting-edge AI solutions.',
    'footer.links': 'Links',
    'footer.socials': 'Socials',
    'footer.newsletter.heading': 'Stay Updated',
    'footer.newsletter.desc': 'Get the latest insights and product updates delivered to your inbox.',
    'footer.newsletter.placeholder': 'your@email.com',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.phone.label': 'Phone No',
    'footer.email.label': 'Email Address',
    'footer.location.label': 'Location',
    'footer.website.label': 'Website',
    'footer.phone': '+968 7662 6636',
    'footer.email': 'info@rewan.ai',
    'footer.location': 'Salalah, Sultanate of Oman',
    'footer.website': 'rewan.ai',
    'footer.copyright': '© 2026 Archi. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.nav.products': 'Tech Stack & Stats',
    'footer.nav.solutions': 'How it Works',
    'footer.nav.resources': 'What is Archi',
    'footer.nav.support': 'Core Features',
    'footer.social.twitter': 'Twitter',
    'footer.social.linkedin': 'LinkedIn',
    'footer.social.instagram': 'Instagram',
    'footer.social.whatsapp': 'WhatsApp',
    'seo.title': 'Archi | Automated Software Architecture & Code Compilation Platform',
    'seo.desc': 'Archi is a bimodal cognitive engine that interviews you, structures your business requirements, and automatically generates technical specifications, blueprints, and production-ready code.',
  },
  ar: {
    // ──── Navbar ────
    'nav.menu': 'القائمة',
    'nav.close': 'إغلاق',
    'nav.login': 'تواصل معنا',
    'nav.brand': 'منصة أركي',
    'nav.manage': 'القدرات الفنية',
    'nav.overview': 'التقنيات والإحصائيات',
    'nav.analytics': 'الأمان والامتثال',
    'nav.users': 'سرعة الأداء والتنفيذ',
    'nav.settings': 'سيادة وسرية البيانات',
    'nav.grow': 'منظومة أركي',
    'nav.pricing': 'كيف تعمل المنصة',
    'nav.subscriptions': 'أركي للأعمال (العقل)',
    'nav.billing': 'أركي ديف (المنفذ)',
    'nav.resources': 'الشركة',
    'nav.integrations': 'عن شركة ريوان',
    'nav.documentation': 'احجز عرضاً تجريبياً',
    'nav.api': 'تواصل معنا',
    'nav.changelog': 'التخطيط الذكي',

    // ──── Hero Section ────
    'hero.badge': 'من ريوان | صنع في عُمان',
    'hero.h1.line1': 'نحن لا',
    'hero.h1.line2': 'نبني',
    'hero.h1.line3': 'تطبيقك فقط',
    'hero.h1.line4': '',
    'hero.paragraph': 'تعتمد معظم أدوات الذكاء الاصطناعي على افتراضات عشوائية. أركي يحل هذا بضبط منطق فكرتك بدقة أولاً، ليترجمها إلى كود متكامل وخالٍ من الأخطاء.',
    'hero.h2.line1': 'نبني',
    'hero.h2.line2': 'فكرتك',
    'hero.h2.line3': 'أولاً',
    'hero.cta.demo': 'احجز عرضاً تجريبياً',
    'hero.cta.how': 'شاهد كيف يعمل',

    // ──── Loader Section ────
    'loader.line1': 'من الفكرة..',
    'loader.line2': 'إلى التخطيط..',
    'loader.line3': 'إلى التنفيذ.',
    'loader.brand': 'من شركة ريوان',

    // ──── What is Archi Section ────
    'archi.heading': 'محركنا الخاص والسرّي لهندسة البرمجيات',
    'archi.concept.title': 'المفهوم الأساسي',
    'archi.concept.p1': 'منظومة Archi هي نظام بيئي مغلق ومتطور للذكاء اصطناعي، تمتلكه وتديره شركة ريوان بشكل حصري. تم ابتكارها لتقضي تماماً على فجوة التواصل بين الأفكار الاستثمارية والأكواد البرمجية عالية الجودة.',
    'archi.concept.p2': 'بدلاً من الاعتماد على الطرق التقليدية والاجتماعات البشرية البطيئة لشهور، تستخدم Archi مصفوفة فائقة الذكاء من الموظفين الرقميين لفهم منطق مشروعك فوراً، وبناء برمجيات متكاملة وجاهزة للتشغيل خلال أيام معدودة.',
    'archi.components.title': 'المكونان الأساسيان للمنظومة:',
    'archi.business.name': 'Archi Business (العقل المفكر)',
    'archi.business.desc': 'محرك إدراكي تفاعلي يحاورك، وينظم أفكارك العشوائية، ويقوم تلقائياً ببناء وثائق المتمتطلبات الفنية، وخرائط الطريق، وجداول العمل الخالية من الأخطاء.',
    'archi.dev.name': 'Archi Dev (المحرك التنفيذي)',
    'archi.dev.desc': 'بيئة تطوير آمنة تسحب خطط العمل المعتمدة وتبني التطبيق بالكامل ذاتياً—بما في ذلك الواجهات، وقواعد البيانات المشفرة، وأنظمة الحماية، واختبارات السلامة التلقائية.',
    'archi.dev.hero.heading': 'آركي ديف\nمحرك {البرمجة الذاتي}.',
    'archi.dev.hero.desc': 'شاهد مخططات تطبيقك وهي تتحول تلقائيًا إلى أكواد برمجية جاهزة للإنتاج. من قواعد البيانات الآمنة إلى دمج بوابات الدفع المحلية مثل ثواني، يقوم آركي ديف ببرمجة ونشر تطبيقك بالكامل ذاتيًا.',

    // Archi Dev Feature Mockup Cards
    'archi.features.c1.heading': 'سياق فوري للكود',
    'archi.features.c1.desc': 'يقوم Fast Context بالعثور على الملفات والسطور الدقيقة التي يحتاجها وكيلك الذكي - في أجزاء من الثانية.',
    'archi.features.c1.title': 'Fast Context أين توجد المزامنة...',
    'archi.features.c1.summary': 'تم العثور على مكان إدراج التحديثات في الجذر. تتبع كيفية تحديد الجدولة للمسارات والدخول في حلقة العمل لبدء العرض.',
    'archi.features.c1.item1': 'قراءة ReactFiberRootScheduler.js',
    'archi.features.c1.item2': 'grep \'ensureRootIsScheduled\'',
    'archi.features.c1.item3': 'grep \'performWorkOnRoot\'',
    'archi.features.c1.item4': 'قراءة ReactFiberWorkLoop.js',
    'archi.features.c1.item5': 'grep \'renderRootSync\'',
    'archi.features.c1.item6': 'grep \'renderRootConcurrent\'',
    'archi.features.c1.item7': 'grep \'workLoopSync\'',
    'archi.features.c1.item8': 'قراءة ReactFiberBeginWork.js',

    'archi.features.c2.heading': 'لا تفوّت أي تفصيل',
    'archi.features.c2.desc': 'راجع بسرعة (أو بعمق) كل تعديل للوكيل البرمجي - قبل أن ترفع الكود.',
    'archi.features.c2.bugs': 'ثغرة واحدة',
    'archi.features.c2.bugText': 'setFakeTimerMarker يضبط الساعة على fal...',
    'archi.features.c2.bugSub': 'ثغرة في FakeTimers.zig:188',
    'archi.features.c2.flags': '٣ تنبيهات',
    'archi.features.c2.markRead': 'تحديد الكل كمقروء',
    'archi.features.c2.flag1Text': 'اعتمادية ترتيب الاختبار - أول اختبار كـ...',
    'archi.features.c2.flag1Sub': 'تحقق في 25869.test.ts:20-23',
    'archi.features.c2.flag2Text': 'setFakeTimerMarker يتجاهل بصمت...',
    'archi.features.c2.flag2Sub': 'معلوماتي في FakeTimers.zig:179-189',
    'archi.features.c2.flag3Text': 'التعليق في السطر 185-187 غير متسق...',
    'archi.features.c2.flag3Sub': 'معلوماتي في FakeTimers.zig:185-187',

    'archi.features.c3.heading': 'نماذج عالمية مجانية',
    'archi.features.c3.desc': 'وصول غير محدود إلى SWE-1.6، أسرع نموذج برمجة في العالم.',
    'archi.features.c3.title': 'SWE-Bench Pro',

    'archi.features.c4.heading': 'نشر سحابي تلقائي وسلس',
    'archi.features.c4.desc': 'بيئة التطوير المتكاملة الوحيدة المصممة لتتمكن من إغلاق جهازك المحمول.',
    'archi.features.c4.title': 'plan.md',
    'archi.features.c4.summary': 'لبناء لوحة تحكم لبيانات مبيعات المتجر في الوقت الفعلي، سنقوم ببث الأحداث من Kafka عبر بروتوكول websockets وعرضها على مجسم three.js ثلاثي الأبعاد.',
    'archi.features.c4.view': 'عرض الخطة',
    'archi.features.c4.status': 'تم التنفيذ',
    'archi.features.c4.thought': 'تفكير لمدة 6 ثوانٍ',

    // ──── Process Section ────
    'process.text1.line1': 'الأوامر البسيطة تبني',
    'process.text1.line2': 'تطبيقات معطلة',
    'process.text2.archi': 'أركي',
    'process.text2.line2': 'يبني الأفكار',
    'process.text2.line3': 'ثم البرمجة',
    'process.pillar1.title': 'اعتماد حكومي رسمي',
    'process.pillar1.subtext': 'متوافق تماماً ومعتمد من وزارة النقل والاتصالات وتقنية المعلومات.',
    'process.pillar2.title': '182 موظف رقمي متخصص',
    'process.pillar2.subtext': 'خبراء ذكاء اصطناعي يعملون بالتوازي لتغطية كافة الجوانب الإدارية والفنية.',
    'process.pillar3.title': 'سرعة إنتاجية فائقة وجودة نخبوية',
    'process.pillar3.subtext': 'نختصر وقت التنفيذ من أشهر إلى أيام معدودة مع ضمان خلو التطبيق من الأخطاء.',
    'process.pillar4.title': 'تخصيص كامل ومطلق',
    'process.pillar4.subtext': 'متوافق بالكامل مع بيئتك التقنية الداخلية، سير عملك، وخوادمك المحلية الآمنة.',

    // ──── Idea To Production ────
    'itp.heading': 'من الفكرة إلى الإنتاج',
    'itp.card1.title': 'أتقن مفهومك أولاً',
    'itp.card1.desc': 'ذكاؤنا الاصطناعي الذكي يجري مقابلة معك لإصلاح العيوب المنطقية وتحديد قائمة الميزات قبل البناء.',
    'itp.card1.mode': 'وضع الفكرة مفعّل (shift+tab للتبديل)',
    'itp.card2.title': 'مخططات تقنية تلقائية',
    'itp.card2.desc': 'أركي يحول أفكارك الخام فوراً إلى مهام تطوير نظيفة وخرائط طريق مرئية ولوحات مشاريع.',
    'itp.card2.mode': 'وضع التخطيط مفعّل (shift+tab للتبديل)',
    'itp.card3.title': 'كود جاهز للإنتاج',
    'itp.card3.desc': 'أركي يحول خارطة طريقك إلى تطبيق سريع وآمن وخالٍ من الأخطاء.',
    'itp.card3.mode': 'وضع الشحن مفعّل (shift+tab للتبديل)',
    'itp.m1.user_msg': 'أريد روبوت محادثة يقرأ ملفات Excel المرفوعة.',
    'itp.m1.ai_msg': 'فهمت! هل يجب أن يبحث المستخدمون في ملفاتهم الخاصة فقط، أم في جميع الملفات المرفوعة معًا؟',
    'itp.m1.action1': 'جعل الملفات خاصة لكل مستخدم',
    'itp.m1.action2': 'ماذا لو تعارضت البيانات؟',
    'itp.m1.placeholder': 'اسأل آركي...',
    'itp.m2.tag1': 'تطبيق ويب',
    'itp.m2.tag2': 'قاعدة بيانات آمنة',
    'itp.m2.tag3': 'تم تخطيط الميزة',
    'itp.m2.title': '"بصفتي تاجر زهور، أريد رفع ملف جداول بيانات لمخزون الورد ليقوم النظام تلقائياً باستيراد المنتجات ومستويات المخزون والأسعار للمتجر الإلكتروني."',
    'itp.m3.header': 'تقدم آركي ديف',
    'itp.m3.pending': 'مهمة واحدة قيد التقدم',
    'itp.m3.active_task': 'جاري تجميع محرك خرائط التتبع وبوابة دفع ثواني...',
    'itp.m3.completed': 'تم إنجاز ٣ خطوات',
    'itp.m3.done1': 'تمت تهيئة محلل جداول البيانات ومخطط قاعدة بيانات المخزون (MongoDB)',
    'itp.m3.done2': 'تمت كتابة واجهات برمجة تتبع المندوبين وتأمينها',
    'itp.m3.done3': 'تم ربط بوابة دفع ثواني التجريبية بنجاح',
    'schematic.customer': 'فكرة المشروع',
    'schematic.code': 'مخطط التطبيق',
    'schematic.bug': 'قصة المستخدم',
    'schematic.issues': 'مرحلة الإنجاز',
    'schematic.ticket': 'قواعد البيانات',
    'schematic.commit': 'ربط البرمجيات',
    'schematic.pr': 'تطبيق جاهز',

    // ──── How It Works ────
    'hiw.label': 'كيف يعمل؟',
    'hiw.three': 'ثلاث خطوات.',
    'hiw.then': 'ثم ',
    'hiw.runs': 'يعمل بنفسه.',
    'hiw.step1': 'الخطوة ١',
    'hiw.step2': 'الخطوة ٢',
    'hiw.step3': 'الخطوة ٣',
    'hiw.step4': 'الخطوة ٤',
    'hiw.step5': 'الخطوة ٥',
    'hiw.form.title': 'الرؤية والنطاق',
    'hiw.form.desc': 'صِف رؤية مشروعك، جمهورك المستهدف، وأهدافك الأساسية لتوليد مخطط العمل الأولي.',
    'hiw.form.subtitle': 'يرجى تقديم التفاصيل الرئيسية أدناه وسيقوم الذكاء الاصطناعي لدينا بإنشاء وثيقة متطلبات عمل احترافية ومتكاملة.',
    'hiw.form.vision': 'بيان الرؤية والغرض الأساسي',
    'hiw.form.vision.placeholder': 'مثال: تحويل الاتساق في بناء العادات إلى تجربة يومية بسيطة.',
    'hiw.form.problem': 'المشكلة والقيمة المقترحة',
    'hiw.form.problem.placeholder': 'مثال: الأدوات الحالية معقدة للغاية. نحن نقدم تجربة مخصصة للجوال أولاً.',
    'hiw.form.audience': 'الجمهور المستهدف',
    'hiw.form.audience.placeholder': 'مثال: الطلاب والمهنيون الشباب من سن 16 إلى 40 عاماً.',
    'hiw.form.features': 'الميزات الرئيسية (داخل النطاق)',
    'hiw.form.features.placeholder': 'مثال: إدارة العادات، لوحة التحكم اليومية، مكافآت المتابعة.',
    'hiw.form.outOfScope': 'خارج النطاق (الإصدار الأول)',
    'hiw.form.outOfScope.placeholder': 'مثال: الميزات الاجتماعية، التكامل مع ساعة آبل.',
    'hiw.form.goals': 'أهداف العمل ومؤشرات الأداء الرئيسية',
    'hiw.form.goals.placeholder': 'مثال: زيادة نسبة الاحتفاظ بالمستخدمين لـ 30 يوماً إلى 40%.',
    'hiw.form.cancel': 'إلغاء',
    'hiw.form.generate': 'توليد الوثيقة',
    // AI Product Manager Mockup
    'hiw.pm.back': 'رجوع',
    'hiw.pm.title': 'مدير المنتج الذكي',
    'hiw.pm.discovery': 'مرحلة الاكتشاف',
    'hiw.pm.active': 'المدير نشط',
    'hiw.pm.hello': 'مرحباً! أنا مدير المنتج الخاص بك بالذكاء الاصطناعي. يسعدني مساعدتك في تحديد نطاق وإطلاق مشروعك الجديد. للبدء، ما هو اسم أو عنوان العمل المقترح لمشروعك، وما هو التاريخ المستهدف للتسليم؟',
    'hiw.pm.replyPlaceholder': 'اكتب رداً لمدير المنتج الذكي...',
    'hiw.pm.send': 'إرسال',
    'hiw.pm.ledger': 'سجل الاكتشاف',
    'hiw.pm.ventureTitle': 'اسم المشروع',
    'hiw.pm.extracting': 'جاري استخراج الاسم',
    'hiw.pm.understanding': 'فهم أبعاد المشروع',
    'hiw.pm.phase': 'المرحلة: اسم المشروع',
    'hiw.pm.check1': 'عنوان العمل للمشروع',
    'hiw.pm.check2': 'الجمهور المستهدف والمشاكل',
    'hiw.pm.check3': 'المتطلبات الوظيفية للمشروع',
    'hiw.pm.check4': 'التكاملات والمحددات التقنية',
    'hiw.pm.userMsg1': 'أريد بناء تطبيق جوال لتتبع العادات اليومية، لنطلق عليه اسم HabitArc. تاريخ التسليم المستهدف هو نهاية الشهر القادم.',
    'hiw.pm.botMsg2': 'اسم رائع! يبدو HabitArc واعداً. لقد قمت بتسجيل اسم المشروع في السجل الخاص بك. الآن، من هو الجمهور المستهدف لـ HabitArc، وما هي المشاكل الأساسية التي نحلها لهم؟',
    'hiw.pm.userName': 'أنت',
    'hiw.design.title': 'تهيئة التصميم',
    'hiw.design.desc': 'حمّل شعارك، اختر ألوان هويتك البصرية، وحدد الخطوط المناسبة لمشاهدة واجهة تطبيقك فوراً.',
    'hiw.design.logo': 'شعار التطبيق',
    'hiw.design.logo.active': 'الشعار النشط حالياً',
    'hiw.design.logo.none': 'لم يتم تحميل شعار',
    'hiw.design.logo.upload': 'يدعم صيغ PNG أو JPG أو JPEG أو SVG (بحد أقصى 2 ميجابايت)',
    'hiw.design.brandColor': 'لون العلامة التجارية الأساسي',
    'hiw.design.brandColor.desc': 'يُسخدم للإجراءات الأساسية، الرؤوس، والحالات النشطة.',
    'hiw.design.accentColor': 'اللون الثانوي المميز',
    'hiw.design.accentColor.desc': 'يُسخدم للمسات الإضافية، الشارات، الإبرازات، والمعلومات الثانوية.',
    'hiw.design.typography': 'ملف الخطوط والطباعة',
    'hiw.design.typography.desc': 'اختر عائلة الخطوط العامة للعناوين، والنصوص، والأزرار.',
    'hiw.design.mockup': 'نموذج حي للتطبيق',
    'hiw.design.overview': 'نظرة عامة',
    'hiw.design.status': 'الحالة النشطة',
    'hiw.design.metric': 'المؤشر الأساسي',
    'hiw.design.primaryBtn': 'الزر الأساسي',
    'hiw.design.accentBtn': 'إجراء مميز',
    // Phase 01
    'hiw.phase01.title': 'المقابلة الذكية',
    'hiw.phase01.desc': 'لا نكتفي بأخذ الأوامر؛ بل يطرح المحلل الذكي أسئلة عميقة لكشف المنطق الإداري الخفي وضبط النطاق الحقيقي لمشروعك.',
    'hiw.phase01.brand': '',
    'hiw.phase01.descEnd': '',
    'hiw.phase01.url': 'engine://smart-scoping',
    'hiw.phase01.client': 'مركز العملاء (مسقط، عُمان)',
    'hiw.phase01.userMsg': 'أريد بناء تطبيق توصيل طعام راقٍ لسلسلة مطاعمي في عُمان.',
    'hiw.phase01.coreAnalytics': 'تحليلات أركي الأساسية',
    'hiw.phase01.specRequest': 'طلب مواصفات النظام',
    'hiw.phase01.specDesc': 'تمت معالجة الطلب الأولي بنجاح. دعنا نحدد ثلاثة قيود إقليمية لضمان التوافق المعماري:',
    'hiw.phase01.q1.label': 'البنية التحتية للدفع المحلي',
    'hiw.phase01.q1.desc': 'هل تقوم بمصادقة بوابات محلية مثل ثواني أو تكاملات API مباشرة مع بنك مسقط؟',
    'hiw.phase01.q2.label': 'هندسة التوجيه الجغرافي',
    'hiw.phase01.q2.desc': 'كيف سيحلل المرسلون المواقع الدقيقة محلياً بدون الاعتماد على عناوين الشوارع البلدية الرسمية؟',
    'hiw.phase01.q3.label': 'درع الامتثال والسلامة',
    'hiw.phase01.q3.desc': 'هل يجب أن يتصل النظام بسجلات الفحص الإقليمية الآلية لتفعيل السعاة؟',
    'hiw.phase01.footer': 'في انتظار حل الشريك...',
    'hiw.phase01.footerAr': 'في انتظار إجابتك لرسم المخطط',

    // Analyst Clone keys
    'hiw.analyst.title': 'المحلل',
    'hiw.analyst.project': 'المشروع: بوت المحادثة الخاص بي',
    'hiw.analyst.restart': 'إعادة تشغيل الجلسة',
    'hiw.analyst.botName': 'أركي - المحلل',
    'hiw.analyst.status': 'متصل وجاري تسجيل المتطلبات',
    'hiw.analyst.botHello': 'مرحباً! أنا المحلل لمشروع \'بوت المحادثة الخاص بي\'. أرى أنك قمت بالفعل بتحميل وثيقة متطلبات العمل (BRD). يمكننا البدء في تنقيحها، أو يمكنك النقر فوق \'توليد تلقائي للمهام\' لجعلني أقوم بإنشاء الملاحم والقصص.',
    'hiw.analyst.userStep': 'خطوة التوليد التلقائي 1: تحليل وثيقة متطلبات العمل وإنشاء جميع الملاحم اللازمة بناءً على الرؤية. لا تقم بإنشاء الميزات أو القصص بعد. رد بإيجاز عند الانتهاء.',
    'hiw.analyst.inputNote': 'سيقوم أركي تلقائيًا بتحليل مدخلاتك إلى ملاحم وميزات وقصص في قائمة المهام الحية.',
    'hiw.analyst.autoGen': 'توليد تلقائي للمهام',
    'hiw.analyst.placeholder': 'صف ميزة، أو قصة مستخدم، أو رؤية المشروع...',
    'hiw.analyst.send': 'إرسال',
    'hiw.analyst.backlog': 'قائمة المهام الحية',
    'hiw.analyst.autoSync': 'مزامنة تلقائية',
    'hiw.analyst.item1Title': 'تحسين معالجة البيانات',
    'hiw.analyst.item1Features': 'ميزتان',
    'hiw.analyst.item1Desc': 'تعزيز قدرات معالجة البيانات لضمان نتائج سريعة ودقيقة.',
    'hiw.analyst.sub1Title': 'تحسين دقة البيانات',
    'hiw.analyst.sub1Story': 'بصفتي مهندس ضمان جودة، أريد أن...',
    'hiw.analyst.sub2Title': 'معالجة البيانات في الوقت الفعلي',
    'hiw.analyst.sub2Story': 'بصفتي محلل بيانات، أريد أن يقوم النظام بمعالجة...',
    'hiw.analyst.new': 'جديد',
    'hiw.analyst.item2Title': 'تنفيذ البحث بالذكاء الاصطناعي',
    'hiw.analyst.item2Features': '٣ ميزات',
    'hiw.analyst.item3Title': 'تكامل النظام',
    'hiw.analyst.item3Features': 'ميزتان',

    // Stories keys
    'hiw.stories.title': 'قصص المستخدمين',
    'hiw.stories.project': 'المشروع: بوت المحادثة الخاص بي',
    'hiw.stories.back': 'العودة للمشروع',
    'hiw.stories.add': 'إضافة قصة مستخدم',
    'hiw.stories.c1Role': 'بصفتي مطوراً',
    'hiw.stories.c1Want': 'أريد تطوير واجهات برمجة التطبيقات التي تسمح بالتكامل مع الأنظمة الحالية',
    'hiw.stories.c1Benefit': 'حتى يتمكن محرك بحث الذكاء الاصطناعي من استرداد البيانات بسلاسة.',
    'hiw.stories.c1Tag': 'واجهات برمجة التكامل',
    'hiw.stories.c2Role': 'بصفتي مستخدماً',
    'hiw.stories.c2Want': 'أريد استخدام واجهة مستخدم بسيطة لإدخال استعلامات البحث',
    'hiw.stories.c2Benefit': 'حتى أتمكن من العثور بسرعة على البيانات في جداول إكسيل.',
    'hiw.stories.c2Tag': 'تصميم واجهة المستخدم',
    'hiw.stories.c3Role': 'بصفتي مطور ذكاء اصطناعي',
    'hiw.stories.c3Want': 'أريد تطوير خوارزمية ذكاء اصطناعي',
    'hiw.stories.c3Benefit': 'حتى تسترجع البيانات بكفاءة من جداول إكسيل الضخمة.',
    'hiw.stories.c3Tag': 'خوارزمية بحث الذكاء الاصطناعي',
    'hiw.stories.c4Role': 'بصفتي محلل بيانات',
    'hiw.stories.c4Want': 'أريد أن يقوم النظام بمعالجة البيانات في الوقت الفعلي',
    'hiw.stories.c4Benefit': 'حتى أتمكن من اتخاذ القرارات في الوقت المناسب بناءً على أحدث الرؤى.',
    'hiw.stories.c4Tag': 'واجهات برمجة التكامل',
    'hiw.stories.c5Role': 'بصفتي مهندس ضمان جودة',
    'hiw.stories.c5Want': 'أريد تنفيذ فحوصات الدقة',
    'hiw.stories.c5Benefit': 'حتى أضمن سلامة البيانات أثناء المعالجة.',
    'hiw.stories.c5Tag': 'تصميم واجهة المستخدم',
    'hiw.stories.c6Role': 'بصفتي مسؤول تقنية معلومات',
    'hiw.stories.c6Want': 'أريد التأكد من توافق أداة بحث الذكاء الاصطناعي مع جميع بيئات النظام',
    'hiw.stories.c6Benefit': 'حتى لا تكون هناك أي مشاكل في التكامل.',
    'hiw.stories.c6Tag': 'خوارزمية بحث الذكاء الاصطناعي',
    'hiw.stories.new': 'جديد',

    // Compilation Keys
    'hiw.compilation.title': 'متطلبات عمل منصة الجودة',
    'hiw.compilation.botTitle': 'بوت دردشة أركي',
    'hiw.compilation.botMsg': 'أعطني ملف إكسيل الخاص بك',
    'hiw.compilation.inputPlaceholder': 'تحميل ملف إكسيل...',
    'hiw.compilation.askAnything': 'اسأل عن أي شيء...',
    'hiw.compilation.build': 'بناء',
    'hiw.compilation.models': 'النماذج',

    // Phase 02
    'hiw.phase02.title': 'التفكيك الذكي',
    'hiw.phase02.desc': 'تتحول أفكارك المعتمدة فوراً إلى مراحل عمل احترافية ولوحة متابعة بصرية (Kanban) تتيح لك مراقبة الإنجاز ثانية بثانية.',
    'hiw.phase02.url': 'engine://milestone-roadmap',
    'hiw.phase02.row1.title': 'البنية التحتية للهوية ودرع الأمان',
    'hiw.phase02.row1.badge': 'النطاق مقفل',
    'hiw.phase02.row2.title': 'مصادقة الرمز المؤسسي وتسجيل الدخول الموحد',
    'hiw.phase02.row2.badge': 'متوافق',
    'hiw.phase02.row3.title': 'تكامل بوابة الرسائل النصية العُمانية',
    'hiw.phase02.row3.badge': 'جاهز ومُتحقق',

    // Phase 03
    'hiw.phase03.title': 'التنفيذ البرمجي',
    'hiw.phase03.desc': 'يقوم فريق ريوان بتمرير خطتك إلى محرك ',
    'hiw.phase03.brand': 'Archi Dev',
    'hiw.phase03.descEnd': '، ليبني فوريًا واجهات التطبيق، وقواعد البيانات الآمنة، واختبارات السلامة التلقائية.',
    'hiw.phase03.url': 'engine://assembly-hub',
    'hiw.phase03.modules': 'وحدات التجميع',
    'hiw.phase03.m1': 'هيكل محرك العميل',
    'hiw.phase03.m2': 'مخطط مالي علائقي',
    'hiw.phase03.m3': 'مصفوفات تشفير الحالة',
    'hiw.phase03.diagnostics': 'تشخيصات النظام',
    'hiw.phase03.p1': 'تجميع واجهة المستخدم',
    'hiw.phase03.p2': 'البنية التحتية الموزعة',
    'hiw.phase03.p3': 'بروتوكولات التحقق الآلي',
    'hiw.phase03.footer': 'تم تحسين التحقق من النظام. تم تجميع حمولة الإنتاج.',

    // ──── Features Section ────
    'features.divider': 'تعرّف على ريوان أركي',
    'features.heading': 'فريق تطوير ذكاء اصطناعي متكامل',
    'features.desc': 'أركي يؤتمت بالكامل طريقة بناء البرمجيات. يعمل كمحلل أعمال خبير وفريق هندسة رئيسي، يعملان معاً بتناغم تام.',
    'features.f1.title': 'الأتمتة',
    'features.f1.desc': 'تجنب الاستفسارات المتكررة مع سير عمل ذكاء اصطناعي يتصل ببياناتك وأدواتك.',
    'features.f2.title': 'مساعد الوكيل',
    'features.f2.desc': 'ردود مقترحة وملخصات ورؤى مباشرة حيث يعمل وكلاؤك.',
    'features.f3.title': 'الحوكمة',
    'features.f3.desc': 'حواجز حماية وموافقات وتحليلات لتبقى آمناً ودقيقاً ومتسقاً.',

    // ──── Tech Stack Section ────
    'techstack.label': '04 / التقنيات المستخدمة',
    'techstack.headline': 'أي تقنية تختارها. مُهندَسة تلقائياً.',
    'techstack.group1.label': 'تقنيات حديثة وواجهات المستخدم',
    'techstack.group2.label': 'الخوادم والأطر والأنظمة المؤسسية',
    'techstack.group3.label': 'البيانات والبنية التحتية والسحابة',
    'techstack.group4.label': 'الجوال، الذكاء الاصطناعي وضمان الجودة',
    'techstack.stat1.value': '95',
    'techstack.stat1.accent': '%',
    'techstack.stat1.title': 'إلغاء الأعمال البرمجية التكرارية',
    'techstack.stat1.desc': 'تكتب Archi البنية الأساسية فوراً، ليتفرغ المهندسون بالكامل لمنطق مشروعك وأهدافك الاستثمارية.',
    'techstack.stat2.value': '720',
    'techstack.stat2.accent': 'x',
    'techstack.stat2.title': 'سرعة الهندسة المعمارية',
    'techstack.stat2.desc': 'ما كان يستغرق أسبوعاً من الاجتماعات الفنية، يتم هندسته بدقة مطلقة في 10 دقائق فقط.',
    'techstack.stat3.value': '14',
    'techstack.stat3.accent': 'x',
    'techstack.stat3.title': 'تسريع وقت التنفيذ',
    'techstack.stat3.desc': 'يتحول مشروعك من فكرة معتمدة إلى تطبيق حي جاهز خلال يومين أو ثلاثة بدلاً من أشهر طويلة.',
    'techstack.stat4.value': '100',
    'techstack.stat4.accent': '%',
    'techstack.stat4.title': 'سيادة كاملة للمعلومات',
    'techstack.stat4.desc': 'مصممة لتشتغل محلياً على خوادمك. بياناتك وشفرتك البرمجية لا تخرج خارج حدود مؤسستك أو دولتكم أبداً.',
    // ──── Core Features Section ────
    'core.badge': 'الميزات الأساسية',
    'core.h2.line1': 'من التخطيط إلى الكود.',
    'core.h2.line2': 'كل ذلك في محرك واحد.',
    'core.desc': 'يتحكم Archi بدورة حياة تطوير برمجياتك بالكامل؛ فيصيغ متطلباتك، ويرسم قصص المستخدمين الفنية، وينتج أكواداً برمجية جاهزة للتشغيل مع تحقق كامل من المنطق.',
    'core.tab.community': 'المجتمع',
    'core.tab.courses': 'الدورات',
    'core.tab.events': 'الفعاليات',
    'core.tab.members': 'الأعضاء',
    'core.invite': 'دعوة',
    'core.sidebar.chat': 'الدردشة',
    'core.sidebar.courses': 'الدورات',
    'core.sidebar.events': 'الفعاليات',
    'core.sidebar.members': 'الأعضاء',
    'core.sidebar.leaderboard': 'المتصدرين',
    'core.sidebar.coursesLabel': 'الدورات',
    'core.sidebar.c1': 'طرق بحث المستخدم',
    'core.sidebar.c2': 'التفكير المنتجي',
    'core.sidebar.c3': 'أنظمة التصميم',
    'core.sidebar.c4': 'دورة Framer',
    'core.sidebar.c5': 'ابدأ هنا',
    'core.input.placeholder': 'ما الذي يشغل بالك؟',
    'core.input.discussion': 'نقاش',
    'core.input.questions': 'أسئلة',
    'core.input.resources': 'موارد',

    // ──── Features Stack Section ────
    'stack.badge': 'ماذا تحصل',
    'stack.h2.line1': 'أعدّه مرة واحدة.',
    'stack.h2.line2': 'شغّله كما تريد.',
    'stack.desc': 'أركي مصمم لتقضي وقتك مع عملك، لا في إعداده. من أول إعداد إلى مئة سير عمل، المنصة لا تقف في طريقك.',
    'stack.card1.tag': 'واجهتك الأمامية',
    'stack.card1.title': 'صفحة نظرة عامة للمجتمع تبيع نفسها.',
    'stack.card1.desc': 'صفحة النظرة العامة هي أول ما يراه الزائر — اجعلها تعبّر عنك.',
    'stack.card2.tag': 'مساحات مخصصة',
    'stack.card2.title': 'أنشئ مساحات مصممة حسب احتياجاتك.',
    'stack.card2.desc': 'سواء كان ركناً خاصاً للقيادة أو مساحة عامة لأعضاء المجتمع، يمكنك ضبط الوصول والتخطيط والأدوات لتناسب احتياجات مجموعتك بالضبط.',
    'stack.card3.tag': 'تكاملات سلسة',
    'stack.card3.title': 'اربط الأدوات التي تستخدمها بالفعل.',
    'stack.card3.desc': 'تكامل مع Slack و Discord و Notion والمزيد. حافظ على تزامن مجتمعك بدون إجبارهم على تعلم منصات جديدة أو التخلي عن أدواتهم المفضلة.',

    // ──── Footer ────
    'footer.cta.heading': 'هل أنت مستعد لتحديد رؤيتك بدقة؟',
    'footer.cta.button': 'احجز عرضاً تجريبياً',
    'footer.brand': 'أركي',
    'footer.slogan': '{هندسة} مستقبل البرمجيات، ذاتياً. صُنعت في {صلالة}.',
    'footer.tagline': 'تمكين الشركات في عُمان بحلول الذكاء الاصطناعي المتطورة.',
    'footer.links': 'روابط',
    'footer.socials': 'التواصل الاجتماعي',
    'footer.newsletter.heading': 'ابقَ على اطلاع',
    'footer.newsletter.desc': 'احصل على أحدث الأفكار وتحديثات المنتجات مباشرة إلى بريدك الإلكتروني.',
    'footer.newsletter.placeholder': 'بريدك@الإلكتروني.com',
    'footer.newsletter.subscribe': 'اشترك',
    'footer.phone.label': 'رقم الهاتف',
    'footer.email.label': 'البريد الإلكتروني',
    'footer.location.label': 'الموقع',
    'footer.website.label': 'الموقع الإلكتروني',
    'footer.phone': '+968 7662 6636',
    'footer.email': 'info@rewan.ai',
    'footer.location': 'صلالة، سلطنة عمان',
    'footer.website': 'rewan.ai',
    'footer.copyright': '© 2026 أركي. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.nav.products': 'التقنيات والإحصائيات',
    'footer.nav.solutions': 'كيف تعمل المنصة',
    'footer.nav.resources': 'ما هي منصة أركي',
    'footer.nav.support': 'الميزات الأساسية',
    'footer.social.twitter': 'تويتر',
    'footer.social.linkedin': 'لينكد إن',
    'footer.social.github': 'جيت هب',
    'seo.title': 'أركي | منصة هندسة البرمجيات وتجميع الكود التلقائي',
    'seo.desc': 'منصة أركي هي محرك إدراكي تفاعلي يحاورك، وينظم أفكارك العشوائية، ويقوم تلقائياً ببناء وثائق المتطلبات الفنية، وخرائط الطريق، وتجميع تطبيقات برمجية جاهزة للإنتاج.',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => { },
  toggleLang: () => { },
  t: (key: string) => key,
  isRTL: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang') as Lang;
      if (urlLang === 'en' || urlLang === 'ar') {
        return urlLang;
      }
      const saved = localStorage.getItem('archi_lang') as Lang;
      if (saved === 'en' || saved === 'ar') {
        return saved;
      }
    }
    return 'ar';
  });
  const isRTL = lang === 'ar';

  const t = useCallback((key: string): string => {
    const val = translations[lang][key];
    if (val !== undefined) return val;
    const fallback = translations['en'][key];
    if (fallback !== undefined) return fallback;
    return key;
  }, [lang]);

  const handleSetLang = useCallback((newLang: Lang) => {
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('archi_lang', newLang);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLang);
      window.history.replaceState(null, '', url.toString());
    }
  }, []);

  const toggleLang = useCallback(() => {
    handleSetLang(lang === 'en' ? 'ar' : 'en');
  }, [lang, handleSetLang]);

  // Apply direction, font, and SEO metadata to document
  useEffect(() => {
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    document.body.style.fontFamily = isRTL
      ? "'Tajawal', 'Cairo', sans-serif"
      : "'Inter', 'Cairo', sans-serif";

    // Dynamically update document title
    document.title = t('seo.title');

    // Dynamically update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', t('seo.desc'));

    // Dynamically update Open Graph / Facebook Metadata
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t('seo.title'));
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t('seo.desc'));

    // Dynamically update Twitter Metadata
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', t('seo.title'));
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', t('seo.desc'));

    // Dynamically update JSON-LD Schema
    const schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemas = JSON.parse(schemaScript.innerHTML);
        if (Array.isArray(schemas)) {
          schemas.forEach((schema: any) => {
            if (schema["@type"] === "SoftwareApplication" || schema["@type"] === "WebSite") {
              schema.description = t('seo.desc');
              schema.name = lang === 'ar' ? 'أركي' : 'Archi';
            }
          });
          schemaScript.innerHTML = JSON.stringify(schemas, null, 2);
        }
      } catch (e) {
        console.error("Failed to parse/update schema JSON-LD", e);
      }
    }
  }, [lang, isRTL, t]);

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, toggleLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
