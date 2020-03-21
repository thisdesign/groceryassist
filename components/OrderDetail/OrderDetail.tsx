import { USERS } from "../../constants";
import { OrderDb } from "../../types";

const OrderDetail: React.FC<{ data: OrderDb }> = ({ data }) => {
  const { name, location, items } = data;

  return (
    <div>
      <div>
        <h1>Order for {name}</h1>
        <h3>
          {location.address}
          <br />
          {location.city}, {location.state} {location.zip}
        </h3>
        <h4>{items.length} items</h4>
        <br />
      </div>
      <hr />
      {items.map(item => (
        <div key={item.name}>
          <h3>
            {item.name} · {item.qty}
            <hr />
          </h3>
        </div>
      ))}
      <br />
      <br />

      <h2>
        <a href={`/fulfill/${data._id}`}>Fulfill this order→</a>
      </h2>
    </div>
  );
};

export default OrderDetail;
