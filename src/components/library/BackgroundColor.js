import React from 'react'
import Div from './Div'
import Text from './Text'

const BackgroundColor = props => (
  <Div>
    <svg
      viewBox="0 0 32 16"
      style={{
        display: 'block',
        width: '100%',
        height: 'auto'
      }}
    >
      <rect width="32" height="16" fill={props.color} />
    </svg>

    <Text fontSize={0} mt={2} children={props.color} />
  </Div>
)

export default BackgroundColor
