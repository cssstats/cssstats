import React from 'react'
import uniq from 'lodash.uniq'

import {
  connect
} from 'refunk'

import H1 from './H1'
import H2 from './H2'
import Div from './Div'
import Pre from './Pre'
import SubHeader from './SubHeader'
import Loading from './Loading'
import Layout from './Layout'

import SummaryStats from './SummaryStats'
import Declarations from './Declarations'
import Colors from './Colors'
import BackgroundColors from './BackgroundColors'
import FontSizes from './FontSizes'
import FontFamilies from './FontFamilies'
import ZIndexes from './ZIndexes'

import sites from './data/sites.json'

class Stats extends React.Component {
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
        rules,
        humanizedGzipSize,
        declarations,
        selectors
      }
    } = this.props

    console.log(this.props)

    const properties = declarations.properties

    const backgroundColors = uniq(properties['background-color'])
    const colors = uniq(properties.color)

    return (
      <Layout>
        <SubHeader
          title={pageTitle}
          text={humanizedGzipSize}
        />

        <SummaryStats
          rules={rules.total}
          selectors={selectors.total}
          declarations={declarations.total}
          properties={Object.keys(properties).length}
        />

        <Declarations
          properties={properties}
        />

        <Colors
          title={`${colors.length} unique colors`}
          colors={colors}
        />

        <BackgroundColors
          title={`${backgroundColors.length} unique background colors`}
          backgroundColors={backgroundColors}
        />

        <FontSizes
          fontSizes={properties['font-size'] || []}
        />

        <FontFamilies
          fontFamilies={properties['font-family'] || []}
        />

        <ZIndexes
          zIndexes={properties['z-index'] || []}
        />

        <Div mt={5}>
          <H2>Raw css</H2>
          <Pre>{css.trim()}</Pre>
        </Div>
      </Layout>
    )
  }
}

export default connect()(Stats)
