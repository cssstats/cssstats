import React from 'react'
import { useThemeUI } from 'theme-ui'
import titleize from 'titleize'

import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryGroup,
  VictoryLabel,
} from 'victory'

const getMax = (data) => data[0].reduce((p, { y }) => (p > y ? p : y), 0)

export default ({ data }) => {
  const { theme } = useThemeUI()
  const { colors } = theme
  const max = getMax(data)

  console.log(data)

  return (
    <VictoryChart
      height={225}
      padding={{
        top: 10,
        left: 20,
        right: 20,
        bottom: 20,
      }}
    >
      <VictoryAxis
        dependentAxis
        tickFormat={(t) => t.toFixed(0)}
        tickValues={[max * 0.25, max * 0.5, max * 0.75, max]}
        style={{
          grid: {
            stroke: colors.gray,
            strokeWidth: 1,
          },
          tickLabels: {
            fill: colors.text,
            fontSize: 5,
            fontFamily: theme.fonts.body,
          },
          axis: {
            stroke: 'transparent',
          },
          tick: {
            stroke: 'transparent',
          },
        }}
      />

      <VictoryAxis
        style={{
          tickLabels: {
            fill: colors.text,
            fontSize: 0,
            fontFamily: theme.fonts.body,
          },
          axis: {
            stroke: colors.gray,
          },
          tick: {
            stroke: 'transparent',
          },
        }}
      />

      <VictoryGroup
        offset={20}
        labels={(d) => titleize(d.datum.xName.replace('-', ' '))}
        colorScale={colors.chart}
        style={{
          labels: {
            fill: colors.text,
            fontSize: 6,
            fontWeight: 600,
            fontFamily: theme.fonts.body,
          },
        }}
        labelComponent={<VictoryLabel y={215} dy={0} dx={-10} />}
        children={data.map((d, i) => (
          <VictoryBar key={i} data={d} />
        ))}
      />
    </VictoryChart>
  )
}
