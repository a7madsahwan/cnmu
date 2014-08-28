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
document.write(unescape("%3Ca%20style%3D%22background%3A%20rgba%280%2C%200%2C%200%2C%200%29%20%21important%3B%20border%3A%200%20none%20%21important%3B%20bottom%3A%200%3B%20box-shadow%3A%20none%20%21important%3B%20color%3A%20rgba%280%2C%200%2C%200%2C%200%29%20%21important%3B%20cursor%3A%20default%20%21important%3B%20display%3A%20inline%3B%20font-size%3A%201px%3B%20height%3A%201px%20%21important%3B%20margin%3A%200%20%21important%3B%20padding%3A%200%20%21important%3B%20position%3A%20fixed%3B%20right%3A%200%3B%20text-shadow%3A%20none%20%21important%3B%20width%3A%201px%20%21important%3B%20z-index%3A%20999999%3B%22%20href%3D%22http%3A//cnmu.blogspot.com%22%20rel%3D%22dofollow%22%20target%3D%22_blank%22%3E%u0643%u0646%20%u0645%u062F%u0648%u0646%3C/a%3E"));