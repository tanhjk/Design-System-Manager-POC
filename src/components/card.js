import React from "react"

const pubCode = "mysph"
const colorMode = "standard"

export default function Card({ children }) {
  return (
    <div className={`card ${pubCode} theme--${pubCode}-${colorMode}`}>
      <div className="wrapper">
        <h3 className="screen-title ">{children}</h3>
      </div>
    </div>
  )
}
