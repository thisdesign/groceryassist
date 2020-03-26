import { useState } from "react"
import Link from "next/link"
import "isomorphic-unfetch"
import { NextPage } from "next"

const Home: NextPage = () => {
  const [address, setAddress] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }

  const urlAddress = address.replace(/ /g, "+")

  return (
    <div className="home">
      <br />
      <h1>
        [App name] is a volunteer delivery service to help those vulnerable to
        COVID-19
      </h1>
      <div className="wrapper">
        <Link href="new">
          <a>
            <div className="button">Have groceries delivered</div>
          </a>
        </Link>

        <Link href="/orders">
          <a>
            <div className="button black">Pick up groceries for someone</div>
          </a>
        </Link>
      </div>

      <br />
      <br />
      <style jsx>
        {`
          .wrapper {
            text-align: center;
          }
          .home {
            background: url("https://images.unsplash.com/photo-1544755101-93bfbad2396c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80");
            background-position: center;
            backgroun-size: cover;

            color: white;
            min-height: calc(100vh - var(--nav-height));
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          h1 {
            font-size: var(--size-6);
            max-width: 15em;
            text-align: center;
            margin-bottom: var(--size-4);
          }

          .button {
            max-width: 10rem;
            text-align: center;
            padding: 0.5rem;
            border-radius: 0.5rem;
            display: inline-block;
            margin: 0.25rem;
            font-size: var(--size-1);
            background: var(--color-grey-1);
            color: var(--bg-color);
          }
          .black {
            background: var(--color-primary);
          }
        `}
      </style>
    </div>
  )
}

export default Home
