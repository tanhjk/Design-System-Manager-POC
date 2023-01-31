import React from "react"
import Layout from "../components/layout"
import TT from "../../tokens/typeTokens.json"
import TokenType from "../components/tokenType"
import DirectoryTree from "../components/sidebar/directoryTree"

export default function TypeTokens({ children }) {
  const ttTokens = TT.tt.mysph

  return (
    <Layout>
      <div className="col-sm-3 col-md-2">
        <DirectoryTree link="type-tokens" />
      </div>
      <div className="col-sm-9 col-md-10">
        <h1>Type Tokens</h1>
        <p clasName="body-text">
          Color tokens are used to define text styles based on the function of
          the token. It usually stores a set a identity tokens or raw value of
          an attribute.
        </p>
        <hr></hr>

        <div className="section">
          {Object.keys(ttTokens).map(tkey => {
            const typeVal = ttTokens[tkey].value

            return (
              <TokenType
                TypeNm={tkey}
                fontStyles={typeVal}
                objLib={TypeTokens}
              ></TokenType>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
