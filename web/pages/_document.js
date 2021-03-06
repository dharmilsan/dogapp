import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'
import { AppRegistry } from 'react-native-web'

let index = 0

// Force Next-generated DOM elements to fill their parent's height.
// Not required for using of react-native-web, but helps normalize
// layout for top-level wrapping elements.
const normalizeNextElements = `
  body > div:first-child,
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  },
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`
export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    AppRegistry.registerComponent('Main', () => Main)
    const { getStyleElement } = AppRegistry.getApplication('Main')
    const page = renderPage()
    const styles = [
      <style
        key={index++}
        dangerouslySetInnerHTML={{ __html: normalizeNextElements }}
      />,
      getStyleElement()
    ]
    return { ...page, styles }
  }

  render () {
    return (
      <html style={{ height: '100%', width: '100%' }}>
        <Head>
          <title>react-native-web</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous" />
        </Head>
        <body style={{ height: '100%', width: '100%', overflowY: 'scroll' }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}