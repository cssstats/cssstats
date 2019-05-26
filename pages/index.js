import React, { Component } from 'react'
import Router from 'next/router'

import {
  H1,
  H2,
  Div,
  Form,
  Button,
  Input,
  Label,
  LinkBox
} from '../components/library'

import Layout from '../components/Layout'

import { sites, frameworks } from '../components/constants'

class Index extends Component {
  state = {
    urlInput: ''
  }

  render() {
    return (
      <Layout>
        <H1>Parse css</H1>

        <Form py={3}>
          <Label>URL</Label>
          <Input
            mt={2}
            placeholder="Url, domain, or direct css link"
            inputMode="url"
            onChange={e => this.setState({ urlInput: e.target.value })}
          />
          <Button
            mt={2}
            children="Go"
            onClick={e => {
              e.preventDefault()
              Router.push(`/stats?url=${this.state.urlInput}`)
            }}
          />
        </Form>

        <Div mt={3}>
          <H2>View stats for popular sites</H2>

          <LinkBox
            links={sites.map(link => {
              const fallbackUrl = `https://${link.name
                .replace(' ', '')
                .toLowerCase()}.com`
              const url = `/stats?url=${link.url || fallbackUrl}&name=${
                link.name
              }`

              return Object.assign({}, link, { url })
            })}
          />
        </Div>

        <Div mt={4}>
          <H2>View stats for popular frameworks</H2>

          <LinkBox
            links={frameworks.map(link => {
              const url = `/stats?url=${link.url}&name=${link.name}`

              return Object.assign({}, link, { url })
            })}
          />
        </Div>
      </Layout>
    )
  }
}

export default Index
