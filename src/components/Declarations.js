/** @jsx jsx */
import { jsx } from 'theme-ui'
import { intComma } from 'humanize-plus'

import { H2, Div, Flex, SlabStat } from './library'

export default ({ properties }) => {
  const metrics = [
    {
      name: 'Float',
      value: properties.float || []
    },
    {
      name: 'Width',
      value: properties.width || []
    },
    {
      name: 'Height',
      value: properties.height || []
    },
    {
      name: 'Padding',
      value: properties['padding'] || []
    },
    {
      name: 'Margin',
      value: properties['margin'] || []
    },
    {
      name: 'Display',
      value: properties['display'] || []
    },
    {
      name: 'Font Size',
      value: properties['font-size'] || []
    },
    {
      name: 'Text Align',
      value: properties['text-align'] || []
    },
    {
      name: 'Color',
      value: properties.color || []
    },
    {
      name: 'Background Color',
      value: properties['background-color'] || []
    },
    {
      name: 'Border Color',
      value: properties['border-color'] || []
    },
  ]

  return (
    <Div>
      <H2 mb={0} fontSize={3} fontWeight={600} children="Total Declarations of Select Properties" />

      <Flex
        mt={0}
        mb={4}
        wrap="wrap"
        children={metrics.map(metric => (
          <Flex key={metric.name} sx={{ width: ['50%', '25%', '20%'] }}>
            <SlabStat
              title={metric.name}
              stat={intComma(metric.value.length)}
            />
          </Flex>
        ))}
      />
    </Div>
  )
}
