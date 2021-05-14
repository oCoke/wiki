module.exports = {
    base: "/",
    lang: 'zh-CN',
    title: "YWiki",
    description: "编程维基",
    head: [['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/oCoke/cdn@master/favicons/favicon.svg' }]],

    themeConfig: {
        home: "/",
        logo: 'https://cdn.jsdelivr.net/gh/oCoke/cdn@master/favicons/favicon.svg',
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
        contributorsText: "贡献者",
        docsRepo: 'https://github.com/oCoke/ywiki',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkPattern: ':repo/:edit/:branch/:path',
    },
    themePlugins: {
        activeHeaderLinks: true,
        backToTop: true,
        container: true,
        git: true,
    },
    plugins: []
}