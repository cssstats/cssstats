import React from 'react'

import { Pre } from './library'

export default props => (
  <Pre {...props} children={JSON.stringify(props.object, null, 2)} />
)
