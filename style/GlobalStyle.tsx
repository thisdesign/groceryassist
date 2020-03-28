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
    --bg-color: white; /* TODO: Delete me */

    --color-white: white;
    --color-bg: var(--color-white);
    --color-primary: #2c2c33;

    --color-brand-rgb: 37, 76, 61;
    --color-brand: rgb(var(--color-brand-rgb));

    --color-error: #ff5400;

    --color-blue: #0072ff;

    --color-grey-lt: #dadce0;
    --color-grey-1: #8f9398;
    --color-grey-2: #eaeaea;
    --color-grey-3: rgb(250, 249, 249);

    --shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
    --border-radius: 0.5rem;

    ${scale.map((item, i) => `--size-${i}: ${item}rem`).join(";\n")};

    --spacing-standard: var(--size-0);
    --nav-height: var(--size-9);

    --line-height-body: 1.2;
    --line-height-head: 1.1;
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
  html {
    line-height: 1.2;
    font-family: "basis grotesque", helvetica, arial, sans-serif;
    color: var(--color-primary);
    background: var(--bg-color);
    font-size: 18px;
    overscroll-behavior-y: none;

    @media ${mq.xs} {
      font-size: 20px;
    }

    @media ${mq.sm} {
      font-size: 21px;
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
    line-height: var(--line-height-head);
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
