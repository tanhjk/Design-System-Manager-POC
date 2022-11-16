import React from "react"

export default function sectionHeader(data) {
  return (
    <div className="section-header">
      {console.log(data)}
      <h1 className="blockquote core-text">{data.title}</h1>
    </div>
  )
}
