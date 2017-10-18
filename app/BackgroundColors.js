import React from 'react'

import H2 from './H2'
import Div from './Div'
import Flex from './Flex'
import BackgroundColor from './BackgroundColor'

export default ({
  title,
  backgroundColors
}) =>
  <Div>
    <H2>{title}</H2>

    <Flex wrap='wrap'>
      {backgroundColors.map(bg =>
        <Div
          key={bg}
          p={3}
          mb={2}
          w={[1/2, 1/3, 1/6]}
        >
          <BackgroundColor color={bg} />
        </Div>
      )}
    </Flex>
  </Div>
