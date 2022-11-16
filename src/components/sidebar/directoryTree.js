import React from "react"
import styled from "styled-components"
import Identities from "../../../tokens/identities.json"
import SectionHeader from "./sectionHeader"

const SideBarContainer = styled.aside`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-right: solid 1px grey;
  padding: 0;
`
export default function DirectoryTree({ children }) {
  const colors = Identities.color
  return (
    <SideBarContainer>
      {Object.keys(colors).map(key => {
        return (
          <div>
            <SectionHeader title={key}></SectionHeader>
          </div>
        )
      })}
    </SideBarContainer>
  )
}
