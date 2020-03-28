import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Inner = styled.div`
  width: 100%;
  max-width: 20em;
`

const TwoPanel = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  min-height: calc(100vh - var(--nav-height));

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
