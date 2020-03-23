import Link from "next/link";
import "isomorphic-unfetch";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <h1>
        <Link href="/listings">
          <a>I&apos;d like to pick up groceries for someone→</a>
        </Link>
      </h1>
      <hr />
      <h1>
        <Link href="/new">
          <a>I&apos;d like someone to pick up my groceries→</a>
        </Link>
      </h1>

      <hr />
    </>
  );
};

export default Home;
