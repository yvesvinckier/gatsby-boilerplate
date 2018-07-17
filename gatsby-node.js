// const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  // Create Post Pages based on post.js template
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
    {
      allContentfulGallery {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `).then(result => {
      result.data.allContentfulGallery.edges.map(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: node.slug,
          },
        })
      })

      resolve()
    })
  })
}

function shim(name) {
  return path.resolve(__dirname, 'config', 'shims', name)
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      alias: {
        analytics: shim('analytics'),
        assetInserter: shim('assetInserter'),
        TweenLite: 'gsap',
        scrollmagic: shim('scrollmagic'),
        ScrollMagic: shim('scrollmagic'),
      },
    },
  })

  return config
}

exports.modifyBabelrc = ({ babelrc }) => (
  Object.assign(
    babelrc,
    {
      plugins: babelrc.plugins.concat(
        ['transform-decorators-legacy', 'transform-regenerator']
      ),
    }
  )
)
