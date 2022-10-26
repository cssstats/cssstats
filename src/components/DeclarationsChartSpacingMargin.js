import React from 'react'
import uniq from 'lodash.uniq'

import { GraphTitle } from './library'

import GroupedBarChart from './GroupedBarChart'

export default ({ data }) => {
  const properties = [
    'margin',
    'margin-left',
    'margin-right',
    'margin-top',
    'margin-bottom'
  ]

  const formattedData = [
    properties.map((p, i) => ({ x: p, y: (data.properties[p] || []).length })),
    properties.map((p, i) => ({
      x: p,
      y: uniq(data.properties[p] || []).length
    }))
  ]

  return (
    <div>
      <GraphTitle title="Margin" />
      <GroupedBarChart data={formattedData} />
    </div>
  )
}
