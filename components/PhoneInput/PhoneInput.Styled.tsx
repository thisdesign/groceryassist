import styled from "styled-components"
import UIButton from "../UIButton/UIButton"

const Button = styled(UIButton)`
  margin-top: var(--size-0);
  display: block;
`

const Error = styled.div`
  font-size: var(--size-1);
  padding-top: 0.25rem;
  color: var(--color-error);
`

export default {
  Button,
  Error
}
