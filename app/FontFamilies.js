import React from 'react'
import uniq from 'lodash.uniq'

import Div from './Div'
import Text from './Text'
import SectionTitle from './SectionTitle'

export default ({ fontFamilies }) =>
  <Div mt={5}>
    <SectionTitle
      title={`${uniq(fontFamilies).length} unique font families`}
      description={`${fontFamilies.length} total`}
    />

    {uniq(fontFamilies).map(fontFamily =>
      <Text
        key={fontFamily}
        mb={3}
        fontWeight='bold'
        style={{ fontFamily }}
        children={fontFamily}
      />
    )}
  </Div>
