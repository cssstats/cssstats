import React from 'react'

import Flex from './Flex'
import GiantSlabStat from './GiantSlabStat'

export default ({
  rules,
  selectors,
  declarations,
  properties
}) =>
  <Flex wrap my={4}>
    <Flex
      w={[1/2, 1/2, 1/4]}
    >
      <GiantSlabStat
        title='Rules'
        stat={rules}
      />
    </Flex>
    <Flex
      w={[1/2, 1/2, 1/4]}
    >
      <GiantSlabStat
        title='Selectors'
        stat={selectors}
      />
    </Flex>
    <Flex
      w={[1/2, 1/2, 1/4]}
    >
      <GiantSlabStat
        title='Declarations'
        stat={declarations}
      />
    </Flex>
    <Flex
      w={[1/2, 1/2, 1/4]}
    >
      <GiantSlabStat
        title='Properties'
        stat={properties}
      />
    </Flex>
  </Flex>
