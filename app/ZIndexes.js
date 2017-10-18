import React from 'react'
import uniq from 'lodash.uniq'

import H2 from './H2'
import Div from './Div'
import Text from './Text'

export default ({ zIndexes }) =>
  <Div mt={5}>
    <H2>{uniq(zIndexes).length} unique z indices</H2>

    {zIndexes.map(zIndex =>
      <Text
        key={zIndex}
        mb={3}
        fontWeight='bold'
        children={zIndex}
      />
    )}
  </Div>
