import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Card from "../components/card"

const Main = styled.main`
  padding: 0 2rem;
`

export default function Home() {
  return (
    <Layout>
      <Main>
        <h1>Colors</h1>
        <Card>This is a inner card</Card>
      </Main>
    </Layout>
  )
}
