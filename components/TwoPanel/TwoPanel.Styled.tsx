import styled from "styled-components"
import { mq } from "style"

const Wrapper = styled.div`
  @media ${mq.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Inner = styled.div`
  width: 100%;
  max-width: 20em;
  padding: var(--size-6) 0;
`

const TwoPanel = styled.div`
  display: grid;
  min-height: calc(100vh - var(--nav-height));
  grid-template-rows: 200px auto;

  @media ${mq.sm} {
    grid-template-columns: 2fr 3fr;
    grid-template-rows: unset;
  }

  > div {
    padding: 1rem;
  }
`

const Image = styled.div<{ image: string }>`
  background-image: url("${props => props.image}");
  background-color: var(--color-grey-3);
  background-position: center;
  background-size: cover;
  height: 100%;
`

export default {
  Inner,
  Wrapper,
  TwoPanel,
  Image
}
