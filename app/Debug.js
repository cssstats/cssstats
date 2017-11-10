import React from 'react'

import {
  Pre
} from './library'

const Debug = props => (
  <Pre {...props} children={JSON.stringify(props.object, null, 2)} />
)

export default Debug
