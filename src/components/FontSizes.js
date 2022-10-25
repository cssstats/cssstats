/** @jsx jsx */
import { jsx } from 'theme-ui'
import uniq from 'lodash.uniq'
import sort from 'css-unit-sort'

import { Text, SectionTitle } from './library'

export default ({ fontSizes = [] }) => (
  <div sx={{ my: 5, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
    <SectionTitle
      title="Type Scale"
      description={`${uniq(fontSizes).length} Unique font sizes`}
    />

    {sort(uniq(fontSizes)).map(fontSize => (
      <div style={{ borderBottom: '1px solid', borderColor: 'gray', padding: '0 16px' }}>
        <p style={{ lineHeight: 1, marginTop: 0, marginBottom: '8px' }}>
          {fontSize}
        </p>
        <p
          key={fontSize}
          style={{ fontWeight: 900, margin: 0, lineHeight: 1, fontSize, whiteSpace: 'nowrap' }}
          children="Quick brown fox jumped over the slow dog"
        />
      </div>
    ))}
    <SectionTitle
      mt={5}
      title={`${fontSizes.length} Total font size declarations`}
    />
    <div
      style={{
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        paddingBottom: 16
      }}
    >
      <table cellSpacing="0" cellPadding="0" width= '100%'>
        <tr>
          {sort(fontSizes).map(fontSize => (
            <td
              key={fontSize}
              style={{
                fontSize
              }}
              sx={{
                textAlign: 'center',
                fontWeight: 700,
                verticalAlign: 'bottom',
                lineHeight: 0.75,
                px: 1,
                pb: 2,
                borderLeft: '1px solid',
                borderBottom: '1px solid',
                borderColor: 'gray'
              }}
              children="A"
            />
          ))}
        </tr>
        <tr>
          {sort(fontSizes).map(fontSize => (
            <td
              key={fontSize}
              style={{
                textAlign: 'center',
                fontWeight: 400,
                verticalAlign: 'bottom',
                fontSize: 12,
                paddingLeft: 4,
                paddingRight: 4,
                paddingTop: 4,
                borderLeft: '1px solid',
                borderColor: 'gray'
              }}
              children={fontSize}
            />
          ))}
        </tr>
      </table>
    </div>
  </div>
)
