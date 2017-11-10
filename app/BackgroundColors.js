import React from 'react'
import uniq from 'lodash.uniq'

import Div from './Div'
import Flex from './Flex'
import SectionTitle from './SectionTitle'
import BackgroundColor from './BackgroundColor'

export default ({
  title,
  backgroundColors
}) =>
  <Div>
    <SectionTitle
      title={`${uniq(backgroundColors).length} unique background colors`}
      description={`${backgroundColors.length} total`}
    />

    <Flex wrap='wrap'>
      {uniq(backgroundColors).map(bg =>
        <Div
          key={bg}
          p={3}
          mb={2}
          w={[1/2, 1/3, 1/6]}
        >
          <BackgroundColor color={bg} />
        </Div>
      )}
    </Flex>
  </Div>
