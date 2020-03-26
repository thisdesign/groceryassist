import styled from "styled-components"
import UIButton from "../UIButton/UIButton"

const Label = styled.div`
  font-size: var(--size-1);
  margin-bottom: var(--size-3);
  display: inline-block;
  line-height: 1.3;

  color: var(--color-grey-1);
`

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
  Label,
  Button,
  Error
}
