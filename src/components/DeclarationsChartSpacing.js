/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import uniq from 'lodash.uniq'

import { SectionTitle } from './library'

import GroupedBarChart from './GroupedBarChart'

export default ({ data }) => {
  const properties = [
    'padding',
    'padding-left',
    'padding-right',
    'padding-top',
    'padding-bottom'
    // 'margin',
    // 'margin-left',
    // 'margin-right',
    // 'margin-top',
    // 'margin-bottom',
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
      <SectionTitle title="Padding" />

      <GroupedBarChart data={formattedData} />
    </div>
  )
}
