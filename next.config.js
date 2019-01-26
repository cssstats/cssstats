const withMDX = require('@zeit/next-mdx')({
  extension: /\.(md|mdx)$/
})

module.exports = withMDX({
  target: 'serverless',
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})
