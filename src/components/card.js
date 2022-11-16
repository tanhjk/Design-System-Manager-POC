import React from "react"

const pubCode = "mysph"
const colorMode = "standard"

export default function Card({ data, children }) {
  console.log(children, data)
  return (
    <div className={`card ${pubCode} theme--${pubCode}-${colorMode}`} id={data}>
      <div className="card-wrapper"> {children}</div>
    </div>
  )
}
