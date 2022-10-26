/** @jsx jsx */
import { jsx } from 'theme-ui'
import uniq from 'lodash.uniq'
import sort from 'css-unit-sort'

import { Text, SectionTitle } from './library'

export default ({ fontSizes = [] }) => (
  <div sx={{ my: 5  }}>
    <SectionTitle title='font-size' description={`${uniq(fontSizes).length} Unique / ${fontSizes.length} Total`} />
    
    <div sx={{ px: 4 }}>
      <h4>Unique</h4>
      {sort(uniq(fontSizes)).map(fontSize => (
        <div style={{ borderBottom: '1px solid', borderColor: 'gray', padding: '16px 0px', overflow: 'hidden', }}>
          <p style={{ lineHeight: 1, marginTop: 0, marginBottom: '8px' }}>
            {fontSize}
          </p>
          <p
            key={fontSize}
            style={{ fontWeight: 900, margin: 0, lineHeight: 1, fontSize, whiteSpace: 'nowrap' }}
            children="Quick brown fox jumped over the slow dog"
          />
        </div>
      ))}
    </div>
  </div>
)
