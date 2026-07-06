const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "content-research");
const buildDir = path.join(outDir, "pptx-build");

const slides = [
  {
    title: "湖北楚云数航科技有限公司",
    subtitle: "AI驱动的跨境电商OPC全域数字孵化平台",
    bullets: [
      "以高校人才、政府政策、跨境渠道、AI技术与产业服务商为核心，构建从学习实训到开店运营、数据诊断、项目融资和持续孵化的完整闭环。",
      "定位：湖北跨境数字经济与大学生创业实训的标杆型平台载体。"
    ]
  },
  {
    title: "我们是一家什么公司",
    subtitle: "不是单一培训机构，而是跨境电商创业孵化的产业互联网平台",
    bullets: [
      "面向高校、政府园区、创业者、投资人、服务商与跨境电商团队，提供标准化实训、OPC孵化、AI运营管理、店群系统与资源撮合服务。",
      "通过“平台统一管控+赛道服务商入驻+学生实战运营+政府数据展示”的模式，把跨境电商创业从零散项目变成可复制、可监管、可规模化的产业服务。"
    ]
  },
  {
    title: "企业愿景",
    subtitle: "让一个大学生用一套平台完成从零到OPC的创业孵化",
    bullets: [
      "愿景：打造全国领先的跨境电商OPC全域数字孵化底座。",
      "使命：帮助高校学生和普通创业者完成选品、开店、运营、出单、分润、融资与成长档案沉淀。",
      "价值主张：政府看得见产业成果，高校拿得到实训转化，学生做得成真实项目，服务商接得住规模化交付。"
    ]
  },
  {
    title: "战略定位",
    subtitle: "湖北跨境电商人才培养与创业落地的数字底座",
    bullets: [
      "以“AI智慧决策+电商店群管理+OPC资源撮合”三位一体平台为技术核心。",
      "以湖北高校和产业园区为落地场景，连接阿里生态、跨境平台、供应链、算力、ERP和内容电商资源。",
      "以可量化成果回应政府与高校需求：学员数、OPC项目数、店铺数、就业数、出口GMV、投融资对接、政策申报。"
    ]
  },
  {
    title: "四大业务版块",
    subtitle: "从实训、平台、资源到园区运营的完整服务矩阵",
    bullets: [
      "跨境电商OPC孵化：面向大学生与创业者，开展开店实训、赛道训练、店铺陪跑和分润结算。",
      "AI数字贸易平台：建设AI经营诊断、店群管理、项目管理、政府监管大屏与多角色门户。",
      "高校产教融合共创：与高校共建数字贸易创业实训基地、SYB/双创课程、师徒双阶孵化体系。",
      "园区与产业资源运营：承接跨境产品展示、实景直播、招商路演、分中心协同与政策申报。"
    ]
  },
  {
    title: "三大核心系统",
    subtitle: "大脑、手脚、心脏组成平台闭环",
    bullets: [
      "AI智慧信息管理子系统：采集经营数据，生成报表、经营诊断、策略建议和政府产业监测数据。",
      "电商店群管理子系统：支撑多店铺隔离运营、任务分发、选品刊登、订单库存、客服与自动化工具。",
      "OPC项目管理子系统：承载创业者、资金方、服务商三方入驻，管理项目档案、进度、融资、政策与展示。"
    ]
  },
  {
    title: "平台闭环",
    subtitle: "经营数据驱动孵化，孵化成果反哺经营",
    bullets: [
      "店群系统产生真实经营数据。",
      "AI系统分析经营表现，输出优化策略并筛选优质项目。",
      "OPC项目系统对接资金、政策、导师与服务商。",
      "项目获得资源后扩大店群规模，形成“经营-分析-孵化-融资-再经营”的持续循环。"
    ]
  },
  {
    title: "资源渠道",
    subtitle: "高校、政府、阿里生态、跨境平台与服务商资源联动",
    bullets: [
      "高校资源：湖北大学创新创业学院、商学院、就业指导中心等潜在共建方向，面向SYB、实习实训、创新创业学分与双创基地。",
      "政府与政策资源：教育、人社、财政、政协、产业园区、跨境电商扶持政策、创业补贴与人才评价体系。",
      "平台与渠道资源：阿里云支持、阿里生态服务商对接、TikTok、Ozon、速卖通、独立站、无人直播、内容电商等赛道。",
      "技术与供应链资源：AI算力、ERP、货源池、全球一件代发、跨境渠道API、数据中台与合规存储。"
    ]
  },
  {
    title: "合作模式",
    subtitle: "楚云主控，服务商入驻，高校落地，多方共赢",
    bullets: [
      "平台方：楚云数航统一签约、招生、品牌、资金结算、风控、数据、SOP与对外招商。",
      "赛道服务商：负责课程、培训、带班、运营指导、爆款方法和实战陪跑。",
      "高校与学生：高校提供生源、课程场景与双创体系；学生进入基地选择赛道并开展真实运营。",
      "资金与政策方：银行、创投、政府补贴与创业扶持政策通过项目台账和经营数据进行对接。"
    ]
  },
  {
    title: "合作方画像",
    subtitle: "官网应重点呈现“可马上合作”的对象",
    bullets: [
      "高校：共建数字贸易大学生创业实训基地、跨境电商实战育人基地、SYB+数字贸易提升班。",
      "政府与园区：共建跨境电商OPC孵化载体、产业监管大屏、创业赛事、项目展示与政策落地样板。",
      "跨境服务商：TikTok、Ozon、速卖通、独立站、无人直播、ERP、内容电商团队入驻成为官方赛道运营服务商。",
      "投资人与企业客户：以OPC项目库、经营流水和成长档案为基础，参与店铺托管、项目投资、品牌出海与资源分成。"
    ]
  },
  {
    title: "差异化优势",
    subtitle: "全赛道、全链路、可监管、可复制",
    bullets: [
      "全赛道：国内直播、跨境货架、内容电商、海外独立站、无人直播和AI内容等多赛道组合。",
      "全链路：从课程实训、账号店铺、选品刊登、运营陪跑到数据分析、分润结算、项目融资。",
      "可监管：统一账号、数据口径、风控规则、审计体系和政府数据出口。",
      "可复制：标准化SOP、分中心机制、赛道服务商机制和多角色平台门户。"
    ]
  },
  {
    title: "阶段性落地重点",
    subtitle: "先做可交付样板，再扩大平台半径",
    bullets: [
      "第一阶段：完成官网、品牌材料、合作方案、OPC项目介绍和高校共建材料。",
      "第二阶段：落地高校实训基地样板，形成课程、学员、店铺、导师、数据看板和分润流程。",
      "第三阶段：引入多赛道服务商，扩充OPC项目库，形成跨境项目招商与政府展示成果。",
      "第四阶段：建设省级跨境OPC数字孵化平台，推动分中心、产业园和政策资源协同。"
    ]
  },
  {
    title: "官网内容建议",
    subtitle: "官网要“高大上”，更要让人一眼看懂能合作什么",
    bullets: [
      "首页主张：AI驱动的跨境电商OPC全域数字孵化平台。",
      "业务版图：OPC孵化、AI数字贸易平台、高校产教融合、园区资源运营。",
      "平台能力：AI智慧信息管理、电商店群管理、OPC项目管理、政企监管与数据展示。",
      "合作入口：高校共建、政府园区、赛道服务商、投资/企业客户四类入口。"
    ]
  },
  {
    title: "结束页",
    subtitle: "楚云数航：让OPC创业从一个人开始，由楚云一套平台放大",
    bullets: [
      "一人起步，平台加持；高校共创，产业联动；AI赋能，数航出海。",
      "湖北楚云数航科技有限公司，正在构建面向高校、政府、园区和产业伙伴的跨境数字经济新引擎。"
    ]
  }
];

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function writeMarkdown() {
  let markdown = "# 湖北楚云数航科技有限公司企业宣发PPT内容稿\n\n";
  slides.forEach((slide, index) => {
    markdown += `## ${index + 1}. ${slide.title}\n`;
    markdown += `${slide.subtitle}\n\n`;
    slide.bullets.forEach((bullet) => {
      markdown += `- ${bullet}\n`;
    });
    markdown += "\n";
  });
  fs.writeFileSync(path.join(outDir, "chuyun-corporate-deck.md"), markdown, "utf8");
}

