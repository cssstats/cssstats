import React from 'react'
import createHistory from 'history/createBrowserHistory'

import {
  Router,
  Route,
  Link
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

const initialState = {
  history: typeof document !== 'undefined' ? createHistory() : null
}

const App = props =>
  <ThemeProvider theme={theme}>
    <Router
      basename={props.basename}
      location={props.pathname}
      history={props.history}
    >
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

export default createProvider(initialState)(App)
