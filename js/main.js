$(document).ready(function() {
  // place focus into form
  $("#search-box").focus();

  var searchQuery = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=20&callback=?&search=";

  // key press handler
  $("#search-box").keypress(function(e) {
    if (e.which == 13) {
      searchWiki();
    }
  });

  // delete search box contents on 'esc' key pressing
  $(document).keypress(function(e) {
    if (e.keyCode == 27) {
      $("#search-box").val("");
    }
  });

  // search button handler
  $("#search-btn").click(searchWiki);

  // search and display results
  function searchWiki() {
    // remove previous search results
    $(".result").remove();

    // get user input
    var searchTerm = $("#search-box").val();

    // wikipedia search
    $.getJSON(searchQuery + searchTerm, function(data) {
      // if no results found
      if (data[1].length === 0) {
        console.log("no results");
        $("#results-wrapper").append("<h4 class='result'>Sorry, no results found!</h4>");
      }
      for (var i = 0; i < data[1].length; i++) {
        var html = "<div class='result'><a href='https://en.wikipedia.org/wiki/";
        html += data[1][i]; // add title
        html += "' target='_blank'><h4>";
        html += data[1][i] + "</h4>";
        html += "<p>" + data[2][i] + "</p>";
        html += "</a><div class='line-separator'></div></div>";
        $("#results-wrapper").append(html);
      }
    });
  }
});
