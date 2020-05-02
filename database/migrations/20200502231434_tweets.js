exports.up = function (knex) {
  return knex.schema
    .dropTableIfExists('tweets')
    .createTable('tweets', table => {
      table.increments('id')
      table.integer('user_id').unsigned()
      table.string('body')
      table.timestamps()

      table.foreign('user_id').references('users.id')
    })
};

exports.down = function (knex) {
  return knex.schema.dropTable('tweets')
};