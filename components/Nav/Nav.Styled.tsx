import styled from "styled-components"
import UIBox from "../UIBox/UIBox"

const Nav = styled(UIBox)`
  background: white;
  z-index: 10;
  position: sticky;
  top: 0;
  height: var(--nav-height);
  display: flex;
  justify-content: center;
  flex-direction: column;

  a {
    letter-spacing: -0.035em;
  }
`

export default {
  Nav
}
