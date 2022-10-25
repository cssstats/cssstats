/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import slugify from '@sindresorhus/slugify'
import Text from './Text'

const withoutLeadingNumbers = str => str.replace(/^[0-9]/, '')

const SectionTitle = props => {
  const slug = slugify(withoutLeadingNumbers(props.title))

  return (
    <div mb={3} {...props}>
      <h2 id={slug} children={props.title} />
      <Text mt={0} children={props.description} />
    </div>
  )
}

export default SectionTitle
