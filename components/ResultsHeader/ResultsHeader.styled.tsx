import styled from "styled-components"
import UIBox from "../UIBox/UIBox"

const ResultsHeader = styled(UIBox)`
  padding-bottom: 0.5rem;
`

const LocationBox = styled.div`
  border: 1px solid var(--color-grey-2);
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: var(--size-1);
`

const Title = styled.div`
  margin-top: var(--size-6);
  font-size: var(--size-1);
`

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
`

const Dropdown = {
  UIWrap: styled.div`
    cursor: pointer;
    position: relative;
    font-size: var(--size-0);
    color: var(--color-grey-1);
    align-self: flex-end;
  `,

  Display: styled.div`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,

  Window: styled.ul<{ isOpen: boolean }>`
    background: var(--color-white);
    position: absolute;
    top: 1rem;
    right: 0;
    left: 0;
    margin: 0 -0.5rem;
    border-radius: 0.5rem;
    box-shadow: var(--shadow);
    border: 1px solid var(--color-grey-2);
    display: ${(props) => (props.isOpen ? "block" : "none")};
    overflow: hidden;
  `,

  Item: styled.li<{ active: boolean }>`
    padding: 0.5rem 0.5rem;

    &:hover {
      background: var(--color-grey-3);
    }
  `,

  Carret: styled.div`
    font-size: 0.5rem;
    margin-left: 0.75em;
  `,
}

export default {
  ResultsHeader,
  LocationBox,
  Filter,
  Title,
  Dropdown,
}
