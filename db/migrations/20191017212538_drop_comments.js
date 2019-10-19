exports.up = function(knex) {
    return knex.schema.raw("DROP TABLE comments")
  };
  
  exports.down = function(knex) {
    
  };
