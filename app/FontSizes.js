import React from 'react'
import uniq from 'lodash.uniq'
import sort from 'css-unit-sort'

import Div from './Div'
import Text from './Text'
import SectionTitle from './SectionTitle'

export default ({ fontSizes }) =>
  <Div mt={5}>
    <SectionTitle
      title={`${uniq(fontSizes).length} unique font families`}
      description={`${fontSizes.length} total`}
    />

    {sort(uniq(fontSizes)).map(fontSize =>
      <Text
        key={fontSize}
        mb={3}
        fontWeight='bold'
        style={{ fontSize }}
        children={`Font Size ${fontSize}`}
      />
    )}
  </Div>
