import React from "react"
import Layout from "../components/layout"
import Identities from "../../tokens/identities.json"
import TokenColor from "../components/tokenColor"
import DirectoryTree from "../components/sidebar/directoryTree"

export default function identities({ children }) {
  const colors = Identities.color
  const gradients = Identities.gradients
  const spacings = Identities.spacing
  const size = Identities.size
  const fonts = Identities.type

  // const copyVal = txt => {
  //   console.log(txt)
  //   alert("copied")
  //   // navigator.clipboard.writeText(txt)
  // }
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

        <section>
          <h4 className="section-title">Colours</h4>
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
                      tokenNm={colorValue}
                      colorNm={colorNm}
                      colorValue={colorValue}
                    ></TokenColor>
                  )
                })}
              </div>
            )
          })}
        </section>
        <section>
          <h4 className="section-title">Gradients</h4>
          {Object.keys(gradients).map((gkey, index) => {
            const gradientValue = gradients[gkey].value
            return (
              <div className="section">
                <TokenColor
                  type="grad"
                  colorNm={gkey}
                  colorValue={gradientValue}
                ></TokenColor>
              </div>
            )
          })}
        </section>
        <section>
          <h4 className="section-title">Spacing</h4>
          <div className="grid-table">
            <div className="table-head">
              <div class="header-label">Token</div>
              <div class="header-value">Value</div>
            </div>
            {Object.keys(spacings).map((gkey, index) => {
              const gradientValue = spacings[gkey].value
              return (
                <div className="table-body">
                  <div class="header-label"> {gkey}</div>
                  <div class="header-value"> {gradientValue}</div>
                </div>
              )
            })}
          </div>
        </section>
        <section>
          <h4 className="section-title">Size</h4>

          {Object.keys(size).map((gkey, index) => {
            const sizeValue = size[gkey]
            return (
              <div className="section sub">
                <h3 className="screen-title sentence">{gkey}</h3>
                <div className="grid-table">
                  <div className="table-head">
                    <div class="header-label">Token</div>
                    <div class="header-value">Value</div>
                  </div>
                  {Object.keys(sizeValue).map((colorNm, index) => {
                    const colorValue = sizeValue[colorNm].value

                    return (
                      <div className="table-body">
                        <div class="header-label"> {colorNm}</div>
                        <div class="header-value"> {colorValue}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </section>
        <section>
          <h4 className="section-title">Type</h4>

          {Object.keys(fonts).map((gkey, index) => {
            const fontsValue = fonts[gkey]
            return (
              <div className="section sub">
                <h3 className="screen-title sentence">{gkey}</h3>
                <div className="grid-table">
                  <div className="table-head">
                    <div class="header-label">Token</div>
                    <div class="header-value">Value</div>
                  </div>
                  {Object.keys(fontsValue).map((colorNm, index) => {
                    const colorValue = fontsValue[colorNm].value

                    return (
                      <div className="table-body">
                        <div class="header-label"> {colorNm}</div>
                        <div class="header-value"> {colorValue}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </section>
      </div>
    </Layout>
  )
}
