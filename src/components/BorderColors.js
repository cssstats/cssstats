/** @jsx jsx */
import { jsx } from 'theme-ui'
import uniq from 'lodash.uniq'

import { SectionTitle } from './library'

export default ({ borderColors = [] }) => (
  <div sx={{ py: [4, 5, 6] }}>
    <SectionTitle 
      title='border-color' 
      description={`${uniq(borderColors).length} Unique  / ${borderColors.length}  Total`} />
    <div sx={{ px: 4 }}>
      <h4>Unique</h4>
    </div>
    <div
      sx={{ 
        display: 'grid',
        px: 4,
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px,1fr))', 
          gap: '16px',
      }}
      children={uniq(borderColors).map(border => (
        <div
          key={border+'aaa'} 
        >
          <div sx={{
            aspectRatio: '3/1',
            borderColor: border,
            borderWidth: '2px',
            borderStyle: 'solid',
          }}></div>
        </div>
      ))}
    />
      <h4 sx={{ mt: 5 , px: 4}}>Total</h4>
    <section sx={{ px: 4, display: 'flex', gap: '32px' }}>
<article sx={{ 
        mt: 0, 
        p: 3, 
        borderRadius: '6px', 
        boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 0 0 1px rgba(255,255,255,.15)'
    }}>
    <p sx={{ mt: 0, mb: 3 }}>Source code order</p>
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
        height: '64px',
        borderRadius: '4px', 
        overflow: 'hidden',
      }}
      children={borderColors.map(bg => (
        <div
          key={bg}
          title={bg}
          sx={{
            display: 'table-cell',
            bg: bg,
            height: '100%'
          }}
        ></div>
      ))}
    />
    </div>
  </article>
    <article sx={{ 
        mt: 0, 
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
      children={borderColors.sort().map(bg => (
        <div
          key={bg}
          title={bg}
          sx={{
            display: 'table-cell',
            bg: bg,
            height: '64px'
          }}
        ></div>
      ))}
    />
    </div>
  </article>
  </section>
  </div>
)
