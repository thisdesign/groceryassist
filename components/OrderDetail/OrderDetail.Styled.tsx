import styled from "styled-components"
import mq from "../../style/mq"

const Map = styled.div`
  height: 50vw;
  max-height: 45vh;
`

const Wrapper = styled.div`
  margin: var(--size-10) auto;
  padding: 0 var(--size-3);
  max-width: 1200px;
  width: 100%;

  @media ${mq.sm} {
    display: grid;
    grid-template-columns: 2fr 3fr;
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

const Item = styled.div`
  border-bottom: 1px solid var(--color-grey-2);
  padding: var(--size-2) 0;
`

export default {
  ItemWrapper,
  Head,
  Wrapper,
  Map,
  Item
}
