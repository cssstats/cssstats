/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

const Color = props => (
  <div sx={{ overflow: 'hidden', }}>
    <p
    sx={{
      m: 0,
      fontSize: 7,
      fontWeight: 900,
      color: props.color,
      lineHeight: 1,
    }}
      children="Aa"
    />
    <code sx={{ fontSize: 1, whiteSpace: 'nowrap', }} children={props.color} title={props.color} />
  </div>
)

export default Color
