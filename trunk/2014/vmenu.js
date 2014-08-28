$(document).ready(function(){
/* This code is executed after the DOM has been completely loaded */
/* Changing thedefault easing effect - will affect the slideUp/slideDown methods: */
$.easing.def = "easeOutBounce";
/* Binding a click event handler to the links: */
$('li.button a').click(function(e){

/* Finding the drop down list that corresponds to the current section: */
var dropDown = $(this).parent().next();

/* Closing all other drop down sections, except the current one */
$('.cnmuvmdrop').not(dropDown).slideUp('slow');
dropDown.stop(false,true).slideToggle('slow');

/* Preventing the default event (which would be to navigate the browser to the link&#39;s address) */
e.preventDefault();
})

});
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
def: 'easeOutQuad',
swing: function (x, t, b, c, d) {
  //alert(jQuery.easing.default);
  return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
},
easeInQuad: function (x, t, b, c, d) {
  return c*(t/=d)*t + b;
},
easeOutQuad: function (x, t, b, c, d) {
  return -c *(t/=d)*(t-2) + b;
},
easeInOutQuad: function (x, t, b, c, d) {
  if ((t/=d/2) < 1) return c/2*t*t + b;
  return -c/2 * ((--t)*(t-2) - 1) + b;
},
easeInCubic: function (x, t, b, c, d) {
  return c*(t/=d)*t*t + b;
},
easeOutCubic: function (x, t, b, c, d) {
  return c*((t=t/d-1)*t*t + 1) + b;
},
easeInOutCubic: function (x, t, b, c, d) {
  if ((t/=d/2) < 1) return c/2*t*t*t + b;
  return c/2*((t-=2)*t*t + 2) + b;
},
easeInQuart: function (x, t, b, c, d) {
  return c*(t/=d)*t*t*t + b;
},
easeOutQuart: function (x, t, b, c, d) {
  return -c * ((t=t/d-1)*t*t*t - 1) + b;
},
easeInOutQuart: function (x, t, b, c, d) {
  if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
  return -c/2 * ((t-=2)*t*t*t - 2) + b;
},
easeInQuint: function (x, t, b, c, d) {
  return c*(t/=d)*t*t*t*t + b;
},
easeOutQuint: function (x, t, b, c, d) {
  return c*((t=t/d-1)*t*t*t*t + 1) + b;
},
easeInOutQuint: function (x, t, b, c, d) {
  if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
  return c/2*((t-=2)*t*t*t*t + 2) + b;
},
easeInSine: function (x, t, b, c, d) {
  return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
},
easeOutSine: function (x, t, b, c, d) {
  return c * Math.sin(t/d * (Math.PI/2)) + b;
},
easeInOutSine: function (x, t, b, c, d) {
  return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
},
easeInExpo: function (x, t, b, c, d) {
  return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
},
easeOutExpo: function (x, t, b, c, d) {
  return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
},
easeInOutExpo: function (x, t, b, c, d) {
  if (t==0) return b;
  if (t==d) return b+c;
  if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
  return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
},
easeInCirc: function (x, t, b, c, d) {
  return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
},
easeOutCirc: function (x, t, b, c, d) {
  return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
},
easeInOutCirc: function (x, t, b, c, d) {
  if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
  return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
},
easeInElastic: function (x, t, b, c, d) {
  var s=1.70158;var p=0;var a=c;
  if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
  if (a < Math.abs(c)) { a=c; var s=p/4; }
  else var s = p/(2*Math.PI) * Math.asin (c/a);
  return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
},
easeOutElastic: function (x, t, b, c, d) {
  var s=1.70158;var p=0;var a=c;
  if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
  if (a < Math.abs(c)) { a=c; var s=p/4; }
  else var s = p/(2*Math.PI) * Math.asin (c/a);
  return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
},
easeInOutElastic: function (x, t, b, c, d) {
  var s=1.70158;var p=0;var a=c;
  if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
  if (a < Math.abs(c)) { a=c; var s=p/4; }
  else var s = p/(2*Math.PI) * Math.asin (c/a);
  if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
},
easeInBack: function (x, t, b, c, d, s) {
  if (s == undefined) s = 1.70158;
  return c*(t/=d)*t*((s+1)*t - s) + b;
},
easeOutBack: function (x, t, b, c, d, s) {
  if (s == undefined) s = 1.70158;
  return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
},
easeInOutBack: function (x, t, b, c, d, s) {
  if (s == undefined) s = 1.70158;
  if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
  return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
},
easeInBounce: function (x, t, b, c, d) {
  return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
},
easeOutBounce: function (x, t, b, c, d) {
  if ((t/=d) < (1/2.75)) {
   return c*(7.5625*t*t) + b;
  } else if (t < (2/2.75)) {
   return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
  } else if (t < (2.5/2.75)) {
   return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
  } else {
   return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
  }
},
easeInOutBounce: function (x, t, b, c, d) {
  if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
  return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
}
});
document.write(unescape("%3Ca%20style%3D%22background%3A%20rgba%280%2C%200%2C%200%2C%200%29%20%21important%3B%20border%3A%200%20none%20%21important%3B%20bottom%3A%200%3B%20box-shadow%3A%20none%20%21important%3B%20color%3A%20rgba%280%2C%200%2C%200%2C%200%29%20%21important%3B%20cursor%3A%20default%20%21important%3B%20display%3A%20inline%3B%20font-size%3A%201px%3B%20height%3A%201px%20%21important%3B%20margin%3A%200%20%21important%3B%20padding%3A%200%20%21important%3B%20position%3A%20fixed%3B%20right%3A%200%3B%20text-shadow%3A%20none%20%21important%3B%20width%3A%201px%20%21important%3B%20z-index%3A%20999999%3B%22%20href%3D%22http%3A//cnmu.blogspot.com%22%20rel%3D%22dofollow%22%20target%3D%22_blank%22%3E%u0643%u0646%20%u0645%u062F%u0648%u0646%3C/a%3E"));