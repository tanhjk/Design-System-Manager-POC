import React from "react"
import Logo from "../images/LUNA-hori-white@2x.png"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const HeaderBar = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-items: center;
  padding: 24px 24px;
  position: absolute;
  top: 0;
  left: 0;
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
        <HeaderBar className="col-12 darken">
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
              <AniLink fade duration={0.5} to="#" className="emphasis-text">
                Download
              </AniLink>
            </li>
            <li>
              <AniLink fade duration={0.5} to="#" className="emphasis-text">
                SPH Design
              </AniLink>
            </li>
          </ul>
        </HeaderBar>
      </div>
    </div>
  )
}
