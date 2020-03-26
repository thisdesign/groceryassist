import React, { useState } from "react"
// import { useForm } from "react-hook-form"
// import Router from "next/router"
import { GetServerSideProps, NextPage } from "next"
import router from "next/router"
import Cookie from "js-cookie"
import { PhoneCapture } from "../../components"

const App: NextPage<{ phone: string | null }> = ({ phone }) => {
  return (
    <>
      {phone ? (
        <div>{phone}</div>
      ) : (
        <PhoneCapture
          onNext={num => {
            router.push(`/new?p=${num}`)
          }}
        />
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const phone = query.p ? query.p.toString() : null
  return { props: { phone } }
}

export default App
