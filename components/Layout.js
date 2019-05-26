import React, { useState } from 'react'
import { navigate } from 'gatsby'
import {
  ThemeProvider,
  Container,
  Header,
  Box,
  Flex,
  Styled,
  css
} from 'theme-ui'
import { GitHub } from 'react-feather'

import theme from './theme.json'
import { Logo, Link, Label, Input } from './ui'

export default ({ title, initialUrl, children }) => {
  const [url, setUrl] = useState(initialUrl)
  
  return (
    <ThemeProvider theme={theme}>
      <style>{`
        * { box-sizing: border-box; }
        body { font-family: ${theme.fonts[0]} }
      `}</style>
      <>
        <Header>
          <Flex alignItems="center" width="100%">
            <Link href="/" ml={2} color="text">
              <Flex as="span" alignItems="center">
                <Logo size={40} />
                <span css={css({ ml: 2, fontSize: [1, 2, 3] })}>CSS Stats</span>
              </Flex>
            </Link>

            {initialUrl ? (
              <Box m="auto" px={3} css={css({ width: ['100%', 1024, 1024], flexShrink: 0 })}>
                <form
                    onSubmit={e => {
                      e.preventDefault()
                      navigate(`/stats?url=${url}`)
                    }}
                  >
                  <Label display="none">Url</Label>
                  <Input placeholder="Url to extract CSS stats" value={url} onChange={e => setUrl(e.target.value)} />
                </form>
              </Box>
            ) : null}

            <Box ml="auto">
              <Styled.a href="https://github.com/cssstats"><GitHub /></Styled.a>
            </Box>
          </Flex>
        </Header>
        <title children={title || 'CSS Stats'} />
        <Container>{children}</Container>
      </>
    </ThemeProvider>
  )
}
