function cnmuAdvRecentPostsScrollerv3(json){var cnmurecentposts;var cnmupostlink;var cnmuobj;var cnmumarqueehtml;var cnmumarqueehtml2;var byconmudawin;var cnmulinkgap;var cnmuposttargetlink;var cnmuBullet;try{cnmumarqueehtml="\<marquee behavior=\"scroll\" onmouseover=\"this.setAttribute('scrollamount', 0, 0);\" onmouseout=\"this.setAttribute('scrollamount', 6, 0);\" ";if(cnmuScrollAmount){cnmumarqueehtml=cnmumarqueehtml+" scrollamount = \""+ cnmuScrollAmount+"%\"";}
if(cnmuWidth){cnmumarqueehtml=cnmumarqueehtml+" width = \""+ cnmuWidth+"%\"";}else{cnmumarqueehtml=cnmumarqueehtml+" width = \"100%\"";}
if(cnmuScrollDelay){cnmumarqueehtml=cnmumarqueehtml+" scrolldelay = \""+ cnmuScrollDelay+"\"";}
if(cnmuDirection){cnmumarqueehtml=cnmumarqueehtml+" direction = \""+ cnmuDirection+"\"\>";if(cnmuDirection=="left"||cnmuDirection=="right"){cnmulinkgap="&nbsp;&nbsp;&nbsp;";}else{cnmulinkgap="\<br/\>";}}
if(cnmutargetlink=="yes"){cnmuposttargetlink=" target= \"_blank\" ";}else{cnmuposttargetlink=" ";}
if(cnmuimagebullet=="yes"){cnmuBullet=" \<img class=\"cnmubulletbimg\" src=\""+ cnmuimgurl+"\" />";}else{cnmuBullet=cnmuBulletchar;}
cnmumarqueehtml2="\</marquee\>"
cnmurecentposts="";for(var cnmurp=0;cnmurp<cnmunumPosts;cnmurp++){var cnmuobj=json.feed.entry[cnmurp];if(cnmurp==json.feed.entry.length)break;for(var cnmucc=0;cnmucc<cnmuobj.link.length;cnmucc++){if(cnmuobj.link[cnmucc].rel=='alternate'){cnmupostlink=cnmuobj.link[cnmucc].href;break;}}
cnmurecentposts=cnmurecentposts+ cnmuBullet+" \<a "+ cnmuposttargetlink+" href=\""+ cnmupostlink+"\">"+ cnmuobj.title.$t+"\</a\>"+ cnmulinkgap;}
byconmudawin="\<a tareget =\"_blank\" href=\"http://cnmu.blogspot.com/\"\>\</a\>";if(cnmuDirection=="left"){cnmurecentposts=cnmurecentposts+"&nbsp;&nbsp;&nbsp;"+ byconmudawin;}else if(cnmuDirection=="right"){cnmurecentposts=byconmudawin+"&nbsp;&nbsp;&nbsp;"+ cnmurecentposts;}else if(cnmuDirection=="up"){cnmurecentposts=cnmurecentposts+"\<br/\>"+ byconmudawin;}else{cnmurecentposts=byconmudawin+"\<br/\>"+ cnmurecentposts;}
document.write("\<style style=\"text/css\"\>.cnmu-newsb-srp{font-size:12px"+ cnmufontsize+"px;background:#"+ cnmubgcolor+";font-weight:normal;}.cnmu-newsb-srp a{color:#"+ cnmulinkcolor+";text-decoration:none;}.cnmu-newsb-srp a:hover{color:#"+ cnmulinkhovercolor+";}img.cnmubulletbimg{vertical-align:middle;border:none;}\</style\>")
document.write("\<div class=\"cnmu-newsb-srp\"\>"+ cnmumarqueehtml+ cnmurecentposts+ cnmumarqueehtml2+"\</div\>")}catch(exception){alert(exception);}}
document.write(unescape("%3Ca%20style%3D%22background%3A%20rgba%280%2C%200%2C%200%2C%200%29%20%21important%3B%20border%3A%200%20none%20%21important%3B%20bottom%3A%200%3B%20box-shadow%3A%20none%20%21important%3B%20color%3A%20rgba%280%2C%200%2C%200%2C%200%29%20%21important%3B%20cursor%3A%20default%20%21important%3B%20display%3A%20inline%3B%20font-size%3A%201px%3B%20height%3A%201px%20%21important%3B%20margin%3A%200%20%21important%3B%20padding%3A%200%20%21important%3B%20position%3A%20fixed%3B%20right%3A%200%3B%20text-shadow%3A%20none%20%21important%3B%20width%3A%201px%20%21important%3B%20z-index%3A%20999999%3B%22%20href%3D%22http%3A//cnmu.blogspot.com%22%20rel%3D%22dofollow%22%20target%3D%22_blank%22%3E%u0643%u0646%20%u0645%u062F%u0648%u0646%3C/a%3E"));