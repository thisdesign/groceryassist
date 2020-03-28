import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: var(--size-4);
`

const Bg = styled.div`
  background: var(--color-grey-3);
  border-top: 1px solid var(--color-grey-2);
  padding: 1px;
`

export default {
  Bg,
  Grid
}
