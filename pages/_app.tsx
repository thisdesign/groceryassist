import React from "react"
import Link from "next/link"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../style/GlobalStyle"

import { Nav } from "../components"

const App = ({ pageProps, Component }) => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default App
