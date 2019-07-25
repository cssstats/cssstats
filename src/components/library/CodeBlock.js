import React from 'react'
import Pre from './Pre'
import Font from './Font'

const CodeBlock = props => (
  <Font mono>
    <Pre children={props.children} />
  </Font>
)

export default CodeBlock
