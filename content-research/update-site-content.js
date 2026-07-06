const fs = require("fs");

function loadSnapshot(file) {
  const source = fs.readFileSync(file, "utf8");
  const marker = "window.__SITE_SNAPSHOT__=";
  const start = source.indexOf(marker) + marker.length;
  const end = source.indexOf("const $ =");
  const json = JSON.parse(source.slice(start, end).trim().replace(/;$/, ""));
  return { source, start, end, json };
}

function saveSnapshot(file, snapshot) {
  const next =
    snapshot.source.slice(0, snapshot.start) +
    JSON.stringify(snapshot.json) +
    ";\r\n" +
    snapshot.source.slice(snapshot.end);
  fs.writeFileSync(file, next, "utf8");
}

const app = loadSnapshot("static/js/app.js");
const home = app.json.home;
const zh = home["home-content"]["zh-CN"];

Object.assign(zh, {
  title: "楚云数航",
  description:
    "湖北楚云数航科技有限公司官网，展示AI驱动的跨境电商OPC全域数字孵化平台、三大核心系统、高校产教融合与政企园区合作能力。",
  nav: [
    { label: "业务版图", url: "#products" },
    { label: "平台能力", url: "#technology" },
    { label: "项目进展", url: "/cn/investor/#announcements" },
    { label: "合作体系", url: "/cn/partner/" },
    { label: "联系我们", url: "/cn/about/#contact" },
    { label: "关于我们" }
  ],
  hero: {
    title: "楚云数航<br />AI驱动的跨境电商OPC全域数字孵化平台",
    subtitle:
      "连接高校人才、政府政策、跨境渠道、AI技术与产业服务商，打造从实训、开店、运营到数据诊断、资源撮合和项目孵化的一体化平台。",
    button: "查看合作体系",
    url: "partner.html"
  },
  productsHeading: {
    title: "业务版图",
    subtitle:
      "围绕跨境电商OPC孵化、AI数字贸易平台、高校产教融合与园区资源运营形成一体化服务矩阵"
  },
  technology: {
    title: "平台能力",
    subtitle: "以三大核心系统和统一数据底座支撑实训、经营、监管、融资与规模化复制",
    listLabel: "平台能力列表",
    cards: [
      {
        title: "AI智慧信息管理系统",
        body:
          "采集店群经营数据，自动生成日报、周报、经营诊断、策略建议与政府产业监测数据，让孵化成果可量化、可展示、可复盘。",
        meta: "决策大脑",
        button: "了解更多",
        buttonUrl: "about.html"
      },
      {
        title: "电商店群管理系统",
        body:
          "支持多店铺隔离运营、任务分发、选品刊登、订单库存与客服协同，承接学生实战训练和赛道服务商交付。",
        meta: "执行手脚",
        button: "了解更多",
        buttonUrl: "partner.html#solutions"
      },
      {
        title: "OPC项目管理系统",
        body:
          "沉淀创业者、资金方、服务商三方项目台账，管理成长档案、融资进度、政策申报和政企展示窗口。",
        meta: "资源心脏",
        button: "了解更多",
        buttonUrl: "partner.html#recruit"
      },
      {
        title: "政校企资源协同",
        body:
          "连接高校实训、政府政策、园区载体、阿里云支持、跨境平台与赛道服务商，形成可复制的分中心合作体系。",
        meta: "生态网络",
        button: "了解更多",
        buttonUrl: "investor.html"
      }
    ]
  }
});

zh.aboutDropdown.csr = "项目进展";
zh.aboutDropdown.heading = "关于楚云数航";
zh.aboutDropdown.csrLinks = [
  { label: "项目阶段与资源合作", url: "/cn/investor/" },
  { label: "阶段进展", url: "/cn/investor/#announcements" },
  { label: "合作联系", url: "/cn/investor/#investor-contact" }
];
zh.aboutDropdown.founder = { label: "平台规划", url: "/cn/about/" };
zh.cta = { label: "获取合作方案", url: "/cn/partner/" };
zh.footer.slogan = "让OPC创业从一个人开始，由楚云一套平台放大";
zh.footer.legal =
  '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">鄂ICP备2026031741号</a>  © 2026 <a href="https://chuyunai.com.cn/" target="_blank" rel="noopener">湖北楚云数航科技有限公司</a>. All Rights Reserved.';
