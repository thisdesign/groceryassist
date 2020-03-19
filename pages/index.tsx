import Head from "next/head";

type Item = {
  name: string;
  count: number;
  unit?: string;
};

type Order = {
  id: number;
  name: string;
  items: Item[];
};

const ORDERS: Order[] = [
  {
    name: "Adam Bagerski",
    id: 56789876,
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
    name: "Maya Massad",
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
      }
    ]
  }
];

const Home = () => (
  <>
    <h1>Orders</h1>
    <div>
      {ORDERS.map(({ items, name }) => (
        <div>
          <h2>{name}</h2>
          {items.map(item => (
            <div>
              <h3>
                {item.name} · {item.count} {item.unit ? item.unit : ""}
              </h3>
            </div>
          ))}
        </div>
      ))}
    </div>
    <div>
      <h1>Add Item</h1>
      <input type="field" placeholder="item name"></input>
      <input type="number" placeholder="qty"></input>
      <button type="button">+ Add unit</button>
      <br />
      <button type="submit">Add Item</button>
    </div>

    <style scoped jsx>{`
      div {
        border: 1px solid blue;
        border-radius: 6px;
        padding: 0.25rem;
        margin-bottom: 1rem;
      }
    `}</style>
  </>
);

export default Home;
