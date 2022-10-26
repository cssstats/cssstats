/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

export default ({ size = '16', color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={size}
    height={size}
    fill={color || 'currentcolor'}
    sx={{ display: 'block' }}
  >
    <g sx={{ fontFamily:"monospace", fontSize:"10px", fontWeight: 'bold' }}>
      <text x="0.5" y="11" children="{" />
      <text x="15.5" y="11" textAnchor="end" children="}" />
    </g>

    <rect x="0" y="7" width="2" height="4" />
    <rect x="3" y="5" width="2" height="7" />
    <rect x="6" y="5" width="2" height="6" />
  </svg>
)
