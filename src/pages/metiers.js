import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import {
  CategoryNavigation,
  CategoryNavigationLinks,
  GalleriesList,
} from '../styles/galeries.style'

import SEO from '../components/seo'

class Metiers extends React.Component {
  render() {
    const posts = this.props.data.allContentfulGallery.edges
    return (
      <>
        <SEO
          title="Photographies métiers"
          description="Un geste parfait, de toute beauté, chaque métier possède ses propres gestes. Repérer les gestes des femmes et des hommes au travail (ephad, entrepôts, usines, restaurants, magasins, chantiers…), c’est ce qui raconte le mieux un métier."
          image={posts[0].node.cover}
        />
        <CategoryNavigation>
          <h1>Métiers</h1>
          <CategoryNavigationLinks>
            <li>
              <Link to="/galeries/">All</Link>
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
              <Link to="/metiers/" className="active">
                Métiers
              </Link>
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
      filter: {
        node_locale: { eq: "fr-FR" }
        category: { elemMatch: { name: { eq: "Métiers" } } }
      }
      limit: 1000
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          date
          category {
            name
            categorySlug
          }
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
            ogimg: resize(width: 1800) {
              src
              width
              height
            }
          }
        }
      }
    }
  }
`

export default Metiers
