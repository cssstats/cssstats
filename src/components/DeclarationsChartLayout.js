/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import uniq from 'lodash.uniq'

import { formatNumber, intComma } from 'humanize-plus'

import { GraphTitle } from './library'

import GroupedBarChart from './GroupedBarChart'

export default ({ data }) => {
  const total = intComma(data.total)
  const unique = intComma(data.unique)
  const uniqueToTotalRatio = formatNumber(data.uniqueToTotalRatio, 2)

  const properties = [
    'display',
    'float',
    'width',
    'height',
    'max-width',
    'min-width',
    'max-height',
    'min-height'
  ]

  const formattedData = [
    properties.map((p, i) => ({ x: p, y: (data.properties[p] || []).length })),
    properties.map((p, i) => ({
      x: p,
      y: uniq(data.properties[p] || []).length
    }))
  ]

  return (
    <article>
        <header sx={{ mb: 5 }}>
          <h2 sx={{ fontSize: '32px', fontWeight: 'bold'}}>Total vs Unique Declarations</h2>
          <p sx={{ fontSize: '24px', lineHeight: 1.5 }}>
            Out of the <b>{total}</b> total declarations, <b>{unique}</b> have
            unique values. The ratio of unique to total declarations is <b>
            {uniqueToTotalRatio}</b>
          </p>
          <p sx={{ maxWidth: '65ch', lineHeight: 1.5 }}>
          The comparison charts below can help you identify which properties might
          be the best candidates for creating abstractions.
        </p>
      </header>
      <GraphTitle title="Layout and Structure" />

      <GroupedBarChart data={formattedData} />
    </article>
  )
}
