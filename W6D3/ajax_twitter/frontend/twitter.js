const followToggle = require("./follow_toggle.js");
const usersSearch = require("./users_search.js");

$( () => {
  $(".follow-toggle").each(function(index, button) {
    new followToggle(button);
  });
});

$( () => {
  $(".users-search").each(function(index, user) {
    new usersSearch(user);
  });
});
