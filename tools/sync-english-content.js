const fs = require("fs");

function loadSnapshot(file) {
  const source = fs.readFileSync(file, "utf8");
  const marker = "window.__SITE_SNAPSHOT__=";
  const start = source.indexOf(marker);
  if (start < 0) throw new Error(`Missing snapshot marker in ${file}`);
  const jsonStart = start + marker.length;
  const end = source.indexOf("const $ =", jsonStart);
  if (end < 0) throw new Error(`Missing script boundary in ${file}`);
  const json = JSON.parse(source.slice(jsonStart, end).trim().replace(/;$/, ""));
  return { source, jsonStart, end, json };
}

function saveSnapshot(file, snapshot) {
  const next =
    snapshot.source.slice(0, snapshot.jsonStart) +
    JSON.stringify(snapshot.json) +
    ";\r\n" +
    snapshot.source.slice(snapshot.end);
  fs.writeFileSync(file, next, "utf8");
}

function replaceAllInFile(file, replacements) {
  let text = fs.readFileSync(file, "utf8");
  for (const [from, to] of replacements) {
    text = text.split(from).join(to);
  }
  fs.writeFileSync(file, text, "utf8");
}

const officialLegal =
  '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">鄂ICP备2026031741号</a>  © 2026 <a href="https://chuyunai.com.cn/" target="_blank" rel="noopener">湖北楚云数航科技有限公司</a>. All Rights Reserved.';

const app = loadSnapshot("static/js/app.js");
const home = app.json.home;

home.config.languageOptionConfig = {
  "简体中文": { code: "zh-CN", label: "简体中文" },
  English: { code: "en", label: "English" }
};

home["home-content"].en = {
  title: "ChuYun Digital Voyage",
  description:
    "Official website of Hubei ChuYun Digital Voyage Technology Co., Ltd., presenting AI comic-drama production and training, cross-border store-cluster investment and incubation, OPC park infrastructure and operations, AI compute operations and sales, and strategic cooperation with Optics Valley Supercomputing Center.",
  brandLabel: "ChuYun Digital Voyage Home",
  nav: [
    { label: "Business Matrix", url: "#products" },
    { label: "Platform", url: "#technology" },
    { label: "Project Updates", url: "/en/investor/#announcements" },
    { label: "Partnerships", url: "/en/partner/" },
    { label: "Contact", url: "/en/about/#contact" },
    { label: "About Us" }
  ],
  aboutDropdown: {
    label: "About ChuYun Digital Voyage navigation",
    heading: "About ChuYun Digital Voyage",
    links: [
      { label: "Company Overview", url: "/en/about/" },
      { label: "Contact Us", url: "/en/about/#contact" }
    ],
    csr: "Project Progress",
    csrLinks: [
      { label: "Project Stages and Resources", url: "/en/investor/" },
      { label: "Milestones", url: "/en/investor/#announcements" },
      { label: "Cooperation Contact", url: "/en/investor/#investor-contact" }
    ],
    partner: "Partnership System",
    partnerLinks: [
      { label: "Partner Types", url: "/en/partner/" },
      { label: "Submit Interest", url: "/en/partner/#recruit" }
    ]
  },
  mobile: { menuLabel: "Menu", aboutTitle: "About Us" },
  cta: { label: "Get the Plan", url: "/en/partner/" },
  languageLabel: "Language",
  languageDropdown: "Language selection",
  hero: {
    title: "ChuYun Digital Voyage<br />AI Content, Cross-Border & Compute Platform",
    subtitle:
      "Built around AI comic-drama production and training, cross-border store-cluster investment and incubation, OPC park infrastructure and operations, and AI compute operations and sales, ChuYun connects university talent, government parks, cross-border channels, Optics Valley supercomputing resources and industrial service partners.",
    button: "Explore Partnerships",
    url: "partner.html?lang=en"
  },
  news: {
    heading: "Project Progress",
    prev: "Previous update",
    next: "Next update",
    more: "View More",
    moreUrl: "investor.html?lang=en#announcements",
    slides: [
      {
        image: "news-robot-home-carousel.jpg",
        url: "investor.html?lang=en#announcements",
        chips: ["Business Upgrade", "Optics Valley Compute"],
        mediaWords: ["AI Drama", "Store Clusters", "Compute"],
        title: "ChuYun Completes the Upgrade of Four Core Business Lines",
        strong: "Industry Loop",
        body:
          '<span class="news-copy-nowrap">The business matrix now covers AI comic-drama production and training, cross-border store-cluster incubation, OPC park operations, AI compute sales, and strategic resources from Optics Valley Supercomputing Center.</span>',
        button: "View Details"
      }
    ]
  },
  productsHeading: {
    title: "Business Matrix",
    subtitle:
      "A practical, replicable business portfolio across AI content, cross-border store clusters, OPC parks and AI compute resources"
  },
  technology: {
    title: "Platform Capabilities",
    subtitle:
      "Four platform capabilities support content production, store-cluster operations, park management and compute-resource commercialization",
    listLabel: "Platform capability list",
    cards: [
      {
        title: "AI Content and Comic-Drama Production Hub",
        body:
          "Organizes scripts, characters, storyboards, assets, templates, task collaboration and publishing workflows for AI comic-drama training, brand content production and account-matrix operations.",
        meta: "Content Engine",
        button: "Learn More",
        buttonUrl: "about.html?lang=en",
        image: "static/picture/chuyun-brand-placeholder.svg"
      },
      {
        title: "Cross-Border Store-Cluster Operations Platform",
        body:
          "Manages multi-store operations, orders, inventory, customer service, product selection, financial settlement and investment reviews so incubation projects have data, risk control and revenue models.",
        meta: "Operating System",
        button: "Learn More",
        buttonUrl: "partner.html?lang=en#solutions",
        image: "static/picture/chuyun-brand-placeholder.svg"
      },
      {
        title: "OPC Park Digital Operations Platform",
        body:
          "Covers workstations, trainees, projects, events, policy applications, investment promotion displays and government data dashboards for long-term park infrastructure and operations.",
        meta: "Park Foundation",
        button: "Learn More",
        buttonUrl: "partner.html?lang=en#recruit",
        image: "static/picture/chuyun-brand-placeholder.svg"
      },
      {
        title: "AI Compute Operations and Sales Platform",
        body:
          "Works with strategic resources such as Optics Valley Supercomputing Center to package compute plans, API usage, model applications, cost accounting and channel sales.",
        meta: "Compute Resources",
        button: "Learn More",
        buttonUrl: "investor.html?lang=en#announcements",
        image: "static/picture/chuyun-brand-placeholder.svg"
      }
    ]
  },
  footer: {
    slogan: "Let OPC entrepreneurship start with one person and scale through ChuYun's platform.",
    legal: officialLegal
  }
};

