import styled from "styled-components"

const GroceryWrap = styled.div`
  max-width: 35rem;
  margin: 0 auto;
`

const White = styled.div`
  border-radius: 0.5rem;
  background: white;
  border: 1px solid var(--color-grey-2);
  margin-top: var(--size-2);
`

const Pad = styled.div`
  padding: 0.5rem var(--size-3);
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

export default {
  GroceryWrap,
  White,
  Pad,
  NewItemInputWrapper
}
