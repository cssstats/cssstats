/** @jsx jsx */
import { jsx } from 'theme-ui'
import uniq from 'lodash.uniq'
import { v4 as uuidv4 } from 'uuid'

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
          key={uuidv4()} 
          title={shadow}
          sx={{
            boxShadow: shadow,
            borderRadius: '6px',
            border: '1px solid rgba(0,0,0,.1)',
            p: 3,
          }}
        >
          <div sx={{
            aspectRatio: '3/1',
            boxShadow: shadow,
            backgroundImage: 'url(https://components-ai.s3.amazonaws.com/p/h/001.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            borderRadius: '6px',
            mb: 3,
          }}></div>
          <div sx={{ display: 'flex',justifyContent: 'space-between', }}>
            
            <input placeholder='Shadow demo' type='text' sx={{
              appearance: 'none',
              WebkitAppearance: 'none',
              boxShadow: shadow,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              borderRadius: '6px',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'rgba(0,0,0,.1)',
              bg: 'transparent',
              px: 2,
              py: 2,
            }} />
            <button sx={{
              appearance: 'none',
              WebkitAppearance: 'none',
              boxShadow: shadow,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              borderRadius: '6px',
              border: 0,
              bg: 'blue',
              color: 'background',
              px: 2,
              py: 2,
            }}>Click here</button>
          </div>
        </div>
      ))}
    />
  </div>
)
