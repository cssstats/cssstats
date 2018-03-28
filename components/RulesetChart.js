import React from 'react'

import {
  Div,
  SectionTitle
} from './library'

import LineChart from './LineChart'

export default ({ data }) =>
  <Div mt={4}>
    <SectionTitle
      title='Ruleset Size'
      description='Number of declarations per ruleset'
    />

    <LineChart data={data} />
  </Div>
