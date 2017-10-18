import React from 'react'
import uniq from 'lodash.uniq'

import H2 from './H2'
import Div from './Div'
import Text from './Text'

export default ({ fontFamilies }) =>
  <Div mt={5}>
    <H2>{uniq(fontFamilies).length} unique font families</H2>

    {fontFamilies.map(fontFamily =>
      <Text
        key={fontFamily}
        mb={3}
        fontWeight='bold'
        style={{ fontFamily }}
        children={fontFamily}
      />
    )}
  </Div>
