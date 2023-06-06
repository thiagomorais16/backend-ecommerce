// Update with your config settings.
// const delelopment = require ('./')
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'thiago',
      password: 'thiago123',
      database: 'back_ecommerce'
    }
  },

  staging: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'thiago',
      password: 'thiago123',
      database: 'back_ecommerce'
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'thiago',
      password: 'thiago123',
      database: 'back_ecommerce'
    }
  }

};
