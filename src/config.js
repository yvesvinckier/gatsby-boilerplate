var PHONE = ['+33', '6', '34', '11', '31', '94']
var EMAIL = 'rodejeanemmanuel@gmail.com'

var config = {
  meta_title: 'Jean Emmanuel Rode Photographe à Lille',
  meta_description:
    'Jean Emmanuel RODE - Photographe à Lille spécialisé en culinaire, nature morte, décoration, institutionnel et spectacle.',

  // Required info for schema
  email: EMAIL,
  logo: 'TODO',
  name: 'JEAN-EMMANUEL RODE',
  legal_name: 'JEAN-EMMANUEL RODE',
  url: 'https://www.jeanemmanuelrode.com/',
  phone: PHONE.join('-'),

  // Required address object for schema
  address: {
    street: '56 Rue des Martyrs de la Résistance',
    city: 'Marquette-lez-Lille, France',
    zipcode: '59520',
    country: 'France',
    area: 'NORD',
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
