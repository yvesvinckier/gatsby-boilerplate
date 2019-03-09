import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring'
import styled from 'styled-components'
import { Waypoint } from 'react-waypoint';
import { Link } from 'gatsby'

const PostInfoLeft = styled(animated.div)`
  margin: 0 0 1em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    margin: 0;
    flex: 0 1 33%;
  }
`

const PostInfoTitle = styled.h2`
  font-size: 2em;
  font-weight: 100;
  line-height: 1.1;
  padding-top: 1em;
  margin: 0 0 0.5em 0;
  position: relative;
  z-index: 2;
  text-transform: capitalize;
  color: ${props => props.theme.colors.base};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding-top: 0;
  }
`

const PostCategory = styled.h3`
  a {
    position: relative;
    padding: 1em;
    margin: -1em;
    overflow: visible;
    font-size: 14px;
    line-height: 22px;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    color: ${props => props.theme.colors.base};
    cursor: pointer;
  }
  .outer-span {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  .arrow {
    fill: ${props => props.theme.colors.grey};
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 2px;
    width: 6px;
    height: 10px;
    transition: transform 0.3s ease-in;
  }
  .inner-span {
    display: block;
    position: relative;
    padding-left: 0;
    padding-right: 25px;
    overflow: hidden;
    font-size: 13px;
    font-weight: 700;
  }
  .first-span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    transform: translateX(-100%);
    transition: transform 0.3s ease-in;
  }
  .second-span {
    display: block;
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease-in;
  }
  a:hover .first-span {
    transform: translateX(-25%);
  }
  a:hover .second-span {
    transform: translateX(18%);
  }
  a:hover .arrow {
    transform: translateX(-200%);
  }
`

function PostInfoLeftLayout({ author }) {
    const [isEntered, set] = useState(true)
    const { transform, opacity } = useSpring({
        reverse: isEntered,
        from: {
            opacity: 0,
            transform: `translate3d(-40px, 0, 0)`,
        },
        to: {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
        },
        config: config.slow,
    })

    const waypointEnter = () => {
        set(!isEntered)
    }

    const waypointLeave = () => {
        set(!isEntered)
    }

    return (
        <>
            <PostInfoLeft style={{ transform, opacity }}>
                <Waypoint
                    bottomOffset={'10%'}
                    topOffset={'-20%'}
                    onEnter={waypointEnter}
                    onLeave={waypointLeave}
                />
                <PostInfoTitle>Catégorie</PostInfoTitle>
                <PostCategory>
                    <Link to={'/' + author.authorSlug + '/'}>
                        <span className="outer-span">
                            <svg className="arrow" width="6px" viewBox="0 0 6 10">
                                <path d="M5.284,5.000 L1.000,9.285 L0.293,8.578 L3.870,5.000 L0.293,1.423 L1.000,0.716 L4.577,4.293 L4.577,4.293 L5.284,5.000 Z" />
                            </svg>

                            <span className="inner-span">
                                <span className="first-span" />
                                <span className="second-span">{author.name}</span>
                            </span>
                        </span>
                    </Link>
                </PostCategory>
            </PostInfoLeft>
        </>
    )
}

export default PostInfoLeftLayout
