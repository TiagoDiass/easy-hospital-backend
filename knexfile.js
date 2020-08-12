require('dotenv').config();

module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.PG_HOST,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
    },

    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations',
    },

    seeds: {
      directory: './src/database/seeds',
    },

    useNullAsDefault: true,
  }

  // development old: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './src/database/database.sqlite'
  //   },

  //   migrations: {
  //     tableName: 'knex_migrations',
  //     directory: './src/database/migrations'
  //   },

  //   seeds: {
  //     directory: './src/database/seeds'
  //   },

  //   useNullAsDefault: true
  // },
};