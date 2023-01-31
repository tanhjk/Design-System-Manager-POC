const React = require("react")
const Layout = require("./src/components/layout")

const pubCode = "mysph"
const colorMode = "light"

// Adds a class name to the body element
exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
  setBodyAttributes({
    className: `${pubCode} theme--${pubCode}-${colorMode}`,
  })
}

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
