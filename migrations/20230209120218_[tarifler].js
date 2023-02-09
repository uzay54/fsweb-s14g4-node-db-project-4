/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.scheme
  .dropTableIfExists('w')
  .dropTableIfExists('x')
  .dropTableIfExists('y')
  .dropTableIfExists('z');
};
