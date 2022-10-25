import React from 'react'
import Text from './Text'

const BackgroundColor = props => (
  <div>
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

    <Text children={props.color} />
  </div>
)

export default BackgroundColor
