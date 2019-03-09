import styled from 'styled-components'

export const CategoryNavigation = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  padding: 2em 1em 1px 1em;
  margin: 0 auto;

  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 2em 3em 2em 6em;
  }
  h1 {
    color: ${props => props.theme.colors.base};
    text-transform: capitalize;
    font-size: 1.6em;
    font-weight: 600;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 3em;
    }
  }
`

export const CategoryNavigationLinks = styled.ul`
  margin: 2em 0 1em;
  display: flex;
  flex-flow: row wrap;
  li {
    padding-bottom: 30px;
  }
  a {
    transition: all 0.5s;
    margin: 0 1em 0.5em 0;
    text-decoration: none;
    font-size: 0.9em;
    padding: 0.5em 0.7em;
    cursor: pointer;
    color: ${props => props.theme.colors.base};
    border: solid 1px ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.grey};
      border: solid 1px ${props => props.theme.colors.grey};
    }
  }
  .active {
    background: ${props => props.theme.colors.base};
    color: ${props => props.theme.colors.white};
    &:hover {
      color: ${props => props.theme.colors.white};
      background: ${props => props.theme.colors.grey};
    }
  }
`

export const GalleriesList = styled.ul`
  max-width: ${props => props.theme.sizes.maxWidth};
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding: 2em 1em 1px 1em;
  margin: 0 auto;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 2em 3em 2em 6em;
  }
  li {
    display: flex;
    flex-flow: column;
    margin-bottom: 4em;

    h2 {
      color: ${props => props.theme.colors.base};
      text-transform: uppercase;
      font-size: 0.8em;
      font-weight: 700;
      letter-spacing: 2px;
      margin: 21px 0 30px 0;
    }
    a {
      width: 100%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        display: flex;
        flex-flow: row wrap;
      }
      .thumbnail-images {
        position: relative;
        width: 100%;
        margin: 0 0.5em 0.5em 0;
        @media screen and (min-width: ${props =>
            props.theme.responsive.small}) {
          flex: 0 0 20%;
          height: 160px;
        }
        .gatsby-image-wrapper {
          transition: transform 0.5s;
          height: 100%;
        }
        h3 {
          transition: all 0.5s;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          color: ${props => props.theme.colors.white};
          font-size: 1em;
          font-weight: 400;
          text-transform: capitalize;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          opacity: 0;
          z-index: 1;
        }
        &:hover {
          h3 {
            opacity: 1;
          }
        }
      }
    }
  }
`
