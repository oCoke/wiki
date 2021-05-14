module.exports = {
    base: "/",
    lang: 'zh-CN',
    title: "YFun's Wiki",
    description: "YFun 的编程维基",
    head: [['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/oCoke/cdn@master/favicons/64x64.png' }]],

    themeConfig: {
        home: "/",
        logo: 'https://cdn.jsdelivr.net/gh/oCoke/cdn@master/favicons/64x64.png',
        navbar: [

            {
                text: 'Foo',
                link: '/foo/',
            },
            // NavbarGroup
            {
                text: 'Group',
                children: [{ text: 'Foo', link: '/foo/', }, { text: 'Foo', link: '/foo/', }],
            },
        ],
        sidebarDepth: 2,
        lastUpdatedText: "最后更新于",
        lastUpdated: true,
        tip: "提示",
        warning: "警告",
        danger: "危险",
        notFound: ["Page Not Found", "啊哦，这里没有你想找的内容哦~", "页面没找到~"],
        backToHome: "返回首页",
        openInNewWindow: "在新标签页中打开",
        contributors: true,
        contributorsText: "贡献者"
    },
    themePlugins: {
        activeHeaderLinks: true,
        backToTop: true,
        container: true,
        git: true,
    },
    plugins: []
}