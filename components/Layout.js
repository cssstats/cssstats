import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../theme.json'
import { Font, Header, Footer, Container } from './library'

export default ({ title, children }) => (
  <ThemeProvider theme={theme}>
    <Font>
      <title children={title || 'Css Stats'} />

      <Container>
        <Header />
        <Container py={3} children={children} />
        <Footer />
      </Container>
    </Font>
  </ThemeProvider>
)
