import React from "react"
import Layout from "../components/layout-full-width"
import styled from "styled-components"
import Card from "../components/card"

const Main = styled.main`
  padding: 0 2rem;
`

export default function Home() {
  return (
    <Layout>
      <Main>
        <div class="center-view">
          <div class="view-container">
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
