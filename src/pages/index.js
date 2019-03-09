import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

import BgImg from '../components/background'
import SEO from '../components/seo'

const IntroHome = styled.div`
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    top: 0;
    position: fixed;
  }

  width: 100%;
  div {
    max-height: 750px;
  }
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  h5 {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 100%;
    line-height: 2.2em;
    text-align: center;
    font-weight: 700;
    font-size: 0.7em;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    &::first-line {
      font-size: 1.5em;
      font-weight: 700;
    }
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      top: 60%;
      font-size: 0.8em;
      &::first-line {
        font-size: 1.5em;
      }
    }
  }
`

const Page = styled.div`
  z-index: 2;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    position: relative;
    &::before {
      content: '';
      display: block;
      z-index: -2;
      width: 0;
      height: 65vh;
      max-height: 750px;
      background: transparent;
    }
  }
  h1 {
    background: ${props => props.theme.colors.white};
    display: flex;
    font-size: 0.8em;
    font-weight: 500;
    flex-flow: row wrap;
    justify-content: center;
    letter-spacing: 0.1em;
    color: ${props => props.theme.colors.grey};
    padding-bottom: 3em;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 0.9em;
    }
  }
`

const Quote = styled.div`
  padding: 4em 2em 4em;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background: ${props => props.theme.colors.white};
  p {
    letter-spacing: 0.025em;
    padding: 0;
    border: 0;
    font-size: 16px;
    color: ${props => props.theme.colors.base};
    margin: 0 auto;
    font-weight: 300;
    max-width: 710px;
    line-height: 1.75;
    text-align: justify;
    strong {
      font-weight: 800;
    }
  }
  h3 {
    color: ${props => props.theme.colors.base};
    font-weight: 500;
    letter-spacing: 0.05em;
    line-height: 1.3;
    font-size: 2em;
    width: 100%;
    margin-bottom: 1em;
    text-align: center;
  }
`

const WhiteBackgroung = styled.div`
  position: relative;
  background: #fff;
  width: 100%;
  padding-bottom: 60px;
`

const HomeList = styled.ul`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto 2em;
  padding: 2em 1em 4em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  .gatsby-image-wrapper {
    margin: 1em 1em 1em 1em;
    height: 500px;
  }
  li {
    div {
      transition: transform 0.5s;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }

    position: relative;
    flex: 0 0 49.45%;
    margin: 0.5vw 0;
    &:hover {
      div {
        transform: scale(0.98);
      }
    }
  }
  h2 {
    padding-top: 18px;
    font-weight: 500;
    text-align: center;
    line-height: 1.2;
    letter-spacing: 0.02em;
    font-size: 20px;
    color: ${props => props.theme.colors.base};
  }
  h4 {
    font-size: 12px;
    color: ${props => props.theme.colors.grey};
    font-weight: 300;
    line-height: 1.46667;
    letter-spacing: 0.05em;
    text-align: center;
    padding-bottom: 65px;
  }
`

const IndexPage = ({ data }) => {
  const posts = data.allContentfulGallery.edges
  const page = data.contentfulHome

  return (
    <>
      <Helmet>
        <meta
          name="google-site-verification"
          content="3_QVQNywYcGd65HQI0H3kfQ-aYAcApOU3de4I4cEwK4"
        />
      </Helmet>
      <SEO />
      <IntroHome>
        <h5>
          Jean-Emmanuel Rode <br /> — Photographe —
        </h5>
        <BgImg
          height={'75vh'}
          fluid={page.cover.fluid}
          alt={page.cover.title}
          title={page.cover.title}
        />
      </IntroHome>
      <Page>
        <Quote
          dangerouslySetInnerHTML={{
            __html: page.quote.childMarkdownRemark.html,
          }}
        />
        <h1>– Jean Emmanuel Rode, Photographe à Lille –</h1>
        <WhiteBackgroung>
          <HomeList>
            {posts.map(({ node: post }) => (
              <li key={post.id}>
                <Link to={`/${post.slug}/`}>
                  <Img
                    fluid={post.cover.fluid}
                    alt={post.cover.title}
                    title={post.cover.title}
                    backgroundColor={'#f1f1f1'}
                  />
                  <h2>{post.title}</h2>
                  <h4>{post.author.name}</h4>
                </Link>
              </li>
            ))}
          </HomeList>
        </WhiteBackgroung>
      </Page>
    </>
  )
}

export const query = graphql`
  query {
    allContentfulGallery(limit: 1000, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          slug
          title
          cover {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          author {
            name
          }
        }
      }
    }
    contentfulHome {
      cover {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
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
