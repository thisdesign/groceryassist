import React, { useEffect, useState } from "react"
import { NextPage } from "next"
import { Item } from "types"
import Router from "next/router"
import cookie from "cookie"

const Capture: NextPage<{ data: any }> = ({ data }) => {
  console.log(data)

  return (
    <div>
      {data ? (
        <div>
          {data.items.map(item => (
            <div>{item.text}</div>
          ))}
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  )
}

Capture.getInitialProps = async ({ req }) => {
  const cookies = cookie.parse(req ? req.headers.cookie : document.cookie)
  const data = JSON.parse(cookies._grocery_items)

  return { data }
}

export default Capture
