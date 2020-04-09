import styled from "styled-components"
import { UIWrapper } from "components"

const Wrap = styled(UIWrapper)`
  margin: var(--size-8) auto;
  padding: var(--size-2);
`

const Grid = styled.div`
  max-width: 30rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: var(--size-0);
  margin: var(--size-3) 0 var(--size-9);

  > * {
    grid-column: span 2;
  }
`

export default {
  Grid,
  Wrap,
}
