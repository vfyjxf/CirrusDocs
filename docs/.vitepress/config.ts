import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(defineConfig({
  lang: "zh-CN",
  title: "CirrusDocs",
  description: "Minecraft Mod 开发知识库",
  base: '/CirrusDocs/',
  cleanUrls: false,
  ignoreDeadLinks: true,
  lastUpdated: true,
  outDir: "../site",
  cacheDir: "./.vitepress/cache",

  markdown: {
    lineNumbers: true,
    image: { lazyLoading: true },
    theme: { light: "github-light", dark: "one-dark-pro" },
  },

  themeConfig: {
    siteTitle: "CirrusDocs",
    outline: { level: [2, 3], label: "本页目录" },
    docFooter: { prev: "上一页", next: "下一页" },
    lastUpdated: { text: "最后更新", formatOptions: { dateStyle: "medium", timeStyle: "short" } },
    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "搜索文档", buttonAriaLabel: "搜索文档" },
          modal: {
            noResultsText: "没有找到结果", resetButtonTitle: "清除查询",
            footer: { selectText: "选择", navigateText: "切换", closeText: "关闭" },
          },
        },
      },
    },
    nav: [{ text: "首页", link: "/" }],
    sidebar: [
      {
        text: "工具链 / Gradle",
        collapsed: true,
        items: [{ text: "概述", link: "/toolchain/" }],
      },
      {
        text: "CoreMod",
        collapsed: false,
        items: [
          { text: "概述", link: "/coremod/" },
          {
            text: "Mixin（通用）",
            collapsed: false,
            items: [
              { text: "Mixin 入门", link: "/coremod/mixin-basics" },
              { text: "ASM 字节码操作", link: "/coremod/asm-bytecode" },
              { text: "调试与排错", link: "/coremod/debugging" },
            ],
          },
          {
            text: "Forge / NeoForge",
            collapsed: false,
            items: [
              { text: "1.7.10 ~ 1.12.2", link: "/coremod/legacy-coremod" },
              { text: "1.16.5", link: "/coremod/1.16.5" },
              { text: "1.18 ~ 1.20.1", link: "/coremod/1.18-1.20.1" },
              { text: "1.20.6 ~ 1.21.8", link: "/coremod/1.20.6-1.21.8" },
              { text: "1.21.9+", link: "/coremod/1.21.9" },
              { text: "Module Layer", link: "/coremod/game-layer" },
              { text: "Early Service", link: "/coremod/early-service" },
            ],
          },
          {
            text: "Fabric",
            collapsed: false,
            items: [
              { text: "（待补充）", link: "" },
            ],
          },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/vfyjxf/CirrusDocs" }],
    footer: { message: "Released under the MIT License.", copyright: "Copyright  vfyjxf" },
  },
}));
