
exports.up = function(knex) {
    return knex.schema.raw("DROP TABLE users")
  
};

exports.down = function(knex) {
  
};
