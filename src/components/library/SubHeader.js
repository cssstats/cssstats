/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

const SubHeader = props => (
  <div {...props}>
    <h2
      children={props.title}
    />
    <p children={props.description} />
  </div>
)

export default SubHeader
