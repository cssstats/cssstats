/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import { SectionTitle } from './library'

import LineChart from './LineChart'

export default ({ data }) => (
  <div>
    <SectionTitle
      title="Ruleset Size"
      description="Number of declarations per ruleset"
    />

    <LineChart data={data} />
  </div>
)
