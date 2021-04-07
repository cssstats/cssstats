import React from 'react'
import { useThemeUI } from 'theme-ui'
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory'

const getMax = data => data.reduce((p, v) => (p > v ? p : v), 0)

export default ({ data: providedData }) => {
  const data = providedData || []
  const { theme } = useThemeUI()
  const { colors } = theme
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
            stroke: colors.gray,
            strokeWidth: 1
          },
          tickLabels: {
            fill: colors.text,
            fontSize: 5,
            fontFamily: theme.fonts.body
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
        data={data.map((v, i) => ({ x: i, y: v }))}
        style={{ data: { fill: colors.text } }}
      />
    </VictoryChart>
  )
}
