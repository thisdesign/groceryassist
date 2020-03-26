import { useState } from "react"
import Link from "next/link"
import "isomorphic-unfetch"
import { NextPage } from "next"
import { UIButton } from "../components"

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
        <Link href="/orders">
          <a>
            <UIButton inverted textColor="white" color="white">
              Pick up groceries <br /> for someone
            </UIButton>
          </a>
        </Link>

        <Link href="new">
          <a>
            <UIButton textColor="brand" color="white">
              Have groceries <br />
              delivered
            </UIButton>
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
        `}
      </style>
    </div>
  )
}

export default Home
