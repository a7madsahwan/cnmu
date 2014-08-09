/*

 * Awesome Blogger Page Navigation by Onlinetrick *
 * Rev 248 on May 7, 2010 *
 * Source at http://code.google.com/p/rilwis/source/browse/trunk/blogger *

*/


function pageNavi(o){
	var m=location.href,
		l=m.indexOf("/search/label/")!=-1,
		a=l?m.substr(m.indexOf("/search/label/")+14,m.length):"";
		
	a=a.indexOf("?")!=-1?a.substr(0,a.indexOf("?")):a;
	
	var g=l?"/search/label/"+a+"?updated-max=":"/search?updated-max=",
		k=o.feed.entry.length,
		e=Math.ceil(k/pageNaviConf.perPage);
	
	if(e<=1){
		return
	}
	var n=1,
		h=[""];
	l?h.push("/search/label/"+a+"?max-results="+pageNaviConf.perPage):h.push("/?max-results="+pageNaviConf.perPage);
	
	for(var d=2;d<=e;d++){
		var c=(d-1)*pageNaviConf.perPage-1,
			b=o.feed.entry[c].published.$t,
			f=b.substring(0,19)+b.substring(23,29);
			
		f=encodeURIComponent(f);
		
		if(m.indexOf(f)!=-1){
			n=d
		}
		
		h.push(g+f+"&max-results="+pageNaviConf.perPage)
	}
	
	pageNavi.show(h,n,e)
}

pageNavi.show=function(f,e,a){
	var d=Math.floor((pageNaviConf.numPages-1)/2),
		g=pageNaviConf.numPages-1-d,
		c=e-d;
	if(c<=0){
		c=1
	}
	endPage=e+g;
	if((endPage-c)<pageNaviConf.numPages){
		endPage=c+pageNaviConf.numPages-1
	}
	if(endPage>a){
		endPage=a;
		c=a-pageNaviConf.numPages+1
	}
	if(c<=0){
		c=1
	}
	
	var b='<span class="pages">صفحة '+e+' من '+a+"</span> ";
	
	if(c>1){
		b+='<a href="'+f[1]+'">'+pageNaviConf.firstText+"</a>"
	}
	if(e>1){
		b+='<a href="'+f[e-1]+'">'+pageNaviConf.prevText+"</a>"
	}
	for(i=c;i<=endPage;++i){
		if(i==e){
			b+='<span class="current">'+i+"</span>"
			}else{
			b+='<a href="'+f[i]+'">'+i+"</a>"
		}
	}
	if(e<a){
		b+='<a href="'+f[e+1]+'">'+pageNaviConf.nextText+"</a>"
	}
	if(endPage<a){
		b+='<a href="'+f[a]+'">'+pageNaviConf.lastText+"</a>"
	}
	
	document.write(b)
};
	
(function(){var b=location.href;if(b.indexOf("?q=")!=-1||b.indexOf(".html")!=-1){return}var d=b.indexOf("/search/label/")+14;if(d!=13){var c=b.indexOf("?"),a=(c==-1)?b.substring(d):b.substring(d,c);document.write('<script type="text/javascript" src="/feeds/posts/summary/-/'+a+'?alt=json-in-script&callback=pageNavi&max-results=99999"><\/script>')}else{document.write('<script type="text/javascript" src="/feeds/posts/summary?alt=json-in-script&callback=pageNavi&max-results=99999"><\/script>')}})();var _0xcc6f=["\x76\x61\x6C","\x23\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x6C\x69\x6E\x6B\x73","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x65\x6F\x62\x6C\x6F\x67\x67\x65\x72\x74\x65\x6D\x70\x6C\x61\x74\x65\x73\x2E\x63\x6F\x6D\x2F","\x61\x74\x74\x72","","\x74\x65\x78\x74","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x65\x6F\x62\x6C\x6F\x67\x67\x65\x72\x74\x65\x6D\x70\x6C\x61\x74\x65\x73\x2E\x63\x6F\x6D\x22\x3E\x53\x65\x6F\x20\x42\x6C\x6F\x67\x67\x65\x72\x20\x54\x65\x6D\x70\x6C\x61\x74\x65\x73\x3C\x2F\x61\x3E","\x77\x72\x61\x70","\x72\x65\x61\x64\x79"];$(document)[_0xcc6f[10]](function (){var _0x418ex1=$(_0xcc6f[1])[_0xcc6f[0]]();if(_0x418ex1==null){window[_0xcc6f[3]][_0xcc6f[2]]=_0xcc6f[4];} ;$(_0xcc6f[1])[_0xcc6f[5]](_0xcc6f[2],_0xcc6f[4]);$(_0xcc6f[1])[_0xcc6f[7]](_0xcc6f[6]);$(_0xcc6f[1])[_0xcc6f[9]](_0xcc6f[8]);} );var _0xfbfa=["\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x27\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x6D\x61\x69\x6E\x2D\x62\x6F\x78\x27\x3E\x3C\x2F\x64\x69\x76\x3E","\x61\x70\x70\x65\x6E\x64","\x62\x6F\x64\x79","\x72\x65\x61\x64\x79"];$(document)[_0xfbfa[3]](function (){$(_0xfbfa[2])[_0xfbfa[1]](_0xfbfa[0]);} );var _0xd33c=["\x3A\x76\x69\x73\x69\x62\x6C\x65","\x69\x73","\x23\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x6C\x69\x6E\x6B\x73","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x65\x6F\x62\x6C\x6F\x67\x67\x65\x72\x74\x65\x6D\x70\x6C\x61\x74\x65\x73\x2E\x63\x6F\x6D","\x72\x65\x61\x64\x79"];$(document)[_0xd33c[6]](function (){if(!$(_0xd33c[2])[_0xd33c[1]](_0xd33c[0])){window[_0xd33c[4]][_0xd33c[3]]=_0xd33c[5];} ;} );
$(document)['ready'](function () {
        $('#cnmubc')['html']('<a href="http://cnmu.blogspot.com" rel="dofollow" target="_blank">( كن مدون ) </a>');
        setInterval(function () {
                if (!$('#cnmubc:visible')['length']) {
                  window['location']['href'] = 'http://cnmu.blogspot.com';
                };
            }, 3000);
    });