import React from "react";
import { ORDERS } from "../constants";

const Create = () => {
  const data = {
    name: "tyler mcrobert",
    location: {
      address: "4022 n albina ave",
      city: "portland",
      state: "OR",
      zip: 97227
    },
    items: [
      {
        name: "carrots",
        quantity: 4
      }
    ]
  };

  const addProduct = () => {
    console.log("add prod");

    fetch("http://localhost:3000/api/createOrder", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Add Item</h1>
      <input type="field" placeholder="Item name" />
      <input type="number" placeholder="qty" />
      <button type="button">+ Add unit</button>
      <br />
      <button type="submit">Add Item</button>
      <hr />
      <br />
      <br />
      <br />
      {ORDERS[1].items.map(item => (
        <div>
          <h2>{item.name}</h2> - {item.count} + &nbsp;&nbsp;remove &nbsp;&nbsp;
          + add description
          <hr />
        </div>
      ))}
      <h1>
        <div onClick={addProduct}>Submit</div>
      </h1>
    </div>
  );
};

export default Create;
