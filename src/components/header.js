import React from "react"
import Logo from "../images/sph-rbg.png"
import styled from "styled-components"
import { graphql } from "gatsby"

const HeaderBar = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 2rem 2rem;
`
const Title = styled.header`
  width: 100%;
  display: block;
  padding: 0;
`
const LogoStyle = styled.img`
  width: 50px;
  height: auto;
  margin-right: 1rem;
`

export default function Header(data) {
  return (
    <div className="fluid-container">
      <div className="row">
        <HeaderBar className="col-12">
          <LogoStyle src={Logo} className="logo" alt="sph logo" />
          <Title>
            <h1 className="highlightText screen-title">
              {data.site.siteMetadata.description}
            </h1>
            <p className="subtitle">{data.site.siteMetadata.description}</p>
          </Title>
        </HeaderBar>
      </div>
    </div>
  )
}

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`
