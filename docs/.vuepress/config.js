module.exports = {
  title: 'Markdown Styleguide',
  description: 'One guide to rule them all',
  base: "/styleguide-markdown/",
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
        'headings',
        'horizontal-rules',
        'lists',
      ]
    }
  ]
  }
}
