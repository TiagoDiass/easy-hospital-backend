exports.up = function (knex) {
  return knex.schema.createTable('doctors', (table) => {
    table.increments('id').primary();
    table.string('name').notNull();
    table.string('email').notNull().unique();
    table.string('phone').notNull().unique();
    table.string('cpf').notNull().unique();
    table.string('rg').notNull().unique();
    table.date('birth').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('doctors');
};
