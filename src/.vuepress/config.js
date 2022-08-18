const { description } = require('../../package')

// const langs = [
//   {text: 'English', link: '/'},
//   {text: '한국어', link: '/kr/'},
// ]


module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Taycan Mainnet Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  // description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    // nav: {
    //   default: [
    //     {text: 'Guide', link: '/guide/'},
    //     {text: 'Config', link: '/config/'},
    //     {title: 'Languages', type: 'dropdown', items: langs }
    //   ],
    //   kr: [
    //     { text: '가이드', link: '/guide/'},
    //     { text: '설정', link: '/config/'},
    //     { title: 'Languages', type: 'dropdown', items: langs }
    //   ]
    // },
    nav: [
        {text: 'Guide', link: '/guide/'},
       // {text: 'Config', link: '/config/'},
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'install',
            'whitepaper_en',
            'whitepaper_kr'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
