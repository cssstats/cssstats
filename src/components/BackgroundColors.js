/** @jsx jsx */
import { jsx } from 'theme-ui'
import uniq from 'lodash.uniq'
import { v4 as uuidv4 } from 'uuid'

import { SectionTitle, BackgroundColor } from './library'

export default ({ backgroundColors = [],...props }) => (
  <div {...props}>
    <SectionTitle 
      title='background-color' 
      description={`${uniq(backgroundColors).length} Unique values / ${backgroundColors.length} total declarations`} />
    <div sx={{ px: 4 }}>
      <h4>Unique</h4>
    </div>
    <div
      sx={{ 
        display: 'grid',
        px: 4,
        gridTemplateColumns: [
          'repeat(auto-fill, minmax(192px,1fr))', 
          'repeat(auto-fill, minmax(192px,1fr))', 
          'repeat(auto-fill, minmax(192px,1fr))', 
        ],
          gap: '16px',
      }}
      children={uniq(backgroundColors).map(bg => (
        <div
          key={uuidv4()}
          title={bg}
        >
          <BackgroundColor color={bg} />
        </div>
      ))}
    />
    <section sx={{ px: 4, mt: 5 }}>
      <h4>Total</h4>
      <article sx={{ 
        mt: 4, 
        p: 3, 
        borderRadius: '6px', 
        boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 0 0 1px rgba(255,255,255,.15)'

      }}>
      <p sx={{mt: 0 }}children={'Source code order'} />
      <div
        sx={{
          display: 'table',
          tableLayout: 'fixed',
          width: '100%',
          overflow: 'hidden',
        color: 'lightGray',
        backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 6px)',
        boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 0 0 1px rgba(255,255,255,.15)',
        p: 2,
        borderRadius: '6px',
        }}
        children={backgroundColors.map(bg => (
        <div
          key={uuidv4()}
          sx={{
            display: 'table-cell',
            bg: bg,
            height: '128px'
          }}
        ></div>
      ))}
    />
    </article>
    <article sx={{ 
        mt: 4, 
        p: 3, 
        borderRadius: '6px', 
        boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 0 0 1px rgba(255,255,255,.15)'
    }}>
    <p sx={{ mt: 0, mb: 3 }}>Sorted by similar values</p>
    <div sx={{
        color: 'lightGray',
        backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 6px)',
        boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 0 0 1px rgba(255,255,255,.15)',
        p: 2,
        borderRadius: '6px',
    }}>
    <div
      sx={{
        display: 'table',
        tableLayout: 'fixed',
        width: '100%',
        borderRadius: '4px', 
        overflow: 'hidden',
      }}
      children={backgroundColors.sort().map(bg => (
        <div
          key={uuidv4()}
          title={bg}
          sx={{
            display: 'table-cell',
            bg: bg,
            height: '128px'
          }}
        ></div>
      ))}
    />
    </div>
  </article>
  </section>
  </div>
)
