import React from "react"
import Logo from "../images/LUNA-hori-white@2x.png"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { withPrefix } from "gatsby"

export default function Header() {
  const pathPre = withPrefix("/")

  return (
    <header>
      <AniLink fade duration={0.5} to="/" className="emphasis-text">
        <img src={Logo} className="logo" alt="sph logo" />
      </AniLink>
      <ul className="main-menu">
        <li>
          <AniLink
            fade
            duration={0.5}
            to="/identities"
            className="emphasis-text"
          >
            Documentation
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
    </header>
  )
}
