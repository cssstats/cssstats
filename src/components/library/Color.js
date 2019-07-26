import React from 'react'
import Div from './Div'
import Text from './Text'

const Color = props => (
  <Div>
    <Text
      fontSize={6}
      fontWeight="800"
      children="Aa"
      style={{
        color: props.color
      }}
    />
    <Text fontSize={1} children={props.color} />
  </Div>
)

export default Color
