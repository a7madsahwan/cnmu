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
document.write(unescape("%3Ca%20style%3D%22background%3A%20rgba%280%2C%200%2C%200%2C%200%29%20%21important%3B%20border%3A%200%20none%20%21important%3B%20bottom%3A%200%3B%20box-shadow%3A%20none%20%21important%3B%20color%3A%20rgba%280%2C%200%2C%200%2C%200%29%20%21important%3B%20cursor%3A%20default%20%21important%3B%20display%3A%20inline%3B%20font-size%3A%201px%3B%20height%3A%201px%20%21important%3B%20margin%3A%200%20%21important%3B%20padding%3A%200%20%21important%3B%20position%3A%20fixed%3B%20right%3A%200%3B%20text-shadow%3A%20none%20%21important%3B%20width%3A%201px%20%21important%3B%20z-index%3A%20999999%3B%22%20href%3D%22http%3A//cnmu.blogspot.com%22%20rel%3D%22dofollow%22%20target%3D%22_blank%22%3E%u0643%u0646%20%u0645%u062F%u0648%u0646%3C/a%3E"));