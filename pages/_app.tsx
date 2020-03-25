import React from "react";
import Link from "next/link";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../style/GlobalStyle";
import theme from "../style/theme";

const App = ({ pageProps, Component }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Link href="/">
          <a>Grocery App</a>
        </Link>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default App;
