require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.jeanemmanuelrode.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jean Emmanuel Rode`,
        short_name: `J-E Rode`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.jeanemmanuelrode.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#FFFFFF',
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-netlify',
  ],
}
