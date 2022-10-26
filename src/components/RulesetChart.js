/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import { GraphTitle } from './library'

import LineChart from './LineChart'

export default ({ data, ...props }) => (
  <div {...props}>
    <GraphTitle
      title="Ruleset Size"
      description="Number of declarations per ruleset"
    />
    <LineChart data={data} />
  </div>
)
