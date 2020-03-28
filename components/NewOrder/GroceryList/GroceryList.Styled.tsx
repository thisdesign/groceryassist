import styled from "styled-components"

const GroceryWrap = styled.div`
  /* max-width: 35rem; */
  /* margin: 0 auto; */
`

const White = styled.div`
  border-radius: 0.5rem;
  background: white;
  /* border: 1px solid var(--color-grey-2); */
  margin-top: var(--size-2);
  box-shadow: var(--shadow);
  padding: 1px;
`

const NewItemInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: var(--size-0);
  border-top: 1px solid var(--color-grey-2);
  padding: var(--size-3);

  span {
    display: block;
    font-size: var(--size-1);
    color: var(--color-grey-1);
    text-align: center;
    margin-top: 0.25rem;
    cursor: pointer;
  }

  input:focus {
    box-shadow: none;
  }
`

const ItemWrapper = styled.div`
  padding: var(--size-3) var(--size-2);

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-2);
  }

  h4 {
    margin-bottom: 0.8rem;
  }
  h5 {
    font-weight: lighter;
  }
  h5,
  h4 {
    color: var(--color-grey-1);
    font-size: var(--size-0);
    letter-spacing: 0.02em;
    padding-top: 0.25em;
  }
`

export default {
  GroceryWrap,
  White,

  NewItemInputWrapper,
  ItemWrapper
}
