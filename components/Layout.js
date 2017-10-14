import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Container from './Container'

export default ({ children }) =>
  <Container>
    <Header />
    <Container
      py={3}
      children={children}
    />
    <Footer />
  </Container>
