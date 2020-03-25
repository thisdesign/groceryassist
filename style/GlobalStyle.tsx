import { createGlobalStyle, css } from "styled-components"
import reset from "styled-reset"
import modularScale from "./modularScale"
import { mq } from "./index"

const scale: number[] = modularScale({
  scale: 1.2,
  stepsDown: 2,
  length: 15
})

const style = css`
  :root {
    --bg-color: white;
    --color-primary: #2c2c33;
    --color-grey-1: #8f9398;
    --color-grey-2: #eaeaea;
    --color-grey-3: #f9f9f9;

    ${scale.map((item, i) => `--size-${i}: ${item}rem`).join(";\n")};

    --spacing-standard: var(--size-0);
    --nav-height: var(--size-9);
  }

  @font-face {
    font-family: "Basis Grotesque";
    src: url("/fonts/basis-grotesque-medium.otf");
    font-weight: 400;
  }

  @font-face {
    font-family: "Basis Grotesque";
    src: url("/fonts/basis-grotesque-regular.otf");
    font-weight: 300;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  body,
  html,
  #__next {
    height: 100%;
  }

  body,
  html {
    line-height: ${props => props.theme.lineHeights.body};
    font-family: ${props => props.theme.fontFamilies.sansSerif};
    color: var(--color-primary);
    background: var(--bg-color);
    font-size: 20px;
    overscroll-behavior-y: none;

    @media ${mq.xs} {
      font-size: 21px;
    }

    @media ${mq.sm} {
      font-size: 22px;
    }

    @media ${mq.lg} {
      font-size: 23px;
    }
  }

  a {
    color: var(--text-color);
    text-decoration: none;
  }

  em {
    font-style: italic;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: ${props => props.theme.lineHeights.heading};
  }

  img,
  video {
    display: block;
    width: 100%;
  }
`
const GlobalStyle = createGlobalStyle`
  ${reset}
  ${style}
`

export default GlobalStyle
