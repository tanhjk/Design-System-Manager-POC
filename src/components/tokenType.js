import React from "react"
import Identities from "../../tokens/identities.json"

const pubCode = "mysph"
const colorMode = "standard"

export default function tokenType({ TypeNm, fontStyles, objLib }) {
  const kebabize = str => {
    return str
      .split("")
      .map((letter, idx) => {
        return letter.toUpperCase() === letter
          ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
          : letter
      })
      .join("")
  }
  function refType(rC, obj) {
    const valueArr = rC.split(".")

    console.log(rC)
    var objVal = ""

    switch (valueArr.length) {
      case 1:
        console.log("1")
        break
      case 2:
        console.log("2")
        break
      case 3:
        console.log("3")
        const zoneObj = obj[valueArr[0]][valueArr[1]][valueArr[2]]
        objVal = zoneObj.value
        break
      case 4:
        console.log("4")
        break
    }

    return objVal
  }
  return (
    <div className={`type-type  ${pubCode} theme--${pubCode}-${colorMode}`}>
      <p className={TypeNm}>${TypeNm}</p>
      <div className="type-fontstyle">
        {Object.keys(fontStyles).map(style => {
          let styleValue = fontStyles[style]
          styleValue = styleValue.slice(1, -1)
          if (styleValue != "") {
            return (
              <div className="stylesheet">
                <div className="sheet-item">
                  <p>
                    {kebabize(style.replace("textCase", "textTransform"))} :{" "}
                  </p>
                </div>
                <div className="sheet-item">
                  <p> {refType(styleValue, Identities)}</p>
                  {/* <p> {styleValue}</p> */}
                </div>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
