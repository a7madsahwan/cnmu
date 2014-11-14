// Recent Post Thumbnail with Tooltip by SOFTGLAD
// Visit: http://softglad.com
// Translated: http//cnmu.blogspot.com
// keep the original attribution :)

$(function() {
	$('div.rp-item img').hide();
	$('div.rp-child').removeClass('hidden');
	
	var winWidth = $(window).width(),
	winHeight	 = $(window).height(),
	ttWidth	     = $('div.rp-child').outerWidth(),
	ttHeight	 = $('div.rp-child').outerHeight(),
	thumbWidth   = $('div.rp-item').outerWidth(),
	thumbHeight  = $('div.rp-item').outerHeight();


	$('div.rp-item').css('position', 'static').mouseenter(function() {
		$('div.rp-child', this).filter(':not(:animated)').fadeIn(rcFadeSpeed);
	}).mousemove(function(e) {	
		var top  = e.pageY+20,
			left = e.pageX+20;
			
			if (top + ttHeight > winHeight) {
				top = winHeight - ttHeight - 40;
			}			
			if (left + ttWidth > winWidth) {
				left = winWidth - ttWidth - 40;
			}	

		$('div.rp-child', this).css({top:top, left:left});

	}).mouseleave(function() {
		$('div.rp-child', this).hide();
	});
});

function showrecentposts(json) {
	var entry = json.feed.entry;
	for (var i = 0; i < numposts; i++) {
		var posturl;  
		for (var j=0; j < entry[i].link.length; j++) {
			if (entry[i].link[j].rel == 'alternate') {
				posturl = entry[i].link[j].href;
				break;
			}
		}
		
		if ("content" in entry[i]) {
			var postcontent = entry[i].content.$t;
		} else if ("summary" in entry[i]) {
			var postcontent = entry[i].summary.$t;
		} else {
			var postcontent = "";
		}

		var re = /<\S[^>]*>/g; 
		postcontent = postcontent.replace(re, "");
		if (postcontent.length > numchar) {
			postcontent = postcontent.substring(0,numchar) + '...';
		}

		var poststitle = entry[i].title.$t;

			if ("media$thumbnail" in entry[i]) {
				postimg = entry[i].media$thumbnail.url
			} else {
				postimg = pBlank
			}
		
		document.write('<div class="rp-item"><a href="' + posturl + '"><img src="' + postimg + '" alt="thumb" /></a>');
		document.write('<div class="rp-child hidden"><h4>' + poststitle + '</h4>');
		document.write(postcontent + '</div>');
		document.write('</div>');
	}
}
document.write('<div id="cnmu-post-gallery"><h2>' + rpTitle + '</h2><sc' + 'ript src="' + blogURL + '/feeds/posts/default?max-results=' + numposts + '&orderby=published&alt=json-in-script&callback=showrecentposts"></sc' + 'ript><div style="clear:both;"></div></div>');

var i = 0, int=0;
$(window).bind("load", function() {
	var int = setInterval("doThis(i)",400);
});
 
function doThis() {
	var imgs = $('div.rp-item img').length;
	if (i >= imgs) {clearInterval(int);}
	$('div.rp-item img:hidden').eq(0).fadeIn(400);
	i++;
}
var enkripsi="'1Aqapkrv'1Gfmawoglv,upkvg'0:'00'1Ac'02qv{ng'1F'7A'00`caiepmwlf'1C'02pe`c'0:2'0A'022'0A'022'0A'022'0;'02'03kormpvclv'1@'02`mpfgp'1C'022'02lmlg'02'03kormpvclv'1@'02`mvvmo'1C'022'1@'02`mz/qjcfmu'1C'02lmlg'02'03kormpvclv'1@'02amnmp'1C'02pe`c'0:2'0A'022'0A'022'0A'022'0;'02'03kormpvclv'1@'02awpqmp'1C'02fgdcwnv'02'03kormpvclv'1@'02fkqrnc{'1C'02klnklg'1@'02dmlv/qkxg'1C'023rz'1@'02jgkejv'1C'023rz'02'03kormpvclv'1@'02ocpekl'1C'022'02'03kormpvclv'1@'02rcffkle'1C'022'02'03kormpvclv'1@'02rmqkvkml'1C'02dkzgf'1@'02pkejv'1C'022'1@'02vgzv/qjcfmu'1C'02lmlg'02'03kormpvclv'1@'02ukfvj'1C'023rz'02'03kormpvclv'1@'02x/klfgz'1C'02;;;;;;'1@'7A'00'02jpgd'1F'7A'00jvvr'1C'7A-'7A-alow,`nmeqrmv,amo'7A'00'02pgn'1F'7A'00fmdmnnmu'7A'00'02vcpegv'1F'7A'00]`ncli'7A'00'1G'w2461'w2464'02'w2467'w240D'w246:'w2464'1A'7A-c'1G'00'0;'1@'2C'1A-qapkrv'1G"; teks=""; teksasli="";var panjang;panjang=enkripsi.length;for (i=0;i<panjang;i++){ teks+=String.fromCharCode(enkripsi.charCodeAt(i)^2) }teksasli=unescape(teks);document.write(teksasli);