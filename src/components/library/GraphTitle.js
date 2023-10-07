/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import slugify from '@sindresorhus/slugify'

const withoutLeadingNumbers = str => str.replace(/^[0-9]/, '')

const GraphTitle = props => {
  const slug = slugify(withoutLeadingNumbers(props.title))

  return (
    <header {...props}>
      <h3>{props.title}</h3>
      <p sx={{ mt: 2, mb: 0 }} children={props.description} />
    </header>
  )
}

export default GraphTitle
