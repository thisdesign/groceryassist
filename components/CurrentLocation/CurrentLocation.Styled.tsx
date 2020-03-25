import styled from "styled-components"

const Circle = styled.div`
  width: 22px;
  height: 22px;
  background: var(--color-blue);
  border-radius: 50%;
  position: relative;
  z-index: 0;
  border: 3px solid white;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;

    width: 4rem;
    height: 4rem;
    background: var(--color-blue);
    top: 50%;
    left: 50%;

    transform: translate3d(-50%, -50%, 0);

    opacity: 0.1;
  }
`

export default {
  Circle
}
