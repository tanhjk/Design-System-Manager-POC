import React from "react"
import Header from "./header"
import "../scss/style.scss"
import { Helmet } from "react-helmet"

export default function Home({ children }) {
  return (
    <div>
      <Helmet>
        <title>Luna : Commerce Design System Manager (POC)</title>
      </Helmet>
      <Header />
      <div className="fluid-container page-content">
        <div className="container">
          <div className="row">
            <div className="col-12">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
