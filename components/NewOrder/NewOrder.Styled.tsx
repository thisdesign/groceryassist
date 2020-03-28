import styled from "styled-components"

const GroceryWrap = styled.div`
  max-width: 35rem;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: var(--size-4);
`

const Bg = styled.div`
  background: var(--color-grey-3);
  border-top: 1px solid var(--color-grey-2);
  padding: 1px;
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

const FormWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "AD AD AD AD"
    "FN FN LN LN"
    "PH PH PH AG"
    "NO NO NO NO";
  grid-gap: var(--size-0);
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: var(--size-4);

  > * {
    &:nth-child(1) {
      grid-area: AD;
    }
    &:nth-child(2) {
      grid-area: FN;
    }
    &:nth-child(3) {
      grid-area: LN;
    }
    &:nth-child(4) {
      grid-area: PH;
    }
    &:nth-child(5) {
      grid-area: AG;
    }
    &:nth-child(6) {
      grid-area: NO;
    }
  }
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
`

export default {
  GroceryWrap,
  White,
  Pad,
  Bg,
  NewItemInputWrapper,
  Grid,
  FormWrapper
}
