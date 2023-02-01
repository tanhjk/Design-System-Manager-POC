import React from "react"
import Header from "./header"
import "../scss/style.scss"
export default function Home({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}
