import React from 'react'
import uniq from 'lodash.uniq'

import { Div, SectionTitle } from './library'

import GroupedBarChart from './GroupedBarChart'

export default ({ data }) => {
  const properties = [
    'font-family',
    'font-size',
    'font-weight',
    'line-height',
    'text-align',
    'text-decoration',
    'letter-spacing'
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
      <SectionTitle title="Typography" />

      <GroupedBarChart data={formattedData} />
    </Div>
  )
}
