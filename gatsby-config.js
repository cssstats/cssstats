module.exports = {
  plugins: [
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        defaultLayouts: {
          default: require.resolve('./components/Layout')
        }
      }
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: 'pages'
      }
    },
    'gatsby-plugin-emotion'
  ]
}