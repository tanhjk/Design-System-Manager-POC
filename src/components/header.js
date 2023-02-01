import React from "react"
import Logo from "../images/LUNA-hori-white@2x.png"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Header() {
  return (
    <header>
      <img src={Logo} className="logo" alt="sph logo" />
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
            to="/identities"
            className="emphasis-text"
          >
            Documentations
          </AniLink>
        </li>
        <li>
          <AniLink fade duration={0.5} to="/#" className="emphasis-text">
            Download
          </AniLink>
        </li>
        <li>
          <AniLink fade duration={0.5} to="/#" className="emphasis-text">
            SPH Design
          </AniLink>
        </li>
      </ul>
    </header>
  )
}
