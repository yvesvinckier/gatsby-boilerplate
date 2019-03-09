import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import {
  CategoryNavigation,
  CategoryNavigationLinks,
  GalleriesList,
} from '../styles/galeries.style'

import SEO from '../components/seo'

class Galleries extends React.Component {
  render() {
    const posts = this.props.data.allContentfulGallery.edges
    return (
      <>
        <SEO
          title="Les Galeries photographiques"
          description="Toutes les galeries de Jean Emmanuel Rode."
        />
        <CategoryNavigation>
          <h1>Galeries</h1>
          <CategoryNavigationLinks>
            <li>
              <Link to="/galeries/" className="active">
                All
              </Link>
            </li>
            <li>
              <Link to="/culinaire-sucre/">Culinaire sucré</Link>
            </li>
            <li>
              <Link to="/culinaire-sale/">Culinaire salé</Link>
            </li>
            <li>
              <Link to="/nature-morte-deco/">Nature Morte | Déco</Link>
            </li>
            <li>
              <Link to="/spectacle/">Spectacle</Link>
            </li>
            <li>
              <Link to="/metiers/">Métiers</Link>
            </li>
            <li>
              <Link to="/institutionnel/">Institutionnel</Link>
            </li>
          </CategoryNavigationLinks>
        </CategoryNavigation>

        <GalleriesList>
          {posts.map(({ node: post, index }) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <Link to={'/' + post.slug + '/'}>
                {post.images &&
                  post.images.map((images, index) => (
                    <div key={index} className="thumbnail-images">
                      <Img fluid={post.images[index].fluid} />
                      <h3>view gallery</h3>
                    </div>
                  ))}
              </Link>
            </li>
          ))}
        </GalleriesList>
      </>
    )
  }
}

export const query = graphql`
  query {
    allContentfulGallery(
      filter: { node_locale: { eq: "fr-FR" } }
      limit: 100
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          date
          images {
            title
            description
            fluid(maxWidth: 400) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          cover {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

export default Galleries
