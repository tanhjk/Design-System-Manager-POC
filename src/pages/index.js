import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const Main = styled.main`
  padding: 0 2rem;
`

export default function Home() {
  return (
    <Layout>
      <Main>
        <h1>Index page</h1>
        <p>Welcome to my demo of gatsby Documentation Pages.</p>
      </Main>
    </Layout>
  )
}
