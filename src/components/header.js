import React from "react"
<<<<<<< Updated upstream
import Logo from "../images/sph-rbg.png"
=======
import { Link } from "gatsby"
import Logo from "../images/LUNA-hori-white@2x.png"
>>>>>>> Stashed changes
import styled from "styled-components"
import gatsbyConfig from "../../gatsby-config"

const HeaderBar = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 2rem;
  position: absolute;
`
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
const LogoStyle = styled.img`
  width: auto;
  height: 48px;
  margin-right: 1rem;
`

export default function Header() {
  return (
<<<<<<< Updated upstream
    <HeaderBar>
      <LogoStyle src={Logo} className="logo" alt="sph logo" />
      <h1 className="highlightText screen-title">
        {gatsbyConfig.siteMetadata.title} |{" "}
        {gatsbyConfig.siteMetadata.description}
      </h1>
    </HeaderBar>
=======
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
>>>>>>> Stashed changes
  )
}
