import styled from "styled-components"
import { mq } from "style"
import { IMAGES } from "../../constants"

const Page = styled.div`
  padding-top: var(--nav-height);
  position: absolute;
  top: 0;
  min-height: 100vh;
  width: 100vw;

  background: url(${IMAGES.ORANGE_TREE});
  background-position: center;
  background-size: 150%;
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
    font-size: var(--size-6);
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  button {
    width: 15rem;
  }
  a {
    display: inline-block;
    margin: 0.25rem;
  }
`

export default {
  ButtonWrapper,
  Page,
  Head,
}
