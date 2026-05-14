# CirrusDocs

Minecraft Mod 开发知识库，基于 [VitePress](https://vitepress.dev) 构建。

在线地址：[vfyjxf.github.io/CirrusDocs](https://vfyjxf.github.io/CirrusDocs)

## 内容

| 分类 | 状态 |
|---|---|
| CoreMod — 概述 | 已完成 |
| CoreMod — Forge / NeoForge（1.20.6 ~ 1.21.8） | 已完成 |
| CoreMod — Module Layer / Early Service | 已完成 |
| CoreMod — Mixin / 其他版本 / Fabric | 待补充 |
| 工具链 / Gradle | 待补充 |

## 本地开发

```bash
npm install
npm run dev
```

启动后访问 `http://localhost:5173`。

## 构建

```bash
npm run build
npm run preview
```

## 部署

Push 到 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。
