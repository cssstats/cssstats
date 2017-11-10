import React from 'react'
import uniq from 'lodash.uniq'

import Div from './Div'
import Flex from './Flex'
import Color from './Color'
import SectionTitle from './SectionTitle'

export default ({
  title,
  colors
}) =>
  <Div>
    <SectionTitle
      title={`${uniq(colors).length} unique colors`}
      description={`${colors.length} total`}
    />

    <Flex wrap='wrap'>
      {uniq(colors).map(color =>
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
