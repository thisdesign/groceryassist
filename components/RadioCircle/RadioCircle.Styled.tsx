import styled from "styled-components"

const Outline = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 1px solid
    ${props => (props.checked ? `var(--color-brand)` : `var(--color-grey-1)`)};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.checked ? `var(--color-brand)` : "transparent"};

  svg {
    display: ${props => (props.checked ? "block" : "none")};
    height: 0.5rem;

    path {
      fill: var(--color-bg);
    }
  }
`

export default {
  Outline
}
