import React from 'react'
import uniq from 'lodash.uniq'
import sort from 'css-unit-sort'

import H2 from './H2'
import Div from './Div'
import Text from './Text'

export default ({ fontSizes }) =>
  <Div mt={5}>
    <H2>{uniq(fontSizes).length} unique font sizes</H2>

    {sort(fontSizes).map(fontSize =>
      <Text
        key={fontSize}
        mb={3}
        fontWeight='bold'
        style={{ fontSize }}
        children={`Font Size ${fontSize}`}
      />
    )}
  </Div>
