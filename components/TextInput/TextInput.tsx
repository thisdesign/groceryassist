import React from "react"
import styled from "styled-components"

const TextInput = styled.input`
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

  ::placeholder {
    color: var(--color-grey-1);
  }

  &:focus {
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.1);
  }
`

export default TextInput
