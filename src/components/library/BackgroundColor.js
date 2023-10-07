/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

const BackgroundColor = props => (
  <div {...props}>
    <div sx={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1), inset 0 0 0 1px rgba(255,255,255,.1)', backgroundColor: props.color, aspectRatio: '2 / 1', width: '100%', minHeight: '48px' }} />
    <code sx={{ 

      background: 'white',
      overflow: 'hidden',
      maxWidth: '100%',
      display: 'block',
      pr: 2,
      pt: 1,

      
    }} children={props.color} />
  </div>
)

export default BackgroundColor
