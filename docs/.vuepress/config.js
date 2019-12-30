module.exports = {
  title: 'Markdown Styleguide',
  description: 'One guide to rule them all',
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
        'lists',
      ]
    }
  ]
  }
}
