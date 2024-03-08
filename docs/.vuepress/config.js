module.exports = {
    base: '/',
    title: "frontEnd blog",
    description: 'html, css, js, vue, node, react etc.',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
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
                sidebarDepth: 1,    
                children: [
                    ['css/', '第一篇'], 
                    ['css/README_02', '第二篇']
                ]
            },
            {
                title: 'HTML篇',   
                path: '/html/',      
                sidebarDepth: 1,    
                children: [
                    ['html/', '第一篇'], 
                    ['html/README_02', '第二篇']
                ]
            },
            {
                title: 'javascript篇',   
                path: '/js/',      
                sidebarDepth: 1,    
                children: [
                    ['js/', '第一篇'], 
                    ['js/README_02', '第二篇']
                ]
            },
            {
                title: 'vue篇',   
                path: '/vue/',      
                sidebarDepth: 1,    
                children: [
                    ['vue/', '第一篇'], 
                    ['vue/README_02', '第二篇']
                ]
            },
            {
                title: 'react篇',   
                path: '/react/',      
                sidebarDepth: 1,    
                children: [
                    ['react/', '第一篇'], 
                    ['react/README_02', '第二篇']
                ]
            },
            {
                title: '后端篇(java、node、python)等',   
                path: '/backend/',      
                sidebarDepth: 1,    
                children: [
                    ['backend/', '第一篇'], 
                    ['backend/README_02', '第二篇']
                ]
            },
            {
                title: '其他',   
                path: '/other/',      
                sidebarDepth: 1,    
                children: [
                    ['other/', '第一篇'], 
                    ['other/README_02', '第二篇']
                ]
            }
        ]
    }
}