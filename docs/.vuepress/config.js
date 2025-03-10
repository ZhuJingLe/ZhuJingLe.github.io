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
    ],
    themeConfig: {
        lastUpdated: '最后更新时间',
        smoothScroll: true,
        logo: '/logo.png',
        displayAllHeaders: true,
        sidebar: [
            ['/', '关于'],
            {
                title: 'CSS篇',   
                path: '/css/',      
                sidebarDepth: 0,    
                children: [
                    ['css/', '第一篇【面试题】'], 
                    ['css/README_02', '第二篇【面试题】']
                ]
            },
            {
                title: 'HTML篇',   
                path: '/html/',      
                sidebarDepth: 0,    
                children: [
                    ['html/', '第一篇'], 
                    ['html/README_02', '第二篇']
                ]
            },
            {
                title: 'javascript篇',   
                path: '/js/',      
                sidebarDepth: 0,    
                children: [
                    ['js/', '面试题01'], 
                    ['js/README_02', '第二篇【详解js原型】'],
                    ['js/README_03', '面试题02']
                ]
            },
            {
                title: 'vue篇',   
                path: '/vue/',      
                sidebarDepth: 0,    
                children: [
                    ['vue/', '第一篇'], 
                    ['vue/README_02', '第二篇']
                ]
            },
            {
                title: 'react篇',   
                path: '/react/',      
                sidebarDepth: 0,    
                children: [
                    ['react/', '第一篇'], 
                    ['react/README_02', '第二篇']
                ]
            },
            {
                title: '后端篇(java、node、python)等',   
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