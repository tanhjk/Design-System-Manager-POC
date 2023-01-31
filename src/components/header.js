import React from "react"
import Logo from "../images/LUNA-hori-white@2x.png"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const HeaderBar = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 2rem;
  position: absolute;
`
const LogoStyle = styled.img`
  width: auto;
  height: 48px;
  margin-right: 1rem;
`

export default function Header(data) {
  return (
    <div className="fluid-container">
      <div className="row">
        <HeaderBar className="col-12">
          <LogoStyle src={Logo} className="logo" alt="sph logo" />
          <ul className="main-menu">
            <li>
              <AniLink fade duration={0.5} to="/" className="emphasis-text">
                Home
              </AniLink>
            </li>
            <li>
              <AniLink
                fade
                duration={0.5}
                to="/identities/"
                className="emphasis-text"
              >
                Documentations
              </AniLink>
            </li>
            <li>
              <AniLink fade duration={0.5} to="/#/" className="emphasis-text">
                Download
              </AniLink>
            </li>
            <li>
              <AniLink fade duration={0.5} to="/#/" className="emphasis-text">
                SPH Design
              </AniLink>
            </li>
          </ul>
        </HeaderBar>
      </div>
    </div>
  )
}
