/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import { Text, GraphTitle, SlabStat } from './library'

import LineChart from './LineChart'

export default ({ data, average, max, ...props }) => (
  <div {...props}>
    <GraphTitle title="Specificity" />

    <div sx={{ 
      display: 'flex',
      alignItems: "top",
      my:3,
      wrap: ['wrap', 'wrap', 'nowrap'],
      gap: '64px',
    }}>
      <SlabStat  title="Average score" stat={average} />
      <SlabStat title="Max score" stat={max} />
      <Text mt={0} style={{ lineHeight: 1.5 }} width={1}>
        Base 10 specificity score for each selector by source order. Generally,
        lower scores and flatter curves are better for maintainability.  <a
          title="Specificity Graph"
          href="https://csswizardry.com/2014/10/the-specificity-graph/"
        >
          Learn More
        </a>
      </Text>
    </div>

    <LineChart data={data} />
  </div>
)
