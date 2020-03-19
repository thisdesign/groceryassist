import { USERS } from "../../constants";

const OrderDetail = ({ data }) => {
  const { items } = data;
  const user = USERS.filter(user => user.id === data.userId)[0];

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
        <div key={item.name}>
          <h3>
            {item.name} · {item.count} {item.unit ? item.unit : "count"}
            <hr />
          </h3>
        </div>
      ))}
    </div>
  );
};

export default OrderDetail;
