import React from 'react'

import {
  connect
} from 'refunk'

import H1 from './H1'
import H2 from './H2'
import Pre from './Pre'
import SubHeader from './SubHeader'
import Loading from './Loading'
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
    if (!this.props.css) {
      return <Loading />
    }

    const {
      css: {
        css,
        pageTitle
      },
      stats: {
        humanizedGzipSize
      }
    } = this.props

    return (
      <Layout>
        <SubHeader
          title={pageTitle}
          text={humanizedGzipSize}
        />

        <H2>Raw Css</H2>
        <Pre>{css.trim()}</Pre>
      </Layout>
    )
  }
}

export default connect()(Stats)
