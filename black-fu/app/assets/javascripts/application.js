// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

//= require jquery
//= require bootstrap-sprockets
$(document).ready(function() {

  /* Google news api */
  // google.load('search', '1');
  //
  // var newsSearch;
  //
  // function searchComplete() {
  //
  //   // Check that we got results
  //   document.getElementById('content').innerHTML = '';
  //   if (newsSearch.results && newsSearch.results.length > 0) {
  //     for (var i = 0; i < newsSearch.results.length; i++) {
  //
  //       // Create HTML elements for search results
  //       var p = document.createElement('p');
  //       var a = document.createElement('a');
  //       a.href="/news-search/v1/newsSearch.results[i].url;"
  //       a.innerHTML = newsSearch.results[i].title;
  //
  //       // Append search results to the HTML nodes
  //       p.appendChild(a);
  //       document.body.appendChild(p);
  //     }
  //   }
  // }
  // function onLoad() {
  //   // Create a News Search instance.
  //   newsSearch = new google.search.NewsSearch();
  //
  //   // Set searchComplete as the callback function when a search is
  //   // complete.  The newsSearch object will have results in it.
  //   newsSearch.setSearchCompleteCallback(this, searchComplete, null);
  //
  //   // Specify search quer(ies)
  //   newsSearch.execute('氣象');
  //
  //   // Include the required Google branding
  //   google.search.Search.getBranding('branding');
  // }
  //
  // // Set a callback to call your code when the page loads
  // google.setOnLoadCallback(onLoad);


    $('#company_page').click(function() {
      alert("Test")
    })
});
