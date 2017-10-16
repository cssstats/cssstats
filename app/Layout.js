import React from 'react'

import Font from './Font'
import Header from './Header'
import Footer from './Footer'
import Container from './Container'

export default ({ children }) =>
  <Font>
    <Container>
      <Header />
      <Container
        py={3}
        children={children}
      />
      <Footer />
    </Container>
  </Font>
