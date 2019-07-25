module.exports = {
  siteMetadata: {
    title: 'CSS Stats',
    description: 'Potentially interesting stats on stylesheets'
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-theme-documentation',
      options: {
        basePath: 'docs'
      }
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        siteId: 'CNDZKOSM'
      }
    }
  ]
}
