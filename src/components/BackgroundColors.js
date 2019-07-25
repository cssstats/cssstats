/** @jsx jsx */
import { jsx } from 'theme-ui'
import uniq from 'lodash.uniq'

import { Flex, SectionTitle, BackgroundColor } from './library'

export default ({ backgroundColors = [] }) => (
  <div>
    <SectionTitle
      title={`${uniq(backgroundColors).length} Unique Background Colors`}
      description={`${backgroundColors.length} total`}
    />

    <Flex
      wrap="wrap"
      justify="space-between"
      children={uniq(backgroundColors).map(bg => (
        <div
          key={bg}
          sx={{
            p: 2,
            mb: 2,
            width: ['50%', '25%', '10%']
          }}
        >
          <BackgroundColor color={bg} />
        </div>
      ))}
    />

    <Flex
      wrap="nowrap"
      width={1}
      children={backgroundColors.sort().map(bg => (
        <div
          key={bg}
          sx={{
            bg: bg,
            height: '16px',
            maxWidth: '16px',
            minWidth: '1px'
          }}
        >
        </div>
      ))}
    />
  </div>
)
