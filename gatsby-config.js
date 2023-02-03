/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `A Design System Manager POC`,
    siteUrl: `https://dmp.sph.com.sg/dsm_poc/`,
    description: `A proof of concept for DSM`,
  },
  pathPrefix: `/dsm_poc`,
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/tokens`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
  ],
}
