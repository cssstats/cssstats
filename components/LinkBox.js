import React from 'react'
import Flex from './Flex'
import Link from './Link'

const LinkBox = props => (
  <Flex
    wrap="wrap"
    children={props.links.map(link => (
      <Flex p={2} w={[1 / 2, 1 / 3, 1 / 6]}>
        <Link
          fontWeight={600}
          display="block"
          href={link.href}
          title={link.name}
          children={link.name}
        />
      </Flex>
    ))}
  />
)

export default LinkBox
