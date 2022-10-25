/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import slugify from '@sindresorhus/slugify'
import Text from './Text'

const withoutLeadingNumbers = str => str.replace(/^[0-9]/, '')

const SectionTitle = props => {
  const slug = slugify(withoutLeadingNumbers(props.title))

  return (
    <div sx={{ mb: 4, }} {...props}>
      <h3 sx={{ fontSize: 4, mb: 1 }} id={slug} children={props.title} />
      <Text children={props.description} />
    </div>
  )
}

export default SectionTitle
