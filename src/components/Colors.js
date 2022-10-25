/** @jsx jsx */
import { jsx } from 'theme-ui'
import uniq from 'lodash.uniq'

import { Color, SectionTitle } from './library'

export default ({ colors = [] }) => (
  <div>
    <h2 id="colors" sx={{ fontSize: 5 }}>Colors</h2>
    <SectionTitle
      title={`${uniq(colors).length} unique colors`}
      description="Printed by declaration order in source code"
    />
    <div
      sx={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))',
        gap: '16px',
      }}
      children={uniq(colors).map(color => (
        <div key={color}>
          <Color color={color} />
        </div>
      ))}
    />
    <SectionTitle
      title={`${colors.length} total color declarations`}
      description="Sorted by like values"
    />
    <div
      sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(48px, 1fr))' }}
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
