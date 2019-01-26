import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif !important;
  }
`

export default class _Document extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    const { styleTags } = this.props

    return (
      <html>
        <Head>{styleTags}</Head>
        <body>
          <Main />
          <NextScript />
          <GlobalStyle />
        </body>
      </html>
    )
  }
}
