exports.up = function(knex) {
    return knex.schema.createTable("attagories", table => {
      table.increments("id");
      table.string("attagory_name");
      table.integer("created_by");
      table.foreign("created_by").references("users.id");
      table.integer("total_subscriptions");
      table.integer("total_posts");
      table.integer("total_comments");
      table.integer("total_attaboys");
      table.string("slug");
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.raw("DROP TABLE attagories");
  };
