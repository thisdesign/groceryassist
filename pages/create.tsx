import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Order, Item } from "../types";

const ITEMS = [
  {
    name: "Pasta Sauce",
    qty: 1
  },
  {
    name: "Crackers",
    qty: 1
  },
  {
    name: "Spinich",
    qty: 1
  },

  {
    name: "cauliflower",
    qty: 1
  }
];

export default function App() {
  const { register, handleSubmit } = useForm();
  const [items, setItems] = useState<Item[]>([]);

  const onSubmit = data => {
    const addOrder = (order: Order) => {
      fetch("http://localhost:3000/api/createOrder", {
        method: "POST",
        body: JSON.stringify(order)
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    };

    addOrder({
      name: `${data.first} ${data.last}`,
      location: {
        address: data.address,
        city: data.city,
        state: data.state,
        zip: data.zip
      },
      items: ITEMS
    });
  };

  const handleNewItem = (e: any) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <h2>Choose your items</h2>
      <form onSubmit={handleNewItem}>
        <input type="text" />
        <button type="submit">Add Item</button>
      </form>
      <hr />
      <h2>Where should we deliver?</h2>
      <p>Your information will remain private</p>
      <br />
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

        <hr />
        {items.map(item => (
          <div>
            {item.name} ( - {item.qty} + )
            <hr />
          </div>
        ))}

        <input type="submit" />
      </form>
    </div>
  );
}
