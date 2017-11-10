import React from 'react'

import {
  H2,
  Hr,
  Div,
  Flex,
  Link,
  Text
} from './library'

const SubHeader = props => (
  <Div>
    <Flex py={3} alignItems="center" justify="space-between">
      <H2 my={0} children={props.title} />

      <Text uppercase fontWeight="bold" children={props.text} />
    </Flex>
    <Hr />
  </Div>
)

export default SubHeader
