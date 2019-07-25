import React from 'react'
import uniq from 'lodash.uniq'

import { Div, Flex, Color, SectionTitle } from './library'

export default ({ colors = [] }) => (
  <Div>
    <SectionTitle
      title={`${uniq(colors).length} Unique Colors`}
      description={`${colors.length} total`}
    />

    <Flex
      wrap="wrap"
      children={uniq(colors).map(color => (
        <Div key={color} p={3} mb={2} w={[2 / 5, 1 / 3, 1 / 6]}>
          <Color color={color} />
        </Div>
      ))}
    />
    <SectionTitle
      title={`${colors.length} Total`}
    />
    <Div
      children={colors.sort().map((color, i) => (
          <Div key={color * i} py={1} bg={color}  />
      ))}
    />
  </Div>
)
