import React from 'react'
import Flex from './Flex'
import Link from './Link'
import { v4 as uuidv4 } from 'uuid'

const LinkBox = props => (
  <Flex
    wrap="wrap"
    children={props.links.map(link => (
      <Flex key={uuidv4()} py={4} w={[1 / 2, 1 / 3, 1 / 6]}>
        <Link
          fontWeight={600}
          display="block"
          href={link.url || link}
          title={link.name || link}
          children={link.name || link}
        />
      </Flex>
    ))}
  />
)

export default LinkBox
