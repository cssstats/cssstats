import React from 'react'
import Router from '@compositor/x0/lib/Router'

import {
  Route,
  Link
} from 'react-router-dom'

import {
  ThemeProvider
} from 'styled-components'

import theme from '../theme.json'

import Index from './Index'
import Stats from './Stats'

export default props =>
  <ThemeProvider theme={theme}>
    <Router
      basename={props.basename}
      location={props.pathname}
    >
      <Route
        exact
        path='/'
        render={() => <Index {...props} />}
      />
      <Route
        path='/stats'
        render={() => <Stats {...props} />}
      />
    </Router>
  </ThemeProvider>
