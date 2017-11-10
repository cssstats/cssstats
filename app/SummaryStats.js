import React from 'react'
import { intComma } from 'humanize-plus'

import {
  Flex,
  GiantSlabStat
} from './library'

export default ({
  rules,
  selectors,
  declarations,
  properties
}) =>
  <Flex wrap='wrap' my={4}>
    <Flex
      w={[1/2, 1/2, 1/4]}
    >
      <GiantSlabStat
        title='Rules'
        stat={intComma(rules)}
      />
    </Flex>

    <Flex
      w={[1/2, 1/2, 1/4]}
    >
      <GiantSlabStat
        title='Selectors'
        stat={intComma(selectors)}
      />
    </Flex>

    <Flex
      w={[1/2, 1/2, 1/4]}
    >
      <GiantSlabStat
        title='Declarations'
        stat={intComma(declarations)}
      />
    </Flex>

    <Flex
      w={[1/2, 1/2, 1/4]}
    >
      <GiantSlabStat
        title='Properties'
        stat={intComma(properties)}
      />
    </Flex>
  </Flex>
