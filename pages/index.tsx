import { Homepage, Page } from "components"
import { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <Page title={null}>
      <Homepage />
    </Page>
  )
}

export default Home
