/** @jsx jsx */
import { jsx } from 'theme-ui'
import { intComma } from 'humanize-plus'

import { H2, Div, Flex, GiantSlabStat } from './library'

export default ({ classes, id, pseudoClass, pseudoElement }) => {
  return (
    <Div>
      <H2 fontSize={2} mb={2} children="Total Selectors by Type" />
      <p sx={{ opacity: 0.7, mt: 0, mb: 0, fontSize: 1, lineHeight: 1.5 }}>
        Selectors are the part of a CSS ruleset that describes what elements in
        a document the rule will match.
      </p>

      <Flex wrap="wrap">
        <div sx={{ width: ['50%', '25%'] }}>
          <GiantSlabStat title="ID" stat={intComma(id)} />
        </div>
        <div sx={{ width: ['50%', '25%'] }}>
          <GiantSlabStat title="Class" stat={intComma(classes)} />
        </div>
        <div sx={{ width: ['50%', '25%'] }}>
          <GiantSlabStat title="Pseudo Class" stat={intComma(pseudoClass)} />
        </div>
        <div sx={{ width: ['50%', '25%'] }}>
          <GiantSlabStat
            title="Pseudo Element"
            stat={intComma(pseudoElement)}
          />
        </div>
      </Flex>
    </Div>
  )
}
