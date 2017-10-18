import React from 'react'

import H2 from './H2'
import Div from './Div'
import Flex from './Flex'
import SlabStat from './SlabStat'

export default ({ properties }) => {
  console.log(properties)
  const color = properties.color || []
  const floats = properties.float || []
  const widths = properties.width || []
  const heights = properties.height || []
  const fontSizes = properties['font-size'] || []
  const backgroundColors = properties['background-color'] || []

  return (
    <Div>
      <H2 mb={0}>Total Declarations</H2>

      <Flex wrap mt={0} mb={4}>
        <Flex
          w={[1/2, 1/3, 1/6]}
        >
          <SlabStat
            title='Font Size'
            stat={fontSizes.length}
          />
        </Flex>
        <Flex
          w={[1/2, 1/3, 1/6]}
        >
          <SlabStat
            title='Float'
            stat={floats.length}
          />
        </Flex>
        <Flex
          w={[1/2, 1/3, 1/6]}
        >
          <SlabStat
            title='Width'
            stat={widths.length}
          />
        </Flex>
        <Flex
          w={[1/2, 1/3, 1/6]}
        >
          <SlabStat
            title='Height'
            stat={heights.length}
          />
        </Flex>
        <Flex
          w={[1/2, 1/3, 1/6]}
        >
          <SlabStat
            title='Height'
            stat={heights.length}
          />
        </Flex>
        <Flex
          w={[1/2, 1/3, 1/6]}
        >
          <SlabStat
            title='Height'
            stat={heights.length}
          />
        </Flex>
      </Flex>
    </Div>
  )
}
