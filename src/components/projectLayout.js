import React from 'react'
import { graphql, Link } from 'gatsby'

import Img from 'gatsby-image'
import BgImg from './background'
import find from 'lodash.find'

import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'
import PostInfoLeft from '../components/PostinfoLeft'
import PostInfoRight from '../components/PostInfoRight'
import PostCover from '../components/PostCover'
import SEO from '../components/seo'

const Post = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  overflow: hidden;
`

const PostTitle = styled.div`
  position: relative;
  margin-top: 200px;
  margin-bottom: 100px;
  max-width: ${props => props.theme.sizes.maxWidth};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    margin-top: 260px;
    margin-bottom: 115px;
  }
  h1 {
    width: 100%;
    font-weight: 200;
    font-size: 7vh;
    color: ${props => props.theme.colors.grey};
    position: absolute;
    bottom: 25%;
    line-height: 1.15;
    left: 6%;
    overflow: hidden;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 8vh;
      padding-bottom: 12px;
      bottom: 35%;
    }
    &::first-line {
      font-weight: 400;
      color: ${props => props.theme.colors.base};
    }
  }
`

const FirstTitle = styled(animated.span)`
  position: relative;
  top: 20vh;
`

const SecondTitle = styled(animated.span)`
  position: relative;
  top: 20vh;
`

const PostInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: calc(100% - 2em);
  max-width: 1000px;
  padding: 2em;
  margin: 0 1em;
  background: ${props => props.theme.colors.white};
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 7em 2em;
    margin: 0 auto;
    width: calc(100% - 4em);
  }
`

const PostImage = styled.ul`
  width: 100%;
  max-width: 1000px;
  padding: 0 1em;
  margin: 0 auto 2em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 0 2em;
  }
  .gatsby-image-wrapper {
    margin: 0 0 1em 0;
  }
  li {
    clear: right;
  }
`

const PostPreview = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  a {
    text-decoration: none;
    div {
      min-height: 200px;
      max-height: 375px;
      &::after {
        content: '';
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: background-color 0.5s;
      }
    }
    &:hover {
      div::after {
        background: rgba(0, 0, 0, 0.4);
      }
    }
  }
`

const PostPreviewNext = styled.h4`
  font-size: 1em;
  letter-spacing: 0.3em;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  color: ${props => props.theme.colors.white};
  padding-top: 2.2em;
  padding-inline-start: 5px;
  border: solid 4px ${props => props.theme.colors.white};
  position: absolute;
  border-radius: 100%;
  width: 90px;
  height: 90px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  z-index: 1;
`

const PostPreviewTitle = styled.h3`
  font-size: 1.1em;
  font-weight: 500;
  position: absolute;
  line-height: 1.3em;
  top: 80%;
  left: 50%;
  color: ${props => props.theme.colors.white};
  z-index: 1;
  transform: translate(-50%, -67%);
  letter-spacing: 0.1em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    top: 70%;
  }
`

function projectLayout({ data }) {
    const {
        id,
        title,
        title2,
        author,
        description,
        cover,
        images,
    } = data.contentfulGallery

    const postIndex = find(
        data.allContentfulGallery.edges,
        ({ node: post }) => post.id === id
    )

    const firstTitleProps = useSpring({
        config: config.slow,
        delay: 600,
        from: { opacity: 0, top: '20vh' },
        to: { opacity: 1, top: '0vh' },
    })

    const secondTitleProps = useSpring({
        config: config.slow,
        delay: 700,
        from: { opacity: 0, top: '20vh' },
        to: { opacity: 1, top: '0vh' },
    })

    return (
        <>
            <SEO
                title={title}
                image={cover}
                description={description.childMarkdownRemark.excerpt}
            />
            <Post>
                <PostTitle>
                    <h1>
                        <FirstTitle style={firstTitleProps}>{title}</FirstTitle>
                        <br />
                        <SecondTitle style={secondTitleProps}>{title2}</SecondTitle>
                    </h1>
                </PostTitle>
                <PostCover cover={cover} />
                <PostInfo>
                    <PostInfoLeft author={author} />
                    <PostInfoRight description={description} />
                </PostInfo>
                <PostImage>
                    {images &&
                        images.map((images, index) => (
                            <li key={index}>
                                <Img
                                    fluid={images.fluid}
                                    alt={images.title}
                                    title={images.title}
                                    outerWrapperClassName={images.description}
                                    backgroundColor={'#f1f1f1'}
                                />
                            </li>
                        ))}
                </PostImage>

                {postIndex.next && (
                    <PostPreview>
                        <Link to={'/' + postIndex.next.slug + '/'}>
                            <PostPreviewNext> Next</PostPreviewNext>
                            <PostPreviewTitle>— {postIndex.next.title} —</PostPreviewTitle>
                            <BgImg
                                height={'50vh'}
                                fluid={postIndex.next.cover.fluid}
                                alt={postIndex.next.cover.title}
                                title={postIndex.next.cover.title}
                                backgroundColor={'#ffffff'}
                            />
                        </Link>
                    </PostPreview>
                )}
            </Post>
        </>
    )
}

export const query = graphql`
  query($slug: String!) {
    contentfulGallery(slug: { eq: $slug }) {
      title
      title2
      id
      description {
        childMarkdownRemark {
          html
          excerpt(format: PLAIN)
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
      images {
        title
        description
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      author {
        name
        authorSlug
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
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
export default projectLayout
