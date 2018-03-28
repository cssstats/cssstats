import React from 'react'

import { Font, Header, Footer, Container } from './library'

export default ({ title, children }) => (
  <Font>
    <title children={title || 'Css Stats'} />

    <Container>
      <Header />
      <Container py={3} children={children} />
      <Footer />
    </Container>
  </Font>
)
