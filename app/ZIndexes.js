import React from 'react'
import uniq from 'lodash.uniq'

import Div from './Div'
import Text from './Text'
import SectionTitle from './SectionTitle'

export default ({ zIndexes }) =>
  <Div mt={4} mb={3}>
    <SectionTitle
      title={`${uniq(zIndexes).length} Unique Z Indices`}
      description={`${zIndexes.length} total`}
    />

    {uniq(zIndexes).map(zIndex =>
      <Text
        key={zIndex}
        mb={3}
        mr={3}
        inline={true}
        fontWeight='bold'
        children={zIndex}
      />
    )}
  </Div>
