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
    grid-gap: var(--size-5);
  }
`

const ItemWrapper = styled.div`
  border-top: 1px solid var(--color-grey-2);
  margin: var(--size-6) 0;

  @media ${mq.sm} {
    margin-top: 0;
  }
`

const ListItem = styled.div`
  border-bottom: 1px solid var(--color-grey-2);
  padding: var(--size-2) 0;

  h5 {
    font-size: var(--size-1);
    padding-top: 0.5em;
    color: var(--color-grey-1);
  }
`

export default {
  ListItem,
  ItemWrapper,
  Grid,
  Map
}
