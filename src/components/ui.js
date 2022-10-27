/** @jsx jsx */
import { Link as GatsbyLink } from 'gatsby'
import { jsx } from 'theme-ui'

export const Link = ({ href, ...props }) => (
  <a as={GatsbyLink} to={href} {...props} />
)

export const Label = ({ display = 'block', ...props }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label
    sx={{
      display,
      color: 'text',
      fontSize: 2,
      fontWeight: 'bold'
    }}
    {...props}
  />
)

export const Input = ({ ...props }) => (
  // eslint-disable-next-line jsx-a11y/control-has-associated-label
  <input
    sx={{
      fontSize: 2,
      display: 'block',
      width: '100%',
      py: 3,
      px: 24,
      overflow: 'visible',
      WebkitAppearance: 'none',
      bg: 'background',
      borderStyle: 'solid',
      borderRadius: 4,
      borderWidth: 1,
      borderColor: 'lightGray',
      boxShadow: `
        0 2px 3px -1px rgba(0, 0, 0, .16),
        0 1px 2px -1px rgba(0, 0, 0, .08)
      `
    }}
    {...props}
  />
)

export const Logo = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color || 'currentcolor'}
  >
    <g fontFamily="monospace" fontSize="12px" fontWeight={400}>
      <text x="0.5" y="16" children="{" />
      <text x="23.5" y="16" textAnchor="end" children="}" />
    </g>

    <rect x="8" y="12" width="1.25" height="4" />
    <rect x="11" y="9" width="1.25" height="7" />
    <rect x="14" y="10" width="1.25" height="6" />
  </svg>
)
