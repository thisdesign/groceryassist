import styled from "styled-components"

const UIWrapper = styled.div<{ pad?: boolean }>`
  max-width: 45rem;
  margin: ${props => (props.pad ? "var(--size-8)" : "0")} auto;
  padding: 0 var(--size-2);
  width: 100%;
`

UIWrapper.defaultProps = {
  pad: false
}

export default UIWrapper