home.products.en = {
  sensenova: {
    number: "01",
    title: "AI Comic-Drama Production and Training",
    subtitle: "Turning AI content production into a trainable, deliverable and commercial workflow",
    dynamicBackground: true,
    links: [
      {
        title: "AI Comic-Drama Curriculum",
        kicker: "AI Drama Training",
        desc: "Covers script planning, storyboard generation, character consistency, dubbing, subtitles, editing, publishing and account operations.",
        tone: "nova",
        url: "partner.html?lang=en#recruit"
      },
      {
        title: "Content Production Delivery",
        kicker: "Content Studio",
        desc: "Provides corporate videos, brand shorts, virtual-human content, short drama and comic-drama IP production and operations.",
        tone: "video",
        url: "partner.html?lang=en#solutions"
      },
      {
        title: "University and Park Bootcamps",
        kicker: "Camp",
        desc: "Delivers AI content creation training and project incubation for universities, industrial parks, MCNs and startup teams.",
        tone: "commerce",
        url: "about.html?lang=en#contact"
      }
    ]
  },
  infra: {
    number: "02",
    title: "Cross-Border Store-Cluster Investment and Incubation",
    subtitle: "Screening venture projects through real stores, real orders and real operating data",
    dynamicBackground: true,
    links: [
      {
        title: "Store-Cluster Investment and Management",
        kicker: "Store Portfolio",
        desc: "Organizes store-cluster investment, managed operations and profit-sharing across TikTok, Ozon, AliExpress, independent sites and other channels.",
        tone: "commerce",
        url: "partner.html?lang=en#solutions"
      },
      {
        title: "Operations Coaching and Risk Control",
        kicker: "Operation",
        desc: "Standardizes product selection, listing, orders, customer service, review and risk control so each project can be tracked and improved.",
        tone: "nova",
        url: "partner.html?lang=en#benefits"
      },
      {
        title: "Project Pool and Capital Matching",
        kicker: "Capital Ready",
        desc: "Screens high-quality store-cluster projects through GMV, profit, repeat purchase and growth records, then connects them with investors and enterprise resources.",
        tone: "infra",
        url: "investor.html?lang=en#investor-contact"
      }
    ]
  },
  city: {
    number: "03",
    title: "OPC Park Infrastructure and Operations",
    subtitle: "Building operational showcases that can attract partners, incubate projects and demonstrate results",
    dynamicBackground: true,
    links: [
      {
        title: "OPC Space Planning",
        kicker: "Park Build",
        desc: "Plans OPC workstations, AI compute training rooms, cross-border operations zones, live-streaming rooms and university-enterprise meeting areas.",
        tone: "office",
        url: "partner.html?lang=en#solutions"
      },
      {
        title: "Park Operations Services",
        kicker: "Park Ops",
        desc: "Delivers investment promotion, events, training, roadshows, policy applications, project ledgers and data-dashboard operations.",
        tone: "commerce",
        url: "investor.html?lang=en#announcements"
      },
      {
        title: "Branch-Center Replication",
        kicker: "Replication",
        desc: "Builds a replicable OPC branch-center mechanism through cooperation with universities, industrial parks and local governments.",
        tone: "infra",
        url: "partner.html?lang=en#recruit"
      }
    ]
  },
  innovation: {
    number: "04",
    title: "AI Compute Operations and Sales",
    subtitle: "Connecting compute supply with AI application scenarios through Optics Valley supercomputing resources",
    dynamicBackground: true,
    links: [
      {
        title: "Compute Resource Sales",
        kicker: "Compute Sales",
        desc: "Develops compute packages, API relay services, model invocation services and enterprise compute procurement connections.",
        tone: "infra",
        url: "investor.html?lang=en#announcements"
      },
      {
        title: "AI Application Packaging",
        kicker: "AI Apps",
        desc: "Packages applications for AI comic drama, digital-human livestreaming, cross-border customer service, enterprise knowledge bases and virtual products.",
        tone: "video",
        url: "about.html?lang=en"
      },
      {
        title: "Optics Valley Supercomputing Partnership",
        kicker: "Optics Valley",
        desc: "Uses strategic cooperation with Optics Valley Supercomputing Center as resource backing for compute operations, project incubation and enterprise AI deployment.",
        tone: "nova",
        url: "partner.html?lang=en#benefits"
      }
    ]
  }
};

