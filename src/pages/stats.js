import React, { useEffect, useState } from 'react'
import getQueryParam from 'get-query-param'
import isUrl from 'is-url'
import { Styled } from 'theme-ui'

import {
  H2,
  Div,
  Pre,
  Flex,
  Loading,
  SubHeader
} from '../components/library'

import Layout from '../components/Layout'

import SummaryStats from '../components/SummaryStats'
import Declarations from '../components/Declarations'
import Colors from '../components/Colors'
import BackgroundColors from '../components/BackgroundColors'
import FontSizes from '../components/FontSizes'
import FontFamilies from '../components/FontFamilies'
import ZIndexes from '../components/ZIndexes'
import SpacingResets from '../components/SpacingResets'
import RulesetChart from '../components/RulesetChart'
import SpecificityChart from '../components/SpecificityChart'
import DeclarationsChart from '../components/DeclarationsChart'

const API_URL = 'https://cssstats.com/api'

export default () => {
  const [stats, setStats] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    const linkFromQuery = getQueryParam('link', window.location.href)
    const urlFromQuery = getQueryParam('url', window.location.href)
    setUrl(linkFromQuery || urlFromQuery)
  }, [])

  useEffect(() => {
    const fetchStats = async () => {
      if (!url) {
        return
      }

      const response = await fetch(`${API_URL}/stats?url=${url}`)
      const data = await response.json()
      setStats(data)
    }

    fetchStats()
  }, [url])

  if (!stats) {
    return (
      <Layout p={[4, 5, 6]} initialUrl={url}>
        <Flex h={9 / 10} items="center">
          <Loading />
          <H2 my={0} pl={3}>
            Downloading and analyzing CSS from <Styled.a href={isUrl(url) ? url : '//' + url}>{url}</Styled.a>
          </H2>
        </Flex>
      </Layout>
    )
  }

  const {
    css: { css, pageTitle },
    stats: { rules, humanizedGzipSize, humanizedSize, declarations, selectors }
  } = stats

  const properties = declarations.properties

  const backgroundColors = properties['background-color'] || []
  const colors = properties.color || []

  return (
    <Layout initialUrl={url}>
      <SubHeader
        title={pageTitle || (stats && stats.name) || url}
        gzipSize={humanizedGzipSize} 
        size={humanizedSize}
      />

      <SummaryStats
        rules={rules.total}
        selectors={selectors.total}
        declarations={declarations.total}
        properties={Object.keys(properties).length}
      />

      <Declarations properties={properties} />
      <Colors colors={colors} />
      <BackgroundColors backgroundColors={backgroundColors} />
      <FontSizes fontSizes={properties['font-size']} />
      <FontFamilies fontFamilies={properties['font-family']} />
      <ZIndexes zIndexes={properties['z-index']} />
      <SpacingResets properties={properties} />
      <SpecificityChart data={selectors.specificity.graph} />
      <RulesetChart data={rules.size.graph} />
      <DeclarationsChart data={declarations} />

      <Div mt={5}>
        <H2>Raw Css</H2>
        <Pre>{css.trim()}</Pre>
      </Div>
    </Layout>
  )
}
