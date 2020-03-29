import styled from "styled-components"
import { mq } from "style"

const Page = styled.div`
  padding-top: var(--nav-height);
  position: absolute;
  top: 0;
  min-height: 100vh;
  width: 100vw;

  background: url("https://images.unsplash.com/photo-1544755101-93bfbad2396c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80");
  background-position: center;
  background-size: 160%;
  background-color: var(--color-brand);

  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Head = styled.h1`
  font-size: var(--size-5);
  max-width: 15em;
  text-align: center;
  margin: 0 auto;
  margin-bottom: var(--size-4);

  @media ${mq.sm} {
    font-size: var(--size-6);
  }
  @media ${mq.md} {
    font-size: var(--size-7);
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a {
    display: inline-block;
    margin: 0.25rem;
  }
`

export default {
  ButtonWrapper,
  Page,
  Head
}
