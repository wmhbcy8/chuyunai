# 湖北楚云数航科技有限公司官网

这是湖北楚云数航科技有限公司的企业官网静态站点，用于展示公司品牌、业务版块、合作体系、项目进展和企业宣发材料。

## 网站定位

楚云数航定位为 AI 驱动的数字贸易、AI 内容与算力园区运营平台，围绕以下业务方向展开：

- AI 漫剧制作与培训
- 跨境店群投资与孵化
- OPC 园区基建与运营
- AI 算力运营及销售
- 光谷超算中心战略合作资源对接

网站内容服务于企业宣发、招商合作、高校与园区共建、算力合作、跨境项目孵化和品牌展示。

## 页面入口

- `index.html`：默认入口，跳转到中文首页
- `cn.html`：中文首页
- `en.html`：英文首页
- `about.html`：公司介绍与联系方式
- `partner.html`：合作体系、合作场景与合作对象
- `investor.html`：项目动态、项目材料与资源合作状态
- `news-index.html`：项目进展列表页

英文页面通过 `?lang=en` 参数访问，例如：

- `about.html?lang=en`
- `partner.html?lang=en`
- `investor.html?lang=en`

## 目录说明

- `static/css/styles.css`：全站样式
- `static/js/app.js`：首页内容与交互逻辑
- `static/js/subpage.js`：关于我们、合作体系、项目动态等子页内容与交互逻辑
- `static/picture/`：Logo、SVG 占位图、首页图标等图片素材
- `static/image/`：业务场景与页面背景图片
- `static/audio/set-sail-chuyun-brand.mp3`：官网背景音乐压缩版
- `static/docs/chuyun-corporate-deck.pptx`：企业宣发 PPT

## 内容维护

修改内容后建议检查：

```bash
node --check static/js/app.js
node --check static/js/subpage.js
```

## 资源与隐私说明

仓库中保留官网运行所需的图片、音频压缩版、PPT 和内容稿。

以下内容不提交到仓库：

- 原始微信聊天导出数据
- 未压缩 WAV 音频原文件
- 本地代理与临时工作目录

这些文件已通过 `.gitignore` 排除。

## 部署方式

本项目为纯静态网站，可直接部署到支持静态文件的网站空间、Nginx、对象存储或 GitHub Pages。

部署时确保保留以下目录结构：

```text
/
├── cn.html
├── en.html
├── about.html
├── partner.html
├── investor.html
├── news-index.html
├── static/
└── static/docs/
```

正式上线域名：

```text
https://chuyunai.com.cn/
```

页脚备案信息：

```text
鄂ICP备2026031741号 © 2026 湖北楚云数航科技有限公司. All Rights Reserved.
```
