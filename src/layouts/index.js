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
          JEAN EMMANUEL RODE Photographie - Photographe culinaire spectacle à
          Lille
        </title>
        <link rel='icon' href={favicon} />
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
        />
        <meta
          name='description'
          content='Photographe Culinaire à Lille - JEAN-EMMANUEL RODE, professionnel spécialisé en photographie culinaire, nature morte, décoration, corporate et institutionnel.'
        />
        <meta
          property='og:title'
          content='JEAN-EMMANUEL RODE Photographie - Photographe culinaire spectacle nature morte décoration corporate et institutionnel à Lille'
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
