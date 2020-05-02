exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('username').notNullable()
    table.string('name')
    table.string('avatar')
    table.string('email').notNullable()
    table.string('password')
    table.timestamps()

    table.unique(['username', 'email'])
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('users')
};