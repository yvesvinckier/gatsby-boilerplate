import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import contentful from '../images/contentful.svg'

const FooterWrapper = styled.footer`
  background: ${props => props.theme.colors.base};
  color: ${props => props.theme.colors.white};
  position: relative;
  z-index: 2;
`

const FooterOuter = styled.section`
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 3em 1em;
  margin: 0 auto;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 3.5em 2em;
  }
`

const FooterInner = styled.section`
  padding: 2em 0 0 0;
  margin: 0 auto;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  div {
    width: 100%;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      flex: 0 0 50%;
    }
  }
`
const FooterInfo = styled.div`
  h3 a {
    margin: 0 0 1em 0;
    letter-spacing: 0.1em;
    line-height: 1.4em;
    font-size: 0.8em;
    font-weight: 500;
    &::first-line {
      font-size: 1em;
      font-weight: 700;
    }
  }
  a {
    color: white;
    text-decoration: none;
    display: inline-block;
    margin: 0 1rem 0 0;
    img {
      width: 100%;
      max-width: 85px;
    }
  }
  p {
    font-weight: 400;
    font-size: 0.7em;
    color: ${props => props.theme.colors.white};
    line-height: 1.25;
    margin-bottom: 1.8em;
  }
`

const FooterSitemap = styled.div`
  ul {
    text-align: left;
    margin: 2em 0 0 0;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      margin: 0;
      text-align: right;
    }
  }
  li {
    display: inline-block;
    margin: 0 1em 0.5em 0;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      margin: 0 0 0.5em 1em;
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
`

const FooterIcon = styled.svg`
  fill: white;
  display: inline-block;
  height: 1.75rem;
  width: 1.75rem;
`

const Footer = () => (
    <FooterWrapper>
        <FooterOuter>
            <FooterInner>
                <FooterInfo>
                    <h3>
                        <Link to="/">
                            JEAN EMMANUEL RODE <br /> Photographe à Lille NORD (59)
            </Link>
                    </h3>
                    <p>
                        Copyright &copy; {new Date().getFullYear()} JEAN EMMANUEL RODE —
                        Photographe. Tous droits réservés.
          </p>
                    <a
                        href="https://www.contentful.com/"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        className="wordmark"
                    >
                        <img src={contentful} alt="Powered by Contentful" />
                    </a>
                </FooterInfo>
                <FooterSitemap>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                        <li>
                            <Link to="/galeries/">Galeries</Link>
                        </li>
                        <li>
                            <Link to="/contact/">Contact</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a
                                href="https://www.instagram.com/jeanemmanuelrode/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FooterIcon viewBox="0 0 512 512">
                                    <g>
                                        <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z" />
                                        <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z" />
                                        <circle cx="351.5" cy="160.5" r="21.5" />
                                    </g>
                                </FooterIcon>
                            </a>
                        </li>
                    </ul>
                </FooterSitemap>
            </FooterInner>
        </FooterOuter>
    </FooterWrapper>
)

export default Footer
