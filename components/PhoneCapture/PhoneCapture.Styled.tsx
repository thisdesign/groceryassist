import styled from "styled-components"
import UIButton from "../UIButton/UIButton"

const Label = styled.div`
  font-size: var(--size-1);
  margin-bottom: var(--size-3);
  display: inline-block;
  text-align: center;
  color: var(--color-grey-1);
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: var(--size-13);
`

const Button = styled(UIButton)`
  margin-top: var(--size-0);
`
const Head = styled.h2`
  font-size: var(--size-4);
  margin-bottom: 0.25rem;
`

export default {
  Head,
  Label,
  Wrapper,
  Button
}
