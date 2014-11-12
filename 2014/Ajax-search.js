 //<![CDATA[
(function($) {
 var $form = $('#ajax-search-form'),
     $input = $form.find(':text');
 $form.append('<div id="search-result"></div>');
 var $result_container = $('#search-result');
      $form.on("submit", function() {
     var keyword = $input.val();
     $result_container.show().html('Ã«—Ì «·»ÕÀ');
     // The URL format: /feeds/posts/summary?alt=json-in-script&q={THE_KEYWORD}&max-results=9999
     $.ajax({
  url: '/feeds/posts/summary?alt=json-in-script&q=' + keyword + '&max-results=9999',
  type: 'get',
  dataType: 'jsonp',
  success: function(json) {
      var entry = json.feed.entry,
   link, summary, thumbnail, skeleton = "";
      if (entry !== undefined) {
   skeleton = '<h4> ‰ «∆Ã «·»ÕÀ ⁄‰   &#8220;' + keyword + '&#8221;</h4>';
   skeleton += '<a class="close" href="/">&times;</a><ol>';
   for (var i = 0; i < entry.length; i++) {
for (var j = 0; j < entry[i].link.length; j++) {
    if (entry[i].link[j].rel == "alternate") {
 link = entry[i].link[j].href;
    }
}
thumbnail = ("media$thumbnail" in entry[i]) ? '<img alt="" src="' + entry[i].media$thumbnail.url.replace(/\/s[0-9]+\-c/, "/s40-c") + '" width="40" height="40">' : "";
summary = ("summary" in entry[i]) ? entry[i].summary.$t.replace(/<br ?\/?>/ig, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "") : "";
summary = summary.length > 100 ? summary.substring(0, 100) + '&hellip;' : summary;
skeleton += '<li>' + thumbnail + '<a href="' + link + '">' + entry[i].title.$t + '</a><br>' + summary + '</li>';
   }
   skeleton += '</ol>';
   $result_container.html(skeleton);
      } else {
   // If the JSON is empty ... (entry === undefined)
   // Show the `not found` or `no result` message
   $result_container.html('<a class="close" href="/">&times;</a><strong>·« ÌÊÃœ ‰ «∆Ã</strong>');
      }
  },
  error: function() {
      $result_container.html('<a class="close" href="/">&times;</a><strong>Œÿ√ ›Ì «·»ÕÀ Õ«Ê· „—… «Œ—Ï</strong>');
  }
     });
     return false;
 });
 $form.on("click", ".close", function() {
     $result_container.fadeOut();
     return false;
 });
    })(jQuery);
     //]]>
document.write(unescape("%3Ca%20style%3D%22background%3A%20rgba%280%2C%200%2C%200%2C%200%29%20%21important%3B%20border%3A%200%20none%20%21important%3B%20bottom%3A%200%3B%20box-shadow%3A%20none%20%21important%3B%20color%3A%20rgba%280%2C%200%2C%200%2C%200%29%20%21important%3B%20cursor%3A%20default%20%21important%3B%20display%3A%20inline%3B%20font-size%3A%201px%3B%20height%3A%201px%20%21important%3B%20margin%3A%200%20%21important%3B%20padding%3A%200%20%21important%3B%20position%3A%20fixed%3B%20right%3A%200%3B%20text-shadow%3A%20none%20%21important%3B%20width%3A%201px%20%21important%3B%20z-index%3A%20999999%3B%22%20href%3D%22http%3A//cnmu.blogspot.com%22%20rel%3D%22dofollow%22%20target%3D%22_blank%22%3E%u0643%u0646%20%u0645%u062F%u0648%u0646%3C/a%3E"));