zh.news.heading = "项目进展";
zh.news.more = "查看更多";
zh.news.slides = [
  {
    image: "news-robot-home-carousel.jpg",
    url: "about.html",
    chips: ["平台定位", "OPC孵化"],
    mediaWords: ["AI", "跨境", "高校"],
    title: "楚云数航平台定位完成",
    strong: "全域孵化",
    body:
      '<span class="news-copy-nowrap">以AI智慧信息管理、电商店群管理、OPC项目管理三大系统为核心，形成面向高校、政府、服务商和投资人的跨境创业孵化闭环。</span>',
    button: "查看详情"
  }
];

home.products["zh-CN"].sensenova = {
  number: "01",
  title: "跨境电商OPC孵化",
  subtitle: "让学生与创业者从实训走向真实店铺经营",
  dynamicBackground: true,
  links: [
    {
      title: "高校实战育人基地",
      kicker: "Campus Incubation",
      desc: "面向高校共建数字贸易创业实训基地，承接SYB、双创课程、实习实训与学分化成果。",
      tone: "nova",
      url: "partner.html#recruit"
    },
    {
      title: "多赛道创业训练",
      kicker: "OPC Tracks",
      desc: "覆盖无人直播、速卖通、Ozon、TikTok、非洲独立站、内容电商等项目库。",
      tone: "commerce",
      url: "partner.html#solutions"
    },
    {
      title: "店铺陪跑与分润结算",
      kicker: "Operation",
      desc: "通过统一SOP、带班培训、运营指导和对公结算机制，保障项目交付和风控。",
      tone: "video",
      url: "partner.html#benefits"
    }
  ]
};

home.products["zh-CN"].infra = {
  number: "02",
  title: "AI数字贸易平台",
  subtitle: "三大核心系统支撑全域孵化闭环",
  dynamicBackground: true,
  links: [
    {
      title: "AI智慧信息管理",
      kicker: "AI Brain",
      desc: "分析经营数据、输出诊断报表、推送优化策略并支撑政府监管大屏。",
      tone: "infra",
      url: "about.html"
    },
    {
      title: "电商店群管理",
      kicker: "Store Cluster",
      desc: "集中管理多店铺、任务、选品、刊登、订单与客服，形成真实经营数据源。",
      tone: "nova",
      url: "partner.html#solutions"
    },
    {
      title: "OPC项目管理",
      kicker: "Project Hub",
      desc: "对接创业者、资金方与服务商，沉淀项目档案、融资进度和政策申报成果。",
      tone: "commerce",
      url: "investor.html"
    }
  ]
};

home.products["zh-CN"].city = {
  number: "03",
  title: "高校产教融合共创",
  subtitle: "把校内教学延伸到产业实训和创业落地",
  dynamicBackground: true,
  links: [
    {
      title: "数字贸易创业实训基地",
      kicker: "Training Base",
      desc: "与高校共建标准化培训教室、实训机房、导师体系和创业跟踪服务台账。",
      tone: "commerce",
      url: "partner.html#recruit"
    },
    {
      title: "师徒双阶孵化体系",
      kicker: "Mentorship",
      desc: "连接校内师资、产业导师、赛道服务商和OPC项目，让学生获得真实训练。",
      tone: "office",
      url: "about.html"
    },
    {
      title: "就业与创业成果量化",
      kicker: "Outcome",
      desc: "围绕学员数、店铺数、OPC项目数、就业数和出口GMV形成可展示成果。",
      tone: "infra",
      url: "investor.html#announcements"
    }
  ]
};

home.products["zh-CN"].innovation = {
  number: "04",
  title: "园区资源与政企合作",
  subtitle: "面向政府、园区、企业与投资人输出可复制方案",
  dynamicBackground: true,
  links: [
    {
      title: "跨境孵化载体建设",
      kicker: "Industrial Park",
      desc: "服务园区招商、样品展示、实景直播、创业赛事和项目路演等场景。",
      tone: "office",
      url: "investor.html"
    },
    {
      title: "服务商生态入驻",
      kicker: "Ecosystem",
      desc: "引入TikTok、Ozon、独立站、ERP、内容电商等赛道服务商成为官方交付伙伴。",
      tone: "video",
      url: "partner.html#recruit"
    },
    {
      title: "投资与政策资源撮合",
      kicker: "Capital Ready",
      desc: "以经营流水、成长档案和项目台账为基础，对接资金、政策和产业扶持。",
      tone: "commerce",
      url: "investor.html#investor-contact"
    }
  ]
};

saveSnapshot("static/js/app.js", app);

const sub = loadSnapshot("static/js/subpage.js");
const sp = sub.json.subpage;