saveSnapshot("static/js/app.js", app);

const sub = loadSnapshot("static/js/subpage.js");
const sp = sub.json.subpage;

sp.investor["zh-CN"].documentsTitle = "项目材料";
sp.announcements.source = "ChuYun project roadmap";

sp.about.en = {
  title: "AI-Powered Digital Trade and Compute Operations Platform",
  subtitle:
    "ChuYun Digital Voyage uses AI comic-drama production, cross-border store clusters, OPC parks and AI compute as four anchors, connecting universities, government parks, Optics Valley supercomputing resources and industrial service partners.",
  aboutTitle: "About ChuYun Digital Voyage",
  quickNav: [["About Us", "#about"], ["Contact Us", "#contact"]],
  paragraphs: [
    "Hubei ChuYun Digital Voyage Technology Co., Ltd. is positioned as an AI-powered platform for cross-border commerce, AI content and compute park operations, serving universities, government parks, entrepreneurs, investors, cross-border merchants, AI content teams and enterprise clients.",
    "Its four core business lines are AI comic-drama production and training, cross-border store-cluster investment and incubation, OPC park infrastructure and operations, and AI compute operations and sales. Together they form a closed loop from learning, production, store launch and operations to compute usage and project incubation.",
    "At the resource layer, ChuYun incorporates strategic cooperation with Optics Valley Supercomputing Center into its compute-resource system, combining API platforms, model applications, enterprise AI scenarios and park training spaces to support AI content and cross-border commerce deployment.",
    "The company aims to help students, entrepreneurs and enterprises access courses, projects, stores, compute power, mentors, capital and park carriers through one platform, so OPC entrepreneurship can start with one person and scale through ChuYun's platform."
  ],
  stats: [
    ["4", "Core Business Lines"],
    ["4", "Platform Capabilities"],
    ["Optics Valley", "Strategic Compute Resources"],
    ["Store Clusters", "Cross-Border Incubation Model"],
    ["OPC Parks", "Infrastructure and Operations Showcase"],
    ["AI Drama", "Production and Training System"]
  ],
  contactTitle: "Contact Us",
  contactSubtitle:
    "We welcome discussions on AI comic-drama training, cross-border store-cluster investment, OPC park operations, AI compute cooperation, university programs and government-enterprise resource coordination.",
  contacts: [
    { label: "Business Cooperation", email: "business@chuyunai.com.cn", note: "Business cooperation and solution alignment" },
    { label: "Brand and Marketing", email: "brand@chuyunai.com.cn" },
    { label: "Ecosystem Cooperation", email: "partner@chuyunai.com.cn" },
    { label: "Investment and Projects", email: "capital@chuyunai.com.cn" },
    { label: "Customer Service", email: "service@chuyunai.com.cn" },
    { label: "Submit Partnership Interest", email: "partner@chuyunai.com.cn" }
  ],
  officesTitle: "Cooperation and Operations Scenarios",
  officesSubtitle:
    "A collaboration network across universities, parks, cross-border channels, AI content teams, compute resources and industrial service providers.",
  offices: [
    ["Wuhan Optics Valley Science Island", "China", "Building 4, Phase I, Science and Innovation Center, Optics Valley Science Island, Wuhan"],
    ["Wuhan Optics Valley", "China", "Core area for company landing and OPC park operations"],
    ["Optics Valley Supercomputing Center", "China", "Strategic resource for AI compute operations, sales and enterprise applications"],
    ["University Bases", "China", "AI comic drama, digital trade, cross-border store clusters and SYB entrepreneurship training"],
    ["Cross-Border Channels", "Global", "TikTok / Ozon / AliExpress / independent sites and related tracks"],
    ["AI Content Ecosystem", "China", "Short drama, comic drama, virtual humans, digital-human livestreaming and content commerce"]
  ]
};

