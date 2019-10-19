exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
      table.increments("id");
      table.string("username");
      table.string("password");
      table.string("email");
      table.string("profile_picture");
      table.string("slug");
      table.integer("total_attaboys").defaultTo(0);
      table.boolean("is_admin").defaultTo(false);
      table.timestamps(true, true);
      table.unique(['username','email','slug'])
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.raw("DROP TABLE users");
  };
  