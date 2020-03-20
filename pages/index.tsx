import Link from "next/link";
import mongoose from "mongoose";
import "isomorphic-unfetch";
import { NextPage } from "next";

const Home: NextPage<{ data: any }> = ({ data }) => {
  return (
    <>
      <h1>
        <Link href="/listings">
          <a>I'd like to pick up groceries for someone→</a>
        </Link>
      </h1>
      <hr />
      <h1>
        <Link href="/create">
          <a>I'd like someone to pick up my groceries→</a>
        </Link>
      </h1>

      <hr />
    </>
  );
};

Home.getInitialProps = async () => {
  const data = await fetch("http://localhost:3000/api/getListings").then(res =>
    res.json()
  );

  return { data };
};
export default Home;
