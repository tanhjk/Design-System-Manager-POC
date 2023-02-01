import React from "react"
import Layout from "../components/layout-full-width"
import HeroImg from "../images/graphic-1.svg"

export default function Home() {
  return (
    <Layout>
      <div className="center-view">
        <div className="view-container">
          <div className="hero-image">
            <img src={HeroImg} alt="Hero graphic" />
          </div>
          <div className="hero-title">
            <h1 className="display-title">This is Luna.</h1>
            <p className="subtitle">
              Our mission is to helps designers and developers
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
