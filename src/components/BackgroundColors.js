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
            p: 3,
            mb: 2,
            width: ['50%', '25%', '20%']
          }}
        >
          <BackgroundColor color={bg} />
        </div>
      ))}
    />
  </div>
)
