/** @jsx jsx */
import { jsx } from 'theme-ui'
import uniq from 'lodash.uniq'
import { v4 as uuidv4 } from 'uuid'

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
        gap: '48px',
      }}
      children={uniq(borderRadii).map(value => (
        <div
          key={uuidv4()} 
          title={value}
          sx={{
            borderRadius: value,
            color: 'gray',
            boxShadow: 'inset 0 0 0 1px currentColor',
            p: 2,
          }}
        >
          <div sx={{
            minWidth: '48px',
            aspectRatio: '2/1',
            backgroundImage: 'url(https://components-ai.s3.amazonaws.com/p/h/001.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            borderRadius: value,
            mb: 3,
          }}></div>
          <div sx={{ display: 'flex',justifyContent: 'space-between', gap: '1rem', alignItems: 'center'}}>
            <input placeholder='Corner demo' type='text' sx={{
              appearance: 'none',
              width: '100%',
              flexGrow: 1,
              WebkitAppearance: 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              borderRadius: value,
              borderWidth: '1px',
              borderStyle: 'solid',
              color: 'gray',
              borderColor: 'currentColor',
              bg: 'transparent',
              m: 0,
              px: 2,
              py: 2,
              '::placeholder': {
                color: 'text',
              }
            }} />
<button sx={{
  whiteSpace: 'nowrap',
              appearance: 'none',
              WebkitAppearance: 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              borderRadius: value,
              border: 0,
              bg: 'blue',
              color: 'background',
              px: 2,
              py: 2,
              m: 0,
            }}>Click here</button>
        </div>
        </div>
      ))}
    />
  </div>
)
