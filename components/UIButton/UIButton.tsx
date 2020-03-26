import styled from "styled-components"

const UIButton = styled.button`
  font-size: var(--size-2);
  margin: 0;
  padding: 0.5rem var(--size-7);
  border-radius: 0.5rem;
  background: var(--color-brand);
  color: var(--bg-color);
  border: none;
  outline: none;
  transition: 200ms opacity ease;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }

  :active {
    opacity: 0.8;
  }
`

export default UIButton
