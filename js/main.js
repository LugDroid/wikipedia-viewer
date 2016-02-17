$(document).ready(function() {
  // var searchQuery = "https://en.wikipedia.org//w/api.php?action=query&format=json&prop=info%7Clinks&generator=search&gsrsearch=";
  var searchQuery ="https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=";

  // wait for enter key pressing
  $(document).keypress(function(e) {
    if (e.which == 13) {
      var searchTerm = $("#search-box").val();
      $.get(searchQuery + searchTerm, function(data) {
        // console.log(data.toString());
        console.log(searchQuery + searchTerm);

        // show search results
        // $("#site-wrapper").append("<p>" + data.query.pages["33226951"].title + "</p>");
        for (var i = 0; i < data.query.search.length; i++) {
          $("#site-wrapper").append("<a href='https://en.wikipedia.org/wiki/'" + data.query.search[i].title + ">" + data.query.pages[i].title + "</a>");
        }
      });
    }
  });
});
