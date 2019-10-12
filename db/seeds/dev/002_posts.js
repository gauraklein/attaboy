
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
{"id":1,"post_author":5,"title":"Compatible","content":"condimentum neque sapien placerat ante nulla justo aliquam quis turpis","images":"http://dummyimage.com/212x180.jpg/cc0000/ffffff","post_attaboys":2,"total_comments":74,"slug":"interactive"},
{"id":2,"post_author":8,"title":"intermediate","content":"orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut","images":"http://dummyimage.com/120x246.png/5fa2dd/ffffff","post_attaboys":50,"total_comments":46,"slug":"zero administration"},
{"id":3,"post_author":5,"title":"multi-state","content":"sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit","images":"http://dummyimage.com/139x126.bmp/cc0000/ffffff","post_attaboys":9,"total_comments":29,"slug":"interface"},
{"id":4,"post_author":9,"title":"Profit-focused","content":"mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea","images":"http://dummyimage.com/190x207.png/5fa2dd/ffffff","post_attaboys":11,"total_comments":42,"slug":"Profit-focused"},
{"id":5,"post_author":7,"title":"groupware","content":"sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum","images":"http://dummyimage.com/223x141.bmp/5fa2dd/ffffff","post_attaboys":15,"total_comments":97,"slug":"ability"},
{"id":6,"post_author":2,"title":"groupware","content":"nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel","images":"http://dummyimage.com/186x160.png/ff4444/ffffff","post_attaboys":97,"total_comments":22,"slug":"composite"},
{"id":7,"post_author":4,"title":"info-mediaries","content":"ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi","images":"http://dummyimage.com/107x123.jpg/ff4444/ffffff","post_attaboys":63,"total_comments":88,"slug":"cohesive"},
{"id":8,"post_author":9,"title":"Organized","content":"at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum","images":"http://dummyimage.com/157x198.jpg/ff4444/ffffff","post_attaboys":67,"total_comments":49,"slug":"bottom-line"},
{"id":9,"post_author":8,"title":"collaboration","content":"lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in","images":"http://dummyimage.com/182x217.jpg/cc0000/ffffff","post_attaboys":30,"total_comments":4,"slug":"zero defect"},
{"id":10,"post_author":2,"title":"De-engineered","content":"nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel","images":"http://dummyimage.com/240x144.png/ff4444/ffffff","post_attaboys":66,"total_comments":5,"slug":"fault-tolerant"},
{"id":11,"post_author":3,"title":"Cross-platform","content":"quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in","images":"http://dummyimage.com/160x158.png/5fa2dd/ffffff","post_attaboys":56,"total_comments":65,"slug":"Up-sized"},
{"id":12,"post_author":10,"title":"Distributed","content":"at dolor quis odio consequat varius integer ac leo pellentesque","images":"http://dummyimage.com/141x242.jpg/cc0000/ffffff","post_attaboys":55,"total_comments":95,"slug":"solution-oriented"},
{"id":13,"post_author":1,"title":"empowering","content":"sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit","images":"http://dummyimage.com/110x178.jpg/dddddd/000000","post_attaboys":46,"total_comments":83,"slug":"Secured"},
{"id":14,"post_author":6,"title":"responsive","content":"commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede","images":"http://dummyimage.com/184x119.jpg/dddddd/000000","post_attaboys":60,"total_comments":64,"slug":"array"},
{"id":15,"post_author":5,"title":"even-keeled","content":"consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc","images":"http://dummyimage.com/107x146.bmp/5fa2dd/ffffff","post_attaboys":46,"total_comments":70,"slug":"process improvement"},
{"id":16,"post_author":1,"title":"Re-contextualized","content":"ut odio cras mi pede malesuada in imperdiet et commodo","images":"http://dummyimage.com/220x141.png/ff4444/ffffff","post_attaboys":18,"total_comments":46,"slug":"approach"},
{"id":17,"post_author":10,"title":"didactic","content":"quam suspendisse potenti nullam porttitor lacus at turpis donec posuere","images":"http://dummyimage.com/249x144.bmp/ff4444/ffffff","post_attaboys":68,"total_comments":70,"slug":"projection"},
{"id":18,"post_author":5,"title":"Switchable","content":"nullam varius nulla facilisi cras non velit nec nisi vulputate","images":"http://dummyimage.com/120x123.jpg/5fa2dd/ffffff","post_attaboys":94,"total_comments":20,"slug":"Universal"},
{"id":19,"post_author":3,"title":"Total","content":"erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam","images":"http://dummyimage.com/114x221.png/ff4444/ffffff","post_attaboys":32,"total_comments":20,"slug":"focus group"},
{"id":20,"post_author":9,"title":"Synergistic","content":"ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet","images":"http://dummyimage.com/137x242.jpg/5fa2dd/ffffff","post_attaboys":18,"total_comments":89,"slug":"intangible"}]);
    });
};
