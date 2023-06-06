// Update with your config settings.
// const delelopment = require ('./')
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: 3307,
      user: 'thiago',
      password: 'thiago',
      database: 'back_ecommerce'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: 3307,
      user: 'thiago',
      password: 'thiago',
      database: 'back_ecommerce'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: 3307,
      user: 'thiago',
      password: 'thiago',
      database: 'back_ecommerce'
    }
  }

};
