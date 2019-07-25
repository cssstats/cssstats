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
      name: 'Font Sizes',
      value: properties['font-size'] || []
    },
    {
      name: 'Color',
      value: properties.color || []
    },
    {
      name: 'Background Colors',
      value: properties['background-color'] || []
    }
  ]

  return (
    <Div>
      <H2 mb={0} children="Total Declarations" />

      <Flex
        mt={0}
        mb={4}
        wrap="wrap"
        children={metrics.map(metric => (
          <Flex key={metric.name} sx={{ width: ['50%', '25%', '15%'] }}>
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
