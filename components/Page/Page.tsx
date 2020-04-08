import React from "react"
import Head from "next/head"

const Page: React.FC<{ title: string | null }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | GroceryAssist` : "GroceryAssist"}</title>
      </Head>
      {children}
    </>
  )
}

export default Page
