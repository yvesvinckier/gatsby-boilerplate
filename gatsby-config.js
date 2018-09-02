var cssnext = require('postcss-cssnext')
var cssreporter = require('postcss-reporter')
var config = require('./src/config')
require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.jeanemmanuelrode.com/`,
  },
  plugins: [
    // Turn on offline before deploy
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    'gatsby-transformer-remark',
    'gatsby-plugin-resolve-src',
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        data: '@import "~app.scss";',
        postCssPlugins: [
          cssnext({ browsers: ['last 2 versions', 'IE > 10'] }),
          cssreporter({ clearMessages: true }),
        ],
        precision: 5, // SASS default: 5
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
