import styled from "styled-components"
import UIButton from "../UIButton/UIButton"

const Label = styled.div`
  font-size: var(--size-1);
  margin-bottom: var(--size-3);
  display: inline-block;
  line-height: 1.3;

  color: var(--color-grey-1);
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Button = styled(UIButton)`
  margin-top: var(--size-0);
  display: block;
`

const TwoPanel = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  height: calc(100% - var(--nav-height));

  > div {
    padding: 1rem;
  }
`

const Image = styled.div`
  background-image: url("https://images.unsplash.com/photo-1583247949334-e07ab70681c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80");
  background-color: var(--color-grey-3);
  background-position: center;
  background-size: cover;
  height: 100%;
`

const Error = styled.div`
  font-size: var(--size-1);
  padding-top: 0.25rem;
  color: var(--color-error);
`

export default {
  Label,
  Wrapper,
  Button,
  TwoPanel,
  Image,
  Error
}
