$.ajax({
    url: ''+url_blog+'/feeds/posts/default?alt=json-in-script&max-results=' + numpostx + '',
    type: 'get',
    dataType: "jsonp",
    success: function(data) {
        var posturl, posttitle, skeleton = '',
            entry = data.feed.entry;
        if (entry !== undefined) {
            skeleton = "<ul>";
        for (var i = 0; i < entry.length; i++) {
                for (var j=0; j < entry[i].link.length; j++)
                {
                     if (entry[i].link[j].rel == "alternate")
                        {
                            posturl = entry[i].link[j].href;
                            break;
                         }
                }                
            posttitle = entry[i].title.$t;
            skeleton += '<li><a href="' + posturl + '" target="_blank">' + posttitle + '</a></li>';
        }
            skeleton += '</ul>';
            $('#ltsposts').html(skeleton);
            function tick(){
            $('#ltsposts li:first').slideUp( function () { $(this).appendTo($('#ltsposts ul')).slideDown(); });
            }
        setInterval(function(){ tick () }, 5000);
        } else {
            $('#ltsposts').html('<span>·«  ÊÃœ ‰ «∆Ã !</span>');
        }
    },
    error: function() {
            $('#ltsposts').html('<strong>Œÿ√ ›Ì  Õ„Ì· «·Œ·«’«  !</strong>');
       }
});
});
document.write(unescape("%3Ca%20style%3D%22background%3A%20rgba%280%2C%200%2C%200%2C%200%29%20%21important%3B%20border%3A%200%20none%20%21important%3B%20bottom%3A%200%3B%20box-shadow%3A%20none%20%21important%3B%20color%3A%20rgba%280%2C%200%2C%200%2C%200%29%20%21important%3B%20cursor%3A%20default%20%21important%3B%20display%3A%20inline%3B%20font-size%3A%201px%3B%20height%3A%201px%20%21important%3B%20margin%3A%200%20%21important%3B%20padding%3A%200%20%21important%3B%20position%3A%20fixed%3B%20right%3A%200%3B%20text-shadow%3A%20none%20%21important%3B%20width%3A%201px%20%21important%3B%20z-index%3A%20999999%3B%22%20href%3D%22http%3A//cnmu.blogspot.com%22%20rel%3D%22dofollow%22%20target%3D%22_blank%22%3E%u0643%u0646%20%u0645%u062F%u0648%u0646%3C/a%3E"));