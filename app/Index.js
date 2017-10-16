import React from 'react'

import H1 from './H1'
import H2 from './H2'
import Layout from './Layout'
import Form from './Form'
import Button from './Button'
import Input from './Input'
import Label from './Label'
import LinkBox from './LinkBox'
import LoadingCircle from './LoadingCircle'

import sites from './data/sites.json'

export default () =>
  <Layout>
    <H1
      children='Parse Css'
    />

    <Form
      onSubmit={e => {
        e.preventDefault()
        console.log(e)
      }}
    >
      <Label
        children='URI'
      />
      <Input
        mt={1}
        placeholder='Url, domain, or direct css link'
      />
      <Button
        mt={2}
        children='Go'
      />
    </Form>

    <H2
      children='View Stats for Popular Sites'
    />
    <LinkBox
      links={sites.map(link => {
        const fallbackUrl = `https://${link.name.replace(' ','').toLowerCase()}.com`
        link.url = `/stats?url=${link.url || fallbackUrl}`
        return link
      })}
    />

    <LoadingCircle />

    <H2
      children='View Stats for Popular Frameworks'
    />
    <LinkBox
      links={sites.map(link => {
        const fallbackUrl = `https://${link.name.replace(' ','').toLowerCase()}.com`
        link.url = `/stats?url=${link.url || fallbackUrl}`
        return link
      })}
    />
  </Layout>
