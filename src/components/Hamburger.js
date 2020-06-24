import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { gsap } from 'gsap'

const Toggle = styled.button`
  position: relative;
  z-index: 999;
  padding: 0;
`
const ToggleLabel = styled.span`
  text-transform: uppercase;
  float: left;
  font-size: 0.625rem;
  letter-spacing: 0.2em;
  font-weight: 500;
  line-height: 3.5rem;
  height: 100%;
  color: ${(props) => props.theme.colors.base};
  max-width: 70px;
  display: none;
  opacity: 0;
  @media screen and (min-width: ${(props) => props.theme.responsive.small}) {
    display: block;
    opacity: 1;
  }
`
const ToggleIcon = styled.div`
  position: relative;
  float: right;
  width: 3.5rem;
  height: 3.5rem;
  span {
    position: absolute;
    display: block;
    background: ${(props) => props.theme.colors.base};
    width: 40%;
    height: 2px;
    left: 30%;
    &:first-child {
      top: 24px;
    }
    &:nth-child(2) {
      bottom: 24px;
    }
  }
`

class Hamburger extends React.Component {
  constructor(props) {
    super(props)
    this.top = null
    this.bottom = null
    this.hamburgerAnimation = null
  }

  componentDidMount() {
    const timing = 0.3
    this.hamburgerAnimation = gsap
      .timeline({
        paused: true,
        defaults: {
          // children inherit these defaults
          duration: timing,
          ease: 'power2.out',
        },
      })
      .fromTo(this.top, { y: 0 }, { y: 3 })
      .fromTo(this.bottom, { y: 0 }, { y: -3 }, 0)
      .fromTo(this.top, { rotation: 0 }, { rotation: 135 }, 0)
      .fromTo(this.bottom, { rotation: 0 }, { rotation: 45 }, 0)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.opened !== this.props.opened) {
      this.props.opened
        ? this.hamburgerAnimation.play()
        : this.hamburgerAnimation.reverse()
    }
  }

  render() {
    const { onClick } = this.props
    return (
      <Toggle onClick={onClick}>
        <ToggleLabel>Menu</ToggleLabel>
        <ToggleIcon>
          <span
            ref={(span) => {
              this.top = span
            }}
          />
          <span
            ref={(span) => {
              this.bottom = span
            }}
          />
        </ToggleIcon>
      </Toggle>
    )
  }
}
Hamburger.propTypes = {
  handleClick: PropTypes.func,
  opened: PropTypes.bool,
}
export default Hamburger
