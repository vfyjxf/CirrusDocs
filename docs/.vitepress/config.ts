import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "Cirrus Docs",
  description: "A VitePress documentation template.",
  cleanUrls: false,
  lastUpdated: true,
  outDir: "../site",
  cacheDir: "./.vitepress/cache",

  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
    theme: {
      light: "github-light",
      dark: "one-dark-pro",
    },
  },

  themeConfig: {
    siteTitle: "Cirrus Docs",
    outline: {
      level: [2, 3],
      label: "本页目录",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
      },
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "没有找到结果",
            resetButtonTitle: "清除查询",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
    nav: [{ text: "首页", link: "/" }],
    sidebar: [
      {
        text: "模板",
        items: [{ text: "首页", link: "/" }],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/vfyjxf/CirrusDocs" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © vfyjxf",
    },
  },
});
