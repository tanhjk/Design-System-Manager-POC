import React from "react"
import Layout from "../components/layout"
import TT from "../../tokens/typeTokens.json"
import TokenType from "../components/tokenType"

export default function TypeTokens({ children }) {
  const ttTokens = TT.tt.mysph

  return (
    <Layout>
      <main>
        <h1>Type Tokens</h1>
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
      </main>
    </Layout>
  )
}
