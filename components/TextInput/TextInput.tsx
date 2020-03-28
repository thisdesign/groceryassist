import React from "react"
import styled, { css } from "styled-components"

const normalize = css`
  font-size: 1rem;
  padding: 0.5rem var(--size-0);
  border: 1px solid var(--color-grey-lt);
  color: var(--color-primary);
  border-radius: 0.5rem;
  margin: 0;
  width: 100%;
  max-width: 25rem;
  margin: 0 auto;
  outline: none;
  transition: 0.2s box-shadow ease;
  width: 100%;

  ::placeholder {
    color: var(--color-grey-1);
  }

  &:focus {
    box-shadow: var(--shadow);
  }
`

const TextInput = styled.input`
  ${normalize}
`

export const TextArea = styled.textarea`
  ${normalize}
  resize: none;
`

export default TextInput
