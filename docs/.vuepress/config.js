let moment = require('moment');

module.exports = {
    base: '/',
    title: "frontEnd blog",
    description: 'html, css, js, vue, node, react etc.',
    markdown: {
        anchor: { permalink: true },
        toc: { includeLevel: [2] }
    },
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // 不要忘了安装 moment
                    const moment = require('moment')
                    moment.locale(lang)
                    return moment(timestamp).utcOffset(8).format('yyyy-MM-DD HH:mm:ss')
                }
            }
        ],
        '@vuepress/nprogress',
        [
            '@vssue/vuepress-plugin-vssue',
            {
                platform: 'github-v4', //v3的platform是github，v4的是github-v4
                locale: 'zh', //语言
                owner: 'ZhuJingLe', //github账户名
                repo: 'ZhuJingLe.github.io', //github一个项目的名称
                clientId: 'Ov23ctaihHvJResDxpbG',//注册的Client ID
                clientSecret: 'edacae5d3a3fbc94793fe8578d4c03028a6f0685',//注册的Client Secret
                autoCreateIssue:true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
            },
        ]
    ],
    themeConfig: {
        lastUpdated: '最后更新时间',
        smoothScroll: true,
        logo: '/logo.png',
        displayAllHeaders: true,
        sidebar: [
            ['/', '关于本站'],
            {
                title: 'CSS',   
                path: '/css/',      
                sidebarDepth: 0,    
                children: [
                    ['css/', '第一篇'], 
                    ['css/README_02', '第二篇']
                ]
            },
            {
                title: 'HTML',   
                path: '/html/',      
                sidebarDepth: 0,    
                children: [
                    ['html/', '第一篇'], 
                    ['html/README_02', '第二篇']
                ]
            },
            {
                title: 'javascript',   
                path: '/js/',      
                sidebarDepth: 0,    
                children: [
                    ['js/', '第一篇'], 
                    ['js/README_02', '第二篇'],
                    ['js/README_03', '第三篇'],
                    ['js/README_04', '第四篇-手写面试题'],
                ]
            },
            {
                title: 'vue',   
                path: '/vue/',      
                sidebarDepth: 0,    
                children: [
                    ['vue/', '第一篇'], 
                    ['vue/README_02', '第二篇']
                ]
            },
            {
                title: 'react',   
                path: '/react/',      
                sidebarDepth: 0,    
                children: [
                    ['react/', '第一篇'], 
                    ['react/README_02', '第二篇']
                ]
            },
            {
                title: 'python',   
                path: '/backend/',      
                sidebarDepth: 0,    
                children: [
                    ['backend/', '第一篇'], 
                    ['backend/README_02', '第二篇']
                ]
            },
            {
                title: '数据结构与算法',   
                path: '/dataStructure-algorithm/',      
                sidebarDepth: 0,    
                children: [
                    ['/dataStructure-algorithm/', '排序'], 
                ]
            },
            {
                title: '其他',   
                path: '/other/',      
                sidebarDepth: 0,    
                children: [
                    ['other/', '第一篇'], 
                    ['other/README_02', '第二篇']
                ]
            },
        ]
    }
}