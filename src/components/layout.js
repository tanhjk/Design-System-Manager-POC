import React from "react"
import Header from "./header"
import DirectoryTree from "./sidebar/directoryTree"
import styled from "styled-components"
import "../scss/style.scss"

const Page = styled.div`
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`
const Children = styled.main`
  width: 80%;
  display: inline-block;
`
const pubCode = "mysph"
const colorMode = "standard"

export default function Home({ children }) {
  return (
    <Page className={`${pubCode} theme--${pubCode}-${colorMode}`}>
      <Header />
      <Container>
        <DirectoryTree />
        <Children>{children}</Children>
      </Container>
    </Page>
  )
}