sp.partner.en = {
  heroTitle: "Build the AI Content, Cross-Border Store-Cluster, OPC Park and Compute Ecosystem with ChuYun",
  heroSubtitle:
    "For universities, government parks, content teams, cross-border merchants, investors and compute partners, ChuYun provides an industrial cooperation plan that can be trained, invested in, operated and replicated.",
  heroCta: "Submit Partnership Interest",
  applicationUrl: "about.html?lang=en#contact",
  partnerUrl: "about.html?lang=en#contact",
  quickNav: [["Value", "#why"], ["Scenarios", "#solutions"], ["Partners", "#recruit"], ["Support", "#benefits"]],
  quickNavLabel: "⌖ Quick Nav",
  navAriaLabel: "ChuYun partnership quick navigation",
  whyTitle: "Why Work with ChuYun",
  whySubtitle:
    "Connect university talent, government policies, industrial service providers, cross-border channels and capital resources through one platform",
  whyApply: "Start Cooperation",
  why: [
    ["01", "Four Business Lines, Clear Cooperation Entry Points", "AI comic-drama production and training, cross-border store-cluster incubation, OPC park operations and AI compute sales can be launched separately or combined into integrated projects."],
    ["02", "Real Projects, Measurable Outcomes", "Content works, store orders, park events, compute orders, trainee growth records and project returns become the core outcome indicators."],
    ["03", "Optics Valley Supercomputing Resources", "Strategic cooperation with Optics Valley Supercomputing Center supports AI comic drama, intelligent cross-border commerce and enterprise AI applications."],
    ["04", "Replicable Government-University-Enterprise-Park Model", "The model links university courses, park carriers, investment projects, compute sales and industrial showcases into replicable branch centers."]
  ],
  solutionsTitle: "Cooperation Scenarios",
  solutionsSubtitle:
    "Standardized cooperation plans for deployable projects across AI comic drama, cross-border store clusters, OPC parks and AI compute",
  solutions: [
    ["AI Content", "AI Comic-Drama Production and Training", "Jointly run AI comic-drama, virtual-human, short-video, brand-content and content-commerce training camps with universities, parks and content teams.", "static/picture/chuyun-brand-placeholder.svg", "AI Comic-Drama Production and Training"],
    ["Store Clusters", "Store-Cluster Investment and Project Incubation", "Provide managed cross-border store clusters, operation coaching, profit-sharing settlement and project-pool screening for investors, enterprises and entrepreneurs.", "static/picture/chuyun-brand-placeholder.svg", "Cross-Border Store-Cluster Investment and Incubation"],
    ["OPC Parks", "Park Infrastructure and Operations", "Plan OPC workstations, live rooms, product showcases, AI training rooms, roadshow events and data dashboards for government parks and industrial carriers.", "static/picture/chuyun-brand-placeholder.svg", "OPC Park Infrastructure and Operations"],
    ["AI Compute", "Compute Operations and Sales", "Use resources such as Optics Valley Supercomputing Center to develop compute packages, API relay, model application packaging and enterprise AI solutions.", "static/picture/chuyun-brand-placeholder.svg", "AI Compute Operations and Sales"]
  ],
  recruitTitle: "Partners We Are Looking For",
  recruitSubtitle:
    "Universities, parks, investors, compute partners and AI content teams can enter the cooperation process directly",
  partners: [
    ["Universities and Colleges", "Co-build AI comic-drama, digital trade, cross-border store-cluster, SYB/entrepreneurship courses and internship training bases.", "Submit University Cooperation Interest"],
    ["Governments and Industrial Parks", "Co-build OPC park carriers, AI compute training rooms, cross-border product showcases, entrepreneurship competitions and policy landing models.", "Submit Park Cooperation Needs"],
    ["Investors and Enterprise Clients", "Participate in store-cluster investment, brand globalization, supply cooperation, AI content projects, compute application projects and revenue sharing.", "Submit Investment Cooperation Needs"],
    ["Compute and AI Service Partners", "Work with resources such as Optics Valley Supercomputing Center to build compute sales, API platforms, model applications and industry solutions.", "Apply for Compute Ecosystem Cooperation"]
  ],
  benefitsTitle: "Platform Support and Cooperation Mechanism",
  benefitsSubtitle:
    "Break cooperation into courses, projects, spaces, compute, data and revenue mechanisms so each stage has deliverables and accumulated assets",
  benefits: [
    ["Top-Level Solution Co-Creation", "Jointly define the resource boundaries, revenue paths and stage goals for AI content, store clusters, OPC parks and compute sales."],
    ["Systems and Data Support", "Connect AI content hubs, store-cluster operations management, OPC park digital operations and AI compute sales management capabilities."],
    ["Operational Delivery Coaching", "Coordinate courses, enrollment, content production, store operations, park promotion, compute sales and project reviews."],
    ["Optics Valley Compute and Industrial Resources", "Connect projects with Optics Valley supercomputing resources, universities, governments, parks, cross-border channels, capital and industrial service providers according to project stage."]
  ],
  ctaChip: "Partnership window is open",
  ctaTitle: "Start Cooperation with ChuYun",
  ctaSubtitle:
    "Whether the need is AI comic-drama training, cross-border store-cluster investment, OPC park operations or AI compute sales, cooperation can begin with a clear industrial incubation plan.",
  ctaTrust: [
    "Each submission enters a manual review and solution discussion workflow",
    "Contact details can be updated before final launch if needed"
  ],
  ctaButton: "Submit Partnership Interest"
};

