/** @jsx jsx */
import { jsx } from 'theme-ui'
import uniq from 'lodash.uniq'

import { Text, SectionTitle } from './library'

export default ({ fontFamilies = [] }) => (
  <div>
    <SectionTitle
      title={`${uniq(fontFamilies).length} Unique Font Families`}
      description={`${fontFamilies.length} total`}
    />

    {uniq(fontFamilies).map(fontFamily => (
      <div
        key={fontFamily}
        sx={{ borderBottom: '1px solid', borderColor: 'gray', py: 4 }}
      >
        <code children={fontFamily} />
        <div style={{ fontFamily, lineHeight: 1.25, marginTop: '8px' }}>
          <span sx={{ fontSize: [4,5,6], fontWeight: 900 }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
          <br />
          <span sx={{ fontWeight: 400, fontSize: '32px', }}>abcdefghijklmnopqrstuvwxyz</span>
          <br />
          <span sx={{ fontWeight: 400, fontSize: '24px' }}>0123456789!@#$%^&*()-+{}[];</span>
        </div>
      </div>
    ))}
  </div>
)
