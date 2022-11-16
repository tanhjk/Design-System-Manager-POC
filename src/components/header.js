import React from "react"
import { Link } from "gatsby"
import Logo from "../images/sph-rbg.png"
import styled from "styled-components"

const HeaderBar = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-items: center;
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
              A Design System Manager POC
            </h1>
            <p className="subtitle">A proof of concept for DSM</p>
          </Title>
          <ul className="main-menu">
            <li>
              <Link to="/" className="emphasis-text">
                Home
              </Link>
            </li>
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
        </HeaderBar>
      </div>
    </div>
  )
}
