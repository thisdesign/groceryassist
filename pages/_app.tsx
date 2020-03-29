import React from "react"
import Link from "next/link"
import { ThemeProvider } from "styled-components"
import Router from "next/router"
import GlobalStyle from "../style/GlobalStyle"
import { Nav } from "../components"

const App = ({ pageProps, Component, router }) => {
  const isHome = router.route === "/"

  return (
    <>
      <GlobalStyle />
      <Nav floating={isHome} />
      <Component {...pageProps} />
    </>
  )
}

export default App
