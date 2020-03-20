import React from "react";
import { ORDERS } from "../constants";

const Create = () => {
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
    </div>
  );
};

export default Create;
