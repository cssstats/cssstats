/** @jsx jsx */
import { jsx } from 'theme-ui'
import uniq from 'lodash.uniq'
import { v4 as uuidv4 } from 'uuid'

import { SectionTitle } from './library'

export default ({ backgroundImages = [], url }) => (
  <div sx={{ py: [4, 5, 6] }}>
    <SectionTitle 
      title='background-image' 
      description={`${uniq(backgroundImages).length} Unique values / ${backgroundImages.length} total declarations`} />
    <div sx={{ px: 4 }}>
      <h4>Unique</h4>
    </div>
    <div
      sx={{ 
        display: 'grid',
        px: 4,
        gridTemplateColumns: 'repeat(auto-fill, minmax(80px,1fr))', gap: '16px',
      }}
      children={uniq(backgroundImages).map(bg => (
        <div
          key={uuidv4()} 
          title={bg}
        sx={{
          backgroundColor: 'lightGray',
          aspectRatio: '16/9',
          backgroundSize: 'contain',
          backgroundImage: bg,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
        >
           
        </div>
      ))}
    />
  </div>
)
