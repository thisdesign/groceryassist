import Link from "next/link"
import "isomorphic-unfetch"
import { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <>
      <h1>
        [App name] is a volunteer delivery service to help those vulnerable to
        COVID-19
      </h1>
      <div className="wrapper">
        <h2>
          <Link href="/orders?l=45.515369,-122.654716">
            <a>I&apos;d like to pick up groceries for someone→</a>
          </Link>
        </h2>
        <h2>
          <Link href="/new">
            <a>I&apos;d like someone to pick up my groceries→</a>
          </Link>
        </h2>
      </div>

      <hr />
      <style jsx>
        {`
          h1 {
            font-size: 4rem;
            max-width: 15em;
            text-align: center;
            margin: 2em auto;
          }

          .wrapper {
            justify-content: space-around;
            display: grid;
            grid-template-columns: 20rem 20rem;
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

export default Home
