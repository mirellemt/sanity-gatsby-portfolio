export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f552fdd72c945a738f31e6a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8e4dbf2w',
                  apiId: '6b1d7726-c418-4837-a838-edb067044ceb'
                },
                {
                  buildHookId: '5f552fdd72c945ae21f31c01',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-tejqsjmx',
                  apiId: 'ee89e910-8a23-4d76-b695-f53da2281a7f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mirellemt/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-tejqsjmx.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
