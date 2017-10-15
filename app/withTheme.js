import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../theme.json'
import Font from './Font'

export default Component =>
  class Theme extends React.Component {
    render () {
      return (
        <ThemeProvider theme={theme}>
          <Font>
            <Component {...this.props} />
          </Font>
        </ThemeProvider>
      )
    }
  }
