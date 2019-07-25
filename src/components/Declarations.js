/** @jsx jsx */
import { jsx } from 'theme-ui'
import { intComma } from 'humanize-plus'

import { H2,  Div, Flex, SlabStat } from './library'

export default ({ properties }) => {
  const metrics = [
    {
      name: 'Display',
      value: properties['display'] || []
    },
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
      name: 'Max Width',
      value: properties['max-width'] || []
    },
    {
      name: 'Min Width',
      value: properties['min-width'] || []
    },
    {
      name: 'Max Height',
      value: properties['max-height'] || []
    },
    {
      name: 'Min Height',
      value: properties['min-height'] || []
    },
  ]

  const spacingMetrics = [
    {
      name: 'Padding',
      value: properties['padding'] || []
    },
    {
      name: 'Padding Left',
      value: properties['padding-left'] || []
    },
    {
      name: 'Padding Right',
      value: properties['padding-right'] || []
    },
    {
      name: 'Padding Top',
      value: properties['padding-top'] || []
    },
    {
      name: 'Padding Bottom',
      value: properties['padding-bottom'] || []
    },
    {
      name: 'Margin',
      value: properties['margin'] || []
    },
    {
      name: 'Margin Left',
      value: properties['margin-left'] || []
    },
    {
      name: 'Margin Right',
      value: properties['margin-right'] || []
    },
    {
      name: 'Margin Top',
      value: properties['margin-top'] || []
    },
    {
      name: 'Margin Bottom',
      value: properties['margin-bottom'] || []
    },
  ]

  const typographyMetrics = [
    {
      name: 'Font Family',
      value: properties['font-family'] || []
    },
    {
      name: 'Font Size',
      value: properties['font-size'] || []
    },
    {
      name: 'Font Weight',
      value: properties['font-weight'] || []
    },
    {
      name: 'Text Align',
      value: properties['text-align'] || []
    },
    {
      name: 'Line Height',
      value: properties['line-height'] || []
    },
    {
      name: 'Letter Spacing',
      value: properties['letter-spacing'] || []
    },
    {
      name: 'Text Decoration',
      value: properties['text-decoration'] || []
    },
    {
      name: 'Text Transform',
      value: properties['text-transform'] || []
    },
    {
      name: 'Text Shadow',
      value: properties['text-shadow'] || []
    },
  ]

  const colorMetrics = [
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
    {
      name: 'Box Shadow',
      value: properties['box-shadow'] || []
    },
  ]

  return (
    <Div py={[4,5]}>
      <H2 mb={2} fontSize={4} fontWeight={900}  children="Total Declaration Counts" />
      <p sx={{ fontSize: 1, mt: 0, opacity: .7, lineHeight: 1.5 }}>A declaration represents a property value pair. e.g. display: block would represent 1 declaration</p>

      <h3 sx={{
        mt: 4,
        mb: 3,
        fontSize: 1,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}>Layout and Structure</h3>
    <div sx={{ 
//      borderBottom: '1px solid',
//      pb: 3
    }}>
      <Flex
        mt={0}
        wrap="wrap"
        children={metrics.map(metric => (
          <Flex mb={3} key={metric.name} sx={{ width: ['50%', '25%', '20%'] }}>
            <SlabStat
              title={metric.name}
              stat={intComma(metric.value.length)}
            />
          </Flex>
        ))}
      />
    </div>
      <h3 sx={{
        mt: 4,
        mb: 3,
        fontSize: 1,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}>Spacing</h3>
      <Flex
        mt={0}
        mb={4}
        wrap="wrap"
        children={spacingMetrics.map(metric => (
          <Flex key={metric.name} sx={{ mb: 3, width: ['50%', '25%', '20%'] }}>
            <SlabStat
              title={metric.name}
              stat={intComma(metric.value.length)}
            />
          </Flex>
        ))}
      />

      <h3 sx={{
        mt: 4,
        mb: 3,
        fontSize: 1,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}>Skins</h3>
      <Flex
        mt={0}
        mb={4}
        wrap="wrap"
        children={colorMetrics.map(metric => (
          <Flex key={metric.name} sx={{ mb: 3, width: ['50%', '25%', '20%'] }}>
            <SlabStat
              title={metric.name}
              stat={intComma(metric.value.length)}
            />
          </Flex>
        ))}
      />
     
      <h3 sx={{
        mt: 4,
        mb: 3,
        fontSize: 1,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}>Typography</h3>
    <div sx={{ 
    }}>
      <Flex
        mt={0}
        wrap="wrap"
        children={typographyMetrics.map(metric => (
          <Flex key={metric.name} sx={{ mb: 3, width: ['50%', '25%', '20%'] }}>
            <SlabStat
              title={metric.name}
              stat={intComma(metric.value.length)}
            />
          </Flex>
        ))}
      />
    </div>


    </Div>
  )
}
