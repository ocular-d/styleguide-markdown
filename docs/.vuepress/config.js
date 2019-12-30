module.exports = {
  title: 'Markdown Styleguide',
  description: 'One guide to rule them all',
  base: "/styleguide-markdown/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'ocular-d/styleguide-markdown',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: 'Help us improve this page!',
    sidebar: [{
      title: 'Guidelines',
      collapsable: true,
      children: [
        'accessibility-a11y',
        'comments',
        'blockquotes',
        'emphasis',
        'headings',
        'horizontal-rules',
        'lists',
        'naming-conventions'
      ]
    }
  ]
  }
}
