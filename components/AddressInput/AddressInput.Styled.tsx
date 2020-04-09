import styled from "styled-components"
import PinIcon from "../PinIcon/PinIcon"

const Wrapper = styled.div`
  display: block;
  position: relative;
`

const InputWrapper = styled.div`
  position: relative;

  input {
    padding-left: 1.7rem;
  }
`

const PinWrapper = styled.div`
  position: absolute;
  top: 0.45em;
  left: 0.85rem;
  transform: scale(1.2);
`

const PredictionWrapper = styled.div`
  width: 100%;
  position: absolute;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  transform: translateY(0.25em);
  border: 1px solid var(--color-grey-2);
  z-index: 20;
  background: var(--color-bg);
`

const PredictionItem = styled.div<{ isSelected: boolean }>`
  border-bottom: 1px solid var(--color-grey-2);
  padding: var(--size-0);
  cursor: pointer;
  user-select: none;

  background: ${(props) => (props.isSelected ? `var(--color-grey-3)` : null)};

  h5 {
    margin-bottom: 0.25rem;
    font-size: var(--size-1);
  }

  h6 {
    color: var(--color-grey-1);
    font-size: var(--size-0);
    font-weight: 300;
  }
`

export default {
  Wrapper,
  PredictionWrapper,
  PredictionItem,
  InputWrapper,
  PinWrapper,
}
