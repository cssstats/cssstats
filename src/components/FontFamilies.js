/** @jsx jsx */
import { jsx } from 'theme-ui'
import uniq from 'lodash.uniq'
import { v4 as uuidv4 } from 'uuid'

import { Text, SectionTitle } from './library'

export default ({ fontFamilies = [] }) => (
  <div>
    <SectionTitle
      title='font-family'
      description={`${uniq(fontFamilies).length} unique / ${fontFamilies.length} total`} />
    <section sx={{ display: 'grid', gridTemplateColumns: [
      'repeat(auto-fill, minmax(320px, 1fr))', 
      'repeat(auto-fill, minmax(480px, 1fr))', 
      'repeat(auto-fill, minmax(480px, 1fr))', 
    ], gap: '32px', px: 4, }}>
    {uniq(fontFamilies).map(fontFamily => (
      <article
        key={uuidv4()}
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: '6px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.2), 0 0 0 1px rgba(255,255,255,.2)'
        }}
      >
        <div style={{ padding: '48px 32px', overflow: 'hidden', fontFamily, lineHeight: 1.25, }}>
          <span sx={{ fontSize: [5,7,9], fontWeight: 900, lineHeight: 1, }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
          <br />
          <span sx={{ fontWeight: 600, fontSize: '32px', }}>abcdefghijklmnopqrstuvwxyz</span>
          <br />
          <span sx={{ fontWeight: 400, whiteSpace: 'nowrap', fontSize: '24px' }}>0123456789!@#$%^&*()-+{}[];</span>
        </div>
        <code sx={{ bg: 'lightGray', display: 'block', p: 3,  }} children={fontFamily} />
      </article>
    ))}
    </section>
  </div>
)
