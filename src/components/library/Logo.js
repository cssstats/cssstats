/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

const Logo = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={props.size}
    height={props.size}
    fill={props.color || 'currentcolor'}
  >
    <g fontFamily="inherit" fontSize="18px" fontWeight="bold">
      <text x="0.5" y="11" children="{" />
      <text x="15.5" y="11" textAnchor="end" children="}" />
    </g>

    <rect x="5" y="7" width="2.5" height="4" />
    <rect x="8" y="5" width="2.5" height="7" />
    <rect x="11" y="5" width="2.5" height="6" />
    <rect x="14" y="5" width="2.5" height="3" />
  </svg>
)

export default Logo
