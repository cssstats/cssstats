import React from 'react'
import Pre from './Pre'

const Debug = props => (
  <Pre {...props} children={JSON.stringify(props.object, null, 2)} />
)

export default Debug
