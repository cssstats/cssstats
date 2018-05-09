import React from 'react'

import { VictoryChart, VictoryBar, VictoryAxis } from 'victory'

const getMax = data => data.reduce((p, v) => (p > v ? p : v), 0)

export default ({ data }) => {
  const max = getMax(data)

  return (
    <VictoryChart
      height={225}
      padding={{
        top: 10,
        left: 20,
        right: 20,
        bottom: 0
      }}
    >
      <VictoryAxis
        dependentAxis
        tickFormat={t => t.toFixed(0)}
        tickValues={[max * 0.25, max * 0.5, max * 0.75, max]}
        style={{
          grid: {
            stroke: '#ccc',
            strokeWidth: 1
          },
          tickLabels: {
            fontSize: 5,
            fontFamily: 'sans-serif'
          },
          axis: {
            stroke: 'transparent'
          },
          tick: {
            stroke: 'transparent'
          }
        }}
      />

      <VictoryBar data={data.map((v, i) => ({ x: i, y: v }))} />
    </VictoryChart>
  )
}
