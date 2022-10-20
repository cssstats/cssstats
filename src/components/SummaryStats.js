/** @jsx jsx */
import { jsx } from 'theme-ui'
import { intComma } from 'humanize-plus'

import { H2, Flex, GiantSlabStat } from './library'

export default ({ rules, selectors, declarations, properties }) => (
  <div>
    <h2 sx={{ fontSize: 1 }}>Overview</h2>
    <Flex wrap="wrap">
      <Flex sx={{ width: ['50%', '50%', '25%'] }}>
        <GiantSlabStat title="Rules" stat={intComma(rules)} />
      </Flex>

      <Flex sx={{ width: ['50%', '50%', '25%'] }}>
        <GiantSlabStat title="Selectors" stat={intComma(selectors)} />
      </Flex>

      <Flex sx={{ width: ['50%', '50%', '25%'] }}>
        <GiantSlabStat title="Declarations" stat={intComma(declarations)} />
      </Flex>

      <Flex sx={{ width: ['50%', '50%', '25%'] }}>
        <GiantSlabStat title="Properties" stat={intComma(properties)} />
      </Flex>
    </Flex>
  </div>
)
