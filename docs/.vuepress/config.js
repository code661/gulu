module.exports = {
  title: "轱辘UI",
  base: "/gulu/",
  description: "一个基于Vue 2.x 的前端UI组件库",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "GitHub", link: "https://github.com/code661/gulu" }
    ],
    sidebar: [
      "/",
      {
        title: "组件",
        children: [
          "/component/button",
          "/component/input",
          "/component/layout",
          "/component/grid",
          "/component/tabs",
          "/component/popover",
          "/component/toast",
          "/component/collapse",
        ]
      }
    ]
  },
};
