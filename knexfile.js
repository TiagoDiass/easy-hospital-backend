require('dotenv').config();
const path = require('path');

module.exports = {
  production: {
    client: process.env.DB_CLIENT || 'pg',

    connection: {
      host: process.env.PG_HOST,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      ssl: true,
    },

    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },

    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },

    useNullAsDefault: true,
  },

  development: {
    client: process.env.DB_CLIENT || 'pg',

    connection: {
      host: process.env.PG_HOST,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
    },

    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },

    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },

    useNullAsDefault: true,
  },
};
