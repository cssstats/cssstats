/** @jsx jsx */
import { jsx } from 'theme-ui'
import { intComma } from 'humanize-plus'

import { H2, Div, Flex, SlabStat } from './library'

export default ({ classes, id, pseudoClass, pseudoElement }) => {
  return (
    <Div>
      <H2 mb={0} children="Selectors" />

      <Flex
        mt={0}
        mb={4}
        wrap="wrap"
      >
        <Flex sx={{ width: ['50%', '25%', '15%'] }}>
          <SlabStat
            title='Class'
            stat={intComma(classes)}
          />
        </Flex>
        <Flex sx={{ width: ['50%', '25%', '15%'] }}>
          <SlabStat
            title='ID'
            stat={intComma(id)}
          />
        </Flex>
        <Flex sx={{ width: ['50%', '25%', '15%'] }}>
          <SlabStat
            title='Pseudo Class'
            stat={intComma(pseudoClass)}
          />
        </Flex>
        <Flex sx={{ width: ['50%', '25%', '15%'] }}>
          <SlabStat
            title='Pseudo Element'
            stat={intComma(pseudoElement)}
          />
        </Flex>
      </Flex>
    </Div>
  )
}
