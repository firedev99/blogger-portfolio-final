module.exports = {
  siteMetadata: {
    title: `A Soothing yet powerful designed website`,
    description: `A Soothing yet powerful designed website || blogger-portfolio`,
    author: `@firedev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Advent Pro`,
            subsets: [`latin`],
            variants: [`400, 600, 700`]
          },
          {
            family: `Orbitron`,
            subset: [`latin`],
            variants: [`400, 600, 700`]
          },
          {
            family: `Bebas Neue`,
            subset: [`latin`],
            variants: [`400, 600, 700`]
          },
          {
            family: `Fredericka the Great`,
            subset: [`latin`],
            variants: [`400, 600, 700`]
          },
          {
            family: `Odibee Sans`,
            subset: [`latin`],
            variants: [`400, 600, 700`]
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
