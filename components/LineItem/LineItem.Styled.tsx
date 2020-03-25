import styled from "styled-components"
import UIBox from "../UIBox/UIBox"

const LineItem = styled(UIBox)`
  padding: var(--size-3) var(--size-0);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  &:hover {
    background: var(--color-grey-3);
  }

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
