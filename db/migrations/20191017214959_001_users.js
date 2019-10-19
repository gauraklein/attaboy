exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
      table.increments("id");
      table.string("username").unique().notNullable();
      table.string("password").notNullable();
      table.string("email").unique().notNullable();
      table.string("profile_picture");
      table.string("slug");
      table.integer("total_attaboys").defaultTo(0);
      table.boolean("is_admin").defaultTo(false);
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.raw("DROP TABLE users");
  };
  