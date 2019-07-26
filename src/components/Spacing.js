import React from 'react'
import uniq from 'lodash.uniq'
import sort from 'css-unit-sort'

import { Flex, Div, Text, SectionTitle } from './library'

export default ({ paddings = [] }) => (
  <Div mt={5}>
    <SectionTitle
      title={`${uniq(paddings).length} Padding`}
      description={`${paddings.length} total`}
    />

<Flex wrap='nowrap' width={1}>
    {sort(paddings).map(padding => (
      <div
        key={padding}
        title={padding}
        style={{ 
          height: padding,
          width: '4px',
          background: 'black',
        }}
      />
    ))}
    </Flex>
  </Div>
)
