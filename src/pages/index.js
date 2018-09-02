import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import BgImg from '../components/background'
// import logo from '../images/logo.svg'
import Helmet from 'react-helmet'

const IndexPage = ({ data }) => {
  const posts = data.allContentfulGallery.edges
  const page = data.contentfulHome

  return (
    <div>
      <Helmet>
        <title>
          JEAN EMMANUEL RODE - Photographe culinaire, nature morte, décoration, institutionnel et événementiel à
          Lille
        </title>
        <meta name="google-site-verification" content="3_QVQNywYcGd65HQI0H3kfQ-aYAcApOU3de4I4cEwK4" />
        <meta
          name='description'
          content='Jean Emmanuel RODE - Photographe à Lille spécialisé en culinaire, nature morte, décoration, institutionnel et événementiel.'
        />
        <meta
          property='og:title'
          content='JEAN EMMANUEL RODE - Photographe culinaire, nature morte, décoration, institutionnel et événementiel à Lille.'
        />
        <meta property='og:image' content={page.cover.sizes.src} />
        <meta property='og:image:width' content='1920' />
        <meta property='og:image:height' content='1200' />
      </Helmet>

      <div className='intro intro--home sticky'>
        <h1>
          Jean-Emmanuel Rode <br /> — Photographe —
        </h1>
        <BgImg
          height={'75vh'}
          sizes={page.cover.sizes}
          alt={page.cover.title}
          title={page.cover.title}
        />
      </div>
      <div className='page'>
        <div
          className='quote'
          dangerouslySetInnerHTML={{
            __html: page.quote.childMarkdownRemark.html,
          }}
        />
        <div className='white--bcg'>
          <ul className='home-list'>
            {posts.map(({ node: post }) => (
              <li key={post.id} className=''>
                <Link to={post.slug + '/'}>
                  <Img
                    className=''
                    sizes={post.cover.sizes}
                    alt={post.cover.title}
                    title={post.cover.title}
                    backgroundColor={'#f1f1f1'}
                  />
                  {/* <h3>View Gallery</h3> */}

                  <h2>{post.title}</h2>
                  <h4>{post.author.name}</h4>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query HomeQuery {
    allContentfulGallery(
      filter: { node_locale: { eq: "fr-FR" } }
      limit: 15
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          title
          title2
          id
          slug
          date(formatString: "M.DD.YYYY")
          cover {
            title
            sizes(maxWidth: 1920) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
          author {
            name
            authorSlug
          }
        }
      }
    }
    contentfulHome {
      title
      slug
      id
      cover {
        title
        sizes(maxWidth: 1920) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      quote {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default IndexPage
