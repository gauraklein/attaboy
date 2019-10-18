exports.up = function(knex) {
    return knex.schema.createTable("comments", table => {
      table.increments("id");
      table.integer("comment_author");
      table.foreign("comment_author").references("users.id");
      table.string("content", 1000);
      table.string("images");
      table.integer("post_id");
      table.foreign("post_id").references("posts.id");
      table.integer("comment_reference");
      table.foreign("comment_reference").references("comments.id");
      table.integer("attagory_id");
      table.foreign("attagory_id").references("attagories.id")
      table.integer("comment_attaboys");
      table.integer("total_comments");
      table.string("slug");
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.raw("DROP TABLE comments");
  };
  