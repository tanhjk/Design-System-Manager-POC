import React from "react"
import { Link } from "gatsby"
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
              <Link to="/" className="emphasis-text">
                Home
              </Link>
            </li>
            <li>
              <Link to="/identities/" className="emphasis-text">
                Documentations
              </Link>
            </li>
            <li>
              <Link to="/color-tokens/" className="emphasis-text">
                Download
              </Link>
            </li>
            <li>
              <Link to="/type-tokens/" className="emphasis-text">
                SPH Design
              </Link>
            </li>
          </ul>
        </HeaderBar>
      </div>
    </div>
  )
}
