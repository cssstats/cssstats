import React from 'react'
import Flex from './Flex'
import Link from './Link'

const Header = props => (
  <Flex py={2} alignItems="center" justify="space-between">
    <Link
      href="/"
      fontSize={3}
      fontWeight="bold"
      color="black"
      children="Css Stats"
    />

    <Link
      fontWeight="bold"
      color="black"
      href="https://github.com/cssstats/cssstats"
      children="GitHub"
    />
  </Flex>
)

export default Header
