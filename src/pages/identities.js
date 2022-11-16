import React from "react"
import Layout from "../components/layout"
import Identities from "../../tokens/identities.json"
import TokenColor from "../components/tokenColor"

export default function identities({ children }) {
  const colors = Identities.color
  return (
    <Layout>
      <main>
        <h1>Colors</h1>
        <hr></hr>
        {Object.keys(colors).map((ckey, index) => {
          const colorKey = colors[ckey]
          return (
            <div className="section">
              <h3 className="screen-title">{ckey}</h3>
              {Object.keys(colorKey).map((colorNm, index) => {
                const colorValue = colorKey[colorNm].value
                console.log(colorValue)
                return (
                  <TokenColor
                    colorNm={colorNm}
                    colorValue={colorValue}
                  ></TokenColor>
                )
              })}
            </div>
          )
        })}
      </main>
    </Layout>
  )
}
