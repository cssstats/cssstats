import React from 'react'

import {
  StaticRouter,
  BrowserRouter,
  Route
} from 'react-router-dom'

import connect from 'refunk'

import {
  ThemeProvider
} from 'styled-components'

import theme from '../theme.json'

import Index from './Index'
import Stats from './Stats'

const Router = typeof document === 'undefined' ? StaticRouter : BrowserRouter

const App = props =>
  <ThemeProvider theme={theme}>
    <Router>
      <div>
        <Route
          exact
          path='/'
          render={() => <Index {...props} />}
        />
        <Route
          path='/stats'
          render={() => <Stats {...props} />}
        />
      </div>
    </Router>
  </ThemeProvider>

export default connect(App)
