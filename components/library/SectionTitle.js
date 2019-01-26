import React from 'react'
import H2 from './H2'
import Div from './Div'
import Text from './Text'

const SectionTitle = props => (
  <Div mb={3} {...props}>
    <H2 mb={0} children={props.title} />
    <Text mt={0} children={props.description} />
  </Div>
)

export default SectionTitle
