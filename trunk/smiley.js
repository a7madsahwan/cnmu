//<![CDATA[
function replaceText(){if(!document.getElementById){return;}
bodyText = document.getElementById("comments");
theText = bodyText.innerHTML;
theText = theText.replace(/\[img\].*?'.*?\[\/img\]/gi, "");
theText = theText.replace(/\[y\].*?'.*?\[\/y\]/gi, "");
/* smilies*/
theText = theText.replace(/=q/gi, "<span class='cnmu-smilet' style='background-position: 0 0;' title='=q'>=q</span>");
theText = theText.replace(/=w/gi, "<span class='cnmu-smilet' style='background-position: 0 -30px;' title='=w'>=w</span>");
theText = theText.replace(/=s/gi, "<span class='cnmu-smilet' style='background-position: 0 -60px;' title='=s'>=s</span>");
theText = theText.replace(/=d/gi, "<span class='cnmu-smilet' style='background-position: 0 -90px;' title='=d'>=d</span>");
theText = theText.replace(/=f/gi, "<span class='cnmu-smilet' style='background-position: 0 -120px;' title='=f'>=f</span>");
theText = theText.replace(/=g/gi, "<span class='cnmu-smilet' style='background-position: 0 -150px;' title='=g'>=g</span>");
theText = theText.replace(/=h/gi, "<span class='cnmu-smilet' style='background-position: 0 -180px;' title='=h'>=h</span>");
theText = theText.replace(/=t/gi, "<span class='cnmu-smilet' style='background-position: 0 -210px;' title='=t'>=t</span>");
theText = theText.replace(/=y/gi, "<span class='cnmu-smilet' style='background-position: 0 -240px;' title='=y'>=y</span>");
theText = theText.replace(/=u/gi, "<span class='cnmu-smilet' style='background-position: 0 -270px;' title='=u'>=u</span>");
theText = theText.replace(/=z/gi, "<span class='cnmu-smilet' style='background-position: 0 -300px;' title='=z'>=z</span>");
theText = theText.replace(/=x/gi, "<span class='cnmu-smilet' style='background-position: 0 -330px;' title='=x'>=x</span>");
theText = theText.replace(/=c/gi, "<span class='cnmu-smilet' style='background-position: 0 -360px;' title='=c'>=c</span>");
theText = theText.replace(/=v/gi, "<span class='cnmu-smilet' style='background-position: 0 -390px;' title='=v'>=v</span>");
theText = theText.replace(/=b/gi, "<span class='cnmu-smilet' style='background-position: 0 -420px;' title='=b'>=b</span>");
theText = theText.replace(/=n/gi, "<span class='cnmu-smilet' style='background-position: 0 -450px;' title='=n'>=n</span>");
theText = theText.replace(/=m/gi, "<span class='cnmu-smilet' style='background-position: 0 -480px;' title='=m'>=m</span>");
theText = theText.replace(/=a/gi, "<span class='cnmu-smilet' style='background-position: 0 -510px;' title='=a'>=a</span>");
theText = theText.replace(/=e/gi, "<span class='cnmu-smilet' style='background-position: 0 -540px;' title='=e'>=e</span>");
theText = theText.replace(/=r/gi, "<span class='cnmu-smilet' style='background-position: 0 -570px;' title='=r'>=r</span>");
theText = theText.replace(/=ljj/gi, "<a href='http://cnmu.blogspot.com/p/blog-page.html' target='_blank'>بمحول الأكواد</a>");
bodyText.innerHTML = theText;
}replaceText();

//]]>