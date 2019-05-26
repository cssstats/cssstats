import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { css, Styled } from 'theme-ui'

export const Link = ({ href, ...props }) => (
  <Styled.a as={GatsbyLink} to={href} {...props} />
)

export const Label = ({ display = 'block', ...props }) => (
  <label
    css={css({
      display,
      color: 'text',
      fontSize: 2,
      fontWeight: 'bold'
    })}
    {...props}
  />
)

export const Input = ({ ...props }) => (
  <input
    css={css({
      fontSize: 2,
      display: 'block',
      width: '100%',
      py: 3,
      px: 4,
      overflow: 'visible',
      WekitAppearance: 'none',
      borderStyle: 'solid',
      borderRadius: 4,
      borderWidth: 1,
      borderColor: 'lightGray',
      boxShadow: `
        0 2px 3px -1px rgba(0, 0, 0, .16),
        0 1px 2px -1px rgba(0, 0, 0, .08)
      `
    })}
    {...props}
  />
)

export const Logo = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={size}
    height={size}
    fill={color || 'currentcolor'}
  >
    <g fontFamily="inherit" fontSize="12px" fontWeight="bold">
      <text x="0.5" y="11" children="{" />
      <text x="15.5" y="11" textAnchor="end" children="}" />
    </g>

    <rect x="5" y="7" width="2.5" height="4" />
    <rect x="8.5" y="5" width="2.5" height="6" />
  </svg>
)
