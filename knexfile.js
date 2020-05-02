const baseSettings = {
  migrations: {
    directory: './database/migrations'
  },
  seeds: {
    directory: './database/seeds'
  }
}

module.exports = {
  development: {
    client: 'mysql',
    connection: 'mysql://root:@localhost/tweety',
    ...baseSettings
  },
};