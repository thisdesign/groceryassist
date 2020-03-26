import styled from "styled-components"
import UIButton from "../UIButton/UIButton"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TwoPanel = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  height: calc(100% - var(--nav-height));

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
  Wrapper,
  TwoPanel,
  Image,
  Error
}
