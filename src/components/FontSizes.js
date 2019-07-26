import React from 'react'
import uniq from 'lodash.uniq'
import sort from 'css-unit-sort'

import { Flex, Div, Span, H2, H3, Text, SectionTitle } from './library'

export default ({ fontSizes = [] }) => (
  <Div mt={5} style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
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
    <SectionTitle
      mt={5}
      title={`${fontSizes.length} Total font size declarations`}
    />
    <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', paddingBottom: 16 }}>
    <table cellSpacing='0' cellPadding='0'>
    <tr>
    {sort(fontSizes).map(fontSize => (
      <td
        key={fontSize}
        style={{ fontSize, textAlign: 'center', fontWeight: 700, verticalAlign: 'bottom', lineHeight: .75, paddingBottom: 8, paddingLeft: 4, paddingRight: 4,
        borderLeft: '1px solid',
        borderBottom: '1px solid' 
        }}
        children='A'
      />
    ))}
    </tr>
    <tr>
    {sort(fontSizes).map(fontSize => (
      <td
        key={fontSize}
        style={{ 
          textAlign: 'center', fontWeight: 400, verticalAlign: 'bottom', fontSize: 12, 
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 4,
          borderLeft: '1px solid', 
          }}
        children={fontSize}
      />
    ))}
    </tr>
    </table>
    </div>
  </Div>
)
