import React from "react"
const pubCode = "mysph"
const colorMode = "standard"

export default function tokenColor({ type, colorNm, colorValue, tokenNm }) {
  return (
    <div
      className={`color-type  ${colorNm} ${pubCode} theme--${pubCode}-${colorMode}`}
    >
      {type === "grad" ? (
        <div
          className="color-chip g"
          style={{
            backgroundImage: colorValue,
          }}
        ></div>
      ) : (
        <div
          className="color-chip"
          style={{
            backgroundColor: colorValue,
          }}
        ></div>
      )}
      <div className="token-detail">
        <p className="button">${colorNm}</p>
        <p className="body-text">{tokenNm}</p>
      </div>
    </div>
  )
}
