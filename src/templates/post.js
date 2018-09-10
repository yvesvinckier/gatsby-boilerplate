import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Scene } from 'scrollmagic'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import find from 'lodash.find'
import Helmet from 'react-helmet'
// import Up from '../components/up'
import BgImg from '../components/background'
import { TimelineMax } from 'gsap'

class PostTemplate extends Component {
  static contextTypes = {
    scrollmagic: PropTypes.any,
  }

  componentDidMount() {
    var animation = new TimelineMax()
    animation
      .set(this.refImage, { scale: 1.2 })

      .to(this.firstpostSubtitle, 1, {
        delay: 0.6,
        top: '-=14vh',
        opacity: '1',
        ease: Expo.easeOut,
      })
      .to(
        this.secondpostSubtitle,
        1,
        { top: '-=14vh', opacity: '1', ease: Expo.easeOut },
        '-=0.9'
      )

    this.createAnimation()

    this.scene = new Scene({
      duration: this.duration,
      triggerElement: this.wrapper,
      triggerHook: 0.5,
    })
    this.scene.indicatorName = 'Preview'
    this.scene.on('progress', this.updateScroll)

    if (process.env.NODE_ENV === 'development') {
      this.scene.addIndicators({ name: this.scene.indicatorName })
    }

    this.scene.addTo(this.context.scrollmagic)

    this.createParagraphAnimation()

    this.scene2 = new Scene({
      triggerElement: this.postParagraphWrapper,
      triggerHook: 0.9,
    })
    this.scene2.indicatorName = 'Paragraph'
    this.scene2.on('enter', this.startAnimation)

    if (process.env.NODE_ENV === 'development') {
      this.scene2.addIndicators({ name: this.scene2.indicatorName })
    }

    this.scene2.addTo(this.context.scrollmagic)
  }

  destroy() {
    this.scene.destroy()
  }
  destroyScene2() {
    this.scene2.destroy()
  }

  componentWillUnmount() {
    this.destroy()
    this.destroyScene2()
  }

  createAnimation() {
    if (this.animation) this.animation.kill()
    this.animation = new TimelineMax({ paused: true }).to(this.refImage, 0.2, {
      y: '-=25%',
      scale: 1,
      ease: Power0.easeOut,
    })

    this.animDuration = this.animation.duration()
  }
  createParagraphAnimation() {
    if (this.paragraphAnimation) this.paragraphAnimation.kill()
    this.paragraphAnimation = new TimelineMax({ paused: true })

      .from(this.postCategoryWrapper, 1, { x: '-=25%', opacity: 0 })
      .from(this.postParagraphWrapper, 1, { y: '+=25%', opacity: 0 }, '-=0.9')
  }

  updateScroll = ({ progress }) => {
    this.animation.tweenTo(this.animDuration * progress)
  }
  startAnimation = ({ enter }) => {
    this.paragraphAnimation.tweenTo(this.enter)
  }

  duration = () => {
    return this.wrapper.getBoundingClientRect().height * 0.5
  }

  render() {
    // const { alt, children, reverse, sizes } = this.props
    const {
      id,
      title,
      title2,
      slug,
      description,
      author,
      cover,
      images,
    } = this.props.data.contentfulGallery

    const postIndex = find(
      this.props.data.allContentfulGallery.edges,
      ({ node: post }) => post.id === id
    )
    return (
      <div>
        <Helmet>
          <title>{title} - JEAN EMMANUEL RODE PHOTOGRAPHE LILLE</title>
          <meta name='description' content={title} />
          <meta
            property='og:title'
            content={title + ' - JEAN EMMANUEL RODE PHOTOGRAPHE LILLE'}
          />
          <meta property='og:image' content={cover.sizes.src} />
          <meta property='og:image:width' content='1800' />
          <meta property='og:image:height' content='1200' />
          <meta
            property='og:url'
            content={'https://www.jeanemmanuelrode.com/' + slug + '-' + author.name}
          />
        </Helmet>

        <div className='post'>
          <div
            className='post-title'
            ref={c => {
              this.subtitle = c
            }}
          >
            <h1>
              <span
                ref={c => {
                  this.firstpostSubtitle = c
                }}
              >
                {title}
              </span>
              <br />
              <span
                ref={c => {
                  this.secondpostSubtitle = c
                }}
              >
                {title2}
              </span>
            </h1>
          </div>
          <div
            className='post-cover'
            ref={c => {
              this.wrapper = c
            }}
          >
            <div
              ref={c => {
                this.refImage = c
              }}
            >
              <BgImg
                height={'90vh'}
                sizes={cover.sizes}
                alt={cover.title}
                title={cover.title}
                backgroundColor={'#f1f1f1'}
              />
            </div>
          </div>
          <div className='post-info'>
            <div
              className='post-info__left'
              ref={c => {
                this.postCategoryWrapper = c
              }}
            >
              <h2 className='post-info-title'>Catégorie</h2>
              <h3 className='post-category'>
                <Link to={'/' + author.authorSlug + '/'}>
                  <span className='outer-span'>
                    <svg className='arrow' width='6px' viewBox='0 0 6 10'>
                      <path d='M5.284,5.000 L1.000,9.285 L0.293,8.578 L3.870,5.000 L0.293,1.423 L1.000,0.716 L4.577,4.293 L4.577,4.293 L5.284,5.000 Z' />
                    </svg>

                    <span className='inner-span'>
                      <span className='first-span' />
                      <span className='second-span'>{author.name}</span>
                    </span>
                  </span>
                </Link>
              </h3>
              {/* {postIndex.previous && (
                <Link
                  className='post-previous'
                  to={'/' + postIndex.previous.slug + '/'}
                >
                  Previous
                </Link>
              )}
              {postIndex.next && (
                <Link
                  className='post-next'
                  to={'/' + postIndex.next.slug + '/'}
                >
                  Next
                </Link>
              )} */}
            </div>
            <div
              className='post-info__right'
              ref={c => {
                this.postParagraphWrapper = c
              }}
            >
              <div
                ref={c => {
                  this.postParagraph = c
                }}
                className='post-description'
                dangerouslySetInnerHTML={{
                  __html: description.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
          <ul className='post-images'>
            {images &&
              images.map((images, index) => (
                <li key={index}>
                  <Img
                    sizes={images.sizes}
                    alt={images.title}
                    title={images.title}
                    outerWrapperClassName={images.description}
                    backgroundColor={'#f1f1f1'}
                  />
                </li>
              ))}
          </ul>

          {postIndex.next && (
            <Link className='post-preview' to={'/' + postIndex.next.slug + '/'}>
              <h4 className='post-preview__next'>Next</h4>
              <h3 className='post-preview__title'>— {postIndex.next.title} —</h3>
              <BgImg
                height={'50vh'}
                sizes={postIndex.next.cover.sizes}
                alt={postIndex.next.cover.title}
                title={postIndex.next.cover.title}
                backgroundColor={'#ffffff'}
              />
            </Link>
          )}
        </div>
        {/* <Up /> */}
      </div>
    )
  }
}

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    contentfulGallery(slug: { eq: $slug }) {
      title
      title2
      id
      slug
      description {
        childMarkdownRemark {
          html
        }
      }
      cover {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      images {
        title
        description
        sizes(maxWidth: 900) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      author {
        name
        authorSlug
      }
      category {
        name
        categorySlug
      }
    }
    allContentfulGallery(
      filter: { node_locale: { eq: "fr-FR" } }
      limit: 1000
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          id
        }
        previous {
          slug
          title
        }
        next {
          slug
          title
          cover {
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
        }
      }
    }
  }
`

export default PostTemplate
