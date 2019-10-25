exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("posts").insert([
        {
          // id: 1,
          attagory_id: 6,
          post_author: 2,
          title: "optimizing",
          content:
            "id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi",
          images: "http://dummyimage.com/177x241.jpg/ff4444/ffffff",
          post_attaboys: 100,
          total_comments: 44,
          slug: "Horizontal"
        },
        {
          // id: 2,
          attagory_id: 2,
          post_author: 7,
          title: "Fully-configurable",
          content:
            "turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec",
          images: "http://dummyimage.com/150x213.png/dddddd/000000",
          post_attaboys: 95,
          total_comments: 64,
          slug: "concept"
        },
        {
          // id: 3,
          attagory_id: 18,
          post_author: 7,
          title: "help-desk",
          content:
            "at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget",
          images: "http://dummyimage.com/248x133.png/ff4444/ffffff",
          post_attaboys: 21,
          total_comments: 86,
          slug: "homogeneous"
        },
        {
          // id: 4,
          attagory_id: 4,
          post_author: 9,
          title: "web-enabled",
          content:
            "dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non",
          images: "http://dummyimage.com/249x202.bmp/5fa2dd/ffffff",
          post_attaboys: 32,
          total_comments: 77,
          slug: "toolset"
        },
        {
          // id: 5,
          attagory_id: 14,
          post_author: 9,
          title: "Distributed",
          content:
            "consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer",
          images: "http://dummyimage.com/156x110.bmp/dddddd/000000",
          post_attaboys: 97,
          total_comments: 71,
          slug: "Optimized"
        },
        {
          // id: 6,
          attagory_id: 3,
          post_author: 5,
          title: "Vision-oriented",
          content:
            "nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper",
          images: "http://dummyimage.com/124x239.png/dddddd/000000",
          post_attaboys: 2,
          total_comments: 67,
          slug: "hardware"
        },
        {
          // id: 7,
          attagory_id: 20,
          post_author: 5,
          title: "benchmark",
          content:
            "maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat",
          images: "http://dummyimage.com/138x234.png/cc0000/ffffff",
          post_attaboys: 83,
          total_comments: 31,
          slug: "heuristic"
        },
        {
          // id: 8,
          attagory_id: 17,
          post_author: 8,
          title: "client-driven",
          content:
            "ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
          images: "http://dummyimage.com/220x132.png/dddddd/000000",
          post_attaboys: 9,
          total_comments: 96,
          slug: "eco-centric"
        },
        {
          // id: 9,
          attagory_id: 6,
          post_author: 4,
          title: "Managed",
          content:
            "massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet",
          images: "http://dummyimage.com/140x162.jpg/ff4444/ffffff",
          post_attaboys: 61,
          total_comments: 8,
          slug: "parallelism"
        },
        {
          // id: 10,
          attagory_id: 9,
          post_author: 3,
          title: "model",
          content:
            "nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula",
          images: "http://dummyimage.com/149x108.jpg/cc0000/ffffff",
          post_attaboys: 82,
          total_comments: 63,
          slug: "leverage"
        },
        {
          // id: 11,
          attagory_id: 7,
          post_author: 6,
          title: "task-force",
          content:
            "sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit",
          images: "http://dummyimage.com/193x225.bmp/cc0000/ffffff",
          post_attaboys: 87,
          total_comments: 84,
          slug: "national"
        },
        {
          // id: 12,
          attagory_id: 15,
          post_author: 9,
          title: "Automated",
          content:
            "nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam",
          images: "http://dummyimage.com/122x138.png/ff4444/ffffff",
          post_attaboys: 20,
          total_comments: 24,
          slug: "knowledge base"
        },
        {
          // id: 13,
          attagory_id: 2,
          post_author: 7,
          title: "zero tolerance",
          content:
            "vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem",
          images: "http://dummyimage.com/199x230.png/cc0000/ffffff",
          post_attaboys: 53,
          total_comments: 9,
          slug: "directional"
        },
        {
          // id: 14,
          attagory_id: 18,
          post_author: 6,
          title: "policy",
          content:
            "cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
          images: "http://dummyimage.com/201x225.bmp/ff4444/ffffff",
          post_attaboys: 88,
          total_comments: 38,
          slug: "adapter"
        },
        {
          // id: 15,
          attagory_id: 15,
          post_author: 2,
          title: "empowering",
          content:
            "proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula",
          images: "http://dummyimage.com/224x143.jpg/cc0000/ffffff",
          post_attaboys: 55,
          total_comments: 98,
          slug: "workforce"
        },
        {
          // id: 16,
          attagory_id: 8,
          post_author: 10,
          title: "budgetary management",
          content:
            "pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in",
          images: "http://dummyimage.com/172x135.png/ff4444/ffffff",
          post_attaboys: 61,
          total_comments: 12,
          slug: "logistical"
        },
        {
          // id: 17,
          attagory_id: 5,
          post_author: 1,
          title: "analyzing",
          content:
            "at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque",
          images: "http://dummyimage.com/185x214.bmp/cc0000/ffffff",
          post_attaboys: 10,
          total_comments: 67,
          slug: "collaboration"
        },
        {
          // id: 18,
          attagory_id: 18,
          post_author: 6,
          title: "Right-sized",
          content:
            "vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat",
          images: "http://dummyimage.com/231x167.png/dddddd/000000",
          post_attaboys: 7,
          total_comments: 47,
          slug: "Object-based"
        },
        {
          // id: 19,
          attagory_id: 20,
          post_author: 6,
          title: "conglomeration",
          content:
            "aliquet maecenas leo odio condimentum id luctus nec molestie sed justo",
          images: "http://dummyimage.com/202x149.jpg/cc0000/ffffff",
          post_attaboys: 40,
          total_comments: 98,
          slug: "Ergonomic"
        },
        {
          // id: 20,
          attagory_id: 10,
          post_author: 3,
          title: "Organized",
          content:
            "blandit lacinia erat vestibulum sed magna at nunc commodo placerat",
          images: "http://dummyimage.com/193x231.jpg/cc0000/ffffff",
          post_attaboys: 92,
          total_comments: 14,
          slug: "client-driven"
        }
      ]);
    });
};
