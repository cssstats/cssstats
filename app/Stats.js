import React from 'react'

import {
  connect
} from 'refunk'

import H1 from './H1'
import Pre from './Pre'
import Layout from './Layout'

import sites from './data/sites.json'

class Stats extends React.Component {
  constructor () {
    super()
  }

  componentDidMount () {
    fetch(`/api/stats${this.props.history.location.search}`)
      .then(res => res.json())
      .then(body => this.props.update(body))
      .catch(console.error)
  }

  render () {
    return (
      <Layout>
        <H1
          children={this.props.css ? this.props.css.pageTitle : 'Stats'}
        />

        <Pre
          children={this.props.css && this.props.css.css.trim()}
        />
      </Layout>
    )
  }
}

export default connect()(Stats)
