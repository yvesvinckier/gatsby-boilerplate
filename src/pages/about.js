import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

const BlackBackgroung = styled.div`
  position: relative;
  width: 100%;
  background: ${props => props.theme.colors.base};
`

const GridAbout = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 1em;
  max-width: 500px;
  color: #fff;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 2em;
  }
  h1 {
    font-size: 45px;
    padding-top: 70px;
    letter-spacing: 1px;
    font-weight: 200;
    margin: 0 0 2rem 0;
  }
  h3 {
    text-transform: uppercase;
    letter-spacing: 6px;
    font-size: 11px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 80px;
  }
`

const WhiteCricleAbout = styled.svg`
  stroke: ${props => props.theme.colors.white};
  height: 4rem;
  width: 4rem;
  stroke-width: 7;
  fill: none;
`

const SmallLine = styled.div`
  width: 20px;
  height: 1px;
  background: ${props => props.theme.colors.white};
  border: none;
  margin: 40px auto;
`

const Bio = styled.div`
  padding: 0 1em;
  margin: 2em auto;

  p {
    font-weight: 400;
    letter-spacing: 0.5px;
    font-size: 13px;
    line-height: 23px;
    color: #fff;
    margin: 0 0 2em 0;
    text-align: justify;
  }
`

const AboutPage = ({ data }) => {
  // add aboutImages in curly braces
  const { bio } = data.contentfulAbout

  return (
    <>
      <SEO
        title="À propos de"
        description="Quand on choisit le métier de photographe, ce n’est pas forcement par hasard. On préfère être derrière que devant, montrer plutôt qu’être vu, être celui qui est dans le noir pour mettre son sujet en lumière. C’est donc avec la seule ambition de « faire du beau » que je me lève le matin."
        // image={aboutImages[0]}
      />
      <BlackBackgroung>
        <GridAbout>
          <h3>about</h3>
          <WhiteCricleAbout x="0px" y="0px" viewBox="0 0 45 45">
            <circle className="path" cx="22.5" cy="22.5" r="18.5" />
          </WhiteCricleAbout>
          <h1>
            Jean-Emmanuel <br />
            Rode
          </h1>
          <SmallLine />
          <Bio
            dangerouslySetInnerHTML={{ __html: bio.childMarkdownRemark.html }}
          />
          <SmallLine />
        </GridAbout>
      </BlackBackgroung>
    </>
  )
}

export const query = graphql`
  query {
    contentfulAbout {
      bio {
        childMarkdownRemark {
          html
          excerpt(format: PLAIN)
        }
      }
      aboutImages {
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
`
export default AboutPage
