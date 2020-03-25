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
    <>
      <h1>
        [App name] is a volunteer delivery service to help those vulnerable to
        COVID-19
      </h1>
      <div className="wrapper">
        <div>
          <form>
            <input
              type="text"
              onChange={handleChange}
              value={address}
              placeholder="Enter address"
            />
          </form>
        </div>

        <Link href={`/new?a=${urlAddress}`}>
          <a>
            <div className="button">Have groceries delivered</div>
          </a>
        </Link>

        <Link href={`/orders?a=${urlAddress}`}>
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

          h1 {
            font-size: var(--size-6);
            max-width: 15em;
            text-align: center;
            margin: var(--size-10) auto;
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

          input {
            font-size: 1rem;
            padding: 0.5rem var(--size-0);
            border: 1px solid var(--color-grey-2);
            color: var(--color-primary);
            border-radius: 0.5rem;
            margin: 0;
            width: 100%;
            max-width: 25rem;
            margin: 0 auto;
            outline: none;
          }
        `}
      </style>
    </>
  )
}

export default Home
