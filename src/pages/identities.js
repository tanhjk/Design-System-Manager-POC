import React from "react"
import Layout from "../components/layout"
import Identities from "../../tokens/identities.json"
import TokenColor from "../components/tokenColor"
import DirectoryTree from "../components/sidebar/directoryTree"

export default function identities({ children }) {
  const colors = Identities.color
  return (
    <Layout>
      <div className="col-sm-3 col-md-2">
        <DirectoryTree link="identity" />
      </div>
      <div className="col-sm-9 col-md-10">
        <h1 className="display-title">Identity Tokens</h1>
        <p className="body-text">
          Identities tokens are tokens that are declared to define the
          fundamental design elements such as colours, font types, unit of
          measurement.
        </p>
        <hr></hr>
        {Object.keys(colors).map((ckey, index) => {
          const colorKey = colors[ckey]
          return (
            <div className="section">
              <h3 className="screen-title sentence">{ckey}</h3>
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
      </div>
    </Layout>
  )
}
