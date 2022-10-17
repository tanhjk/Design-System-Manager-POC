import React from "react"
import styled from "styled-components"

const Headline = styled.h4`
  font-size: 1.5rem;
  color: purple;
`

const SideBarContainer = styled.aside`
  display: inline-block;
  width: 20%;
  height: 100%;
  float: left;
  color: purple;
  border-right: solid 1px grey;
  padding: 0 2rem;
`

export default function DirectoryTree() {
  return (
    <SideBarContainer>
      <Headline>This is the sidebar</Headline>
    </SideBarContainer>
  )
}
