import React from 'react'
import Div from './Div'
import Text from './Text'

const Color = props => (
  <Div>
    <Text
      f={7}
      fontWeight="bold"
      children="Aa"
      style={{
        color: props.color
      }}
    />
    <Text f={1} children={props.color} />
  </Div>
)

export default Color
