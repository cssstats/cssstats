import React from 'react'
import slugify from '@sindresorhus/slugify'
import H2 from './H2'
import Div from './Div'
import Text from './Text'

const withoutLeadingNumbers = str => str.replace(/^[0-9]/, '')

const SectionTitle = props => {
  const slug = slugify(withoutLeadingNumbers(props.title))

  return (
    <Div mb={3} {...props}>
      <H2 mb={2} id={slug} children={props.title} />
      <Text mt={0} children={props.description} />
    </Div>
  )
}

export default SectionTitle
