import React from 'react'

import Div from './Div'
import Header from './Header'
import Footer from './Footer'

export default ({ children }) =>
  <Div>
    <Header />
    {children}
    <Footer />
  </Div>
