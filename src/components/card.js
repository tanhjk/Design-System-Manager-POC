import React from "react"

export default function Card({ children }) {
  return (
    <div className="card">
      <h1 className="tt-screen-title">{children}</h1>
    </div>
  )
}
