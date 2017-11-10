import React from 'react'

import {
  Font,
  Header,
  Footer,
  Container
} from './library'

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
