module.exports = {
  title: "POSTr, Daddy's Simple Note",
  description: "Meet the Right Resource Everywhere",
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "Hey, New contents updated. Press Refresh button.😄.",
          buttonText: "Refresh"
        }
      }
    ],
    "vuepress-plugin-disqus-comment",
    {
      shortname: "daddysnote", url: "https://note.postr.io"
    },
    ["@vuepress/nprogress"],
    // ["@vuepress/back-to-top"],
    ["@vuepress/last-updated"],
    [
      "vuepress-plugin-clean-urls",
      {
        normalSuffix: "/",
        indexSuffix: "/",
        notFoundPath: "/404.html"
      }
    ],
    // you can use this plugin multiple times
    [
      "vuepress-plugin-container",
      {
        type: "right",
        defaultTitle: ""
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "theorem",
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: "</div>"
      }
    ],

    // this is how VuePress Default Theme use this plugin
    [
      "vuepress-plugin-container",
      {
        type: "tip",
        defaultTitle: {
          "/": "TIP",
          "/zh/": "提示"
        }
      }
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-35040761-2" // UA-00000000-0
      }
    ]
  ],
  head: [
    ["link", { rel: "icon", href: "/images/favicon.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["link", { rel: "apple-touch-icon", href: "/images/icons/152.png" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/images/icons/logo.svg",
        color: "#8dd6f9"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/images/icons/144.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#8dd6f9" }]
  ],
  themeConfig: {
    // logo: '/assets/img/GGGILogo.png',
    nextLinks: true,
    prevLinks: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "CodeLearn", link: "/Code/" },
      { text: "Requirements", link: "/Req/" },
      { text: "ItemsToPlay", link: "/Items/" },
      { text: "Blog", link: "/Blog/" },
      {
        text: "📝Links",
        ariaLabel: "Links",
        items: [
          {
            text: "Vuepress",
            link: "https://v1.vuepress.vuejs.org/"
          },
          {
            text: "VueJS",
            link: "https://vuejs.org/"
          }
        ]
      }
      // {
      //   text: "OrgChart1",
      //   link: "https://gggioc.netlify.com/",
      //   target: "_blank"
      // },
      // {
      //   text: "OrgChart2",
      //   link: "/OrgChart/",
      //   target: "_blank"
      // },
      // { text: "HR InPress", link: "https://google.com", target: "_blank" }
    ],

    // sidebar: 'auto',
    sidebar: [  
      {
        title: "Code Learn", // required
        path: "/Code/", // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: [
          "/HTML-CSS/",
          "/Vuejs/",
          "/Vuepress/",
          "/DataBase/",
          "/Server/",
          "/Git-Hub/",
          "/Data Science/",
          "/Mark Down/"
        ]
      },
      {
        title: "Requirements", // required
        path: "/req/", // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        // children: ["/StudyTogether/", "/Profittability/"]
      },
      {
        title: "Items", // required
        path: "/items/", // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ["/StudyTogether/", "/Profittability/"]
      },
      

      // {
      //   title: "People by Duty Station",
      //   path: "/P-byDutyStation/", // optional, which should be a absolute path.
      //   collapsable: true, // optional, defaults to true
      //   sidebarDepth: 1, // optional, defaults to 1
      //   children: [
      //     /* ... */
      //   ]
      // }
    ],
    searchPlaceholder: "Search...",
    smoothScroll: true,

  }
};