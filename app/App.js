import React from 'react'

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
    <Index {...props} />
  </ThemeProvider>

export default createProvider(initialState)(App)
