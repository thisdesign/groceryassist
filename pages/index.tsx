import { ORDERS } from "../constants";
import { LineItem } from "../components";

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

    {/* <div>
      <h1>Add Item</h1>
      <input type="field" placeholder="item name"></input>
      <input type="number" placeholder="qty"></input>
      <button type="button">+ Add unit</button>
      <br />
      <button type="submit">Add Item</button>
    </div> */}
  </>
);

export default Home;
