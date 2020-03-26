import styled from "styled-components"

const UIButton = styled.button<{ background?: string }>`
  font-size: var(--size-2);
  margin: 0;
  padding: 0.5rem var(--size-7);
  border-radius: 0.5rem;
  background: ${props =>
    props.background ? ` var(--color-${props.background})` : "transparent"};
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

UIButton.defaultProps = {
  background: "brand"
}

export default UIButton
