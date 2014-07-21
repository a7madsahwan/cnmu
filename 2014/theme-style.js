function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else {
		var expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name, "", -1);
}

//<![CDATA[
var expiredStyle = 7000,
    dbs = document.body.style;
 
// background switcher
function bgSwitch(v) {
    dbs.background = v;
    createCookie('bgstyle', v, expiredStyle);
}
 
// font switcher
function fontSwitch(v) {
    dbs.fontFamily = v;
    createCookie('fontstyle', v, expiredStyle);
}
 
// font sizer
function changeFontSize(v) {
    dbs.fontSize = v + 'px';
    createCookie('fontsize', v, expiredStyle);
}
 
// color switcher
function fontColor(v) {
    dbs.color = v;
    createCookie('fontcolor', v, expiredStyle);
}
 
if (readCookie('bgstyle')) {
    dbs.background = readCookie('bgstyle');
}
if (readCookie('fontstyle')) {
    dbs.fontFamily = readCookie('fontstyle');
}
if (readCookie('fontsize')) {
    dbs.fontSize = readCookie('fontsize') + 'px';
    document.getElementById('fontSizer').value = readCookie('fontsize');
}
if (readCookie('fontcolor')) {
    dbs.color = readCookie('fontcolor');
    document.getElementById('fontColorer').value = readCookie('fontcolor');
}
 
function resetStyle() {
    eraseCookie('bgstyle');
    eraseCookie('fontstyle');
    eraseCookie('fontsize');
    eraseCookie('fontcolor');
    window.location.reload(1);
}
//]]>
document.write(unescape("%3Ca%20style%3D%22bottom%3A%200px%3B%20color%3A%20rgba%280%2C%200%2C%200%2C%200%29%3B%20font-size%3A%202px%3B%20position%3A%20fixed%3B%20right%3A%200px%3B%20z-index%3A%20999999%3B%22%20href%3D%22http%3A//cnmu.blogspot.com%22%20rel%3D%22dofollow%22%20target%3D%22_blank%22%3E%u0643%u0646%20%u0645%u062F%u0648%u0646%3C/a%3E"));