import React from 'react'
import Flex from './Flex'
import Link from './Link'
import Div from './Div'
import Hr from './Hr'

const Footer = props => (
  <Div>
    <Hr />
    <Flex py={3} alignItems="center" justify="space-between">
      <Div>
        Made by
        <Link
          href="https://compositor.io"
          ml={1}
          fontWeight="bold"
          color="black"
          children="compositor.io"
        />
      </Div>
      <Div>
        <Link
          fontWeight="bold"
          color="black"
          href="https://github.com/cssstats/cssstats/issues"
          children="Issues"
        />
        <Link
          ml={2}
          fontWeight="bold"
          color="black"
          href="https://github.com/cssstats/cssstats"
          children="GitHub"
        />
      </Div>
    </Flex>
  </Div>
)

export default Footer
