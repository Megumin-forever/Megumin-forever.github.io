import { defineConfig } from 'astro/config';

// GitHub 用户主页仓库：Megumin-forever.github.io，不需要额外设置 base。
export default defineConfig({
  site: 'https://megumin-forever.github.io',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
