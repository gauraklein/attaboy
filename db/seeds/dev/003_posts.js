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
          post_slug: "Horizontal"
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
          post_slug: "concept"
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
          post_slug: "homogeneous"
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
          post_slug: "toolset"
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
          post_slug: "Optimized"
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
          post_slug: "hardware"
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
          post_slug: "heuristic"
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
          post_slug: "eco-centric"
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
          post_slug: "parallelism"
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
          post_slug: "leverage"
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
          post_slug: "national"
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
          post_slug: "knowledge base"
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
          post_slug: "directional"
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
          post_slug: "adapter"
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
          post_slug: "workforce"
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
          post_slug: "logistical"
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
          post_slug: "collaboration"
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
          post_slug: "Object-based"
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
          post_slug: "Ergonomic"
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
          post_slug: "client-driven"
        },
        {"attagory_id":13,"post_author":2,"title":"logistical","content":"orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer","images":"http://dummyimage.com/162x127.jpg/dddddd/000000","post_attaboys":30,"total_comments":19,"post_slug":"migration"},
{"attagory_id":14,"post_author":5,"title":"definition","content":"lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi","images":"http://dummyimage.com/168x186.jpg/dddddd/000000","post_attaboys":57,"total_comments":12,"post_slug":"user-facing"},
{"attagory_id":2,"post_author":5,"title":"exuding","content":"fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc","images":"http://dummyimage.com/188x213.jpg/ff4444/ffffff","post_attaboys":82,"total_comments":39,"post_slug":"value-added"},
{"attagory_id":5,"post_author":4,"title":"hardware","content":"vestibulum ante ipsum primis in faucibus orci luctus et ultrices","images":"http://dummyimage.com/157x156.bmp/5fa2dd/ffffff","post_attaboys":63,"total_comments":69,"post_slug":"Total"},
{"attagory_id":1,"post_author":4,"title":"Re-contextualized","content":"feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna","images":"http://dummyimage.com/135x160.png/ff4444/ffffff","post_attaboys":7,"total_comments":10,"post_slug":"Cloned"},
{"attagory_id":9,"post_author":4,"title":"Intuitive","content":"nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat","images":"http://dummyimage.com/161x128.png/dddddd/000000","post_attaboys":68,"total_comments":37,"post_slug":"Enhanced"},
{"attagory_id":5,"post_author":2,"title":"Up-sized","content":"in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi","images":"http://dummyimage.com/212x191.png/cc0000/ffffff","post_attaboys":23,"total_comments":1,"post_slug":"process improvement"},
{"attagory_id":18,"post_author":9,"title":"tertiary","content":"purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus","images":"http://dummyimage.com/197x117.png/ff4444/ffffff","post_attaboys":93,"total_comments":88,"post_slug":"knowledge user"},
{"attagory_id":16,"post_author":10,"title":"framework","content":"erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla","images":"http://dummyimage.com/132x107.bmp/ff4444/ffffff","post_attaboys":9,"total_comments":92,"post_slug":"interactive"},
{"attagory_id":19,"post_author":6,"title":"analyzer","content":"bibendum felis sed interdum venenatis turpis enim blandit mi in","images":"http://dummyimage.com/102x119.png/cc0000/ffffff","post_attaboys":28,"total_comments":58,"post_slug":"Switchable"},
{"attagory_id":9,"post_author":5,"title":"Multi-tiered","content":"nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque","images":"http://dummyimage.com/197x208.png/cc0000/ffffff","post_attaboys":74,"total_comments":16,"post_slug":"help-desk"},
{"attagory_id":4,"post_author":4,"title":"Graphical User Interface","content":"orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor","images":"http://dummyimage.com/246x121.jpg/5fa2dd/ffffff","post_attaboys":32,"total_comments":69,"post_slug":"mission-critical"},
{"attagory_id":14,"post_author":8,"title":"maximized","content":"ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in","images":"http://dummyimage.com/161x120.jpg/5fa2dd/ffffff","post_attaboys":17,"total_comments":98,"post_slug":"clear-thinking"},
{"attagory_id":3,"post_author":3,"title":"Fully-configurable","content":"lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in","images":"http://dummyimage.com/100x151.png/dddddd/000000","post_attaboys":88,"total_comments":48,"post_slug":"Customer-focused"},
{"attagory_id":7,"post_author":1,"title":"intranet","content":"massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar","images":"http://dummyimage.com/244x238.bmp/dddddd/000000","post_attaboys":75,"total_comments":80,"post_slug":"Optional"},
{"attagory_id":19,"post_author":3,"title":"parallelism","content":"dui maecenas tristique est et tempus semper est quam pharetra magna","images":"http://dummyimage.com/164x247.jpg/cc0000/ffffff","post_attaboys":94,"total_comments":89,"post_slug":"Cross-group"},
{"attagory_id":15,"post_author":7,"title":"functionalities","content":"nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis","images":"http://dummyimage.com/166x201.bmp/5fa2dd/ffffff","post_attaboys":69,"total_comments":49,"post_slug":"benchmark"},
{"attagory_id":17,"post_author":4,"title":"Persevering","content":"nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla","images":"http://dummyimage.com/193x121.jpg/dddddd/000000","post_attaboys":69,"total_comments":96,"post_slug":"incremental"},
{"attagory_id":7,"post_author":1,"title":"3rd generation","content":"diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus","images":"http://dummyimage.com/168x212.png/cc0000/ffffff","post_attaboys":3,"total_comments":86,"post_slug":"Ergonomic"},
{"attagory_id":15,"post_author":2,"title":"Implemented","content":"dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla","images":"http://dummyimage.com/120x135.jpg/cc0000/ffffff","post_attaboys":97,"total_comments":89,"post_slug":"concept"},
{"attagory_id":14,"post_author":9,"title":"utilisation","content":"blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede","images":"http://dummyimage.com/235x246.png/dddddd/000000","post_attaboys":5,"total_comments":62,"post_slug":"secured line"},
{"attagory_id":13,"post_author":2,"title":"Total","content":"viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla","images":"http://dummyimage.com/110x194.jpg/cc0000/ffffff","post_attaboys":52,"total_comments":3,"post_slug":"didactic"},
{"attagory_id":2,"post_author":8,"title":"definition","content":"volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas","images":"http://dummyimage.com/250x192.png/dddddd/000000","post_attaboys":83,"total_comments":54,"post_slug":"national"},
{"attagory_id":2,"post_author":1,"title":"maximized","content":"at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non","images":"http://dummyimage.com/177x187.jpg/dddddd/000000","post_attaboys":17,"total_comments":49,"post_slug":"adapter"},
{"attagory_id":11,"post_author":2,"title":"Configurable","content":"nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget","images":"http://dummyimage.com/221x198.jpg/cc0000/ffffff","post_attaboys":59,"total_comments":1,"post_slug":"solution-oriented"},
{"attagory_id":10,"post_author":7,"title":"matrix","content":"ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar","images":"http://dummyimage.com/234x184.png/5fa2dd/ffffff","post_attaboys":42,"total_comments":61,"post_slug":"intermediate"},
{"attagory_id":7,"post_author":3,"title":"Devolved","content":"ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit","images":"http://dummyimage.com/210x217.png/dddddd/000000","post_attaboys":12,"total_comments":77,"post_slug":"even-keeled"},
{"attagory_id":1,"post_author":10,"title":"hub","content":"id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada","images":"http://dummyimage.com/155x118.png/5fa2dd/ffffff","post_attaboys":97,"total_comments":43,"post_slug":"knowledge user"},
{"attagory_id":11,"post_author":4,"title":"Balanced","content":"sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede","images":"http://dummyimage.com/174x158.png/5fa2dd/ffffff","post_attaboys":52,"total_comments":61,"post_slug":"Reactive"},
{"attagory_id":11,"post_author":3,"title":"explicit","content":"pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed","images":"http://dummyimage.com/224x208.jpg/ff4444/ffffff","post_attaboys":7,"total_comments":95,"post_slug":"real-time"},
{"attagory_id":16,"post_author":3,"title":"algorithm","content":"curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi","images":"http://dummyimage.com/196x144.png/cc0000/ffffff","post_attaboys":64,"total_comments":39,"post_slug":"fault-tolerant"},
{"attagory_id":19,"post_author":3,"title":"support","content":"eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat","images":"http://dummyimage.com/182x242.jpg/cc0000/ffffff","post_attaboys":11,"total_comments":41,"post_slug":"analyzer"},
{"attagory_id":8,"post_author":9,"title":"Cross-group","content":"euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam","images":"http://dummyimage.com/133x170.bmp/ff4444/ffffff","post_attaboys":79,"total_comments":54,"post_slug":"zero administration"},
{"attagory_id":1,"post_author":2,"title":"Self-enabling","content":"morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit","images":"http://dummyimage.com/158x244.jpg/ff4444/ffffff","post_attaboys":32,"total_comments":66,"post_slug":"bifurcated"},
{"attagory_id":5,"post_author":8,"title":"Right-sized","content":"sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula","images":"http://dummyimage.com/179x161.jpg/dddddd/000000","post_attaboys":79,"total_comments":14,"post_slug":"utilisation"},
{"attagory_id":7,"post_author":1,"title":"discrete","content":"phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing","images":"http://dummyimage.com/187x145.png/cc0000/ffffff","post_attaboys":69,"total_comments":88,"post_slug":"open architecture"},
{"attagory_id":3,"post_author":10,"title":"Horizontal","content":"nunc purus phasellus in felis donec semper sapien a libero","images":"http://dummyimage.com/231x156.jpg/dddddd/000000","post_attaboys":47,"total_comments":65,"post_slug":"throughput"},
{"attagory_id":20,"post_author":1,"title":"Managed","content":"in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum","images":"http://dummyimage.com/100x122.bmp/5fa2dd/ffffff","post_attaboys":67,"total_comments":40,"post_slug":"moderator"},
{"attagory_id":15,"post_author":1,"title":"high-level","content":"sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus","images":"http://dummyimage.com/200x188.png/5fa2dd/ffffff","post_attaboys":46,"total_comments":68,"post_slug":"Customer-focused"},
{"attagory_id":5,"post_author":6,"title":"interactive","content":"diam vitae quam suspendisse potenti nullam porttitor lacus at turpis","images":"http://dummyimage.com/172x158.png/cc0000/ffffff","post_attaboys":12,"total_comments":80,"post_slug":"analyzer"},
{"attagory_id":8,"post_author":2,"title":"maximized","content":"ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus","images":"http://dummyimage.com/123x239.png/dddddd/000000","post_attaboys":46,"total_comments":10,"post_slug":"middleware"},
{"attagory_id":10,"post_author":2,"title":"middleware","content":"ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus","images":"http://dummyimage.com/122x250.bmp/5fa2dd/ffffff","post_attaboys":84,"total_comments":92,"post_slug":"open system"},
{"attagory_id":10,"post_author":3,"title":"internet solution","content":"vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum","images":"http://dummyimage.com/240x161.png/ff4444/ffffff","post_attaboys":53,"total_comments":61,"post_slug":"Stand-alone"},
{"attagory_id":10,"post_author":5,"title":"Object-based","content":"congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut","images":"http://dummyimage.com/187x224.jpg/ff4444/ffffff","post_attaboys":22,"total_comments":73,"post_slug":"hierarchy"},
{"attagory_id":19,"post_author":6,"title":"User-friendly","content":"cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus","images":"http://dummyimage.com/236x205.bmp/dddddd/000000","post_attaboys":42,"total_comments":88,"post_slug":"Business-focused"},
{"attagory_id":3,"post_author":5,"title":"Virtual","content":"vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa","images":"http://dummyimage.com/136x175.jpg/dddddd/000000","post_attaboys":13,"total_comments":87,"post_slug":"ability"},
{"attagory_id":4,"post_author":1,"title":"Open-architected","content":"luctus ultricies eu nibh quisque id justo sit amet sapien dignissim","images":"http://dummyimage.com/109x157.jpg/ff4444/ffffff","post_attaboys":25,"total_comments":88,"post_slug":"architecture"},
{"attagory_id":10,"post_author":5,"title":"contextually-based","content":"adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis","images":"http://dummyimage.com/213x180.jpg/ff4444/ffffff","post_attaboys":14,"total_comments":6,"post_slug":"intranet"},
{"attagory_id":5,"post_author":8,"title":"Graphic Interface","content":"nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim","images":"http://dummyimage.com/116x238.png/cc0000/ffffff","post_attaboys":25,"total_comments":37,"post_slug":"portal"},
{"attagory_id":16,"post_author":4,"title":"Re-contextualized","content":"ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla","images":"http://dummyimage.com/187x215.jpg/5fa2dd/ffffff","post_attaboys":41,"total_comments":56,"post_slug":"clear-thinking"},
{"attagory_id":7,"post_author":9,"title":"definition","content":"et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis","images":"http://dummyimage.com/107x211.png/dddddd/000000","post_attaboys":15,"total_comments":3,"post_slug":"methodology"},
{"attagory_id":16,"post_author":2,"title":"foreground","content":"magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer","images":"http://dummyimage.com/162x111.bmp/ff4444/ffffff","post_attaboys":20,"total_comments":61,"post_slug":"dynamic"},
{"attagory_id":16,"post_author":8,"title":"coherent","content":"a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at","images":"http://dummyimage.com/224x160.bmp/dddddd/000000","post_attaboys":5,"total_comments":36,"post_slug":"Integrated"},
{"attagory_id":16,"post_author":3,"title":"high-level","content":"in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices","images":"http://dummyimage.com/151x203.jpg/cc0000/ffffff","post_attaboys":70,"total_comments":8,"post_slug":"non-volatile"},
{"attagory_id":3,"post_author":3,"title":"portal","content":"posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis","images":"http://dummyimage.com/208x208.png/dddddd/000000","post_attaboys":70,"total_comments":27,"post_slug":"intangible"},
{"attagory_id":9,"post_author":7,"title":"projection","content":"ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui","images":"http://dummyimage.com/141x138.bmp/ff4444/ffffff","post_attaboys":17,"total_comments":5,"post_slug":"groupware"},
{"attagory_id":16,"post_author":4,"title":"Profit-focused","content":"mauris morbi non lectus aliquam sit amet diam in magna","images":"http://dummyimage.com/219x206.jpg/ff4444/ffffff","post_attaboys":6,"total_comments":82,"post_slug":"hub"},
{"attagory_id":3,"post_author":5,"title":"Organic","content":"sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi","images":"http://dummyimage.com/163x206.png/ff4444/ffffff","post_attaboys":66,"total_comments":69,"post_slug":"modular"},
{"attagory_id":2,"post_author":4,"title":"modular","content":"nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede","images":"http://dummyimage.com/167x186.bmp/dddddd/000000","post_attaboys":20,"total_comments":6,"post_slug":"utilisation"},
{"attagory_id":19,"post_author":3,"title":"cohesive","content":"ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu","images":"http://dummyimage.com/116x177.png/dddddd/000000","post_attaboys":49,"total_comments":62,"post_slug":"Robust"},
{"attagory_id":2,"post_author":4,"title":"Synchronised","content":"maecenas leo odio condimentum id luctus nec molestie sed justo","images":"http://dummyimage.com/167x181.png/5fa2dd/ffffff","post_attaboys":29,"total_comments":37,"post_slug":"Robust"},
{"attagory_id":7,"post_author":8,"title":"Configurable","content":"diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt","images":"http://dummyimage.com/240x139.png/dddddd/000000","post_attaboys":16,"total_comments":58,"post_slug":"maximized"},
{"attagory_id":7,"post_author":9,"title":"success","content":"non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit","images":"http://dummyimage.com/196x148.bmp/5fa2dd/ffffff","post_attaboys":66,"total_comments":40,"post_slug":"hierarchy"},
{"attagory_id":19,"post_author":4,"title":"attitude-oriented","content":"sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris","images":"http://dummyimage.com/222x118.bmp/cc0000/ffffff","post_attaboys":5,"total_comments":9,"post_slug":"bottom-line"},
{"attagory_id":10,"post_author":10,"title":"bifurcated","content":"blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula","images":"http://dummyimage.com/167x125.png/ff4444/ffffff","post_attaboys":33,"total_comments":36,"post_slug":"well-modulated"},
{"attagory_id":9,"post_author":3,"title":"matrix","content":"porttitor pede justo eu massa donec dapibus duis at velit eu est congue","images":"http://dummyimage.com/234x209.bmp/dddddd/000000","post_attaboys":60,"total_comments":21,"post_slug":"grid-enabled"},
{"attagory_id":4,"post_author":8,"title":"dedicated","content":"natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor","images":"http://dummyimage.com/211x209.jpg/ff4444/ffffff","post_attaboys":39,"total_comments":83,"post_slug":"Realigned"},
{"attagory_id":2,"post_author":4,"title":"flexibility","content":"sit amet diam in magna bibendum imperdiet nullam orci pede venenatis","images":"http://dummyimage.com/158x174.jpg/dddddd/000000","post_attaboys":51,"total_comments":60,"post_slug":"utilisation"},
{"attagory_id":4,"post_author":9,"title":"empowering","content":"mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit","images":"http://dummyimage.com/208x232.bmp/ff4444/ffffff","post_attaboys":41,"total_comments":23,"post_slug":"Graphic Interface"},
{"attagory_id":5,"post_author":8,"title":"throughput","content":"vel sem sed sagittis nam congue risus semper porta volutpat quam pede","images":"http://dummyimage.com/203x163.png/5fa2dd/ffffff","post_attaboys":64,"total_comments":34,"post_slug":"didactic"},
{"attagory_id":19,"post_author":8,"title":"Focused","content":"tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque","images":"http://dummyimage.com/222x220.jpg/5fa2dd/ffffff","post_attaboys":74,"total_comments":73,"post_slug":"projection"},
{"attagory_id":18,"post_author":6,"title":"radical","content":"eu est congue elementum in hac habitasse platea dictumst morbi","images":"http://dummyimage.com/210x184.png/ff4444/ffffff","post_attaboys":32,"total_comments":18,"post_slug":"support"},
{"attagory_id":8,"post_author":7,"title":"multimedia","content":"primis in faucibus orci luctus et ultrices posuere cubilia curae","images":"http://dummyimage.com/236x230.jpg/dddddd/000000","post_attaboys":39,"total_comments":59,"post_slug":"framework"},
{"attagory_id":13,"post_author":5,"title":"Pre-emptive","content":"nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo","images":"http://dummyimage.com/200x118.bmp/dddddd/000000","post_attaboys":21,"total_comments":42,"post_slug":"Automated"},
{"attagory_id":4,"post_author":7,"title":"core","content":"mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus","images":"http://dummyimage.com/173x248.png/cc0000/ffffff","post_attaboys":4,"total_comments":26,"post_slug":"data-warehouse"},
{"attagory_id":16,"post_author":1,"title":"Multi-lateral","content":"arcu libero rutrum ac lobortis vel dapibus at diam nam tristique","images":"http://dummyimage.com/171x237.bmp/ff4444/ffffff","post_attaboys":32,"total_comments":41,"post_slug":"internet solution"},
{"attagory_id":16,"post_author":4,"title":"Front-line","content":"et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin","images":"http://dummyimage.com/185x223.png/cc0000/ffffff","post_attaboys":75,"total_comments":69,"post_slug":"local"},
{"attagory_id":9,"post_author":2,"title":"Triple-buffered","content":"risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in","images":"http://dummyimage.com/234x133.png/cc0000/ffffff","post_attaboys":8,"total_comments":96,"post_slug":"info-mediaries"},
{"attagory_id":4,"post_author":6,"title":"Expanded","content":"donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim","images":"http://dummyimage.com/105x132.png/ff4444/ffffff","post_attaboys":90,"total_comments":50,"post_slug":"leading edge"},
{"attagory_id":10,"post_author":1,"title":"software","content":"odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus","images":"http://dummyimage.com/178x108.bmp/ff4444/ffffff","post_attaboys":15,"total_comments":82,"post_slug":"methodical"},
{"attagory_id":14,"post_author":2,"title":"Multi-lateral","content":"ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna","images":"http://dummyimage.com/208x113.jpg/ff4444/ffffff","post_attaboys":76,"total_comments":15,"post_slug":"optimizing"},
{"attagory_id":8,"post_author":7,"title":"Graphical User Interface","content":"hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate","images":"http://dummyimage.com/162x104.png/dddddd/000000","post_attaboys":56,"total_comments":43,"post_slug":"reciprocal"},
{"attagory_id":16,"post_author":6,"title":"composite","content":"est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus","images":"http://dummyimage.com/135x180.png/ff4444/ffffff","post_attaboys":22,"total_comments":52,"post_slug":"bi-directional"},
{"attagory_id":11,"post_author":1,"title":"next generation","content":"magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis","images":"http://dummyimage.com/222x132.jpg/5fa2dd/ffffff","post_attaboys":14,"total_comments":33,"post_slug":"bifurcated"},
{"attagory_id":17,"post_author":2,"title":"budgetary management","content":"luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea","images":"http://dummyimage.com/213x156.jpg/dddddd/000000","post_attaboys":2,"total_comments":94,"post_slug":"mobile"},
{"attagory_id":8,"post_author":2,"title":"zero defect","content":"vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit","images":"http://dummyimage.com/208x179.bmp/cc0000/ffffff","post_attaboys":16,"total_comments":72,"post_slug":"collaboration"},
{"attagory_id":20,"post_author":9,"title":"well-modulated","content":"venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue","images":"http://dummyimage.com/177x111.png/cc0000/ffffff","post_attaboys":32,"total_comments":54,"post_slug":"Team-oriented"},
{"attagory_id":4,"post_author":10,"title":"Innovative","content":"in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet","images":"http://dummyimage.com/223x180.png/ff4444/ffffff","post_attaboys":50,"total_comments":8,"post_slug":"monitoring"},
{"attagory_id":12,"post_author":5,"title":"Pre-emptive","content":"vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus","images":"http://dummyimage.com/237x142.png/5fa2dd/ffffff","post_attaboys":54,"total_comments":17,"post_slug":"Optimized"},
{"attagory_id":5,"post_author":7,"title":"optimal","content":"hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat","images":"http://dummyimage.com/162x115.png/ff4444/ffffff","post_attaboys":46,"total_comments":1,"post_slug":"moderator"},
{"attagory_id":19,"post_author":9,"title":"Graphic Interface","content":"et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis","images":"http://dummyimage.com/182x233.bmp/ff4444/ffffff","post_attaboys":77,"total_comments":55,"post_slug":"hardware"},
{"attagory_id":15,"post_author":4,"title":"Synergized","content":"etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus","images":"http://dummyimage.com/227x208.bmp/5fa2dd/ffffff","post_attaboys":100,"total_comments":84,"post_slug":"software"},
{"attagory_id":16,"post_author":3,"title":"open system","content":"libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac","images":"http://dummyimage.com/183x205.bmp/ff4444/ffffff","post_attaboys":91,"total_comments":56,"post_slug":"high-level"},
{"attagory_id":9,"post_author":6,"title":"moratorium","content":"purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat","images":"http://dummyimage.com/250x202.jpg/5fa2dd/ffffff","post_attaboys":82,"total_comments":15,"post_slug":"solution"},
{"attagory_id":11,"post_author":4,"title":"Assimilated","content":"pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer","images":"http://dummyimage.com/250x233.bmp/dddddd/000000","post_attaboys":40,"total_comments":65,"post_slug":"hybrid"},
{"attagory_id":13,"post_author":2,"title":"Cloned","content":"malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem","images":"http://dummyimage.com/150x212.bmp/5fa2dd/ffffff","post_attaboys":81,"total_comments":92,"post_slug":"Profit-focused"},
{"attagory_id":13,"post_author":10,"title":"workforce","content":"rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper","images":"http://dummyimage.com/224x216.bmp/cc0000/ffffff","post_attaboys":39,"total_comments":39,"post_slug":"intranet"},
{"attagory_id":14,"post_author":10,"title":"Adaptive","content":"proin risus praesent lectus vestibulum quam sapien varius ut blandit","images":"http://dummyimage.com/247x206.png/dddddd/000000","post_attaboys":25,"total_comments":94,"post_slug":"Open-source"},
{"attagory_id":1,"post_author":6,"title":"zero tolerance","content":"mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit","images":"http://dummyimage.com/208x198.jpg/cc0000/ffffff","post_attaboys":43,"total_comments":96,"post_slug":"object-oriented"},
{"attagory_id":6,"post_author":10,"title":"bifurcated","content":"non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel","images":"http://dummyimage.com/242x243.png/cc0000/ffffff","post_attaboys":75,"total_comments":26,"post_slug":"moderator"}
      ]);
    });
};
