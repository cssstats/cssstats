const React = require('react')

const {
  ThemeProvider
} = require('styled-system')

const theme = require('../theme.json')
const Font = require('./Font')

class Theme extends React.Component {
  render () {
    <ThemeProvider theme={theme}>
      <Font>
        <Component {...this.props} />
      </Font>
    </ThemeProvider>
  }
}

module.exports = Component => Theme
