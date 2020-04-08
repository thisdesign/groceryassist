import styled from "styled-components"

const LargeMessage = styled.div`
  height: calc(100vh - var(--nav-height));
  background: var(--color-brand);
  color: var(--color-white);
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
`

export default LargeMessage
