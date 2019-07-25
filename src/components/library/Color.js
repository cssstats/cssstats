import React from 'react'
import Div from './Div'
import Text from './Text'

const Color = props => (
  <Div>
    <Text
      fontSize={7}
      fontWeight="bold"
      children="Aa"
      style={{
        color: props.color
      }}
    />
    <Text fontSize={1} children={props.color} />
  </Div>
)

export default Color
