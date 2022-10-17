import React from "react"
import Logo from "../images/sph-rbg.png"
import styled from "styled-components"
import gatsbyConfig from "../../gatsby-config"

const HeaderBar = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 2rem;
`
const LogoStyle = styled.img`
  width: 50px;
  height: auto;
  margin-right: 1rem;
`

export default function Header() {
  return (
    <HeaderBar>
      <LogoStyle src={Logo} className="logo" alt="sph logo" />
      <h1 className="highlightText screen-title">
        {gatsbyConfig.siteMetadata.title} |{" "}
        {gatsbyConfig.siteMetadata.description}
      </h1>
    </HeaderBar>
  )
}
