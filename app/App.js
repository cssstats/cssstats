import React from 'react'

import Router from '@compositor/x0/lib/Router'

import {
  Route
} from 'react-router-dom'

import {
  createProvider
} from 'refunk'

import {
  ThemeProvider
} from 'styled-components'

import theme from '../theme.json'

import Index from './Index'
import Stats from './Stats'

const initialState = {}

const App = props =>
  <ThemeProvider theme={theme}>
    <Router>
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

export default createProvider(initialState)(App)
