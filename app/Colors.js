import React from 'react'

import H2 from './H2'
import Div from './Div'
import Flex from './Flex'
import Color from './Color'

export default ({
  title,
  colors
}) =>
  <Div>
    <H2>{title}</H2>

    <Flex wrap='wrap'>
      {colors.map(color =>
        <Div
          key={color}
          p={3}
          mb={2}
          w={[1/2, 1/3, 1/6]}
        >
          <Color color={color} />
        </Div>
      )}
    </Flex>
  </Div>
