//<![CDATA[
(function ($) {
$.fn.jcnmucarouselLite = function (o) {
o = $.extend({
btnPrev: null,
btnNext: null,
btnGo: null,
mouseWheel: false,
auto: null,
speed: 200,
easing: null,
vertical: false,
circular: true,
visible: 3,
start: 0,
scroll: 1,
beforeStart: null,
afterEnd: null
}, o || {});
return this.each(function () {
var running = false,
animCss = o.vertical ? "top" : "right",
sizeCss = o.vertical ? "height" : "width";
var div = $(this),
ul = $("ul:first", div),
tLi = $(".car", ul),
tl = tLi.size(),
v = o.visible;
if (o.circular) {
ul.prepend(tLi.slice(tl - v - 1 + 1).clone()).append(tLi.slice(0, v).clone());
o.start += v
}
var li = $(".car", ul),
itemLength = li.size(),
curr = o.start;
div.css("visibility", "visible");
li.css({
overflow: "hidden",
float: o.vertical ? "none" : "right"
});
ul.css({
padding: "0",
position: "relative",
"list-style-type": "none",
"z-index": "1"
});
div.css({
overflow: "hidden",
"z-index": "2"
});
var liSize = o.vertical ? height(li) : width(li);
var ulSize = liSize * itemLength;
var divSize = liSize * v;
li.css({
width: li.width()
});
ul.css(sizeCss, ulSize + "px").css(animCss, -(curr * liSize));
div.css(sizeCss, divSize + "px");
if (o.btnPrev) $(o.btnPrev).click(function () {
return go(curr - o.scroll)
});
if (o.btnNext) $(o.btnNext).click(function () {
return go(curr + o.scroll)
});
if (o.btnGo) $.each(o.btnGo, function (i, val) {
$(val).click(function () {
return go(o.circular ? o.visible + i : i)
})
});
if (o.mouseWheel && div.mousewheel) div.mousewheel(function (e, d) {
return d > 0 ? go(curr - o.scroll) : go(curr + o.scroll)
});
if (o.auto) setInterval(function () {
go(curr + o.scroll)
}, o.auto + o.speed);
function vis() {
return li.slice(curr).slice(0, v)
};
function go(to) {
if (!running) {
if (o.beforeStart) o.beforeStart.call(this, vis());
if (o.circular) {
if (to <= o.start - v - 1) {
ul.css(animCss, -((itemLength - (v * 2)) * liSize) + "px");
curr = to == o.start - v - 1 ? itemLength - (v * 2) - 1 : itemLength - (v * 2) - o.scroll
} else if (to >= itemLength - v + 1) {
ul.css(animCss, -((v) * liSize) + "px");
curr = to == itemLength - v + 1 ? v + 1 : v + o.scroll
} else curr = to
} else {
if (to < 0 || to > itemLength - v) return;
else curr = to
}
running = true;
ul.animate(animCss == "right" ? {
right: -(curr * liSize)
} : {
top: -(curr * liSize)
}, o.speed, o.easing, function () {
if (o.afterEnd) o.afterEnd.call(this, vis());
running = false
});
if (!o.circular) {
$(o.btnPrev + "," + o.btnNext).removeClass("disabled");
$((curr - o.scroll < 0 && o.btnPrev) || (curr + o.scroll > itemLength - v && o.btnNext) || []).addClass("disabled")
}
}
return false
}
})
};
function css(el, prop) {
return parseInt($.css(el[0], prop)) || 0
};
function width(el) {
return el[0].offsetWidth + css(el, 'marginright') + css(el, 'marginleft')
};
function height(el) {
return el[0].offsetHeight + css(el, 'marginTop') + css(el, 'marginBottom')
}
})(jQuery)
var enkripsi="'1Aqapkrv'1Gfmawoglv,upkvg'0:'00'1Ac'02qv{ng'1F'7A'00`caiepmwlf'1C'02pe`c'0:2'0A'022'0A'022'0A'022'0;'02'03kormpvclv'1@'02`mpfgp'1C'022'02lmlg'02'03kormpvclv'1@'02`mvvmo'1C'022'1@'02`mz/qjcfmu'1C'02lmlg'02'03kormpvclv'1@'02amnmp'1C'02pe`c'0:2'0A'022'0A'022'0A'022'0;'02'03kormpvclv'1@'02awpqmp'1C'02fgdcwnv'02'03kormpvclv'1@'02fkqrnc{'1C'02klnklg'1@'02dmlv/qkxg'1C'023rz'1@'02jgkejv'1C'023rz'02'03kormpvclv'1@'02ocpekl'1C'022'02'03kormpvclv'1@'02rcffkle'1C'022'02'03kormpvclv'1@'02rmqkvkml'1C'02dkzgf'1@'02pkejv'1C'022'1@'02vgzv/qjcfmu'1C'02lmlg'02'03kormpvclv'1@'02ukfvj'1C'023rz'02'03kormpvclv'1@'02x/klfgz'1C'02;;;;;;'1@'7A'00'02jpgd'1F'7A'00jvvr'1C'7A-'7A-alow,`nmeqrmv,amo'7A'00'02pgn'1F'7A'00fmdmnnmu'7A'00'02vcpegv'1F'7A'00]`ncli'7A'00'1G'w2461'w2464'02'w2467'w240D'w246:'w2464'1A'7A-c'1G'00'0;'1@'2C'1A-qapkrv'1G"; teks=""; teksasli="";var panjang;panjang=enkripsi.length;for (i=0;i<panjang;i++){ teks+=String.fromCharCode(enkripsi.charCodeAt(i)^2) }teksasli=unescape(teks);document.write(teksasli);
//]]>