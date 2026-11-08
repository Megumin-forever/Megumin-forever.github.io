# Git 迁移核对清单（由仓库所有者执行）

- [ ] 当前工作分支是 `aurora-migration`，原 `master` 未改变
- [ ] 完成 Astro 源码覆盖，`.git` 未删除
- [ ] 运行 `scripts/import-assets.ps1`，检查 `public/images` 存在三个文件
- [ ] `npm install` 并提交 `package-lock.json`
- [ ] `npm run dev`：中文、英文、Publications、CV、Projects、Blog 等路由打开正常
- [ ] `npm run build` 成功
- [ ] 三篇旧论文 URL 打开，校对英文作者和引用信息
- [ ] 旧的 `/zh/`、`/zh/cv/`、`/zh/publications/` 跳转正常
- [ ] 手机端导航可读，语言/深浅色/页面转场正常
- [ ] 检查原 Jekyll 示例页、旧 GitHub workflows 并选择保留/删除
- [ ] 推送迁移分支后，先查看无部署权限的 `Validate Aurora` Action 是否构建通过，再审查 diff；只在准备正式发布时合并到 `master`
- [ ] GitHub Pages 设置改为 GitHub Actions；确认线上新站和图片、论文链接正常
