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
      <div className="token-detail">
        <p className="button">${colorNm}</p>
        <p className="body-text">Hex: {colorValue}</p>
      </div>
    </div>
  )
}
