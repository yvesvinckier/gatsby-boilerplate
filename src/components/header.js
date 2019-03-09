import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Headroom from 'react-headroom'

import Hamburger from './Hamburger'

const HeaderContainer = styled.div`
  z-index: 2;
  max-width: ${props => props.theme.sizes.maxWidth};
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 65px;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  padding: 0 15px;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 0 6%;
  }
  a span {
    display: block;
    width: 180px;
    padding-top: 2px;
    font-size: 12px;
    letter-spacing: 0.05rem;
    float: right;
    line-height: 1rem;
    color: ${props => props.theme.colors.base};
    &::first-line {
      text-transform: uppercase;
      font-weight: 700;
    }
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      width: 200px;
      font-size: 13px;
    }
  }
`
const BlackCircle = styled.svg`
  stroke: ${props => props.theme.colors.base};
  height: 2rem;
  margin-right: 20px;
  stroke-width: 8;
  fill: none;
`

class Header extends React.Component {
    settings = {
        disableInlineStyles: true,
    }

    render() {
        const { toggle, opened } = this.props
        return (
            <Headroom {...this.settings}>
                <HeaderContainer>
                    <Link to="/">
                        <BlackCircle x="0px" y="0px" viewBox="0 0 45 45">
                            <circle className="path" cx="22.5" cy="22.5" r="18.5" />
                        </BlackCircle>
                        <span>
                            Jean-Emmanuel Rode <br />— Photographe
            </span>
                    </Link>
                    <Hamburger opened={opened} onClick={toggle} />
                </HeaderContainer>
            </Headroom>
        )
    }
}
Header.propTypes = {
    opened: PropTypes.bool,
    toggle: PropTypes.func,
}

export default Header
