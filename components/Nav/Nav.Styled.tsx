import styled, { css } from "styled-components"
import UIBox from "../UIBox/UIBox"

const Nav = styled(UIBox)<{ floating: boolean }>`
  background: white;
  z-index: 10;
  position: sticky;
  top: 0;
  height: var(--nav-height);
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${(props) =>
    props.floating &&
    css`
      border-bottom: none;
      background: none;
      color: var(--color-bg);
    `}

  a {
    letter-spacing: -0.035em;
  }
`

export default {
  Nav,
}
