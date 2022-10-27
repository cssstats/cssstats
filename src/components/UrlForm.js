/** @jsx jsx */
import { useState } from 'react'
import { navigate } from 'gatsby'
import { jsx } from 'theme-ui'

export default ({ showLabel = false }) => {
  const [url, setUrl] = useState('')

  return (
    <form
      sx={{ px: 4, pt: [5,6,6], pb: 4, mx: 'auto', maxWidth: '48rem' }}
      onSubmit={e => {
        e.preventDefault()
        navigate(`/stats?url=${encodeURIComponent(url)}`)
      }}
    >
      <label>
        <b>Input a URL </b>
        <span>e.g. nasa.gov</span>
        <input
          inputMode='url'
          value={url}
          onChange={e => setUrl(e.target.value)}
          autofocus={true}
          sx={{ 
            color: 'text',
            background: 'transparent',
            boxSizing: 'border-box',
            WebkitAppearance: 'none',
            appearance: 'none',
            mt: 2,
            color: 'text', 
            display: 'block',
            width: '100%',
            fontWeight: 700,
            px: 3,
            py: 2,
            fontSize: 3,
            borderRadius: '6px',
            border: 0,
            boxShadow: '0 0 0 1px lightgray',
            transition: 'box-shadow .2s ease',
            ':focus': {
              border: 0,
              boxShadow:'0 0 0 1px gray',
              outline: 0,
            },
            ':focus-visible': {
              border: 0,
              boxShadow:'0 0 0 1px gray',
              outline: 0,
            }
          }}
        />
      </label>
    </form>
  )
}
