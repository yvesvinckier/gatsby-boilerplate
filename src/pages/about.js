import React from 'react'
// import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import BgImg from '../components/background'
import Slider from 'react-slick'

const About = ({data}) => {
  const {
    title,
    // id,
    // slug,
    aboutImages,
    bio,
    pageDivider,
    bucketList,
    slider,
  } = data.contentfulAbout

  const sliderSettings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    swipeToSlide: true,
    draggable: false,
    centerMode: true,
    centerPadding: 0,
    arrows: true,
    touchMove: true,
    dots: true,
    responsive: [{ breakpoint: 640, settings: { draggable: true, arrows: false } }],
  }

  return (
    <div>
      <Helmet>
        <title>A propos de JEAN EMMANUEL RODE PHOTOGRAPHE</title>
        <meta name='description' content='En savoir plus sur JEAN EMMANUEL RODE - Photographe' />
        <meta property='og:title' content='A propos de JEAN EMMANUEL RODE PHOTOGRAPHE' />
        <meta property='og:image' content={aboutImages[0].sizes.src} />
        <meta property='og:image:width' content='800' />
        <meta property='og:image:height' content='1000' />
        <meta property='og:url' content='https://www.knw.io/about/' />
      </Helmet>

      <ul className='grid grid--about'>
        <li className='cell cell--half'>
          <h2>About— me</h2>
          <div className='about-image--3'>
            <Img sizes={aboutImages[0].sizes} backgroundColor={'#f1f1f1'} />
          </div>
        </li>
        <li className='cell cell--half'>
          <div className='about-image--1'>
            <Img sizes={aboutImages[1].sizes} backgroundColor={'#f1f1f1'} />
          </div>
          <div className='about-image--2'>
            <Img sizes={aboutImages[2].sizes} backgroundColor={'#f1f1f1'} />
          </div>
        </li>
      </ul>

      <div className='bio' dangerouslySetInnerHTML={{ __html: bio.childMarkdownRemark.html }} />

      <div className='page-divider'>
        <BgImg height={'75vh'} sizes={pageDivider.sizes} backgroundColor={'#f1f1f1'} />
      </div>

      <div className='grid grid--container'>
        <div className='cell cell--half bucket-list' dangerouslySetInnerHTML={{ __html: bucketList.childMarkdownRemark.html }} />
        <div className='cell cell--half slider--about'>
          <Slider {...sliderSettings}>
            {slider.map((slider, index) => (
              <div key={index}><Img sizes={slider.sizes} backgroundColor={'#e4e4e4'} /></div>
            ))}
          </Slider>
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
