import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import BgImg from './background'

const PostCover = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
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
  div {
    max-height: 750px;
    transform: scale(1.2);
  }
`
const AnimImg = styled(animated.div)`
  width: 100%;
`
function PostCoverLayout({ cover }) {
    const [props, set] = useSpring(() => ({
        from: { transform: 'scale(1)' },
        config: { precision: 0.000001, friction: 30 },
    }))
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset
            const scale = (2600 - scrollTop) / 2600
            set({ transform: `scale(${Math.min(1, Math.max(scale, 0.84))})` })
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })
    return (
        <>
            <PostCover>
                <AnimImg style={props}>
                    <BgImg
                        height={'110vh'}
                        fluid={cover.fluid}
                        alt={cover.title}
                        title={cover.title}
                        backgroundColor={'#f1f1f1'}
                    />
                </AnimImg>
            </PostCover>
        </>
    )
}

export default PostCoverLayout
