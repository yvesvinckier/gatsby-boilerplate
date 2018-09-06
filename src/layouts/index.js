import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'

import App from 'components/App'
import Footer from 'components/Footer'
import Nav from 'components/Nav'

import '../stylesheets/style.scss'

const closeOverlay = () => {
  const wrapper = document.getElementById('wrapper')
  wrapper.className = ''
}

const TemplateWrapper = ({ children, location }) => {
  return (
    <div id='wrapper'>
      <Helmet>
        <title>
        PHOTOGRAPHE LILLE | CULINAIRE | NATURE MORTE | DÉCO | INSTITUTIONNEL | SPECTACLE
        </title>
        <link rel='icon' href={favicon} />
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
        />
        <meta
          name='description'
          content='Jean Emmanuel RODE - Photographe à Lille spécialisé en culinaire, nature morte, décoration, institutionnel et spectacle.'
        />
        <meta
          property='og:title'
          content='Jean Emmanuel RODE - Photographe à Lille spécialisé en culinaire, nature morte, décoration, institutionnel et spectacle.'
        />
        <meta property='og:locale' content='fr_FR' />
        <meta property='og:type' content='website' />
        <meta
          property='og:site_name'
          content='JEAN-EMMANUEL RODE Photographie'
        />
        <meta property='og:url' content='https://www.jeanemmanuelrode.com' />
      </Helmet>

      <section className='container' onClick={closeOverlay}>
        <App location={location}>
          <Nav location={location} />
          {children()}
          <Footer />
        </App>
      </section>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
}

export default TemplateWrapper
