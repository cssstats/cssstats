/** @jsx jsx */
import { jsx } from 'theme-ui'
import uniq from 'lodash.uniq'

import { Color, SectionTitle } from './library'

export default ({ colors = [] }) => (
  <div sx={{ pb: 6 }}>
  <SectionTitle 
    title='color' 
    description={`${uniq(colors).length} Unique / ${colors.length} Total `} />
    <div sx={{ px: 4 }}> 
      <h4>Unique</h4>
    </div>
    <div
      sx={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))',
        gap: '16px',
        px: 4,
      }}
      children={uniq(colors).map(color => (
        <div key={color}>
          <Color color={color} />
        </div>
      ))}
    />
    <div sx={{ px: 4, mt: 5}}>
      <h4>Total</h4>
    </div>
    <div
      sx={{ px: 4, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(48px, 1fr))' }}
      children={colors.sort().map((color, i) => (
        <div
          key={color * i}
          children="A"
          sx={{ 
            fontSize:"32px",
            fontWeight: 900,
            color: color,
          }}
          title={color}
        />
      ))}
    />
  </div>
)
