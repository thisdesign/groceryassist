import styled, { css } from "styled-components"
import { UIWrapper } from "components"

const lineitemstyle = css`
  padding: var(--size-2) 0;
  font-size: var(--size-2);
`

/**
 * Item
 */

const ItemWrapper = styled.div`
  border-bottom: 1px solid var(--color-grey-2);
  ${lineitemstyle}

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

  input {
    font-size: inherit;
    border: inherit;
    padding: none;
    width: 100%;
    outline: none;
  }
`

const ItemInner = styled(UIWrapper)`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`

const LineItem = {
  Inner: ItemInner,
  Wrapper: ItemWrapper,
}

/**
 * NewItemInput
 */

const ButtonsWrapper = styled.div`
  opacity: 0;
  transition: 200ms opacity ease;
`

const NewItemInputWrapper = styled.div<{ isFocused: boolean }>`
  ${lineitemstyle};
  border-bottom: 1px solid var(--color-grey-2);
  transition: 200ms box-shadow ease, 200ms background-color ease;
  background-color: white;
  margin-bottom: 3rem;

  span {
    display: block;
    font-size: var(--size-1);
    text-align: center;
    padding-top: 0.5em;
  }

  ${(props) =>
    props.isFocused &&
    css`
      /* background-color: var(--color-grey-3); */
      box-shadow: var(--shadow);

      ${ButtonsWrapper} {
        opacity: 1;
      }
    `};
`

const NewItemGrid = styled(UIWrapper)`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 1rem;
`

const AddItemInput = styled.input`
  font-size: inherit;
  font-weight: normal;
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
  font-family: inherit;

  ::placeholder {
    font-weight: 300;
    color: var(--color-grey-1);
  }
`

const NewItemTextArea = styled.textarea<{ isEnabled: boolean }>`
  border: 1px solid blue;
  font-size: var(--size-1);
  padding: inherit;
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  color: var(--color-grey-1);
  width: 100%;
  border-top: 1px solid var(--color-grey-2);
  margin-top: 0.5rem;
  padding-top: 0.25rem;
  resize: none;

  opacity: ${(props) => (props.isEnabled ? 1 : 0)};
  transition: 200ms opacity ease;

  ::placeholder {
    font-weight: 300;
    color: var(--color-grey-1);
  }
`

const NewItem = {
  Wrapper: NewItemInputWrapper,
  Grid: NewItemGrid,
  Input: AddItemInput,
  ButtonWrap: ButtonsWrapper,
  TextArea: NewItemTextArea,
}

const Emptystate = styled.div`
  height: 10rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: var(--size-4);

  > div {
    padding-top: 0.25rem;
    color: var(--color-brand);
    font-size: var(--size-2);
    cursor: pointer;
  }
`

const NextWrapper = styled(UIWrapper)<{ isEnabled: boolean }>`
  opacity: ${(props) => (props.isEnabled ? 1 : 0)};
  transition: 500ms opacity ease;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    margin-bottom: var(--size-0);
  }
`

export default {
  Emptystate,
  NewItemInputWrapper,
  AddItemInput,
  NewItemGrid,
  NewItem,
  ItemWrapper,
  ButtonsWrapper,
  NextWrapper,
  LineItem,
}
