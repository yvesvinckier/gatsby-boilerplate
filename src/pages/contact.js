import React from 'react'
import Helmet from 'react-helmet'
import BgImg from '../components/background'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import SEO from '../components/seo'

const IntroContact = styled.div`
  position: relative;
  h1 {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 3em;
    font-weight: 700;
    z-index: 2;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 3.75em;
    }
  }
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const MailToContainer = styled.a`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 1em;
  font-weight: 600;
  z-index: 2;
  color: ${props => props.theme.colors.white} !important;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2em;
  }
`

const CellNumber = styled.a`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 1em;
  font-weight: 600;
  z-index: 2;
  color: ${props => props.theme.colors.white} !important;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2em;
  }
`

const Contact = ({ data }) => {
  const page = data.contentfulPage

  return (
    <>
      <SEO
        title="Contact"
        description="Contacter Jean Emmanuel Rode Photographe à Lille - email : jerode@9online.fr - tél : 06 34 11 31 94. Photographe spécialisé en photographie culinaire, nature morte, décoration, institutionnel et spectacle."
        image={page.cover}
      />
      <Helmet>
        <meta
          property="og:title"
          content="Contact - JEAN EMMANUEL RODE PHOTOGRAPHE"
        />
        <meta property="og:image" content={page.cover.fluid.src} />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1200" />
      </Helmet>

      <IntroContact>
        <h1>Contact</h1>

        <MailToContainer href="mailto:jerode@9online.fr">
          jerode@9online.fr
        </MailToContainer>

        <CellNumber href="tel:+33634113194">06 34 11 31 94</CellNumber>

        <BgImg
          height={'100vh'}
          fluid={page.cover.fluid}
          backgroundColor={'#f1f1f1'}
        />
      </IntroContact>
    </>
  )
}
export const query = graphql`
  query {
    contentfulPage {
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
`

export default Contact
