$(document).ready(function() {
  // place focus into form
  $("#search-box").focus();

  // var searchQuery = "https://en.wikipedia.org//w/api.php?action=query&format=json&prop=info%7Clinks&generator=search&gsrsearch=";
  var searchQuery ="https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=";

  // wait for enter key pressing
  $(document).keypress(function(e) {
    if (e.which == 13) {
      // remove previous search results
      $(".result").remove();

      // get user input
      var searchTerm = $("#search-box").val();

      // wikipedia search
      $.get(searchQuery + searchTerm, function(data) {
        for (var i = 0; i < data.query.search.length; i++) {
          var html = "<div class='result'><a href='https://en.wikipedia.org/wiki/";
          html += data.query.search[i].title;
          html += "' target='_blank'><h4>";
          html += data.query.search[i].title + "</h4>";
          html += "<p>" + data.query.search[i].snippet + "</p>";
          html += "</a></div>";
          $("#results-wrapper").append(html);
          // $("#results-wrapper").append("<p><a href='https://en.wikipedia.org/wiki/" + data.query.search[i].title + "' target='_blank'>" + data.query.search[i].title + "</a></p>")
        }
      });
    }
  });

  $(document).keypress(function(e) {
    if (e.which == 27) {
      console.log("esc");
      $("#search-box").val("");
    }
  });
});
