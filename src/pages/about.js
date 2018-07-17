import React from 'react'
// import Link from 'gatsby-link'
import Helmet from 'react-helmet'
// import Img from 'gatsby-image'
// import BgImg from '../components/background'
// import Slider from 'react-slick'

const About = ({ data }) => {
  const {
    title,
    // id,
    // slug,
    aboutImages,
    bio,
    // pageDivider,
    // bucketList,
    // slider,
  } = data.contentfulAbout

  // const sliderSettings = {
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   swipeToSlide: true,
  //   draggable: false,
  //   centerMode: true,
  //   centerPadding: 0,
  //   arrows: true,
  //   touchMove: true,
  //   dots: true,
  //   responsive: [
  //     { breakpoint: 640, settings: { draggable: true, arrows: false } },
  //   ],
  // }

  return (
    <div>
      <Helmet>
        <title>A propos de JEAN EMMANUEL RODE PHOTOGRAPHE</title>
        <meta
          name='description'
          content='En savoir plus sur JEAN EMMANUEL RODE - Photographe'
        />
        <meta
          property='og:title'
          content='A propos de JEAN EMMANUEL RODE PHOTOGRAPHE'
        />
        <meta property='og:image' content={aboutImages[0].sizes.src} />
        <meta property='og:image:width' content='800' />
        <meta property='og:image:height' content='1000' />
        <meta property='og:url' content='http://www.rode-island.com/about/' />
      </Helmet>
      <div className='black--bcg'>
        <div className='grid--about'>
          <h3>about</h3>
          <svg className='whitecircle' x='0px' y='0px' viewBox='0 0 45 45'>
            <circle className='path' cx='22.5' cy='22.5' r='18.5' />
          </svg>
          <h2>
            Jean-Emmanuel <br />Rode{' '}
          </h2>
          <div className='small__line' />
          <div
            className='bio'
            dangerouslySetInnerHTML={{ __html: bio.childMarkdownRemark.html }}
          />
          <div className='small__line' />
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query AboutQuery {
    contentfulAbout {
      title
      slug
      id
      aboutImages {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      bio {
        childMarkdownRemark {
          html
        }
      }
      pageDivider {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      bucketList {
        childMarkdownRemark {
          html
        }
      }
      slider {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
    }
  }
`

export default About
