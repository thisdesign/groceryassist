import { USERS } from "../../constants";

const OrderDetail = ({ data }) => {
  const { items } = data;
  const user = USERS.filter(user => user.id === data.userId)[0];

  return (
    <div>
      <div>
        <h1>Order for {user.name}</h1>
        <h2>{items.length} items</h2>
        <p>{user.address}</p>
        <br />
      </div>
      <hr />
      {items.map(item => (
        <div key={item.name}>
          <h3>
            {item.name} · {item.count} {item.unit ? item.unit : "count"}
            <hr />
          </h3>
        </div>
      ))}
      <br />
      <br />

      <h2>
        <a href={`/fulfill/${data.id}`}>Fulfill this order→</a>
      </h2>
    </div>
  );
};

export default OrderDetail;