Object.assign(sp.about["zh-CN"], {
  title: "AI驱动的跨境电商OPC全域数字孵化平台",
  aboutTitle: "关于楚云数航",
  subtitle:
    "楚云数航以高校人才、政府政策、跨境渠道、AI技术和产业服务商为核心资源，构建从实训到开店、运营、数据诊断、融资撮合的完整闭环。",
  paragraphs: [
    "湖北楚云数航科技有限公司定位为AI驱动的跨境电商OPC全域数字孵化平台，面向高校、政府园区、创业者、投资人和跨境服务商，提供标准化实训、数字贸易平台、店群运营、资源撮合与项目孵化服务。",
    "公司不是单一培训机构，也不是单一软件供应商，而是以“平台统一管控+赛道服务商入驻+学生实战运营+政府数据展示”为核心模式，把跨境电商创业变成可复制、可监管、可规模化的产业服务。",
    "平台以AI智慧信息管理、电商店群管理、OPC项目管理三大系统为核心：店群产生真实经营数据，AI完成诊断和策略输出，OPC项目系统承接政策、资金、服务商与项目成长档案。",
    "楚云数航希望让一个大学生或创业者用一套平台完成从选品、开店、运营、出单到分润、融资和成长沉淀的全过程，让OPC创业从一个人开始，由楚云一套平台放大。"
  ],
  stats: [
    ["4 大", "核心业务版块"],
    ["3 套", "平台核心系统"],
    ["多赛道", "跨境OPC项目库"],
    ["高校共建", "产教融合实训基地"],
    ["政校企", "资源协同网络"],
    ["可量化", "经营与孵化成果"]
  ],
  contactSubtitle: "欢迎交流高校共建、政府园区、赛道服务商、投资合作与跨境电商OPC孵化需求。",
  officesTitle: "合作与运营场景",
  officesSubtitle: "围绕高校、园区、跨境渠道和产业服务商形成多方协同网络。",
  offices: [
    ["武汉光谷科学岛", "中国", "武汉市光谷科学岛科创中心一期4栋独栋"],
    ["湖北", "中国", "跨境OPC孵化与政校企合作核心区域"],
    ["武汉光谷", "中国", "高校实训、园区资源与数字贸易平台落地"],
    ["高校基地", "中国", "数字贸易创业实训与师徒双阶孵化"],
    ["跨境渠道", "全球", "TikTok / Ozon / 速卖通 / 独立站等赛道协同"],
    ["云与算力", "中国", "阿里云、AI算力、ERP与数据中台支撑"]
  ]
});

sp.about["zh-CN"].contacts = sp.about["zh-CN"].contacts.map((contact) => {
  if (contact.label !== "提交合作意向") return contact;
  return { label: "提交合作意向", email: "partner@chuyunai.com.cn" };
});

Object.assign(sp.partner["zh-CN"], {
  heroTitle: "与楚云数航共建跨境电商OPC全域孵化生态",
  heroSubtitle:
    "面向高校、政府园区、赛道服务商、投资人与企业客户，提供可落地、可复制、可监管的AI数字贸易孵化方案。",
  whyTitle: "为什么与楚云数航合作",
  whySubtitle: "用统一平台连接高校生源、政府政策、产业服务商、跨境渠道和资金资源",
  why: [
    ["01", "平台主控，资源归集", "楚云统一高校签约、招生、品牌、资金结算、风控、数据和SOP，保证合作成果沉淀在平台内。"],
    ["02", "真实经营，成果可量化", "以店铺、订单、经营流水、学员成长档案、就业创业成果和出口GMV作为核心成果指标。"],
    ["03", "多赛道服务商协同", "TikTok、Ozon、速卖通、独立站、无人直播、ERP、内容电商等团队可入驻成为官方赛道运营伙伴。"],
    ["04", "政校企可复制样板", "围绕高校实训、园区孵化、政策申报、产业监管大屏和创业赛事，形成可复制分中心模式。"]
  ],
  solutionsTitle: "合作场景",
  solutionsSubtitle: "从高校共建、园区载体到赛道服务商入驻，围绕OPC孵化输出标准化方案",
  solutions: [
    ["高校共建", "数字贸易大学生创业实训基地", "联合高校开设SYB标准班、数字贸易提升班、跨境电商实战育人基地和师徒双阶孵化体系。", "static/picture/chuyun-brand-placeholder.svg", "数字贸易大学生创业实训基地"],
    ["政府园区", "跨境OPC孵化载体", "服务产业园区招商、跨境样品展示、实景直播、创业大赛、政策申报和政务数据展示。", "static/picture/chuyun-brand-placeholder.svg", "跨境OPC孵化载体"],
    ["赛道服务商", "官方运营服务商入驻", "引入成熟跨境项目团队负责课程、培训、带班、运营陪跑和赛道交付，楚云统一规则与结算。", "static/picture/chuyun-brand-placeholder.svg", "官方运营服务商入驻"],
    ["投资与企业", "OPC项目库与资源撮合", "以经营数据和成长档案筛选优质项目，对接投资人、品牌客户、货源、渠道和政策资源。", "static/picture/chuyun-brand-placeholder.svg", "OPC项目库与资源撮合"]
  ],
  recruitTitle: "我们正在寻找的合作对象",
  recruitSubtitle: "四类伙伴可以直接进入合作沟通",
  partners: [
    ["高校与学院", "共建数字贸易创业实训基地、SYB/双创课程、实习实训和创新创业学分体系。", "提交高校合作意向"],
    ["政府与产业园区", "共建跨境电商OPC孵化载体、产业展示窗口、创业赛事和政策落地样板。", "提交园区合作需求"],
    ["跨境赛道服务商", "TikTok、Ozon、速卖通、独立站、无人直播、ERP、内容电商等团队入驻平台。", "申请服务商入驻"],
    ["投资人与企业客户", "参与OPC项目投资、店铺托管、品牌出海、货源合作、渠道分成和项目孵化。", "提交资源合作需求"]
  ],
  benefitsTitle: "平台支持与合作机制",
  benefitsSubtitle: "把合作拆解为可执行的模块，确保每一步都有交付、有数据、有沉淀",
  benefits: [
    ["顶层方案共创", "共同梳理平台定位、合作模式、资源边界、收益路径和阶段性目标。"],
    ["系统与数据支撑", "接入AI智慧信息管理、电商店群管理、OPC项目管理和多角色门户能力。"],
    ["运营交付陪跑", "围绕课程、招生、培训、店铺运营、赛道服务商管理和项目复盘提供协同。"],
    ["政策与资源对接", "根据项目阶段对接高校、政府、园区、云服务、算力、跨境渠道、资金和产业服务商。"]
  ],
  ctaTitle: "开启楚云数航合作",
  ctaSubtitle:
    "无论是高校共建、园区孵化、赛道服务商入驻，还是投资与企业资源合作，都可以从一套清晰的OPC孵化方案开始。",
  ctaButton: "提交合作意向"
});

