/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import uniq from 'lodash.uniq'

import { Div, Flex, Color, SectionTitle } from './library'

export default ({ colors = [] }) => (
  <Div>
    <h2 sx={{ fontSize: 5 }}>Colors</h2>
    <SectionTitle
      title={`${uniq(colors).length} unique colors`}
      description="Printed by declaration order in source code"
    />
    <Flex
      wrap="wrap"
      mb={5}
      children={uniq(colors).map(color => (
        <Div key={color} mb={2} width={[2 / 5, 1 / 3, 1 / 8]}>
          <Color color={color} />
        </Div>
      ))}
    />
    <SectionTitle
      title={`${colors.length} total color declarations`}
      description="Sorted by like values"
    />
    <Flex
      wrap="wrap"
      children={colors.sort().map((color, i) => (
        <Div
          key={color * i}
          children="A"
          fontSize="32px"
          fontWeight={900}
          color={color}
          title={color}
        />
      ))}
    />
  </Div>
)
