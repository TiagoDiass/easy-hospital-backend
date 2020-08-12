const knex = require('knex');
const knexfile = require('../../knexfile');

const knexInstance = knex(knexfile.development);

module.exports = knexInstance;