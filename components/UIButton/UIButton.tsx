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

const getBorderColor = ({ color }: any) => {
  if (color) {
    return `var(--color-${color})`
  }
  return "var(--color-brand)"
}

const getColor = ({ inverted, color, textColor }: any) => {
  if (textColor) {
    return `var(--color-${textColor})`
  }
  if (inverted && color) {
    return `var(--color-${color})`
  }

  return "var(--color-bg)"
}

type ButtonProps = {
  inverted?: boolean
  color?: string
  textColor?: string
}

const UIButton = styled.button<ButtonProps>`
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
  color: "brand",
  inverted: false,
  textColor: "white"
}

export default UIButton