Object.assign(sp.investor["zh-CN"], {
  governanceTitle: "项目治理与平台规划",
  governanceDesc: "楚云数航当前围绕官网品牌升级、OPC孵化方案、高校共建材料、三大系统规划和赛道服务商资源整合推进。",
  reportsTitle: "阶段成果与路线图",
  reportsDesc: "从品牌官网与宣发材料开始，逐步落地高校实训基地样板、三大平台系统和跨境OPC项目库。",
  announcementsTitle: "项目动态",
  announcementsDesc: "围绕跨境OPC孵化、高校产教融合、园区载体、赛道服务商和AI数字贸易平台记录阶段进展。",
  announcements: [
    ["第一阶段：完善官网、企业宣发PPT、招商材料、AI漫剧课程框架、跨境店群合作方案和算力合作介绍。", "investor.html#announcements"],
    ["第二阶段：打造高校实训与OPC园区样板，形成课程、工位、店铺、内容生产、算力调用和数据看板。", "investor.html#announcements"],
    ["第三阶段：引入跨境服务商、内容团队、算力渠道、投资人和企业客户，形成可持续项目库。", "investor.html#announcements"],
    ["第四阶段：推动分中心复制，形成湖北AI数字贸易与OPC全域孵化标杆。", "investor.html#announcements"]
  ],
  documentsTitle: "项目材料",
  documents: [
    ["企业宣发 PPT", "content-research/chuyun-corporate-deck.pptx"]
  ],
  otherDocuments: [],
  stockTitle: "资源合作状态",
  stockName: "湖北楚云数航科技有限公司",
  stockExchange: "项目阶段：品牌官网与OPC孵化方案建设中 / 开放政校企与产业资源合作",
  stockStaticPrice: "推进中",
  stockStaticChange: "欢迎合作洽谈",
  contactTitle: "资源与项目合作联系",
  addressLabel: "地址与说明",
  addresses: [
    "武汉市光谷科学岛科创中心一期4栋独栋",
    "欢迎通过官网联系表单预约沟通AI漫剧、跨境店群、OPC园区和AI算力合作"
  ]
});

sp.shell["zh-CN"].footerSlogan = "让OPC创业从一个人开始，由楚云一套平台放大";
sp.shell["zh-CN"].legal =
  '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">鄂ICP备2026031741号</a>  © 2026 <a href="https://chuyunai.com.cn/" target="_blank" rel="noopener">湖北楚云数航科技有限公司</a>. All Rights Reserved.';

saveSnapshot("static/js/subpage.js", sub);
