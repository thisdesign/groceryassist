import "isomorphic-unfetch"
import {
  OrderDb,
  OrderRes,
  Order,
  Coords,
  LocationRes,
  NewUserReq
} from "./types"

const isDev = process.env.NODE_ENV !== "production"
const apiRoute = isDev
  ? "http://localhost:3000/api"
  : "https://covid-grocery.herokuapp.com/api"

/**
 * list order by id
 */

export const getOrderById = async (id: string): Promise<OrderDb> =>
  fetch(`${apiRoute}/orders/${id}`).then(res => res.json())

/**
 * List Orders
 */

export const getOrders = (): Promise<OrderRes> =>
  fetch(`${apiRoute}/orders/open`).then(res => res.json())

/**
 * Add Order
 */

export const addOrder = async (order: Order) => {
  return new Promise((resolve, reject) => {
    return fetch(`${apiRoute}/orders`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          resolve(res)
        }
        reject(res)
      })
  })
}

export const completeOrder = (id: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    return fetch(`${apiRoute}/orders/${id}/complete`, {
      method: "PUT"
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          resolve(res)
        }
        reject(res)
      })
  })
}

/**
 * Locations
 */

const geocode = async (qs: string): Promise<LocationRes> => {
  const url = ` ${apiRoute}/location/?${qs}}`
  return fetch(url).then(res => res.json())
}

export const getLocationByCoords = async (coords: Coords) =>
  geocode(`latlng=${coords.join(",")}`)

export const getLocationByAddress = async (a: string) => geocode(`address=${a}`)

/**
 * Suggest
 */

export const fetchPredictions = (input: string) => {
  return fetch(`${apiRoute}/location/predictions?input=${input}`)
    .then(res => res.json())
    .catch(err => console.log(err))
}

/**
 * Users
 */

export const createUser = async (inputData: NewUserReq) => {
  return new Promise((resolve, reject) => {
    fetch(`${apiRoute}/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputData)
    })
      .then(res => res.json())
      .then(apiRes => {
        console.log(apiRes)
        resolve(apiRes)

        // resolve(response)
      })
  })
}
