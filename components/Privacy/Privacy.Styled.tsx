import styled from "styled-components"
import { UIWrapper } from "components"

const PrivacyWrapper = styled(UIWrapper)`
  line-height: 1.3;
  margin-top: 4rem;
  margin-bottom: 4rem;

  p,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: var(--size-1);
  }

  h5 {
    font-size: var(--size-3);
    margin-top: var(--size-8);
  }

  p,
  li {
    color: var(--color-grey-1);
  }

  h1 {
    font-size: var(--size-5);
    margin-bottom: 2em;
  }

  li {
    &:before {
      content: "•";
      margin: 0 0.5rem;
    }
  }
`

const PrivacyWrapperInner = styled.div`
  margin-left: auto;
  max-width: 27rem;
`

export default {
  PrivacyWrapper,
  PrivacyWrapperInner,
}
