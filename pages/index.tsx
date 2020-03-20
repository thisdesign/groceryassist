import Link from "next/link";

const Home = () => (
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

export default Home;
