import styled from "styled-components"

const Wrapper = styled.div`
  min-height: calc(100vh - var(--nav-height));

  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  border-bottom: 1px solid var(--color-grey-2);
`

const Body = styled.div`
  flex: 1;
`

export default {
  Header,
  Wrapper,
  Body,
}
