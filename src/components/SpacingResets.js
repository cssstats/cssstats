/** @jsx jsx */
import { jsx } from 'theme-ui'
import titleize from 'titleize'
import { v4 as uuidv4 } from 'uuid'

import {  SlabStat } from './library'

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
    <div sx={{ px: 4 }}>
      <h2 children="Spacing Resets" />
      <p sx={{ fontSize: 0, mt: 0 }}>
        Amount of times each property has been set to 0
      </p>

      <div sx={{ display: 'flex', flexWrap: 'wrap' }}
        children={spacingProperties.map(prop => {
          const props = properties[prop] || []
          const resets = props.filter(v => v === '0')

          return (
            <SlabStat
              key={uuidv4()}
              sx={{ mb: 3, width: ['50%', '25%', '20%'] }}
              title={titleize(prop.replace('-', ' '))}
              stat={resets.length}
            />
          )
        })}
      />
    </div>
  )
}
