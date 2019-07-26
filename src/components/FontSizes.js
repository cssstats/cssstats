import React from 'react'
import uniq from 'lodash.uniq'
import sort from 'css-unit-sort'

import { Div, Span, H2, H3, Text, SectionTitle } from './library'

export default ({ fontSizes = [] }) => (
  <Div mt={5} style={{overflowX: 'auto' }}>
    <SectionTitle
      title='Type Scale'
      description={`${uniq(fontSizes).length} Unique font sizes`}
    />


    {sort(uniq(fontSizes)).map(fontSize => (
    <Div borderBottom='1px solid' py={3}>
      <Text fontSize={1} mb={0} fontWeight={500}>
        {fontSize}        
      </Text>
      <Text
        key={fontSize}
        fontWeight="700"
        style={{ fontSize, whiteSpace: 'nowrap' }}
        children='Quick brown fox jumped'
      />
      </Div>
    ))}
  </Div>
)
