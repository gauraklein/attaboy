
exports.up = function(knex) {
    return knex.schema.raw("DROP TABLE posts")
};

exports.down = function(knex) {
  
};
