const theme = require('../theme.json')

const {
  ThemeProvider
} = require('styled-system')

module.exports = Component =>
  <ThemeProvider theme={theme}>
    <Component />
  </ThemeProvider>
