import styled from "styled-components"
import mq from "../../style/mq"

const Map = styled.div`
  height: 50vw;
  max-height: 40vh;
`

const Wrapper = styled.div`
  margin: var(--size-10) auto;
  padding: 0 var(--size-3);
  max-width: 1200px;
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

const Item = styled.div`
  border-bottom: 1px solid var(--color-grey-2);
  padding: var(--size-2) 0;
`

const BottomBar = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.05);
  border-top: 1px solid var(--color-grey-2);
  padding: 0.5rem var(--size-1);
  z-index: 20;
  background: var(--bg-color);
  text-align: right;

  a {
    border: 1px solid var(--color-grey-2);
    padding: 0.5rem var(--size-4);
    font-size: var(--size-1);
    border-radius: 0.4rem;
    display: inline-block;
  }
`

export default {
  ItemWrapper,
  Head,
  Wrapper,
  Map,
  Item,
  BottomBar
}
