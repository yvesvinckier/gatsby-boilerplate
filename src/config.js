var PHONE = ['TODO', 'TODO', 'TODO']
var EMAIL = 'TODO'

var config = {
  meta_title: 'JEAN-EMMANUEL RODE Photographe',
  meta_description: 'Jean Emmanuel RODE - Photographe à Lille spécialisé en culinaire, nature morte, décoration, institutionnel et événementiel.',

  // Required info for schema
  email: EMAIL,
  logo: 'TODO',
  name: 'JEAN-EMMANUEL RODE',
  legal_name: 'JEAN-EMMANUEL RODE',
  url: 'https://www.jeanemmanuelrode.com',
  phone: PHONE.join('-'),

  // Required address object for schema
  address: {
    street: '56 Rue des Martyrs de la Résistance',
    city: 'Marquette-lez-Lille',
    state: 'TODO',
    zipcode: '59520',
    directions: 'TODO',
    country: 'France',
    area: '',
  },

  // Useful adds
  mailto: `mailto:` + EMAIL,
  tel: 'tel:' + PHONE.join(''),

  // Social Media
  googlePlus: 'https://plus.google.com/u/0/107310430124781171542',
  instagram: 'https://www.instagram.com/jeanemmanuelrode/',
  // medium: 'https://medium.com',
  // facebook: 'https://facebook.com',
  // twitter: 'https://twitter.com',
  // twitter_id: '',

  // Analytics codes
  googleAnalytics: 'UA-TODO-XX',

  // Font codes
  typekit: '',
}

module.exports = config
