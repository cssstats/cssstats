/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import uniq from 'lodash.uniq'

import { SectionTitle } from './library'

export default ({ zIndexes = [] }) => (
  <div sx={{ my: 6 }}>
    <SectionTitle
      title='z-index'
      description={`${uniq(zIndexes).length} Unique / ${zIndexes.length} Total`}
    />
    <div sx={{ px: 4 }}>
      <h4>Unique</h4>
      <ul sx={{ ml: 0, pl: 0, listStyleType: 'none', display: 'flex', gap: '32px', fontSize: 4, }}>
        {uniq(zIndexes).map(zIndex => (
          <li key={zIndex}>
            {zIndex}
          </li>
        ))}
      </ul>
    </div>
  </div>
)
