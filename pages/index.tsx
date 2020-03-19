import { ORDERS, USERS } from "../constants";

const Home = () => (
  <>
    <h1>Orders</h1>
    <div>
      {ORDERS.map(({ items, userId }) => {
        const user = USERS.filter(user => user.id === userId)[0];

        return (
          <div>
            <br />
            <div>
              <h2>{user.name}</h2>
              <h4>{items.length} items</h4>
              <p>{user.address}</p>
            </div>

            <hr />
            {items.map(item => (
              <div>
                <h3>
                  {item.name} · {item.count} {item.unit ? item.unit : "count"}
                  <hr />
                </h3>
              </div>
            ))}
          </div>
        );
      })}
    </div>

    <br />
    <br />

    <div>
      <h1>Add Item</h1>
      <input type="field" placeholder="item name"></input>
      <input type="number" placeholder="qty"></input>
      <button type="button">+ Add unit</button>
      <br />
      <button type="submit">Add Item</button>
    </div>
  </>
);

export default Home;
