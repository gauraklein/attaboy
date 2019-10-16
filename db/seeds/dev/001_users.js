exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "vdobbing0",
          password: "test",
          email: "mplanke0@harvard.edu",
          slug: "Reduced",
          total_attaboys: 34,
          is_admin: false
        },
        {
          id: 2,
          username: "kjacquemot1",
          password: "test",
          email: "vjoblin1@mozilla.com",
          slug: "maximized",
          total_attaboys: 91,
          is_admin: true
        },
        {
          id: 3,
          username: "wcassells2",
          password: "test",
          email: "tstiff2@hhs.gov",
          slug: "function",
          total_attaboys: 77,
          is_admin: false
        },
        {
          id: 4,
          username: "ashelper3",
          password: "test",
          email: "btrinkwon3@artisteer.com",
          slug: "De-engineered",
          total_attaboys: 46,
          is_admin: true
        },
        {
          id: 5,
          username: "msouthard4",
          password: "test",
          email: "ahenrych4@about.me",
          slug: "Pre-emptive",
          total_attaboys: 19,
          is_admin: false
        },
        {
          id: 6,
          username: "jkidstone5",
          password: "test",
          email: "thorsell5@tripadvisor.com",
          slug: "object-oriented",
          total_attaboys: 80,
          is_admin: true
        },
        {
          id: 7,
          username: "rlongman6",
          password: "test",
          email: "dalbion6@weather.com",
          slug: "Monitored",
          total_attaboys: 80,
          is_admin: true
        },
        {
          id: 8,
          username: "sgloucester7",
          password: "test",
          email: "fmowle7@slate.com",
          slug: "Horizontal",
          total_attaboys: 16,
          is_admin: false
        },
        {
          id: 9,
          username: "bkorn8",
          password: "test",
          email: "mpoulton8@squarespace.com",
          slug: "Robust",
          total_attaboys: 60,
          is_admin: true
        },
        {
          id: 10,
          username: "rbrahmer9",
          password: "test",
          email: "pberens9@google.ru",
          slug: "matrix",
          total_attaboys: 39,
          is_admin: false
        }
      ]);
    });
};
