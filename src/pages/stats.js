/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect, useState } from 'react'
import getQueryParam from 'get-query-param'
import isUrl from 'is-url'
import { IconButton } from 'theme-ui'

import { Loading } from '../components/library'

import { CheckSquare, Clipboard } from 'react-feather'
import copy from 'copy-to-clipboard'

import Homepage from './index.mdx'
import Layout from '../components/Layout'

import SummaryStats from '../components/SummaryStats'
import Declarations from '../components/Declarations'
import Selectors from '../components/Selectors'
import Colors from '../components/Colors'
import Colors3D from '../components/Colors3D'
import BackgroundColors from '../components/BackgroundColors'
import BackgroundImages from '../components/BackgroundImages'
import BorderColors from '../components/BorderColors'
import Borders from '../components/Borders'
import BorderRadii from '../components/BorderRadii'
import BoxShadows from '../components/BoxShadows'
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
  const [colorSpace, setColorSpace] = useState('rgb');

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
        <div sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <Loading />
          <h2>
            Downloading and analyzing CSS from{' '}
            <a href={isUrl(url) ? url : '//' + url}>{url}</a>
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

  const backgroundImages = properties['background-image'] || []
  const backgroundColors = properties['background-color'] || []
  const borderColors = properties['border-color'] || []
  const boxShadows = properties['box-shadow'] || []
  const borderRadii = properties['border-radius'] || []
  const borders = properties['border'] || []
  const colors = properties.color || []

  return (
    <Layout initialUrl={url} onUrlChange={(url) => setUrl(url)}>
      <header sx={{ maxWidth: '96rem', mx: 'auto', px: 4, pt: 5, pb: 5, display: 'flex', gap: '32px', justifyContent: 'space-between', alignItems: 'center', flexDirection: ['column', 'row', 'row'] }}>
    <div>
        <h1 children={url} sx={{ lineHeight: 1, fontSize: 4, fontWeight: 900, mt: 0, mb: 2, }} />
        <h2 children={pageTitle} sx={{ opacity: .7, fontSize: '16px', fontWeight: 400, my: 0 }}/>
    </div>
    <div sx={{ 
      boxShadow: '0 0 0 1px rgba(0,0,0, .2), 0 0 0 1px rgba(255,255,255,.2)', 
      display: 'flex', 
      alignItems: 'center', 
      py: 3, px: 4, 
      borderRadius: '7px', }}>
            <dl
              sx={{
                my: 0,
                marginRight: '32px',
                paddingRight: '32px',
                fontSize: 1,
              }}
            >
              <dt>File size</dt>
              <dd sx={{ fontSize: '24px', fontWeight: 900, marginLeft: 0 }}>
                {humanizedSize}
              </dd>
            </dl>
            <dl sx={{ my: 0, fontSize: 1,  }}>
              <dt>Gzipped size</dt>
              <dd sx={{ fontSize: '24px', fontWeight: 900, marginLeft: 0 }}>
                {humanizedGzipSize}
              </dd>
            </dl>
    </div>
      </header>
      <div sx={{ display: 'flex' }}>
        <div sx={{ width: '100%' }}>
          <div sx={{ pl: 4, width: '100%', display: 'none', }}>
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
      <section sx={{ px: 4 }}>
      <div
        sx={{
          mt: 4,
          mb: 5,
          p: '48px',
          borderRadius: '16px',
          bg: 'black',
          color: 'lightGray',
          mx: 'auto', 
          maxWidth: '96rem',
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
      </section>
      <header sx={{ px: 4 }}>
        <h2 sx={{ fontSize: '48px'}} id="typography">
          Color
        </h2>
      </header>
      <BackgroundColors backgroundColors={backgroundColors} />
      <Colors colors={colors} />
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center'  }}>
      <label>
              <input 
                  type="radio" 
                  value="rgb" 
                  checked={colorSpace === 'rgb'}
                  onChange={e => setColorSpace(e.target.value)}
              />
              RGB
          </label>
      <label>
              <input 
                  type="radio" 
                  value="lab" 
                  checked={colorSpace === 'lab'}
                  onChange={e => setColorSpace(e.target.value)}
              />
              LAB
          </label>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Colors3D title='Colors' colors={colors} colorspace={colorSpace} />
      <Colors3D title='Background Colors' colors={backgroundColors} colorspace={colorSpace} />
      <Colors3D title='Border Colors' colors={borderColors} colorspace={colorSpace} />
    </div>
      <BorderColors borderColors={borderColors} />
      <BackgroundImages url={url} backgroundImages={backgroundImages} />
      <BoxShadows boxShadows={boxShadows} />
      <BorderRadii borderRadii={borderRadii} />
      <Borders borders={borders} />
      <header sx={{ px: 4 }}>
        <h2 sx={{ fontSize: '48px'}} id="typography">
          Typography
        </h2>
      </header>
      <FontSizes fontSizes={properties['font-size']} />
      <FontFamilies fontFamilies={properties['font-family']} />
      <ZIndexes zIndexes={properties['z-index']} />
      <div sx={{ mt: 5 }}>
        <Declarations properties={properties} />
        <SpacingResets properties={properties} />
      </div>
      <section sx={{ px: 4, mx: 'auto', maxWidth: '64rem', mt: 5, display: 'flex', flexDirection: 'column', gap: '48px' }}>
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
      </section>
      <section sx={{ px: 4, pb: 6 }}>        
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
      <pre 
        id="code"
        sx={{
          overflow: 'scroll',
          height: '480px',
          resize: 'all',
          p: 4,
          borderRadius: '6px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.2), 0 0 0 1px rgba(255,255,255,.2)'
      }}>{css.trim()}</pre>
    </section>
    </Layout>
  )
}
