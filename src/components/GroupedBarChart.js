import React from 'react'
import titleize from 'titleize'

import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryGroup,
  VictoryLabel
} from 'victory'

const getMax = data => data[0].reduce((p, { y }) => (p > y ? p : y), 0)

export default ({ data }) => {
  const max = getMax(data)

  return (
    <VictoryChart
      height={225}
      padding={{
        top: 10,
        left: 20,
        right: 20,
        bottom: 20
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

      <VictoryAxis
        style={{
          tickLabels: {
            fontSize: 0,
            fontFamily: 'sans-serif'
          },
          axis: {
            stroke: '#ccc'
          },
          tick: {
            stroke: 'transparent'
          }
        }}
      />

      <VictoryGroup
        offset={20}
        labels={d => titleize(d.x.replace('-', ' '))}
        colorScale={['#222', '#999']}
        style={{
          labels: {
            fontSize: 6,
            fontWeight: 600,
            fontFamily: 'sans-serif'
          }
        }}
        labelComponent={<VictoryLabel y={215} dy={0} dx={-10} />}
        children={data.map((d, i) => <VictoryBar key={i} data={d} />)}
      />
    </VictoryChart>
  )
}
