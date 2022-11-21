import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const SideBarContainer = styled.aside`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-right: solid 1px grey;
  padding: 0;
`
export default function DirectoryTree({ children }) {
  return (
    <SideBarContainer>
      <ul className="sidebar-menu">
        <li>
          <Link to="/identities/" className="emphasis-text">
            Identities
          </Link>
        </li>

        <li>
          <Link to="/color-tokens/" className="emphasis-text">
            Color Tokens
          </Link>
        </li>
        <li>
          <Link to="/type-tokens/" className="emphasis-text">
            Type Tokens
          </Link>
        </li>
      </ul>
    </SideBarContainer>
  )
}
