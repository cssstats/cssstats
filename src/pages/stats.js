/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect, useState } from 'react'
import getQueryParam from 'get-query-param'
import isUrl from 'is-url'
import { Styled, IconButton } from 'theme-ui'

import { H2, Div, Pre, Flex, Loading, SubHeader } from '../components/library'

import { CheckSquare, Clipboard } from 'react-feather'
import copy from 'copy-to-clipboard'

import Homepage from './index.mdx'
import Layout from '../components/Layout'

import SummaryStats from '../components/SummaryStats'
import Declarations from '../components/Declarations'
import Selectors from '../components/Selectors'
import Colors from '../components/Colors'
import BackgroundColors from '../components/BackgroundColors'
import FontSizes from '../components/FontSizes'
import FontFamilies from '../components/FontFamilies'
import ZIndexes from '../components/ZIndexes'
import SpacingResets from '../components/SpacingResets'
import RulesetChart from '../components/RulesetChart'
import SpecificityChart from '../components/SpecificityChart'
// import DeclarationsChart from '../components/DeclarationsChart'
import DeclarationsChartLayout from '../components/DeclarationsChartLayout'
import DeclarationsChartTypography from '../components/DeclarationsChartTypography'
import DeclarationsChartSpacing from '../components/DeclarationsChartSpacing'
import DeclarationsChartSpacingMargin from '../components/DeclarationsChartSpacingMargin'

const API_URL = 'https://cssstats.com/api'

