module.exports = {
  title: 'Markdown Style Guide',
  description: 'One guide to rule them all',
  base: "/styleguide-markdown/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', {
    rel: 'stylesheet',
    type: 'text/css',
    href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i'},
    ],
    ['link', {
    rel: 'stylesheet',
    type: 'text/css',
    href: 'https://fonts.googleapis.com/css?family=Miriam+Libre:400,700'
    }]
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
        'space'
      ]
    }
  ]
  }
}
