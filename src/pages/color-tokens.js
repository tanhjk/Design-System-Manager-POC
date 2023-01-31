import React from "react"
import Layout from "../components/layout"
import TokenColor from "../components/tokenColor"
import DirectoryTree from "../components/sidebar/directoryTree"
import CT from "../../tokens/colorTokens-light.json"
import Identities from "../../tokens/identities.json"

export default function ColorTokens({ children }) {
  const colors = CT.colorTokens.mysph.light

  function refColor(rC, obj) {
    const lastVal = rC.split(".").at(-1)
    const cat = rC.split(".").at(-2)
    const zoneObj = obj[cat][lastVal]
    return zoneObj.value
  }
  return (
    <Layout>
      <div className="col-sm-3 col-md-2">
        <DirectoryTree link="color" />
      </div>
      <div className="col-sm-9 col-md-10">
        <h1>Color Tokens</h1>
        <p className="body-text">
          Color tokens are used to define the use of the color based on the
          function of the token
        </p>
        <hr></hr>

        <div className="section">
          {Object.keys(colors).map((ckey, index) => {
            const colorKey = colors[ckey]
            const colorVal = colorKey.value.slice(1, -1)

            return (
              <TokenColor
                colorNm={ckey}
                colorValue={refColor(colorVal, Identities.color)}
              ></TokenColor>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