export default () => {
  const [stats, setStats] = useState(null)
  const [url, setUrl] = useState(null)
  const [copied, setCopied] = useState(false)

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

  if (!url && !stats) {
    return <Homepage />
  }

  if (!stats) {
    return (
      <Layout p={[4, 5, 6]} initialUrl={url}>
        <Flex h={9 / 10} items="center">
          <Loading />
          <H2 my={0} pl={3}>
            Downloading and analyzing CSS from{' '}
            <Styled.a href={isUrl(url) ? url : '//' + url}>{url}</Styled.a>
          </H2>
        </Flex>
      </Layout>
    )
  }

  const {
    css: { css, pageTitle },
    stats: { rules, humanizedGzipSize, humanizedSize, declarations, selectors },
  } = stats

  const properties = declarations.properties

  const backgroundColors = properties['background-color'] || []
  const colors = properties.color || []

  return (
    <Layout initialUrl={url} onUrlChange={(url) => setUrl(url)}>
      <SubHeader title={url} description={pageTitle} mb={5} />
      <Flex>
        <div
          sx={{ bg: 'lightGray', color: 'darkGray', borderRadius: '7px', p: 4 }}
        >
          <Flex>
            <dl
              sx={{
                marginRight: 32,
                paddingRight: 32,
                borderRight: '1px solid',
                borderColor: 'gray',
              }}
            >
              <dt>File size</dt>
              <dd sx={{ fontSize: '64px', fontWeight: 900, marginLeft: 0 }}>
                {humanizedSize}
              </dd>
            </dl>
            <dl sx={{ marginRight: 32, paddingRight: 32 }}>
              <dt>Gzipped file size</dt>
              <dd sx={{ fontSize: '64px', fontWeight: 900, marginLeft: 0 }}>
                {humanizedGzipSize}
              </dd>
            </dl>
          </Flex>
        </div>
        <div sx={{ width: '100%' }}>
          <div sx={{ pl: 4, width: '100%' }}>
            <table sx={{ fontSize: 1, width: '100%' }} cellSpacing="0">
              <tr>
                <th
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: 0,
                    textAlign: 'left',
                  }}
                ></th>
                <th
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: 0,
                    textAlign: 'right',
                  }}
                >
                  Size
                </th>
                <th
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: 0,
                    textAlign: 'right',
                  }}
                >
                  Gzipped
                </th>
              </tr>
              <tr>
                <td
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    py: 1,
                    fontWeight: 'bold',
                  }}
                >
                  Basscss
                </td>
                <td
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    textAlign: 'right',
                  }}
                >
                  10kb
                </td>
                <td
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    textAlign: 'right',
                  }}
                >
                  2kb
                </td>
              </tr>
              <tr>
                <td
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    py: 1,
                    fontWeight: 'bold',
                  }}
                >
                  Tachyons
                </td>
                <td
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    textAlign: 'right',
                  }}
                >
                  72kb
                </td>
                <td
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    textAlign: 'right',
                  }}
                >
                  13kb
                </td>
              </tr>
              <tr>
                <td
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    py: 1,
                    fontWeight: 'bold',
                  }}
                >
                  Foundation
                </td>
                <td
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    textAlign: 'right',
                  }}
                >
                  119kb
                </td>
                <td
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    textAlign: 'right',
                  }}
                >
                  16kb
                </td>
              </tr>
              <tr>
                <td
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    py: 1,
                    fontWeight: 'bold',
                  }}
                >
                  Primer
                </td>
                <td
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    textAlign: 'right',
                  }}
                >
                  140kb
                </td>
                <td
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    textAlign: 'right',
                  }}
                >
                  22kb
                </td>
              </tr>
              <tr>
                <td
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    py: 1,
                    fontWeight: 'bold',
                  }}
                >
                  Bootstrap
                </td>
                <td
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    textAlign: 'right',
                  }}
                >
                  123kb
                </td>
                <td
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    textAlign: 'right',
                  }}
                >
                  23kb
                </td>
              </tr>
              <tr>
                <td
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    py: 1,
                    fontWeight: 'bold',
                  }}
                >
                  Bulma
                </td>
                <td
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    textAlign: 'right',
                  }}
                >
                  186kb
                </td>
                <td
                  sx={{
                    borderBottom: '1px solid',
                    borderColor: 'gray',
                    textAlign: 'right',
                  }}
                >
                  24kb
                </td>
              </tr>
            </table>
          </div>
        </div>
      </Flex>

      <div
        sx={{
          mt: 4,
          p: '48px',
          borderRadius: '16px',
          bg: 'black',
          color: 'lightGray',
        }}
      >
        <SummaryStats
          rules={rules.total}
          selectors={selectors.total}
          declarations={declarations.total}
          properties={Object.keys(properties).length}
        />
        <Selectors
          classes={selectors.class}
          id={selectors.id}
          pseudoClass={selectors.pseudoClass}
          pseudoElement={selectors.pseudoElement}
        />
      </div>

      <Declarations properties={properties} />
      <Colors colors={colors} />
      <BackgroundColors backgroundColors={backgroundColors} />
      <H2 id="typography" fontSize={6}>
        Typography
      </H2>
      <FontSizes fontSizes={properties['font-size']} />
      <FontFamilies fontFamilies={properties['font-family']} />
      <SpacingResets properties={properties} />
      <ZIndexes zIndexes={properties['z-index']} />
      <SpecificityChart
        max={selectors.specificity.max}
        average={Math.round(selectors.specificity.average)}
        data={selectors.specificity.graph}
      />
      <RulesetChart data={rules.size.graph} />

      <DeclarationsChartLayout data={declarations} />
      <DeclarationsChartTypography data={declarations} />
      <DeclarationsChartSpacing data={declarations} />
      <DeclarationsChartSpacingMargin data={declarations} />

      <Div mt={5}>
        <IconButton
          role="button"
          title="Copy CSS to clipboard"
          sx={{ float: 'right' }}
          tabindex="0"
          onClick={() => {
            setCopied(true)
            copy(css.trim())
            setTimeout(() => setCopied(false), 2000)
          }}
        >
          {copied ? <CheckSquare /> : <Clipboard />}
        </IconButton>
        <H2>Raw CSS</H2>
        <Pre>{css.trim()}</Pre>
      </Div>
    </Layout>
  )
}
