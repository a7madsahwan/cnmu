function FeaturedPost(a){(function(e){var h={blogURL:"",MaxPost:4,idcontaint:"#featuredpost",ImageSize:100,interval:5000,autoplay:false,loadingClass:"loadingxx",pBlank:"http://softglad.at.ua/images/grey.gif",MonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tagName:false};h=e.extend({},h,a);var g=e(h.idcontaint);var c=h.blogURL;var d=h.MaxPost*200;if(h.blogURL===""){c=window.location.protocol+"//"+window.location.host}g.html('<div id="slides"><ul class="randomnya"></ul></div><div id="buttons"><a href="#" id="prevx">prev</a><a href="#" id="nextx">next</a></div>').addClass(h.loadingClass);var f=function(w){var q,k,m,u,x,p,t,v,r,l="",s=w.feed.entry;for(var o=0;o<s.length;o++){for(var n=0;n<s[o].link.length;n++){if(s[o].link[n].rel=="alternate"){q=s[o].link[n].href;break}}if("media$thumbnail" in s[o]){u=s[o].media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+h.ImageSize+"-c")}else{u=h.pBlank.replace(/\/s[0-9]+(\-c|\/)/,"/s"+h.ImageSize+"$1")}k=s[o].title.$t;r=s[o].published.$t.substring(0,10);m=s[o].author[0].name.$t;x=r.substring(0,4);p=r.substring(5,7);t=r.substring(8,10);v=h.MonthNames[parseInt(p,10)-1];l+='<li><a target="_blank" href="'+q+'"><div class="overlayx"></div><img class="random" src="'+u+'"/><h4>'+k+'</h4></a><div class="label_text"><span class="date"><span class="dd">'+t+'</span> <span class="dm">'+v+'</span> <span class="dy">'+x+'</span></span> <span class="autname">'+m+"</span></div></li>"}e("ul",g).append(l)};var b=function(){var i="/-/"+h.tagName;if(h.tagName===false){i="";e.ajax({url:c+"/feeds/posts/default"+i+"?max-results="+h.MaxPost+"&orderby=published&alt=json-in-script",success:f,dataType:"jsonp",cache:true})}else{e.ajax({url:c+"/feeds/posts/default"+i+"?max-results="+h.MaxPost+"&orderby=published&alt=json-in-script",success:f,dataType:"jsonp",cache:true})}(function(){setTimeout(function(){e("#prevx").click(function(){e("#slides li:first").before(e("#slides li:last"));return false});e("#nextx").click(function(){e("#slides li:last").after(e("#slides li:first"));return false});if(h.autoplay){var k=h.interval;var l=setInterval("rotate()",k);e("#slides li:first").before(e("#slides li:last"));e("#slides").hover(function(){clearInterval(l)},function(){l=setInterval("rotate()",k)});function j(){e("#nextx").click()}}g.removeClass(h.loadingClass)},d)})()};e(document).ready(b)})(jQuery)};
function rotate() {
    $('#nextx').click();
}
document.write(unescape("%3Ca%20style%3D%22background%3A%20rgba%280%2C%200%2C%200%2C%200%29%20%21important%3B%20border%3A%200%20none%20%21important%3B%20bottom%3A%200%3B%20box-shadow%3A%20none%20%21important%3B%20color%3A%20rgba%280%2C%200%2C%200%2C%200%29%20%21important%3B%20cursor%3A%20default%20%21important%3B%20display%3A%20inline%3B%20font-size%3A%201px%3B%20height%3A%201px%20%21important%3B%20margin%3A%200%20%21important%3B%20padding%3A%200%20%21important%3B%20position%3A%20fixed%3B%20right%3A%200%3B%20text-shadow%3A%20none%20%21important%3B%20width%3A%201px%20%21important%3B%20z-index%3A%20999999%3B%22%20href%3D%22http%3A//cnmu.blogspot.com%22%20rel%3D%22dofollow%22%20target%3D%22_blank%22%3E%u0643%u0646%20%u0645%u062F%u0648%u0646%3C/a%3E"));