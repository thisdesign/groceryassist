import styled from "styled-components"

const OrderItem = styled.div<{ isChecked: boolean }>`
  padding: var(--size-2) 0;
  border-top: 1px solid var(--color-grey-lt);
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 0.5rem;
  cursor: pointer;
  text-decoration: ${props => (props.isChecked ? "line-through" : "none")};
  color: ${props => (props.isChecked ? "var(--color-grey-1)" : "inherit")};
  transition: 200ms color ease;
`

const SmallWords = styled.div`
  font-size: var(--size-1);
  color: var(--color-grey-1);
`

const BottomBarGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  text-align: left;
  align-items: center;
`

export default {
  OrderItem,
  SmallWords,
  BottomBarGrid
}
