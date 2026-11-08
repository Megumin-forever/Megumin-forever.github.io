# Aurora Research V2.1 · Megumin Content Migration

这是 **Aurora V2.1 的真实内容迁移版**，不是新的视觉模板。V2.1 的 SVG 神经网络、蓝紫青粉色板、字体、毛玻璃、鼠标聚光灯、打字机、页面转场均保留。

## 已整合的内容

- 姓名展示：**Megumin**；学术署名：**Chengxun Jin（金成勋）**。
- 首页双语简介、研究兴趣、三条真实新闻（2026）。
- 三篇 NeurIPS/ICML 2026 会议论文、作者顺序、引用与原页面 URL。
- 吉林大学本科、清华大学实习和 2027 年即将入学硕士经历。
- 四条真实奖项记录。
- Research Areas：LLM Post-training / Diffusion Models / AI Agents / Agent RSI（仅记录用户确认做过的方向，不编造技术细节）。
- Publications 中英文列表、三篇论文中英文详情、CV / Projects / Blog 双语页面。
- 旧中文 `/zh/`、`/zh/cv/`、`/zh/publications/` 等页面的兼容跳转。

原网站公开页面未提供确定可迁移的技术博客正文、项目工程详情或 PDF 简历，所以未凭空生成。博客暂为空状态；项目页面展示已确认的实践方向。

## 独立预览（不影响线上网站）

需要 **Node.js >= 22.23.4**（建议 24 LTS）；用过的 Conda 环境可以继续使用：

```powershell
conda activate astro-web
cd E:\megumin-aurora-migration-preview    # 改为本项目实际解压路径
npm install
npm run dev
```

访问 `/`（中文）、`/en/`（英文）、`/publications/`、`/en/publications/`、`/cv/`、`/en/cv/`。

头像和校徽暂时引用原公开站的绝对 URL，因此独立预览可直接使用。**上线前请导入到本地 `public/images`**，保证迁移完成后资源继续存在：

```powershell
.\scripts\import-assets.ps1 -OldRepo "E:\megumin-aurora-migration"
```

也可以直接从原仓库 `images/` 复制 `R.jpg`、`jluai.png`、`tsinghua-logo.png` 到新站 `public/images/`。

## 整合到已建立的 Git 工作副本

你的仓库默认分支是 `master`，迁移分支建议是 `aurora-migration`。确认已经在该分支：

```powershell
cd E:\megumin-aurora-migration
git status
git branch --show-current
```

将当前迁移项目 ZIP 解压到**其他文件夹**，例如 `E:\megumin-aurora-preview`，然后在预览项目里执行：

```powershell
cd E:\megumin-aurora-preview
.\scripts\overlay-into-clone.ps1 -TargetRepo "E:\megumin-aurora-migration"
```

脚本只将 Astro 的源文件与配置**覆盖**进已有的 Git 副本，不会修改 `.git` 历史，也不会自动删除旧 Jekyll 资源。接着：

```powershell
cd E:\megumin-aurora-migration
.\scripts\import-assets.ps1 -OldRepo .
conda activate astro-web
npm install
npm run dev
npm run build
```

务必提交自动生成的 `package-lock.json`，确保 GitHub Actions 能识别 npm。迁移分支另有 `validate-aurora.yml`，只构建检查、不部署线上网站；该流程使用 `npm ci`，所以 lockfile 必不可少。检查完本地效果、中文英文、图片、三篇论文详情和历史链接后，再决定 Git 推送和正式发布。

⚠️ **不要在尚未通过构建与浏览器检查前，将迁移分支合并到 `master`。** 迁移副本仍可能含有 Jekyll 旧工作流和示例文件；正式发布前应审查并关闭与新 Astro `deploy.yml` 冲突的旧工作流，并在 GitHub 仓库的 `Settings → Pages` 选择 `GitHub Actions`。

## 内容编辑位置

- `src/data/site.ts`：中文真实资料、论文原始署名/引用、奖项、新闻、研究方向。
- `src/data/site.en.ts`：英文翻译，论文元信息从中文文件继承。
- `src/data/i18n.ts`：中英文界面文案及导航。
- `src/components/views/PublicationsView.astro`：论文列表。
- `src/components/views/PublicationDetailView.astro`：论文详情。
- `src/styles/global.css`：保留 V2.1 原版样式，只在末尾增加兼容内容页面的样式。

## 旧地址与迁移注意事项

- 原英文首页 `/` 按之前确定的方案改为**中文首页**；英文首页现在为 `/en/`。
- 原中文首页 `/zh/` 将跳转到 `/`，旧 `/zh/cv/` 和 `/zh/publications/` 也有对应跳转。
- 原论文详情的 `/publication/<旧slug>/` 路径被保留（默认展示中文版），英文详情在 `/en/publication/.../`。
- 原站其他 Jekyll 示例路径（`/cv-json/`、`/talks/` 等）没有迁移，发布前确认不再需要。
- 如旧站另有 PDF / 配图 / 文章文件，先核对是否属于你的真实内容再复制；本项目**没有复制模板演示文章**。

## 验证范围

构建依赖无法在当前离线环境中下载，因此没有实际跑过 `astro build`；提供的是源码与静态检查版本。你本地的 `npm run build` 是发布前必做的验收步骤。GitHub Actions 只在推送 `master` 后部署，迁移分支不会自动覆盖线上站点。
