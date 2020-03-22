import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Item } from "../types";
import { addOrder } from "../middleware";

export default function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems([...items, item]);
  };

  return (
    <div>
      <div className="split">
        <div>
          <div>
            <br />
            <br />
            <h1>Choose your items</h1>
            <br />
            <br />
            <hr />
          </div>
          {items.map(item => (
            <div>
              <br />
              <h2 key={item.name}>
                {item.name} • {item.qty}
              </h2>
              <br />
              <hr />
            </div>
          ))}

          <AddItemForm addItem={addItem} />
        </div>
        <div>
          <br />
          <br />
          <h1>Where should we deliver?</h1>
          <p>
            Your location information will only be provided to your provider.
          </p>
          <br />
          <br />
          <hr />
          <br />
          <ContactForm items={items} />
        </div>
      </div>
      <style jsx>
        {`
          .split {
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-gap: 1rem;
          }
        `}
      </style>
    </div>
  );
}

const ContactForm: React.FC<{ items: Item[] }> = ({ items }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    addOrder({
      name: `${data.first} ${data.last}`,
      location: {
        address: data.address,
        city: data.city,
        state: data.state,
        zip: data.zip
      },
      items
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        name="first"
        ref={register({ required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Last name"
        name="last"
        ref={register({ required: true, maxLength: 100 })}
      />
      <br />
      <input
        type="text"
        placeholder="Address"
        name="address"
        ref={register({ required: true })}
      />

      <br />

      <input
        type="text"
        placeholder="State"
        name="state"
        ref={register({ required: true })}
      />
      <input
        type="text"
        placeholder="City"
        name="city"
        ref={register({ required: true })}
      />
      <input
        type="number"
        placeholder="Zip"
        name="zip"
        ref={register({ required: true, min: 4 })}
      />

      <br />

      <br />
      <hr />
      <br />
      <br />

      <input type="submit" />
    </form>
  );
};

const DEFAULT = {
  name: "",
  qty: 1
};

const AddItemForm: React.FC<{ addItem: (item: Item) => void }> = ({
  addItem
}) => {
  const [formData, setFormData] = useState<Item>(DEFAULT);

  const handleChange = (
    key: "name" | "qty",
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleSubmit = () => {
    addItem(formData);
    setFormData(DEFAULT);
  };

  return (
    <>
      <br />
      <input
        value={formData.name}
        type="text"
        name="item"
        placeholder="Item"
        onChange={e => handleChange("name", e)}
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={formData.qty}
        onChange={e => handleChange("qty", e)}
      />
      <button type="submit" onClick={handleSubmit}>
        Add Item
      </button>
      <br />
      <br />
      <hr />
    </>
  );
};
