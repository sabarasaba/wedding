/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'wedding',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {  }
    },

    googleFonts: [
      'Quicksand:300',
      'Roboto:100,300',
      'Raleway: 400'
    ],

    firebase: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET
    },

    contentSecurityPolicy: {
      'font-src': "'self' fonts.gstatic.com",
      'style-src': "'self' fonts.googleapis.com"
    },

    APP: {  }
  };

  if (environment === 'development') {
  }

  if (environment === 'test') {
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.googleAnalytics = {
      webPropertyId: process.env.GA_CODE
    };
  }

  return ENV;
};
