/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import slugify from '@sindresorhus/slugify'

const withoutLeadingNumbers = str => str.replace(/^[0-9]/, '')

const SectionTitle = props => {
  const slug = slugify(withoutLeadingNumbers(props.title))

  return (
    <header sx={{ py: 3, mb: 4, px: 4}} {...props}>
      <code sx={{ fontSize: 3, bg: 'highlight' }} id={slug} children={props.title} />
      <p sx={{ mt: 2, mb: 0 }} children={props.description} />
    </header>
  )
}

export default SectionTitle
