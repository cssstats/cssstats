import React from 'react'
import uniq from 'lodash.uniq'

import { intComma } from 'humanize-plus'

import { Div, SectionTitle } from './library'

import GroupedBarChart from './GroupedBarChart'

export default ({ data }) => {
  const total = intComma(data.total)
  const unique = intComma(data.unique)

  const properties = [
    'display',
    'float',
    'width',
    'height',
    'max-width',
    'min-width',
    'max-height',
    'min-height',
  ]

  const formattedData = [
    properties.map((p, i) => ({ x: p, y: (data.properties[p] || []).length })),
    properties.map((p, i) => ({
      x: p,
      y: uniq(data.properties[p] || []).length
    }))
  ]

  return (
    <Div mt={4}>
      <SectionTitle
        title="Total vs Unique Declarations"
        description={`${total} total, ${unique} unique`}
      />
      <SectionTitle
        title="Layout and Structure"
      />

      <GroupedBarChart data={formattedData} />
    </Div>
  )
}
