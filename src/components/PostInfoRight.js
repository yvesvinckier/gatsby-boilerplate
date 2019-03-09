import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring'
import styled from 'styled-components'
import { Waypoint } from 'react-waypoint'

const PostInfoRight = styled(animated.div)`
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 1 65%;
  }
`

const PostDescription = styled.div`
  p {
    text-align: justify;
    line-height: 1.75;
    font-size: 16px;
    letter-spacing: 0.025em;
    font-weight: 300;
    padding-top: 2em;
    color: ${props => props.theme.colors.base};
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      padding-top: 0;
    }
  }
`

function PostInfoRightLayout({ description }) {
    const [isEntered, set] = useState(true)
    const { transform, opacity } = useSpring({
        config: config.slow,
        delay: 100,
        reverse: isEntered,
        from: {
            opacity: 0,
            transform: `translate3d(0, 40px, 0)`,
        },
        to: {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
        },
    })

    const waypointEnter = () => {
        set(!isEntered)
    }

    const waypointLeave = () => {
        set(!isEntered)
    }

    return (
        <>
            <PostInfoRight style={{ transform, opacity }}>
                <Waypoint
                    bottomOffset={'10%'}
                    topOffset={'-20%'}
                    onEnter={waypointEnter}
                    onLeave={waypointLeave}
                />
                <PostDescription
                    dangerouslySetInnerHTML={{
                        __html: description.childMarkdownRemark.html,
                    }}
                />
            </PostInfoRight>
        </>
    )
}

export default PostInfoRightLayout
