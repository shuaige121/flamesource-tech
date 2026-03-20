# 页面: 首页 (/)

## 双向链接
- 上游: 无（入口页，单页网站）
- 下游: 各锚点 section
- 共享组件: [导航栏](./components/navbar.md), [页脚](./components/footer.md)

## 布局
- 结构: Nav → Hero → About → Solutions → Integration → Technology → Team → Contact → Privacy → Footer
- 响应式断点: mobile(375px), tablet(768px), desktop(1280px)

## 配色（继承全局）
- 背景: #080b16
- Section交替: #0f1320
- 强调色: #e25822 → #ff7b3a 渐变

## 内容大纲

### 1. Hero 区域
- 大标题: "Applied AI for Water & Environmental Monitoring"
- 副标题: 公司定位描述
- 注: "Built in Singapore"
- CTA: Contact Us + Explore Solutions

### 2. About / What We Do
- 一句话定位: 传感器与决策之间的软件层
- 简洁描述公司做什么

### 3. Solutions (Core Modules)
- 4张卡片:
  1. Water Quality Anomaly Detection
  2. Predictive Risk Analytics
  3. Sensor Health Management
  4. Automated Reporting

### 4. Integration
- 左: 集成特点列表
- 右: 支持的协议和部署方式

### 5. Technology
- 架构图: Sensors → Ingestion → AI Engine → Dashboard
- 技术能力列表

### 6. Team（核心 — 必须使用真实信息）
- **陈进柱 (Chen Jinzhu)** — CTO
  - 华南理工大学计算机科学与技术 2008
  - 18年经验
  - 海南元游信息技术 联合创始人兼CTO (2016-2022)
  - 领导100+研发团队
  - 月流水超1亿RMB产品
  - 高并发、分布式、AI自动化

- **武林威 (Wu Linwei)** — Co-Founder, Hardware & BD
  - 华南理工大学自动化专业
  - 马鞍山市人大代表（第16、17届）
  - 安徽省"特支计划"创业领军人才
  - 广州小鸡快跑(GameSir)联合创始人
  - 第一发明人：发明专利3项，实用新型专利31项
  - 发布全国团体标准1项
  - 产品销往150+国家

- **Leonard** — AI & Strategy
  - AI行业从业者
  - 水务监测生态系统领域知识
  - 解决方案架构、市场研究、合作伙伴开发

### 7. Contact
- 公司全称: FLAME SOURCE TECHNOLOGY PTE. LTD.
- 地点: Singapore
- 邮箱: info@flamesource.tech, bd@flamesource.tech
- WhatsApp: +65 8816 5505

### 8. Privacy Policy
- PDPA 合规隐私政策

## 交互说明
- 导航栏滚动时添加背景模糊
- 各 section 滚动进入视口时 fade-in
- 架构图节点依次亮起
- 统计数字滚动计数动画
- 联系表单提交视觉反馈（无后端）
