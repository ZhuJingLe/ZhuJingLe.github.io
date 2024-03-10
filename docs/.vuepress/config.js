let moment = require('moment');

module.exports = {
    base: '/',
    title: "frontEnd blog",
    description: 'html, css, js, vue, node, react etc.',
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
                    return moment(timestamp).format('yyyy-MM-DD HH:mm:ss')
                }
            }
        ]
    ],
    themeConfig: {
        lastUpdated: '最后更新时间',
        logo: '/logo.png',
        displayAllHeaders: true,
        sidebar: [
            ['/', '关于'],
            {
                title: 'CSS篇',   
                path: '/css/',      
                sidebarDepth: 0,    
                children: [
                    ['css/', '【css面试题】第一篇'], 
                    ['css/README_02', '第二篇']
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
                    ['js/', '第一篇'], 
                    ['js/README_02', '第二篇']
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
                title: '其他',   
                path: '/other/',      
                sidebarDepth: 0,    
                children: [
                    ['other/', '第一篇'], 
                    ['other/README_02', '第二篇']
                ]
            }
        ]
    }
}