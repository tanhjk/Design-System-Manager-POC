import React from "react"
import Layout from "../components/layout"
import TypeTokens from "../../tokens/typeTokens.json"
import TokenType from "../components/tokenType"

export default function typeTokens({ data }) {
  const ttTokens = TypeTokens.tt.mysph

  return (
    <Layout>
      <main>
        <h1>Type Tokens</h1>
        <hr></hr>

        <div className="section">
          {Object.keys(ttTokens).map(tkey => {
            const typeVal = ttTokens[tkey].value

            console.log(typeVal)
            // const typeVal = typeKey.value.slice(1, -1)

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
