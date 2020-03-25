import styled from "styled-components"
import UIBox from "../UIBox/UIBox"

const Nav = styled(UIBox)`
  background: white;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
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
