import styled from "styled-components"
import UIBox from "../UIBox/UIBox"

const LineItem = styled(UIBox)<{ isHovered: boolean }>`
  padding: var(--size-3) var(--size-0);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  user-select: none;
  background: ${(props) => props.isHovered && `var(--color-grey-3)`};
  transition: 0.1s background ease, 0.1s color ease;

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
  LineItem,
}
