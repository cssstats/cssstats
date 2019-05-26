module.exports = {
  plugins: [
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        defaultLayouts: {
          docs: require.resolve('./components/Layout')
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