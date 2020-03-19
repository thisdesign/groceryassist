import { ORDERS } from "../constants";
import { LineItem } from "../components";
import Link from "next/link";

const Home = () => (
  <>
    <h1>{ORDERS.length} Open Orders</h1>
    <hr />
    <br />
    <br />
    <div>
      {ORDERS.map(order => (
        <LineItem data={order} key={order.id} />
      ))}
    </div>
    <br />
    <br />
    <h1>
      <Link href="/create">
        <a>I'd like someone to pick up my groceries→</a>
      </Link>
    </h1>
  </>
);

export default Home;
