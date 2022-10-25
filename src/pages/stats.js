/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect, useState } from 'react'
import getQueryParam from 'get-query-param'
import isUrl from 'is-url'
import { Styled, IconButton } from 'theme-ui'

import { Loading, SubHeader } from '../components/library'

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
        <div sx={{ display: 'flex', alignItems: 'center', }}>
          <Loading />
          <h2>
            Downloading and analyzing CSS from{' '}
            <Styled.a href={isUrl(url) ? url : '//' + url}>{url}</Styled.a>
          </h2>
        </div>
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
      <header sx={{ pt: 4, pb: 5 }}>
        <h1 children={url} sx={{ lineHeight: 1, fontSize: 6, fontWeight: 900, my: 0, }} />
        <h2 children={pageTitle} sx={{ opacity: .7, fontSize: '16px', fontWeight: 400, my: 0 }}/>
      </header>
      <div sx={{ display: 'flex' }}>
        <div
          sx={{ bg: 'lightGray', color: 'darkGray', borderRadius: '6px', p: 4 }}
        >
          <div sx={{ display: 'flex', }}>
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
          </div>
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
      </div>

      <div
        sx={{
          mt: 4,
          mb: 5,
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
      <h2 id="typography">
        Typography
      </h2>
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

      <header sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
        <h4 sx={{ my: 0 }}>Raw CSS</h4>
        <IconButton
          role="button"
          title="Copy CSS to clipboard"
          tabindex="0"
          onClick={() => {
            setCopied(true)
            copy(css.trim())
            setTimeout(() => setCopied(false), 2000)
          }}
        >
          {copied ? <CheckSquare /> : <Clipboard />}
        </IconButton>
      </header>
        
      <pre sx={{
        overflow: 'scroll',
        height: '480px',
        resize: 'all',
        p: 4,
        borderRadius: '6px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.2), 0 0 0 1px rgba(255,255,255,.2)'
      }}>{css.trim()}</pre>
    </Layout>
  )
}
