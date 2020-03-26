import styled from "styled-components"

const getBackground = ({ inverted, color }: any) => {
  if (inverted) {
    return "transparent"
  }

  if (color) {
    return `var(--color-${color})`
  }
  return "var(--color-brand)"
}

const getBorderColor = () => {
  return "var(--color-brand)"
}

const getColor = ({ inverted, color }: any) => {
  if (inverted && color) {
    return `var(--color-${color})`
  }

  return "var(--color-bg)"
}

const UIButton = styled.button<{ inverted?: boolean; color?: string }>`
  font-size: var(--size-2);
  margin: 0;
  padding: 0.5rem var(--size-7);
  border-radius: 0.5rem;
  background: ${getBackground};
  border: 1px solid ${getBorderColor};
  color: ${getColor};
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
  color: "brand"
}

export default UIButton
