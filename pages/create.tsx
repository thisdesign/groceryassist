import React from "react";
import { useForm } from "react-hook-form";
import { Order } from "../types";

export default function App() {
  const { register, handleSubmit } = useForm();
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
      items: [
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
      ]
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
      <input
        type="text"
        placeholder="Address"
        name="address"
        ref={register({ required: true })}
      />
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

      <input type="submit" />
    </form>
  );
}
