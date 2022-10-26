/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Text from './Text'

const BackgroundColor = props => (
  <div {...props}>
    <div sx={{ backgroundColor: props.color, aspectRatio: '2 / 1', width: '100%', minHeight: '48px' }} />
    <code children={props.color} />
  </div>
)

export default BackgroundColor
