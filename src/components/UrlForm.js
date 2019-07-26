/** @jsx jsx */
import { useState } from 'react'
import { navigate } from 'gatsby'
import { jsx } from 'theme-ui'

import { Label, Input } from './ui'

export default ({ showLabel = false }) => {
  const [url, setUrl] = useState('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        navigate(`/stats?url=${url}`)
      }}
    >
      <Label sx={{ mb: 2, display: showLabel ? 'block' : 'none' }}>
        Input a URL
      </Label>
      <Input
        placeholder="google.com"
        inputMode="url"
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
    </form>
  )
}
