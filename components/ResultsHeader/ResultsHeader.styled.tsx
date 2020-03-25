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

export default {
  ResultsHeader,
  LocationBox,
  Title
}
