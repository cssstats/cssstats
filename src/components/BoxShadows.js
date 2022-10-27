
/** @jsx jsx */
import { jsx } from 'theme-ui'
import uniq from 'lodash.uniq'

import { SectionTitle } from './library'

export default ({ boxShadows = [] }) => (
  <div sx={{ py: [4, 5, 6] }}>
    <SectionTitle 
      title='box-shadow' 
      description={`${uniq(boxShadows).length} Unique  / ${boxShadows.length}  Total`} />
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
      children={uniq(boxShadows).map(shadow => (
        <div
          key={shadow+'aaa'} 
          title={shadow}
        >
          <div sx={{
            aspectRatio: '3/1',
            boxShadow: shadow,
            backgroundImage: 'url(https://components-ai.s3.amazonaws.com/p/h/001.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            borderRadius: '6px',
          }}></div>
        </div>
      ))}
    />
  </div>
)
