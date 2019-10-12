
exports.up = function(knex) {
    return knex.schema.createTable('posts', (table) => {
        table.increments('id')
        table.integer('post_author')
        table.foreign('post_author').references('users.id')
        table.string('title', 250)
        table.string('content', 1000)
        table.string('images')
        table.integer('post_attaboys')
        table.integer('total_comments')
        table.string('slug')
        table.timestamps(true, true)
    })
};

exports.down = function(knex) {
    
  return knex.schema.raw('DROP TABLE posts');

};
