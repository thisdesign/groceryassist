import styled, { css } from "styled-components"

const hover = css`
  background: var(--color-grey-1);
  color: var(--bg-color);
`

const Marker = styled.div<{ isHovered: boolean }>`
  border: 1px solid var(--color-grey-1);
  font-weight: 600;
  font-size: 13px;
  background: var(--bg-color);
  width: 3rem;
  padding: 0.3rem;
  box-sizing: content-box;
  text-align: center;
  border-radius: 99rem;
  color: var(--color-primary);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transform: translate3d(-50%, -50%, 0);
  transition: 0.1s background ease;

  &:hover {
    ${hover}
  }

  ${(props) => props.isHovered && hover}
`

export default {
  Marker,
}
