import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TimelineLite, Power1 } from 'gsap'

const Nav = styled.nav`
  position: fixed;
  top: 64px;
  right: 0;
  bottom: 0;
  background: white;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  transform: translate3d(0, 100%, 0);
  z-index: 100;
`

const Icon = styled.svg`
  transition: transform 0.5s;
  fill: ${props => props.theme.colors.base};
  height: 2rem;
  width: 2rem;
  &:hover {
    transform: scale(1.1);
  }
`

const SiteNav = styled.ul`
  position: relative;
  padding: 2em 0 0 0.2em;
  width: 100%;
  font-size: 1.5em;
  margin: 0 auto;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: 50%;
    padding: 2em 0 0 2em;
    font-size: 2em;
  }
  li {
    margin-bottom: 60px;
  }
  a {
    position: relative;
    width: 100%;
    display: block;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    text-align: center;
    color: ${props => props.theme.colors.base};
    margin-top: 60px;
    z-index: 3;
    transition: color 0.5s ease-in-out;
    &:hover {
      color: ${props => props.theme.colors.grey};
    }
  }
`

class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.menu = null
        this.list = null
        this.menuAnimation = new TimelineLite({
            paused: true,
        })
    }

    componentDidMount() {
        this.createAnimation()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.opened !== this.props.opened) {
            this.props.opened ? this.open() : this.close()
        }
    }

    createAnimation() {
        if (this.menuAnimation) this.menuAnimation.kill()
        this.links = this.list.children
        this.menuAnimation
            .fromTo(
                this.menu,
                0.3,
                {
                    y: '100%',
                },
                {
                    y: '0%',
                    ease: Power1.easeOut,
                }
            )
            .staggerFrom(
                this.links,
                0.7,
                { opacity: 0, y: 40, ease: Power1.easeOut },
                0.05,
                '-=0.3'
            )
    }

    open() {
        this.menuAnimation.timeScale(1).play()
    }

    close() {
        this.menuAnimation.timeScale(5).reverse()
    }

    render() {
        const { toggle } = this.props
        return (
            <Nav role="navigation" ref={nav => (this.menu = nav)}>
                <SiteNav ref={ul => (this.list = ul)}>
                    <li>
                        <Link to="/" onClick={toggle}>
                            Home
            </Link>
                    </li>
                    <li>
                        <Link to="/about/" onClick={toggle}>
                            About
            </Link>
                    </li>
                    <li>
                        <Link to="/galeries/" onClick={toggle}>
                            Galeries
            </Link>
                    </li>
                    <li>
                        <Link to="/contact/" onClick={toggle}>
                            Contact
            </Link>
                    </li>

                    <a
                        href="https://www.instagram.com/jeanemmanuelrode/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon role="img" viewBox="0 0 512 512">
                            <g>
                                <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z" />
                                <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z" />
                                <circle cx="351.5" cy="160.5" r="21.5" />
                            </g>
                        </Icon>
                    </a>
                </SiteNav>
            </Nav>
        )
    }
}

Menu.propTypes = {
    children: PropTypes.array,
    opened: PropTypes.bool,
}

export default Menu
