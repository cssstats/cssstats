import React from 'react'

import {
  VictoryChart,
  VictoryBar,
  VictoryAxis
} from 'victory'

const getMax = data => data.reduce((p, v) => p > v ? p : v, 0)

export default ({ data }) => {
  const max = getMax(data)

  return (
    <VictoryChart height={225}>
      <VictoryAxis
        dependentAxis
        tickValues={[
          max * .25, max * .5, max * .75, max
        ]}
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

      <VictoryBar
        data={data.map((v, i) => ({ x: i, y: v}))}
      />
    </VictoryChart>
  )
}
