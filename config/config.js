
module.exports = {
    development: {
      db: 'mongodb://test:test@ds031617.mongolab.com:31617/zellviewdb',
      facebook: {
          clientID: "443798272347622"
        , clientSecret: "a8dda2f5afd240ea702581c29e116c49"
        , callbackURL: "http://localhost:8080/auth/facebook/callback"
      },
      twitter: {
          clientID: "CONSUMER_KEY"
        , clientSecret: "CONSUMER_SECRET"
        , callbackURL: "http://localhost:8080/auth/twitter/callback"
      },
      github: {
          clientID: 'APP_ID'
        , clientSecret: 'APP_SECRET'
        , callbackURL: 'http://localhost:8080/auth/github/callback'
      },
      google: {
          clientID: "APP_ID"
        , clientSecret: "APP_SECRET"
        , callbackURL: "http://localhost:8080/auth/google/callback"
      }
    }
  , test: {

    }
  , production: {

    }
}
