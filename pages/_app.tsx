import React from "react"
import Link from "next/link"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../style/GlobalStyle"
import theme from "../style/theme"
import { UIBox } from "../components"

const App = ({ pageProps, Component }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <UIBox>
          <Link href="/">
            <a>Grocery App</a>
          </Link>
        </UIBox>
        <Component {...pageProps} />
        <style jsx>
          {`
            a {
              letter-spacing: -0.035em;
            }
          `}
        </style>
      </>
    </ThemeProvider>
  )
}

export default App
