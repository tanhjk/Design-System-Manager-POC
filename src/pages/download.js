import React from "react"
import Layout from "../components/layout-fixed"

export default function Home() {
  return (
    <Layout>
      <div className="col-sm-3 col-md-2"></div>
      <div className="col-sm-9 col-md-10">
        <h1 className="display-title">Downloads</h1>
        <p className="subtitle">
          Download Luna to get the compiled CSS, source code, or include it with
          your favorite package managers like npm, and more.
        </p>

        <section>
          <h3 className="section-title">Source files </h3>
          <p className="subtitle">
            Compile Bootstrap with your own asset pipeline by downloading our
            source Sass, JavaScript, and documentation files. This option
            requires some additional tooling:
          </p>
          <a className="button" href={"../../dl/luna-v1.zip"}>
            Download
          </a>
        </section>
      </div>
    </Layout>
  )
}
