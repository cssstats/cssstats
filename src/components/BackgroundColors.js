/** @jsx jsx */
import { jsx } from 'theme-ui'
import uniq from 'lodash.uniq'

import { Div, Flex, SectionTitle, BackgroundColor } from './library'

export default ({ backgroundColors = [] }) => (
  <div sx={{ py: [4,5, 6] }}>
    <SectionTitle
      title={`${uniq(backgroundColors).length} Unique Background Colors`}
      description={''}
    />

    <Flex
      wrap="wrap"
      mb={[4,5]}
      justify="space-between"
      children={uniq(backgroundColors).map(bg => (
        <div
          key={bg}
          sx={{
            p: 2,
            mb: 2,
            width: ['50%', '25%', '15%']
          }}
        >
          <BackgroundColor color={bg} />
        </div>
      ))}
    />
    <SectionTitle
      title={`${backgroundColors.length} Total Background Colors`}
      description={'Visualized by source code order'}
    />
    <Div
      style={{
        display: 'table',
        tableLayout: 'fixed',
        width: '100%',
      }}
      children={backgroundColors.map(bg => (
        <div
          key={bg}
          sx={{
            display: 'table-cell',
            bg: bg,
            height: '64px',
          }}
        >
        </div>
      ))}
    />
    <p sx={{ mt: 4 }}>Sorted by similar values</p>
    <Div
      style={{
        display: 'table',
        tableLayout: 'fixed',
        width: '100%',
      }}
      children={backgroundColors.sort().map(bg => (
        <div
          key={bg}
          sx={{
            display: 'table-cell',
            bg: bg,
            height: '64px',
          }}
        >
        </div>
      ))}
    />
  </div>
)
