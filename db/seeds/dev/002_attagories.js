
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('attagories').del()
    .then(function () {
      // Inserts seed entries
      return knex('attagories').insert([
        {"id":1,"attagory_name":"leo","created_by":2,"total_subscriptions":50,"total_posts":4,"total_comments":199,"total_attaboys":131,"slug":"ut"},
{"id":2,"attagory_name":"consectetuer","created_by":1,"total_subscriptions":93,"total_posts":68,"total_comments":3,"total_attaboys":289,"slug":"enim"},
{"id":3,"attagory_name":"nulla","created_by":6,"total_subscriptions":77,"total_posts":91,"total_comments":176,"total_attaboys":298,"slug":"sem"},
{"id":4,"attagory_name":"mi","created_by":3,"total_subscriptions":23,"total_posts":23,"total_comments":186,"total_attaboys":371,"slug":"habitasse"},
{"id":5,"attagory_name":"nulla","created_by":9,"total_subscriptions":59,"total_posts":65,"total_comments":296,"total_attaboys":445,"slug":"curae"},
{"id":6,"attagory_name":"sit","created_by":4,"total_subscriptions":12,"total_posts":35,"total_comments":171,"total_attaboys":173,"slug":"lorem"},
{"id":7,"attagory_name":"quam","created_by":6,"total_subscriptions":96,"total_posts":34,"total_comments":265,"total_attaboys":386,"slug":"lectus"},
{"id":8,"attagory_name":"rutrum","created_by":8,"total_subscriptions":100,"total_posts":56,"total_comments":228,"total_attaboys":188,"slug":"varius"},
{"id":9,"attagory_name":"molestie","created_by":9,"total_subscriptions":44,"total_posts":24,"total_comments":250,"total_attaboys":426,"slug":"aenean"},
{"id":10,"attagory_name":"erat","created_by":3,"total_subscriptions":54,"total_posts":75,"total_comments":277,"total_attaboys":76,"slug":"metus"},
{"id":11,"attagory_name":"sed","created_by":2,"total_subscriptions":39,"total_posts":79,"total_comments":157,"total_attaboys":116,"slug":"vestibulum"},
{"id":12,"attagory_name":"mauris","created_by":4,"total_subscriptions":42,"total_posts":41,"total_comments":71,"total_attaboys":477,"slug":"mauris"},
{"id":13,"attagory_name":"a","created_by":4,"total_subscriptions":17,"total_posts":73,"total_comments":81,"total_attaboys":446,"slug":"nisi"},
{"id":14,"attagory_name":"justo","created_by":10,"total_subscriptions":1,"total_posts":98,"total_comments":112,"total_attaboys":146,"slug":"libero"},
{"id":15,"attagory_name":"id","created_by":5,"total_subscriptions":66,"total_posts":56,"total_comments":253,"total_attaboys":160,"slug":"sit"},
{"id":16,"attagory_name":"nam","created_by":1,"total_subscriptions":12,"total_posts":64,"total_comments":103,"total_attaboys":164,"slug":"sapien"},
{"id":17,"attagory_name":"lacus","created_by":1,"total_subscriptions":6,"total_posts":98,"total_comments":181,"total_attaboys":270,"slug":"lectus"},
{"id":18,"attagory_name":"vulputate","created_by":1,"total_subscriptions":35,"total_posts":16,"total_comments":71,"total_attaboys":34,"slug":"rhoncus"},
{"id":19,"attagory_name":"sit","created_by":4,"total_subscriptions":38,"total_posts":96,"total_comments":277,"total_attaboys":4,"slug":"quis"},
{"id":20,"attagory_name":"pretium","created_by":5,"total_subscriptions":2,"total_posts":36,"total_comments":55,"total_attaboys":325,"slug":"nulla"}
      ]);
    });
};
