import styled from "styled-components"
import mq from "../../style/mq"

const Map = styled.div`
  height: 50vw;
  max-height: 40vh;
`

const Grid = styled.div`
  width: 100%;

  @media ${mq.sm} {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: var(--size-4);
  }
`

const Head = styled.div`
  font-size: var(--size-6);
  margin-bottom: 0.25rem;
`

const ItemWrapper = styled.div`
  border-top: 1px solid var(--color-grey-2);
  margin: var(--size-6) 0;

  @media ${mq.sm} {
    margin-top: 0;
  }
`

export default {
  ItemWrapper,
  Head,
  Grid,
  Map
}
