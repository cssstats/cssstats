import React from 'react'
import uniq from 'lodash.uniq'

import {
  Div,
  Text,
  SectionTitle
} from './library'

export default ({ fontFamilies }) =>
  <Div mt={5}>
    <SectionTitle
      title={`${uniq(fontFamilies).length} Unique Font Families`}
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
