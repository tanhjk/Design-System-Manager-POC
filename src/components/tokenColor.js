import React from "react"

const pubCode = "mysph"
const colorMode = "standard"

export default function tokenColor({ colorNm, colorValue }) {
  return (
    <div
      className={`color-type  ${colorNm} ${pubCode} theme--${pubCode}-${colorMode}`}
    >
      <div
        className="color-chip"
        style={{
          backgroundColor: colorValue,
        }}
      ></div>
      <p className="emphasis-text">${colorNm}</p>
      <p className="body-text">{colorValue}</p>
    </div>
  )
}
