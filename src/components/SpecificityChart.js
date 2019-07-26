import React from 'react'

import { Flex, Div, Text, Link, SectionTitle, SlabStat } from './library'

import LineChart from './LineChart'

export default ({ data, average, max }) => (
  <Div>
    <SectionTitle title="Specificity" />

    <Flex alignItems="top" my={3} wrap={['wrap', 'wrap', 'nowrap']}>
      <SlabStat mr={5} title="Average score" stat={average} />
      <SlabStat mr={5} title="Max score" stat={max} />
      <Text mt={0} style={{ lineHeight: 1.5 }} width={1}>
        Base 10 specificity score for each selector by source order. Generally,
        lower scores and flatter curves are better for maintainability.
        <Link
          ml={2}
          href="https://csswizardry.com/2014/10/the-specificity-graph/"
        >
          Learn More
        </Link>
      </Text>
    </Flex>

    <LineChart data={data} />
  </Div>
)
