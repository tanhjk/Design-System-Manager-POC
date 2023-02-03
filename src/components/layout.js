import React from "react"
import "../scss/style.scss"
import { Helmet } from "react-helmet"
import Header from "./header"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
`

export default function Home({ children }) {
  return (
    <div className="page">
      <Helmet>
        <title>Luna : Commerce Design System Manager (POC)</title>
      </Helmet>
      <Header />
      <Container className="fluid-container page-content">
        <div className="row">{children}</div>
      </Container>
    </div>
  )
}
