import React from 'react'

import {
  Div,
  Text,
  Link,
  SectionTitle
} from './library'

import LineChart from './LineChart'

export default ({ data }) =>
  <Div>
    <SectionTitle title='Specificity Graph' />

    <LineChart data={data} />

    <Text ml={10} mt={2}>
      Base 10 specificity score for each selector by source order.
      Generally, lower scores and flatter curves are better for maintainability.
      <Link ml={2} href='https://csswizardry.com/2014/10/the-specificity-graph/'>Learn More</Link>
    </Text>
  </Div>
