import React from "react"
import "../scss/style.scss"
import Header from "./header"
import DirectoryTree from "./sidebar/directoryTree"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
`
const Children = styled.main`
  width: 100%;
  display: inline-block;
`

export default function Home({ children }) {
  return (
    <div className="page">
      <Header />
      <Container className="fluid-container">
        <div className="row">
          <div className="col-sm-3 col-md-2">
            <DirectoryTree />
          </div>
          <div className="col-sm-9 col-md-10">
            <Children>{children}</Children>
          </div>
        </div>
      </Container>
    </div>
  )
}
