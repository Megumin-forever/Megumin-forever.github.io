// English counterparts of verified public content. Identifiers, links and
// publication metadata are inherited rather than maintained by array index.
import {
  profile as baseProfile, news as sourceNews, education as sourceEducation,
  publications as sourcePublications, projects as sourceProjects,
  experience as sourceExperience, awards as sourceAwards,
  skills as sourceSkills, posts as sourcePosts,
} from './site';

export const profileEn = {
  ...baseProfile,
  role: 'Undergraduate Student in Artificial Intelligence',
  affiliation: 'College of Artificial Intelligence · Jilin University',
  headline: 'An Artificial Intelligence student.',
  summary: 'An Artificial Intelligence student.',
  about: "Hi, I'm Chengxun Jin, an undergraduate student in Artificial Intelligence at the College of Artificial Intelligence, Jilin University and a research intern at Tsinghua University. I will begin my master's studies at Tsinghua University in 2027. My research and hands-on interests include LLM post-training, diffusion model post-training, AI agents, and agent recursive self-improvement (RSI).",
};

export const newsEn = [
  { ...sourceNews[0], text: 'Our two papers, AHZO and QC-A2S, were accepted to NeurIPS 2026.' },
  { ...sourceNews[1], text: 'I was invited to the 2026 Student Academic Exchange Day of the College of AI, Tsinghua University, on May 15.' },
  { ...sourceNews[2], text: 'Our paper LOZO+ was accepted to ICML 2026.' },
];

export const educationEn = [
  { ...sourceEducation[0], period: 'Starting in 2027', degree: 'Incoming Master’s Student', institution: 'Tsinghua University', detail: 'Expected to begin graduate studies in 2027.' },
  { ...sourceEducation[1], period: '2023 — Present', degree: 'Undergraduate · Artificial Intelligence', institution: 'School of Artificial Intelligence · Jilin University', detail: 'Undergraduate student majoring in Artificial Intelligence.' },
];

export const publicationsEn = sourcePublications.map((paper) => ({
  ...paper,
  description: paper.id === 'qc-a2s'
    ? 'Accepted to NeurIPS 2026. On latency-efficient temporal-coding spiking LLMs through discretization-aware conversion.'
    : paper.id === 'ahzo'
      ? 'Accepted to NeurIPS 2026. On identifying dominant low-rank subspaces in zeroth-order fine-tuning.'
      : 'Accepted to ICML 2026. On zeroth-order fine-tuning via greedy low-rank subspace selection.',
}));

const projectEn: Record<string, string> = {
  'llm-post-training': 'Hands-on work and research in large language model post-training.',
  diffusion: 'Experiments and exploration involving diffusion models.',
  agents: 'Hands-on work and exploration in AI agent systems.',
  rsi: 'Research and hands-on work related to agent recursive self-improvement (RSI).',
};
export const projectsEn = sourceProjects.map((project) => ({
  ...project,
  category: 'Research & hands-on focus',
  description: projectEn[project.id] ?? project.description,
}));

export const experienceEn = sourceExperience.map((exp) => ({
  ...exp, period: '2026 — Present', title: 'Research Intern', place: 'Tsinghua University', detail: 'Research internship at Tsinghua University.',
}));

const awardNames: Record<string, string> = {
  'national-scholarship': 'China National Scholarship',
  'excellent-2025': 'University Excellent Student',
  'excellent-2024': 'University Excellent Student',
  'first-class': 'First Class Scholarship',
};
export const awardsEn = sourceAwards.map((award) => ({
  ...award,
  name: awardNames[award.id] ?? award.name,
  issuer: award.id === 'national-scholarship' ? 'Ministry of Education of the People’s Republic of China' : 'Jilin University',
  description: award.id === 'national-scholarship' ? 'The highest-level national scholarship awarded to outstanding undergraduate students in China.' : '',
}));
export const skillsEn = sourceSkills;
export const postsEn = sourcePosts;
