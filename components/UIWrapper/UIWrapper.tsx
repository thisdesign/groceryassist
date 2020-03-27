import styled from "styled-components"

const UIWrapper = styled.div<{ pad?: boolean }>`
  max-width: 1200px;
  margin: ${props => (props.pad ? "var(--size-10)" : "0")} auto;
  padding: 0 var(--size-2);
  width: 100%;
`

UIWrapper.defaultProps = {
  pad: false
}

export default UIWrapper
