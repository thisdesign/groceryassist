import styled from "styled-components"
import UIBox from "../UIBox/UIBox"

const LineItem = styled(UIBox)`
  padding: var(--size-1) var(--size-1);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  h2 {
    font-size: var(--size-3);
    margin-bottom: 0.2rem;
  }

  h3 {
    font-size: var(--size-0);
    color: var(--color-grey-1);
    font-weight: 300;
  }
`

export default {
  LineItem
}
