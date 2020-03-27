import styled from "styled-components"

const FormWrapper = styled.div`
  margin-top: var(--size-4);
`

const InfoGrid = styled(FormWrapper)`
  display: grid;
  grid-template-areas:
    "a b"
    "c c"
    "d d";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: var(--size-0);

  > * {
    &:nth-child(3) {
      grid-area: c;
    }

    &:nth-child(4) {
      grid-area: d;
      text-align: right;
    }
  }
`

export default {
  InfoGrid,
  FormWrapper
}
