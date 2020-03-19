type Item = {
  name: string;
  count: number;
  unit?: string;
};

type Order = {
  id: number;
  userId: number;
  items: Item[];
};

type user = {
  id: number;
  name: string;
  address: string;
};

// data

const USERS: user[] = [
  {
    name: "Adam Bagerski",
    id: 56789876,
    address: "4022 n albina ave portland or 97227"
  },
  {
    name: "Maya Massad",
    id: 56789877,
    address: "4231 n interstate ave portland or 97217"
  }
];

const ORDERS: Order[] = [
  {
    id: 567890,
    userId: 56789876,
    items: [
      {
        name: "toilet paper",
        count: 3,
        unit: "pack"
      },
      {
        name: "onion",
        count: 3
      }
    ]
  },
  {
    userId: 56789877,
    id: 23434534,
    items: [
      {
        name: "Hand Sanitizer",
        count: 3
      },
      {
        name: "Eggs",
        count: 1,
        unit: "dozen"
      },
      {
        name: "Tomato sauce",
        count: 1
      },
      {
        name: "Mustard",
        count: 1
      },
      {
        name: "Salsa",
        count: 1,
        unit: "jar"
      },
      {
        name: "Instant Oatmeal",
        count: 1,
        unit: "box"
      }
    ]
  }
];

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
