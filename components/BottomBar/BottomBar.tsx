import styled from "styled-components"

const BottomBar = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.05);
  border-top: 1px solid var(--color-grey-2);
  padding: 0.5rem var(--size-1);
  z-index: 20;
  background: var(--bg-color);
  text-align: right;
`

export default BottomBar
