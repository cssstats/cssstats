/** @jsx jsx */
import { jsx } from 'theme-ui'
import uniq from 'lodash.uniq'

import { SectionTitle } from './library'

export default ({ borderRadii = [] }) => (
  <div sx={{ py: [4, 5, 6] }}>
    <SectionTitle 
      title='border-radius' 
      description={`${uniq(borderRadii).length} Unique  / ${borderRadii.length}  Total`} />
    <div sx={{ px: 4 }}>
      <h4>Unique</h4>
    </div>
    <div
      sx={{ 
        display: 'grid',
        px: 4,
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px,1fr))', 
          gap: '32px',
      }}
      children={uniq(borderRadii).map(value => (
        <div
          key={value+'bbb'} 
          title={value}
        >
          <div sx={{
            aspectRatio: '3/1',
            borderRadius: value,
            boxShadow: 'inset 0 0 0 2px currentColor'
          }}></div>
        </div>
      ))}
    />
  </div>
)
