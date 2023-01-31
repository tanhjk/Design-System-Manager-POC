import React from "react"
import "../scss/style.scss"
import Header from "./header"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
`

export default function Home({ children }) {
  return (
    <div className="page">
      <Header />
      <Container className="fluid-container page-content">
        <div className="row">{children}</div>
      </Container>
    </div>
  )
}