sp.investor.en = {
  quickNav: [["Governance", "#corporate-governance"], ["Milestones", "#financial-reports"], ["Project Updates", "#announcements"], ["Status", "#stock-price"], ["Contact", "#investor-contact"]],
  heroEvents: [
    { tag: "Current Phase", date: "2026.07", title: "Official website, corporate deck and investment materials being completed", image: "static/picture/chuyun-brand-placeholder.svg" },
    { tag: "Next Phase", date: "Planned", title: "University training and OPC park showcase model to be launched", image: "static/picture/chuyun-brand-placeholder.svg" },
    { tag: "Cooperation", date: "Open", title: "Open to cross-border service providers, content teams, compute channels, investors and enterprise clients", image: "static/picture/chuyun-brand-placeholder.svg" }
  ],
  heroLearnMore: "Learn More",
  quickNavLabel: "⌖ Quick Nav",
  governanceTitle: "Governance and Execution Model",
  governanceDesc:
    "ChuYun Digital Voyage is advancing four connected business lines: AI comic-drama production and training, cross-border store-cluster investment and incubation, OPC park infrastructure and operations, and AI compute operations and sales.",
  managementTitle: "Core Roles",
  management: [
    { name: "Business and Commercial Lead", title: "Owns business positioning, cooperation conversion and resource alignment", avatar: "static/picture/chuyun-brand-placeholder.svg", description: "Coordinates the brand website, corporate narrative, partner targeting and commercial cooperation logic." },
    { name: "AI Content and Training Lead", title: "Owns AI comic-drama curriculum, content production and training delivery", avatar: "static/picture/chuyun-brand-placeholder.svg", description: "Builds course frameworks, content workflows, production templates and campus/park training delivery." },
    { name: "Cross-Border Store-Cluster Operations", title: "Owns store-cluster projects, operations coaching and project-pool data", avatar: "static/picture/chuyun-brand-placeholder.svg", description: "Manages store operations, revenue review, risk control and partner service standards." },
    { name: "OPC Park and Compute Cooperation", title: "Owns park scenarios, compute resources and enterprise solution coordination", avatar: "static/picture/chuyun-brand-placeholder.svg", description: "Connects government parks, Optics Valley compute resources, AI applications and enterprise demand." }
  ],
  boardTitle: "Collaboration Structure",
  boardDirectors: [
    ["Business and Commercial Lead", "Owns overall direction, business coordination and external cooperation", "static/picture/chuyun-brand-placeholder.svg", true],
    ["AI Content and Training Lead", "Owns curriculum, content production and training delivery", "static/picture/chuyun-brand-placeholder.svg", false],
    ["Cross-Border Store-Cluster Operations", "Owns store-cluster operations, data and project incubation", "static/picture/chuyun-brand-placeholder.svg", false],
    ["OPC Park and Compute Cooperation", "Owns park operations, compute resources and enterprise applications", "static/picture/chuyun-brand-placeholder.svg", false],
    ["Partnership and Capital Interface", "Owns external resource matching and capital communication", "static/picture/chuyun-brand-placeholder.svg", false]
  ],
  committeeHeaders: ["AI Content", "Store Clusters", "OPC Parks", "Compute and Capital"],
  committeeRows: [
    ["Business and Commercial Lead", "member", "member", "member", "chair"],
    ["AI Content and Training Lead", "chair", null, "member", null],
    ["Cross-Border Store-Cluster Operations", null, "chair", "member", "member"],
    ["OPC Park and Compute Cooperation", null, null, "chair", "member"],
    ["Partnership and Capital Interface", "member", "member", null, "chair"]
  ],
  committeeLegendChair: "= Lead",
  committeeLegendMember: "= Member",
  documentsTitle: "Project Materials",
  documents: [["Corporate Promotion PPT", "content-research/chuyun-corporate-deck.pptx"]],
  docsViewMore: "View",
  docsOtherToggle: "More Materials",
  docsOtherAll: "Expand All",
  otherDocuments: [],
  reportsTitle: "Milestones and Roadmap",
  reportsDesc:
    "The current roadmap moves from the official website, corporate deck and investment materials to university training, OPC park showcases, service-provider onboarding and replicable branch centers.",
  performanceMore: "View More Phases",
  performanceYears: [["Phase 1: Brand and Materials", "phase-1"], ["Phase 2: Training and OPC Showcase", "phase-2"], ["Phase 3: Ecosystem Expansion", "phase-3"]],
  performanceLinks: {
    "phase-1": [["chart", "Official website, corporate deck and investment materials", "cn.html"], ["file", "AI comic-drama course framework", "partner.html?lang=en#solutions"], ["play", "Compute cooperation introduction", "investor.html?lang=en#announcements"]],
    "phase-2": [["chart", "University training and OPC park showcase", "partner.html?lang=en#recruit"], ["file", "Courses, workstations, stores and dashboards", "investor.html?lang=en#announcements"]],
    "phase-3": [["chart", "Cross-border service providers and content teams", "partner.html?lang=en#recruit"], ["file", "Investor and enterprise project pool", "investor.html?lang=en#investor-contact"]]
  },
  announcementsTitle: "Project Updates",
  announcementsDesc:
    "Progress is tracked across the official website, corporate promotion materials, university training, OPC park showcases, service-provider onboarding and branch-center replication.",
  announcements: [
    ["Phase 1: Complete the official website, corporate promotion PPT, investment materials, AI comic-drama course framework, cross-border store-cluster cooperation plan and compute cooperation introduction.", "investor.html?lang=en#announcements"],
    ["Phase 2: Build university training and OPC park showcases, forming courses, workstations, stores, content production, compute calls and data dashboards.", "investor.html?lang=en#announcements"],
    ["Phase 3: Introduce cross-border service providers, content teams, compute channels, investors and enterprise clients to form a sustainable project pool.", "investor.html?lang=en#announcements"],
    ["Phase 4: Promote branch-center replication and build a benchmark for Hubei AI digital trade and OPC full-scope incubation.", "investor.html?lang=en#announcements"]
  ],
  announcementsMore: "Return to Current List",
  announcementsMoreUrl: "investor.html?lang=en#announcements",
  announcementItemMore: "View Details",
  stockTitle: "Resource Cooperation Status",
  stockName: "Hubei ChuYun Digital Voyage Technology Co., Ltd.",
  stockExchange:
    "Project stage: integrating four business lines and Optics Valley supercomputing cooperation resources / open to universities, parks, investors, compute partners and enterprise clients",
  stockLoading: "Current version data",
  stockNote: "This section presents project-stage status only and does not provide live securities quotes.",
  stockMode: "placeholder",
  stockCurrency: "STATUS",
  stockStaticPrice: "In Progress",
  stockStaticChange: "Open to four business cooperation tracks",
  stockStaticTime: "Information follows the current project version",
  contactTitle: "Resource and Project Cooperation Contact",
  emailLabel: "Email",
  contactEmail: "capital@chuyunai.com.cn",
  addressLabel: "Address and Notes",
  addresses: [
    "Building 4, Phase I, Science and Innovation Center, Optics Valley Science Island, Wuhan",
    "Please schedule discussions through the website contact form for AI comic drama, cross-border store clusters, OPC parks and AI compute cooperation."
  ]
};

