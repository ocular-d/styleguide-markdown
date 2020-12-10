module.exports = {
  title: 'Markdown Style Guide',
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
    nav: [
      { text: 'Content Style Guide', link: 'https://editorial.ocular-d.tech//' }
    ],
    sidebar: [{
      title: 'Guidelines',
      collapsable: false,
      children: [
        'accessibility-a11y',
        'code',
        'comments',
        'blockquotes',
        'emphasis',
        'headings',
        'horizontal-rules',
        'links',
        'lists',
        'naming-conventions',
        'paragraphs',
        'strings',
        'tables',
        'whitespace'
      ]
    }
  ]
  }
}
