import { viteBundler } from "@vuepress/bundler-vite";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
  title: "心安乡",
  description: "Yuxiao Feng (Emo) is a visitor sitting in Lake Pavilion.",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    ["meta", { name: "application-name", content: "Emo" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Emo" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],

  bundler: viteBundler(),

  theme: gungnirTheme({
    repo: "877758808/Blog",
    docsDir: "blog",
    docsBranch: "master",

    hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: "Emo",
      avatar: "/img/avatar.jpg",
      description: "我与我周旋久，宁作我",
      sns: {
        // github: "877758808",
        // linkedin: "",
        // facebook: "",
        // twitter: "",
        // zhihu: "",
        // email: "zp5fyb@163.com",
        // rss: "",
      }
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgba(196, 176, 131, .1)"
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)"
      },
      {
        path: "/img/home-bg/5.jpg"
      }
    ],

    // other pages
    pages: {
      tags: {
        subtitle: "怕什么真理无穷，进一寸有一寸的欢喜",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        subtitle:
          "吾生也有涯，而知也无涯",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },

    navbar: [
      {
        text: "Home",
        link: "/",
        icon: "fa-fort-awesome"
      },
      {
        text: "Tags",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "Links",
        link: "/links/",
        icon: "fa-satellite-dish"
      },
      {
        text: "Deja-vu",
        link: "/dejavu/",
        icon: "ri-zzz-line"
      },
      {
        text: "Github",
        link: "https://github.com/877758808/",
        icon: "ri-github-line"
      }
    ],

    themePlugins: {
      katex: true,
      mermaid: true,
      chartjs: true,
      mdPlus: {
        all: true
      },
      pwa: true,
      search: false // use @vuepress/plugin-docsearch instead
    },

    footer: `
      <a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备2022030791号</a>
      &copy; <a href="https://github.com/877758808/" target="_blank">Emo</a> 2019-2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  }),

  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  },

  plugins: [
    docsearchPlugin({
      appId: "3DDLGP0IG4",
      apiKey: "6556adaa82b31485309b440a525f264a",
      indexName: "v2-vuepress-theme-gungnir",
      locales: {
        "/zh/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档"
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消"
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除"
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接"
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者"
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈"
              }
            }
          }
        }
      }
    })
  ]
});