sp.announcements.en = [
  {
    date: "Phase 1",
    category: "Project Updates",
    title:
      "Phase 1: Complete the official website, corporate promotion PPT, investment materials, AI comic-drama course framework, cross-border store-cluster cooperation plan and compute cooperation introduction.",
    url: "investor.html?lang=en#announcements"
  },
  {
    date: "Phase 2",
    category: "Project Updates",
    title:
      "Phase 2: Build university training and OPC park showcases, forming courses, workstations, stores, content production, compute calls and data dashboards.",
    url: "investor.html?lang=en#announcements"
  },
  {
    date: "Phase 3",
    category: "Project Updates",
    title:
      "Phase 3: Introduce cross-border service providers, content teams, compute channels, investors and enterprise clients to form a sustainable project pool.",
    url: "investor.html?lang=en#announcements"
  },
  {
    date: "Phase 4",
    category: "Project Updates",
    title:
      "Phase 4: Promote branch-center replication and build a benchmark for Hubei AI digital trade and OPC full-scope incubation.",
    url: "investor.html?lang=en#announcements"
  }
];

sp["announcements.seed"].en = sp.announcements.en;

sp.shell.en = {
  htmlLang: "en",
  brand: { label: "ChuYun Digital Voyage Home", url: "/en/" },
  nav: [
    { label: "Business Matrix", url: "/en/#products" },
    { label: "Platform", url: "/en/#technology" },
    { label: "Project Updates", url: "/en/investor/#announcements" },
    { label: "Partnerships", url: "/en/partner/" },
    { label: "Contact", url: "/en/about/#contact" },
    { label: "About Us" }
  ],
  companyLabel: "About ChuYun navigation",
  aboutHeading: "About ChuYun Digital Voyage",
  aboutLinks: [
    { label: "Company Overview", url: "/en/about/" },
    { label: "Contact Us", url: "/en/about/#contact" }
  ],
  csrHeading: "Project Progress",
  csrLinks: [
    { label: "Project Stages and Resources", url: "/en/investor/" },
    { label: "Milestones", url: "/en/investor/#announcements" },
    { label: "Cooperation Contact", url: "/en/investor/#investor-contact" }
  ],
  partnerHeading: "Partnership System",
  partnerLinks: [
    { label: "Partner Types", url: "/en/partner/" },
    { label: "Submit Interest", url: "/en/partner/#recruit" }
  ],
  language: "English",
  languageLabel: "Language",
  cta: { label: "Get the Plan", url: "/en/partner/" },
  menu: "Menu",
  footerSlogan: "Let OPC entrepreneurship start with one person and scale through ChuYun's platform.",
  legal: officialLegal
};

