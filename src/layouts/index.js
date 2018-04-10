import PropTypes from 'prop-types'
import React from 'react'

import App from 'components/App'
import Footer from 'components/Footer'
import Nav from 'components/Nav'

import '../stylesheets/style.scss'

const TemplateWrapper = ({ children, location }) => {
  return (
    <App location={location}>
      <Nav location={location} />
      {children()}
      <Footer />
    </App>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
}

export default TemplateWrapper
