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
                  buildHookId: '5d4b273ad173186d54c3e3ae',
                  title: 'Sanity Studio',
                  name: 'blog-studio-8jebuytt',
                  apiId: '906329fb-7b5b-4ee8-9dff-5af3ae2a8cee'
                },
                {
                  buildHookId: '5d4b273a5ea3176039944e47',
                  title: 'Blog Website',
                  name: 'blog-web-9a8a8fpc',
                  apiId: 'ec2e103e-2c76-466d-b02c-6d77e2a94f4b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rileypetersen/blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://blog-web-9a8a8fpc.netlify.com', category: 'apps'}
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
