/** @jsx jsx */
import { useState } from 'react'
import { jsx, useColorMode } from 'theme-ui'
import { GitHub, Twitter, Moon } from 'react-feather'
import { Helmet } from 'react-helmet'

import { Logo, Link } from './ui'

import favicon16 from '../images/favicon-16.png'
import favicon32 from '../images/favicon-32.png'
import favicon64 from '../images/favicon-64.png'

export default ({ title, initialUrl, onUrlChange, children }) => {
  const [url, setUrl] = useState(initialUrl)
  const [colorMode, setColorMode] = useColorMode()

  return (
    <div>
      <style>{`* { box-sizing: border-box; } html, body { font-family: Inter,-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, 'Helvetica Neue', system, sans-serif; } code, pre { font-family: monospace; }`}</style>
      <Helmet
        title={'CSS Stats'}
        meta={[
          {
            name: 'description',
            content: 'Potentially interesting stats on stylesheets',
          },
        ]}
        link={[
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: `${favicon16}`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `${favicon32}`,
          },
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon64}` },
        ]}
      />
        <header
          sx={{
            fontWeight: 'bold',
            p: [1, 2, 3],
            mb: 3,
            boxShadow: '0 0px 0px 1px rgba(0,0,0,.2), 0 0 0 1px rgba(255,255,255,.2)',
            '& a': {
              color: 'black',
              textDecoration: 'none',
            },
          }}
        >
          <div
            sx={{
              display: 'flex',
              width: '100%',
              maxWidth: '100%',
              alignItems: 'center',
              flexWrap: 'nowrap',
            }}
          >
            <Link href="/" title='Goto the CSS Stats homepage'>
              <span
                sx={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  color: 'text',
                }}
              >
                <Logo size={32} />
                <span
                  sx={{
                    color:'text',
                    ml: 2,
                    fontSize: 0,
                    display: 'block',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  CSS Stats
                </span>
              </span>
            </Link>

            {initialUrl ? (
              <div sx={{ px: 3, width: ['100%'] }}>
                <form
                  sx={{ width: '100%', display: 'flex', justifyContent: 'center',  }}
                  onSubmit={(e) => {
                    e.preventDefault()
                    onUrlChange(url)
                  }}
                >
                  <label sx={{width: '100%', display: 'block'}}><span sx={{ display: 'none' }}>URL</span>
                  <input
                    placeholder="Url to extract CSS stats"
                    inputMode="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    sx={{ 
                      color: 'text', 
                      appearance: 'none', 
                      WebkitAppearance: 'none', 
                      border: 0, 
                      boxShadow: '0 0 0 1px rgba(0,0,0,.2), 0 0 0 1px rgba(255,255,255,.2)',
                      p: 3,
                      width: '100%',
                        
                    }}
                  />
                </label>
                </form>
              </div>
            ) : null}

            <div
              sx={{
                ml: 'auto',
                mr: 2,
                width: 96,
                display: ['none', 'none', 'flex' ],
                gap: '16px',
                alignItems: 'center',
              }}
            >
              <button
                sx={{
                  WebKitAppearance: 'none',
                  appearance: 'none',
                  bg: 'transparent',
                  color: 'text',
                  border: 0,
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'color .2s ease',
                  ':hover':{
                    color: 'blue',
                  }
                }}
                onClick={() => {
                  setColorMode(colorMode === 'light' ? 'dark' : 'light')
                }}
                title="Toggle color mode"
              >
                <Moon />
              </button>
              <a
                sx={{ 
                  transition: 'color .2s ease',
                  ':hover':{
                    color: 'blue',
                  }
                }}
                href="https://mobile.twitter.com/cssstats"
              >
                <Twitter />
              </a>
              <a 
    sx={{

                  transition: 'color .2s ease',
                  ':hover':{
                    color: 'blue',
                  }
    }}
    href="https://github.com/cssstats">
                <GitHub />
              </a>
            </div>
          </div>
        </header>
        <title children={title || 'CSS Stats'} />
        <div>{children}</div>
    </div>
  )
}
