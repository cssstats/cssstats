import React from 'react'
import Div from './Div'
import Text from './Text'

const BackgroundColor = props => (
  <Div>
    <svg
      viewBox="0 0 64 64"
      width="64"
      height="64"
      style={{
        display: 'block',
        width: '100%',
        height: 'auto'
      }}
    >
      <rect width="64" height="64" fill={props.color} />
    </svg>

    <Text f={1} mt={2} children={props.color} />
  </Div>
)

export default BackgroundColor
