import React from 'react'
import uniq from 'lodash.uniq'

import { Span, Div, Text, SectionTitle } from './library'

export default ({ fontFamilies = [] }) => (
  <Div mt={5}>
    <SectionTitle
      title={`${uniq(fontFamilies).length} Unique Font Families`}
      description={`${fontFamilies.length} total`}
    />

    {uniq(fontFamilies).map(fontFamily => (
    <Div key={fontFamily} borderBottom='1px solid' py={4}>
      <Text
        mb={3}
        fontWeight="bold"
        children={fontFamily}
      />
      <Div
        fontSize={[4,5,6]}
        fontWeight="bold"
        style={{ fontFamily }}
      >
        ABCDEFGHIJKLMNOPQRSTUVWXYZ 
        <br />
        <span style={{fontWeight: 400}}>abcdefghijklmnopqrstuvwxyz</span>
        <br />
        <span style={{fontWeight: 400}}>0123456789!@#$%^&*()-+{}[];</span>
      </Div>
      </Div>
    ))}
  </Div>
)
