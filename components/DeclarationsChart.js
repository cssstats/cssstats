import React from 'react'
import uniq from 'lodash.uniq'

import {
  intComma
} from 'humanize-plus'

import {
  Div,
  SectionTitle
} from './library'

import GroupedBarChart from './GroupedBarChart'

export default ({ data }) => {
  const total = intComma(data.total)
  const unique = intComma(data.unique)

  const properties = [
    'width', 'height', 'margin', 'padding',
    'background-color', 'color'
  ]

  const formattedData = [
    properties.map((p, i) => ({ x: p, y: (data.properties[p] || []).length })),
    properties.map((p, i) => ({ x: p, y: uniq(data.properties[p] || []).length }))
  ]

  return (
    <Div mt={4}>
      <SectionTitle
        title='Total vs Unique Declarations'
        description={`${total} total, ${unique} unique`}
      />

      <GroupedBarChart data={formattedData} />
    </Div>
  )
}