function slideXml(slide, index) {
  const bullets = slide.bullets
    .map(
      (bullet) =>
        `<a:p><a:pPr marL="285750" indent="-171450"><a:buChar char="•"/><a:defRPr sz="1850"/></a:pPr><a:r><a:rPr lang="zh-CN" sz="1850"/><a:t>${escapeXml(
          bullet
        )}</a:t></a:r></a:p>`
    )
    .join("");
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"><p:cSld><p:bg><p:bgPr><a:solidFill><a:srgbClr val="F7F9FC"/></a:solidFill><a:effectLst/></p:bgPr></p:bg><p:spTree><p:nvGrpSpPr><p:cNvPr id="1" name=""/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr><p:grpSpPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/><a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/></a:xfrm></p:grpSpPr><p:sp><p:nvSpPr><p:cNvPr id="2" name="Title"/><p:cNvSpPr txBox="1"/><p:nvPr/></p:nvSpPr><p:spPr><a:xfrm><a:off x="685800" y="457200"/><a:ext cx="7772400" cy="914400"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr><p:txBody><a:bodyPr wrap="square"/><a:lstStyle/><a:p><a:r><a:rPr lang="zh-CN" sz="3400" b="1"><a:solidFill><a:srgbClr val="111827"/></a:solidFill></a:rPr><a:t>${escapeXml(
    slide.title
  )}</a:t></a:r></a:p></p:txBody></p:sp><p:sp><p:nvSpPr><p:cNvPr id="3" name="Subtitle"/><p:cNvSpPr txBox="1"/><p:nvPr/></p:nvSpPr><p:spPr><a:xfrm><a:off x="685800" y="1295400"/><a:ext cx="7772400" cy="548640"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr><p:txBody><a:bodyPr wrap="square"/><a:lstStyle/><a:p><a:r><a:rPr lang="zh-CN" sz="2200"><a:solidFill><a:srgbClr val="D12B24"/></a:solidFill></a:rPr><a:t>${escapeXml(
    slide.subtitle
  )}</a:t></a:r></a:p></p:txBody></p:sp><p:sp><p:nvSpPr><p:cNvPr id="4" name="Body"/><p:cNvSpPr txBox="1"/><p:nvPr/></p:nvSpPr><p:spPr><a:xfrm><a:off x="914400" y="2057400"/><a:ext cx="7315200" cy="4114800"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr><p:txBody><a:bodyPr wrap="square"/><a:lstStyle/>${bullets}</p:txBody></p:sp><p:sp><p:nvSpPr><p:cNvPr id="5" name="Page"/><p:cNvSpPr txBox="1"/><p:nvPr/></p:nvSpPr><p:spPr><a:xfrm><a:off x="8229600" y="6400800"/><a:ext cx="914400" cy="274320"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></p:spPr><p:txBody><a:bodyPr/><a:lstStyle/><a:p><a:r><a:rPr sz="1200"><a:solidFill><a:srgbClr val="667085"/></a:solidFill></a:rPr><a:t>${index}/${slides.length}</a:t></a:r></a:p></p:txBody></p:sp></p:spTree></p:cSld><p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr></p:sld>`;
}

function writePptxSource() {
  fs.rmSync(buildDir, { recursive: true, force: true });
  ["_rels", "docProps", "ppt/_rels", "ppt/slides", "ppt/theme"].forEach((dir) =>
    fs.mkdirSync(path.join(buildDir, dir), { recursive: true })
  );
  fs.writeFileSync(
    path.join(buildDir, "[Content_Types].xml"),
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/><Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>${slides
      .map(
        (_, index) =>
          `<Override PartName="/ppt/slides/slide${index + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>`
      )
      .join("")}<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>`,
    "utf8"
  );
  fs.writeFileSync(
    path.join(buildDir, "_rels/.rels"),
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>`,
    "utf8"
  );
  fs.writeFileSync(
    path.join(buildDir, "docProps/core.xml"),
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>湖北楚云数航企业宣发PPT</dc:title><dc:creator>Codex</dc:creator><cp:lastModifiedBy>Codex</cp:lastModifiedBy><dcterms:created xsi:type="dcterms:W3CDTF">2026-07-07T00:00:00Z</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">2026-07-07T00:00:00Z</dcterms:modified></cp:coreProperties>`,
    "utf8"
  );
  fs.writeFileSync(
    path.join(buildDir, "docProps/app.xml"),
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Codex</Application><PresentationFormat>宽屏</PresentationFormat><Slides>${slides.length}</Slides></Properties>`,
    "utf8"
  );
  fs.writeFileSync(
    path.join(buildDir, "ppt/theme/theme1.xml"),
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Chuyun"><a:themeElements><a:clrScheme name="Chuyun"><a:dk1><a:srgbClr val="111827"/></a:dk1><a:lt1><a:srgbClr val="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="1F2937"/></a:dk2><a:lt2><a:srgbClr val="F7F9FC"/></a:lt2><a:accent1><a:srgbClr val="D12B24"/></a:accent1><a:accent2><a:srgbClr val="0F766E"/></a:accent2><a:accent3><a:srgbClr val="2563EB"/></a:accent3><a:accent4><a:srgbClr val="F59E0B"/></a:accent4><a:accent5><a:srgbClr val="7C3AED"/></a:accent5><a:accent6><a:srgbClr val="16A34A"/></a:accent6><a:hlink><a:srgbClr val="2563EB"/></a:hlink><a:folHlink><a:srgbClr val="7C3AED"/></a:folHlink></a:clrScheme><a:fontScheme name="Chuyun"><a:majorFont><a:latin typeface="Microsoft YaHei"/><a:ea typeface="Microsoft YaHei"/></a:majorFont><a:minorFont><a:latin typeface="Microsoft YaHei"/><a:ea typeface="Microsoft YaHei"/></a:minorFont></a:fontScheme><a:fmtScheme name="Chuyun"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:fillStyleLst><a:lnStyleLst><a:ln w="9525"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/></a:theme>`,
    "utf8"
  );
  fs.writeFileSync(
    path.join(buildDir, "ppt/presentation.xml"),
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"><p:sldSz cx="9144000" cy="6858000" type="screen4x3"/><p:notesSz cx="6858000" cy="9144000"/><p:sldIdLst>${slides
      .map((_, index) => `<p:sldId id="${256 + index}" r:id="rId${index + 1}"/>`)
      .join("")}</p:sldIdLst><p:defaultTextStyle/></p:presentation>`,
    "utf8"
  );
  fs.writeFileSync(
    path.join(buildDir, "ppt/_rels/presentation.xml.rels"),
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${slides
      .map(
        (_, index) =>
          `<Relationship Id="rId${index + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide${index + 1}.xml"/>`
      )
      .join("")}<Relationship Id="rId${slides.length + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/></Relationships>`,
    "utf8"
  );
  slides.forEach((slide, index) => {
    fs.writeFileSync(path.join(buildDir, `ppt/slides/slide${index + 1}.xml`), slideXml(slide, index + 1), "utf8");
  });
}

writeMarkdown();
writePptxSource();
