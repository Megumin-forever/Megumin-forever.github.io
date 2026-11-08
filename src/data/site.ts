/**
 * Aurora V2.1 — real content migration from Megumin-forever.github.io.
 * Updated 2026-11-08. Keep academic claims aligned with the original source.
 * The project descriptions below summarize topics explicitly supplied by Megumin;
 * no unverified implementation details, results, or repository links are invented.
 */

const oldSite = 'https://megumin-forever.github.io';

export const profile = {
  name: 'Megumin',
  nameEn: 'Chengxun Jin', // Name used in existing publications and CV
  initials: 'M',
  role: '人工智能专业本科生',
  affiliation: '吉林大学 · 人工智能学院',
  affiliationLogo: '/images/Jilin_University_Logo.svg.png',
  location: '',
  email: '', // 原站没有公开邮箱，不使用演示邮箱
  github: 'https://github.com/Megumin-forever',
  scholar: 'https://scholar.google.com/citations?user=HCiD6-MAAAAJ',
  cvUrl: '', // 仅在确认有真实 PDF 时设置
  avatar: `${oldSite}/images/R.jpg`,
  researchAreas: ['LLM Post-training', 'Diffusion Models', 'AI Agents', 'Agent RSI'],
  headline: '一名人工智能专业的学生。',
  summary: '一名人工智能专业的学生。',
  about: '你好，我是 Megumin（金成勋），目前在吉林大学人工智能学院攻读人工智能专业本科，同时在清华大学开展科研实习。我计划于 2027 年进入清华大学攻读硕士学位。我的研究与实践方向包括大语言模型后训练、扩散模型、AI Agents 和 Agent 递归自我改进（RSI）。',
};

export const news = [
  { date: '2026.09.25', text: '我们的两篇论文 AHZO 与 QC-A2S 被 NeurIPS 2026 录用。', url: '/publications/' },
  { date: '2026.05.09', text: '获邀参加于 2026 年 5 月 15 日举行的清华大学人工智能学院大学生学术交流日。', url: '' },
  { date: '2026.05.01', text: '我们的论文 LOZO+ 被 ICML 2026 录用。', url: '/publications/' },
];

export const education = [
  {
    period: '2027 年起（即将入学）',
    degree: '硕士研究生（即将入学）',
    institution: '清华大学',
    detail: '计划于 2027 年开始硕士阶段学习。',
    logo: `${oldSite}/images/tsinghua-logo.png`,
  },
  {
    period: '2023 年 — 至今',
    degree: '人工智能 · 本科',
    institution: '吉林大学 · 人工智能学院',
    detail: '人工智能专业本科生。',
    logo: `${oldSite}/images/jluai.png`,
  },
];

export const publications = [
  {
    id: 'qc-a2s',
    slug: '2026-09-25-QCA2S-NeurIPS-2026',
    title: 'Achieve Latency-Efficient Temporal-Coding Spiking LLMs via Discretization-Aware Conversion',
    authors: 'Jinjie Fang, Tianxing Man, Chengxun Jin, Xiao Du, Haozhen Zhang, Yi Chang and Bin Gu',
    venue: 'NeurIPS 2026',
    year: 2026,
    description: 'NeurIPS 2026 录用论文，研究时间编码脉冲大语言模型的低延迟转换。',
    tags: ['NeurIPS 2026', 'Spiking LLM'],
    paperUrl: '/publication/2026-09-25-QCA2S-NeurIPS-2026/',
    pdfUrl: '',
    codeUrl: '',
    citation: 'Jinjie Fang, Tianxing Man, Chengxun Jin, Xiao Du, Haozhen Zhang, Yi Chang and Bin Gu. (2026). "Achieve Latency-Efficient Temporal-Coding Spiking LLMs via Discretization-Aware Conversion." The Fortieth Annual Conference on Neural Information Processing Systems (NeurIPS 2026).',
  },
  {
    id: 'ahzo',
    slug: '2026-09-25-AHZO-NeurIPS-2026',
    title: 'Towards Identifying Dominant Low-Rank Subspaces in Zeroth-Order Fine-Tuning',
    authors: 'Jinjie Fang, Chengxun Jin, Yi Chang, and Bin Gu',
    venue: 'NeurIPS 2026',
    year: 2026,
    description: 'NeurIPS 2026 录用论文，研究零阶微调中的主导低秩子空间。',
    tags: ['NeurIPS 2026', 'Zeroth-Order'],
    paperUrl: '/publication/2026-09-25-AHZO-NeurIPS-2026/',
    pdfUrl: '',
    codeUrl: '',
    citation: 'Jinjie Fang, Chengxun Jin, Yi Chang, and Bin Gu. (2026). "Towards Identifying Dominant Low-Rank Subspaces in Zeroth-Order Fine-Tuning." The Fortieth Annual Conference on Neural Information Processing Systems (NeurIPS 2026).',
  },
  {
    id: 'lozo-plus',
    slug: '2026-05-01-lozo-plus-icml-2026',
    title: 'LOZO+: Provably Efficient Zeroth-Order Fine-Tuning via Greedy Low-Rank Subspace Selection',
    authors: 'Jinjie Fang, Chengxun Jin, Tianxing Man, Yi Chang, and Bin Gu',
    venue: 'ICML 2026',
    year: 2026,
    description: 'ICML 2026 录用论文，提出基于贪心低秩子空间选择的零阶微调方法。',
    tags: ['ICML 2026', 'Fine-Tuning'],
    paperUrl: '/publication/2026-05-01-lozo-plus-icml-2026/',
    pdfUrl: '',
    codeUrl: '',
    citation: 'Jinjie Fang, Chengxun Jin, Tianxing Man, Yi Chang, and Bin Gu. (2026). "LOZO+: Provably Efficient Zeroth-Order Fine-Tuning via Greedy Low-Rank Subspace Selection." Forty-third International Conference on Machine Learning (ICML 2026).',
  },
];

// These are research/practice *areas*, not fabricated, named project releases.
export const projects = [
  { id: 'llm-post-training', title: 'LLM Post-training', category: '研究与实践方向', description: '围绕大语言模型后训练的研究与实践。', tags: ['LLM', 'Post-training'], url: '' },
  { id: 'diffusion', title: 'Diffusion Models', category: '研究与实践方向', description: '围绕扩散模型的相关实验与探索。', tags: ['Diffusion', 'Generative AI'], url: '' },
  { id: 'agents', title: 'AI Agents', category: '研究与实践方向', description: '智能体系统相关实践与探索。', tags: ['Agents', 'LLM'], url: '' },
  { id: 'rsi', title: 'Agent Recursive Self-Improvement', category: '研究与实践方向', description: '围绕 Agent 递归自我改进（RSI）的研究与实践。', tags: ['Agents', 'RSI'], url: '' },
];

export const experience = [
  { period: '2026 年 — 至今', title: '科研实习生', place: '清华大学', detail: '在清华大学开展科研实习。' },
];

export const awards = [
  { id: 'national-scholarship', period: '2025–2026', name: '国家奖学金', issuer: '中华人民共和国教育部', description: '中国高校本专科学生能够获得的，荣誉等级最高的国家级奖学金。' },
  { id: 'excellent-2025', period: '2025–2026', name: '校优秀学生', issuer: '吉林大学', description: '' },
  { id: 'excellent-2024', period: '2024–2025', name: '校优秀学生', issuer: '吉林大学', description: '' },
  { id: 'first-class', period: '2024–2025', name: '一等奖学金', issuer: '吉林大学', description: '' },
];

export const skills: Array<{group: string; items: string[]}> = [];
export const posts: Array<{date: string; title: string; summary: string; url: string}> = [];
