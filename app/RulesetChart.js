import React from 'react'

import {
  Div,
  SectionTitle
} from './library'

import LineChart from './LineChart'

export default ({ data }) =>
  <Div>
    <SectionTitle
      mb={[-40, -70, -90]}
      title='Ruleset Size'
      description='Number of declarations per ruleset'
    />

    <Div
      m={[-20, -40, -80]}
    >
      <LineChart data={data} />
    </Div>
  </Div>
