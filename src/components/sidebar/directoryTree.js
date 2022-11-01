import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const SideBarContainer = styled.aside`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-right: solid 1px grey;
  padding: 0;
`

export default function DirectoryTree(data) {
  return (
    <SideBarContainer>
      <h4 className="blockquote">This is the sidebar</h4>
      <ul>
        <li>{console.log(data.allDataJson)}</li>
      </ul>
    </SideBarContainer>
  )
}

export const query = graphql`
  query MyQuery {
    allDataJson {
      nodes {
        color {
          blue_200 {
            value
            type
          }
        }
      }
    }
  }
`
