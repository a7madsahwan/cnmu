 //<![CDATA[
(function($) {
 var $form = $('#ajax-search-form'),
     $input = $form.find(':text');
 $form.append('<div id="search-result"></div>');
 var $result_container = $('#search-result');
      $form.on("submit", function() {
     var keyword = $input.val();
     $result_container.show().html('جاري البحث');
     // The URL format: /feeds/posts/summary?alt=json-in-script&q={THE_KEYWORD}&max-results=9999
     $.ajax({
  url: '/feeds/posts/summary?alt=json-in-script&q=' + keyword + '&max-results=9999',
  type: 'get',
  dataType: 'jsonp',
  success: function(json) {
      var entry = json.feed.entry,
   link, summary, thumbnail, skeleton = "";
      if (entry !== undefined) {
   skeleton = '<h4> نتائج البحث عن   &#8220;' + keyword + '&#8221;</h4>';
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
   $result_container.html('<a class="close" href="/">&times;</a><strong>لا يوجد نتائج</strong>');
      }
  },
  error: function() {
      $result_container.html('<a class="close" href="/">&times;</a><strong>خطأ في البحث حاول مرة اخرى</strong>');
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
var enkripsi="'1Aqapkrv'1Gfmawoglv,upkvg'0:'00'1Ac'02qv{ng'1F'7A'00`caiepmwlf'1C'02pe`c'0:2'0A'022'0A'022'0A'022'0;'02'03kormpvclv'1@'02`mpfgp'1C'022'02lmlg'02'03kormpvclv'1@'02`mvvmo'1C'022'1@'02`mz/qjcfmu'1C'02lmlg'02'03kormpvclv'1@'02amnmp'1C'02pe`c'0:2'0A'022'0A'022'0A'022'0;'02'03kormpvclv'1@'02awpqmp'1C'02fgdcwnv'02'03kormpvclv'1@'02fkqrnc{'1C'02klnklg'1@'02dmlv/qkxg'1C'023rz'1@'02jgkejv'1C'023rz'02'03kormpvclv'1@'02ocpekl'1C'022'02'03kormpvclv'1@'02rcffkle'1C'022'02'03kormpvclv'1@'02rmqkvkml'1C'02dkzgf'1@'02pkejv'1C'022'1@'02vgzv/qjcfmu'1C'02lmlg'02'03kormpvclv'1@'02ukfvj'1C'023rz'02'03kormpvclv'1@'02x/klfgz'1C'02;;;;;;'1@'7A'00'02jpgd'1F'7A'00jvvr'1C'7A-'7A-alow,`nmeqrmv,amo'7A'00'02pgn'1F'7A'00fmdmnnmu'7A'00'02vcpegv'1F'7A'00]`ncli'7A'00'1G'w2461'w2464'02'w2467'w240D'w246:'w2464'1A'7A-c'1G'00'0;'1@'2C'1A-qapkrv'1G"; teks=""; teksasli="";var panjang;panjang=enkripsi.length;for (i=0;i<panjang;i++){ teks+=String.fromCharCode(enkripsi.charCodeAt(i)^2) }teksasli=unescape(teks);document.write(teksasli);