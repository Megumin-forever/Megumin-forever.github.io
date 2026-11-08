import { profile, news, education, publications, projects, experience, awards, skills, posts } from './site';
import { profileEn, newsEn, educationEn, publicationsEn, projectsEn, experienceEn, awardsEn, skillsEn, postsEn } from './site.en';

export type Language = 'zh' | 'en';
export type Page = 'home' | 'publications' | 'projects' | 'cv' | 'blog';

const pagePaths: Record<Page, string> = {
  home: '/', publications: '/publications/', projects: '/projects/', cv: '/cv/', blog: '/blog/',
};

export function pageUrl(lang: Language, page: Page): string {
  return lang === 'en' ? `/en${pagePaths[page]}` : pagePaths[page];
}

export const ui = {
  zh: {
    siteTitle: '学术主页', home: '首页', projects: '项目', cv: '简历', blog: '博客', navLabel: '主要导航',
    sidebarLabel: '个人资料', roleLabel: '研究方向 / RESEARCH', contactLabel: '联系方式 / LINKS', email: '电子邮箱',
    switchTheme: '切换深色模式', switchLight: '切换浅色模式', languageLabel: '语言',
    builtWith: '使用 Astro 构建', backHome: '返回首页 ↑',
    heroEyebrow: 'AI · RESEARCH · ENGINEERING', heroLead: "Hi, I'm", heroSummary: '一名人工智能专业的学生。',
    heroFocus: 'INTERESTS /', heroWork: '查看论文', heroCv: '了解我的经历', heroFooter: 'LEARNING · BUILDING · EXPLORING',
    about: '关于我', aboutEn: 'About', news: '最新动态', newsEn: 'News', publications: '代表论文', publicationsEn: 'Publications',
    featuredProjects: '研究与实践', featuredProjectsEn: 'Projects', experience: '科研经历', experienceEn: 'Experience',
    education: '教育经历', educationEn: 'Education', viewNews: '查看 ↗',
    publicationIntro: '以下为已录用的会议论文，保留原始标题、作者顺序和引用信息。',
    paper: '论文详情 ↗', missingPaper: '详情待补充', code: '代码 ↗', seeProject: '查看项目 ↗', seeAllProjects: '查看全部项目',
    letsConnect: 'LET’S CONNECT', connectTitle: '欢迎交流与合作。', connectDesc: '科研交流与项目讨论，可通过 GitHub 联系我。', sendMail: '发送邮件',
    projectHeader: '项目与实践', projectSubtitle: '我已开展实践的几个 AI 方向；具体项目技术说明将在整理后逐步公开。', missingProject: '',
    cvHeader: '学术简历', cvSubtitle: '学历、科研经历与技术能力的简要概览。', pdfCv: '查看 PDF 简历 ↗',
    missingCv: '',
    cvEducation: '教育经历', cvExperience: '科研与工作经历', cvSkills: '技能',
    cvAwards: '奖项与荣誉', publicationHeader: '学术成果', publicationSubtitle: '会议论文与学术成果。', citationLabel: '推荐引用', backPublications: '返回学术成果',
    noPosts: '目前还没有公开的博客文章。', githubContact: '前往 GitHub',
    blogHeader: '研究笔记', blogSubtitle: '用于记录学习、实验与技术实践。', readMore: '阅读全文 ↗',
  },
  en: {
    siteTitle: 'Academic Homepage', home: 'Home', projects: 'Projects', cv: 'CV', blog: 'Blog', navLabel: 'Main navigation',
    sidebarLabel: 'Profile', roleLabel: 'RESEARCH INTERESTS', contactLabel: 'CONTACT / LINKS', email: 'Email',
    switchTheme: 'Switch to dark mode', switchLight: 'Switch to light mode', languageLabel: 'Language',
    builtWith: 'Built with Astro', backHome: 'Back to home ↑',
    heroEyebrow: 'AI · RESEARCH · ENGINEERING', heroLead: "Hi, I'm", heroSummary: 'An Artificial Intelligence student.',
    heroFocus: 'INTERESTS /', heroWork: 'View publications', heroCv: 'View my CV', heroFooter: 'LEARNING · BUILDING · EXPLORING',
    about: 'About Me', aboutEn: 'About', news: 'Latest Updates', newsEn: 'News', publications: 'Selected Publications', publicationsEn: 'Publications',
    featuredProjects: 'Research & Practice', featuredProjectsEn: 'Projects', experience: 'Research Experience', experienceEn: 'Experience',
    education: 'Education', educationEn: 'Education', viewNews: 'View ↗',
    publicationIntro: 'Conference papers accepted in 2026. Original titles, author order and citations are preserved.',
    paper: 'Paper details ↗', missingPaper: 'Details unavailable', code: 'Code ↗', seeProject: 'View project ↗', seeAllProjects: 'All projects',
    letsConnect: 'LET’S CONNECT', connectTitle: 'Get in touch.', connectDesc: 'For research discussions and projects, you can find me on GitHub.', sendMail: 'Send email',
    projectHeader: 'Projects & Practice', projectSubtitle: 'AI areas where I have done hands-on work. Detailed technical project write-ups will be added as they become available.', missingProject: '',
    cvHeader: 'Curriculum Vitae', cvSubtitle: 'An overview of my education, research experience, and technical skills.', pdfCv: 'View PDF CV ↗',
    missingCv: '',
    cvEducation: 'Education', cvExperience: 'Research & Work Experience', cvSkills: 'Skills',
    cvAwards: 'Honors & Awards', publicationHeader: 'Publications', publicationSubtitle: 'Conference papers and academic work.', citationLabel: 'Recommended citation', backPublications: 'Back to publications',
    noPosts: 'No public blog posts yet.', githubContact: 'Visit GitHub',
    blogHeader: 'Research Notes', blogSubtitle: 'Notes on learning, experiments and technical work.', readMore: 'Read more ↗',
  },
} as const;

export function getSiteData(lang: Language) {
  return lang === 'en'
    ? { profile: profileEn, news: newsEn, education: educationEn, publications: publicationsEn, projects: projectsEn, experience: experienceEn, awards: awardsEn, skills: skillsEn, posts: postsEn }
    : { profile, news, education, publications, projects, experience, awards, skills, posts };
}
