import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const pubCode = "mysph"
const colorMode = "standard"

const Main = styled.main`
  padding: 0;
`

export default function Home() {
  return (
    <Layout>
      <Main className={`${pubCode} theme--${pubCode}-${colorMode}`}>
        <div className="center-view">
          <div className="view-container">
            <h1 className="display-title">
              SPH Commerce Design System Manager
            </h1>
            <p className="subtitle">Proof of concept Demo</p>
          </div>
        </div>
      </Main>
    </Layout>
  )
}
