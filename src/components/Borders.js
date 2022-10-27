/** @jsx jsx */
import { jsx } from 'theme-ui'
import uniq from 'lodash.uniq'

import { SectionTitle } from './library'

export default ({ borders = [] }) => (
  <div sx={{ py: [4, 5, 6] }}>
    <SectionTitle 
      title='border' 
      description={`${uniq(borders).length} Unique  / ${borders.length}  Total`} />
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
      children={uniq(borders).map(value => (
        <div
          key={value+'ccc'} 
          title={value}
          sx={{ p: 3, background: 'linear-gradient(115deg, #f0f0ee, #f0f0ee 50%, black 50%, black 100%)'}}
        >
          <div sx={{
            aspectRatio: '3/1',
            border: value,
          }}></div>
        </div>
      ))}
    />
  </div>
)
