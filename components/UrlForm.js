import React, { useState } from 'react'
import { navigate } from 'gatsby'

import { Label, Input } from './ui'

export default () => {
  const [url, setUrl] = useState('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        navigate(`/stats?url=${url}`)
      }}>
      <Label display="none">Url</Label>
      <Input placeholder="google.com" value={url} onChange={e => setUrl(e.target.value)} />
    </form>
  )
}
