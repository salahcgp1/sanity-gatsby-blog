export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df51b6892246742e58adfbe',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xquawpeh',
                  apiId: '12ea0a87-398f-4508-ad83-44ebc4b6dc2b'
                },
                {
                  buildHookId: '5df51b6896dfb2ad546d64cf',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-oatac52t',
                  apiId: 'bd2c4956-acb3-4e27-9a07-2e13c6e26b82'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/salahcgp1/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-oatac52t.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
