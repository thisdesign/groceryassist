import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 25rem;
  width: 100%;
  position: absolute;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
`

const PredictionItem = styled.div<{ isSelected: boolean }>`
  border-bottom: 1px solid var(--color-grey-2);
  padding: var(--size-0);
  cursor: pointer;
  user-select: none;

  background: ${props => (props.isSelected ? `var(--color-grey-3)` : null)};

  h5 {
    margin-bottom: 0.25rem;
  }
  h6 {
    color: var(--color-grey-1);
    font-size: var(--size-1);
    font-weight: 300;
  }
`

export default {
  Wrapper,
  PredictionItem
}
