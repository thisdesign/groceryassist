import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
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

export default {
  Grid,
  FormWrapper
}
