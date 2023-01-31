import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const SideBarContainer = styled.aside`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0;
`
export default function DirectoryTree({ link }) {
  return (
    <SideBarContainer>
      <ul className="sidebar-menu">
        <h4>Tokens</h4>
        <li>
          <AniLink
            paintDrip
            hex="#0a1451"
            duration={0.5}
            to="/identities/"
            className={
              link === "identity" ? "emphasis-text active" : "emphasis-text"
            }
          >
            Identity Tokens
          </AniLink>
        </li>

        <li>
          <AniLink
            paintDrip
            hex="#0a1451"
            duration={0.5}
            to="/color-tokens/"
            className={
              link === "color-tokens" ? "emphasis-text active" : "emphasis-text"
            }
          >
            Color Tokens
          </AniLink>
        </li>
        <li>
          <AniLink
            paintDrip
            hex="#0a1451"
            duration={0.5}
            to="/type-tokens/"
            className={
              link === "type-tokens" ? "emphasis-text active" : "emphasis-text"
            }
          >
            Type Tokens
          </AniLink>
        </li>
      </ul>
    </SideBarContainer>
  )
}
