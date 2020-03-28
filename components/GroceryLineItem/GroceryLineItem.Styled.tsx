import styled from "styled-components"

const ItemWrapper = styled.div`
  padding: var(--size-2) 0;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-2);
  }

  h4 {
    margin-bottom: 0.8rem;
  }
  h5,
  h4 {
    color: var(--color-grey-1);
    font-size: var(--size-0);
    letter-spacing: 0.02em;
    padding-top: 0.25rem;
  }
`

export default {
  ItemWrapper
}
