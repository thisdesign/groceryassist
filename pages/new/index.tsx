import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Router from "next/router"
import { GetServerSideProps, NextPage } from "next"
import { Item, LocationRes } from "../../types"
import { addOrder, getLocationByAddress } from "../../middleware"

const App: NextPage<{ location: LocationRes }> = ({ location }) => {
  const [items, setItems] = useState<Item[]>([])

  const addItem = (item: Item) => {
    setItems([...items, item])
  }

  if (!location) {
    return <div>Invalid location</div>
  }

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

          <br />
          <br />
          <hr />
          <br />

          <ContactForm items={items} location={location} />
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
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (query.a) {
    const address = query.a.toString()
    const location = await getLocationByAddress(address)
    return { props: { location } }
  }
  return { props: {} }
}

const ContactForm: React.FC<{ items: Item[]; location: LocationRes }> = ({
  items,
  location
}) => {
  const { register, handleSubmit } = useForm()

  const { address, city, state, zip } = location

  const onSubmit = data => {
    addOrder({
      user: {
        first: data.first,
        last: data.last,
        phone: "+1 (123) 456 7890"
      },
      location: {
        address,
        city,
        state,
        zip
      },
      items
    })
      .then(res => {
        Router.push("/new/success")
      })
      .catch(err => console.error(err))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {address}
      <br />
      {city}, {state} {zip}
      <br />
      <br />
      <input
        type="text"
        placeholder="First name"
        name="first"
        ref={register({ required: true, maxLength: 80 })}
      />
      <br />
      <input
        type="text"
        placeholder="Last name"
        name="last"
        ref={register({ required: true, maxLength: 100 })}
      />
      <br />
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
  )
}

const DEFAULT = {
  name: "",
  qty: 1
}

const AddItemForm: React.FC<{ addItem: (item: Item) => void }> = ({
  addItem
}) => {
  const [formData, setFormData] = useState<Item>(DEFAULT)

  const handleChange = (
    key: "name" | "qty",
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [key]: e.target.value })
  }

  const handleSubmit = () => {
    addItem(formData)
    setFormData(DEFAULT)
  }

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
  )
}

export default App
