/** @jsx jsx */
import { jsx } from 'theme-ui'
import { intComma } from 'humanize-plus'

import { H2, Div, Flex, SlabStat } from './library'

export default ({ classes, id, pseudoClass, pseudoElement }) => {
  return (
    <Div>
      <H2 mb={2} children="Total Selectors by Type" />
    <p sx={{opacity: .7, fontSize: 1, lineHeight: 1.5}}>
      Selectors are the part of a CSS ruleset that describes what elements in a document the rule will match.
    </p>

      <Flex
        mt={3}
        mb={[4,5,6]}
        wrap="wrap"
      >
          <SlabStat
            mr={[4,5]}
            title='ID'
            stat={intComma(id)}
          />
          <SlabStat
    mr={[4,5]}
            title='Class'
            stat={intComma(classes)}
          />
          <SlabStat
    mr={[4,5]}
            title='Pseudo Class'
            stat={intComma(pseudoClass)}
          />
          <SlabStat
            title='Pseudo Element'
            stat={intComma(pseudoElement)}
          />
      </Flex>
    </Div>
  )
}
