/** @jsx jsx */
import { jsx } from 'theme-ui'
import titleize from 'titleize'

import { H2, Div, Flex, SlabStat } from './library'

export default ({ properties }) => {
  const spacingProperties = [
    'margin',
    'margin-top',
    'margin-left',
    'margin-right',
    'margin-bottom',
    'padding',
    'padding-top',
    'padding-left',
    'padding-right',
    'padding-bottom'
  ]

  return (
    <Div py={[3, 4, 5]}>
      <H2 mb={3} children="Spacing Resets" />
      <p sx={{ fontSize: 0, mt: 0 }}>
        Amount of times each property has been set to 0
      </p>

      <Flex
        wrap="wrap"
        children={spacingProperties.map(prop => {
          const props = properties[prop] || []
          const resets = props.filter(v => v === '0')

          return (
            <SlabStat
              key={prop}
              sx={{ mb: 3, width: ['50%', '25%', '20%'] }}
              title={titleize(prop.replace('-', ' '))}
              stat={resets.length}
            />
          )
        })}
      />
    </Div>
  )
}
