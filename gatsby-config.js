module.exports = {
  siteMetadata: {
    title: 'CSS Stats',
    description: 'Potentially interesting stats on stylesheets',
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
      },
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        siteId: 'CNDZKOSM',
      },
    },
  ],
}
