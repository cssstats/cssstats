/** @jsx jsx */
import { useState } from 'react'
import { navigate } from 'gatsby'
import {
  Container,
  Header,
  Styled,
  jsx
} from 'theme-ui'
import { GitHub, Twitter } from 'react-feather'
import { Helmet } from 'react-helmet'

import { Logo, Link, Label, Input } from './ui'

import favicon16 from "../images/favicon-16.png";
import favicon32 from "../images/favicon-32.png";
import favicon64 from "../images/favicon-64.png";

export default ({ title, initialUrl, children }) => {
  const [url, setUrl] = useState(initialUrl)
  
  return (
    <div>
      <style>{`* { box-sizing: border-box; }`}</style>
      <Helmet
        title={'CSS Stats'}
        meta={[
          {
            name: 'description',
            content: 'Potentially interesting stats on stylesheets'
          }
        ]}
        link={[
          { rel: "icon", type: "image/png", sizes: "16x16", href: `${favicon16}` },
          { rel: "icon", type: "image/png", sizes: "32x32", href: `${favicon32}` },
          { rel: "shortcut icon", type: "image/png", href: `${favicon64}` }
        ]}
      />
      <Styled.root>
        <Header>
          <div
            sx={{
              display: 'flex',
              width: '100%',
              maxWidth: '100%',
              alignItems: 'center',
              flexWrap: 'nowrap'
            }}
          >
            <Link href="/" ml={2} color="text">
              <span
                sx={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center'
                }}
              >
                <Logo size={32} />
                <span sx={{ ml: 2, fontSize: 0, display: ['none', 'block'], textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>CSS Stats</span>
              </span>
            </Link>

            {initialUrl ? (
              <div sx={{ px: 3, width: ['100%'] }}>
                <form
                    onSubmit={e => {
                      e.preventDefault()
                      navigate(`/stats?url=${url}`)
                    }}
                  >
                  <Label display="none">Url</Label>
                  <Input placeholder="Url to extract CSS stats" value={url} onChange={e => setUrl(e.target.value)} />
                </form>
              </div>
            ) : null}

            <div sx={{ ml: 'auto', width: 96, display: 'flex', alignItems: 'center' }}>
              <Styled.a sx={{ mr: 3 }} href="https://mobile.twitter.com/cssstats"><Twitter /></Styled.a>
              <Styled.a href="https://github.com/cssstats"><GitHub /></Styled.a>
            </div>
          </div>
        </Header>
        <title children={title || 'CSS Stats'} />
        <Container>{children}</Container>
      </Styled.root>
    </div>
  )
}
