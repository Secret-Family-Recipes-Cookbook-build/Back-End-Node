const { clean } = require('knex-cleaner')

exports.seed = function (knex) {
  return clean(knex, {
    mode: 'truncate',
    restartIdentity: true, // ask postgresSQL to reset the primary keys back to 0
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
  })
  .then(() => console.log("\n== ALL tables truncated, ready to seed==\n"));
};