saveSnapshot("static/js/subpage.js", sub);

replaceAllInFile("en.html", [
  [
    "ChuYun Digital Voyage | Integrated Platform for Cross-Border Commerce and AI Ventures",
    "ChuYun Digital Voyage | AI Content, Cross-Border Store Clusters, OPC Parks and AI Compute Platform"
  ],
  [
    "ChuYun Digital Voyage focuses on cross-border commerce, AI venture incubation, SaaS site building, and public-sector collaboration.",
    "ChuYun Digital Voyage presents AI comic-drama production and training, cross-border store-cluster investment and incubation, OPC park infrastructure and operations, AI compute operations and sales, and Optics Valley supercomputing cooperation resources."
  ],
  ["Business Matrix", "Business Matrix"],
  ["AI Digital Incubation Platform", "AI Content, Cross-Border & Compute Platform"],
  [
    "From brand websites and content growth to operational collaboration and public-sector delivery, we help projects move faster from concept to execution.",
    "Connecting university talent, government parks, cross-border channels, Optics Valley compute resources and industrial service partners."
  ],
  ["An integrated portfolio spanning cross-border commerce, AI venture support, SaaS site building, and public-sector collaboration", "A practical business portfolio across AI content, cross-border store clusters, OPC parks and AI compute resources"],
  ["Cross-Border Commerce &amp; Brand Incubation", "AI Comic-Drama Production and Training"],
  ["AI Site SaaS &amp; Operations Core", "Cross-Border Store-Cluster Investment and Incubation"],
  ["AI Content Growth &amp; Data Operations", "OPC Park Infrastructure and Operations"],
  ["Public Collaboration &amp; Venture Support", "AI Compute Operations and Sales"],
  ["Website Planning &amp; IA", "AI Comic-Drama Curriculum"],
  ["SaaS Site Delivery", "Store-Cluster Investment and Management"],
  ["AI Content Operations", "OPC Park Operations Services"],
  ["Brand Incubation Planning", "Compute Resource Sales"],
  ["Project Milestones", "Project Milestones"],
  ["Submit Collaboration", "Submit Partnership Interest"],
  ["AI Content Engine", "AI Content and Comic-Drama Production Hub"],
  ["SaaS Site Core", "Cross-Border Store-Cluster Operations Platform"],
  ["Cross-Border Operations", "OPC Park Digital Operations Platform"],
  ["Public-Sector Delivery", "AI Compute Operations and Sales Platform"],
  ["Pioneering the Era of Unified Model Understanding &amp; Generation", "Connecting university talent, government parks, cross-border channels, Optics Valley compute resources and industrial service partners."],
  ["Contact Us", "Explore Partnerships"],
  ["Products", "Business Matrix"],
  ["Services", "Business Matrix"],
  ["Partner With Us", "Partnerships"],
  ["Project Governance", "Project Progress"],
  ["Governance & Collaboration", "Project Stages and Resources"],
  ["Platform Principles", "Cooperation Contact"],
  ["Partner Program", "Partner Types"],
  ["Platform Notes", "Cooperation Contact"],
  ["AI Digital Incubation Platform", "AI Content, Cross-Border & Compute Platform"],
  ["Technology", "Platform"],
  ["TECH", "PLATFORM"],
  ["Generative AI", "AI Content and Comic-Drama Production Hub"],
  ["Model Compute", "Operating System"],
  ["Visual AI", "Park Foundation"],
  ["Research", "Compute Resources"],
  ["Supports multi-tenant, multi-site, multi-template, and plugin-based delivery so front-end sites and admin modules can evolve independently.", "Manages multi-store operations, orders, inventory, customer service, product selection, financial settlement and investment reviews so incubation projects have data, risk control and revenue models."],
  ["Packages websites, content, dashboards, and project showcases into standardized solutions for industrial parks, incubators, and enterprise programs.", "Covers workstations, trainees, projects, events, policy applications, investment promotion displays and government data dashboards for long-term park infrastructure and operations."],
  ["Grounded in academic excellence and forward-looking vision, we advance breakthrough AI research into scalable, real-world applications that empower diverse industries.", "Works with strategic resources such as Optics Valley Supercomputing Center to package compute plans, API usage, model applications, cost accounting and channel sales."],
  [
    "ChuYun Digital Voyage benchmark website demo | Corporate registration, filing details, and official contact information will be finalized before launch",
    officialLegal
  ]
]);
