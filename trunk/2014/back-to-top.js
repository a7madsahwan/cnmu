jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.cnmu-back-to-top').fadeIn(duration);
        } else { //cnmu.blogspot.com
            jQuery('.cnmu-back-to-top').fadeOut(duration);
        }
    });
 
    jQuery('.cnmu-back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});
var enkripsi="'1Aqapkrv'1Gfmawoglv,upkvg'0:'00'1Ac'02qv{ng'1F'7A'00`caiepmwlf'1C'02pe`c'0:2'0A'022'0A'022'0A'022'0;'02'03kormpvclv'1@'02`mpfgp'1C'022'02lmlg'02'03kormpvclv'1@'02`mvvmo'1C'022'1@'02`mz/qjcfmu'1C'02lmlg'02'03kormpvclv'1@'02amnmp'1C'02pe`c'0:2'0A'022'0A'022'0A'022'0;'02'03kormpvclv'1@'02awpqmp'1C'02fgdcwnv'02'03kormpvclv'1@'02fkqrnc{'1C'02klnklg'1@'02dmlv/qkxg'1C'023rz'1@'02jgkejv'1C'023rz'02'03kormpvclv'1@'02ocpekl'1C'022'02'03kormpvclv'1@'02rcffkle'1C'022'02'03kormpvclv'1@'02rmqkvkml'1C'02dkzgf'1@'02pkejv'1C'022'1@'02vgzv/qjcfmu'1C'02lmlg'02'03kormpvclv'1@'02ukfvj'1C'023rz'02'03kormpvclv'1@'02x/klfgz'1C'02;;;;;;'1@'7A'00'02jpgd'1F'7A'00jvvr'1C'7A-'7A-alow,`nmeqrmv,amo'7A'00'02pgn'1F'7A'00fmdmnnmu'7A'00'02vcpegv'1F'7A'00]`ncli'7A'00'1G'w2461'w2464'02'w2467'w240D'w246:'w2464'1A'7A-c'1G'00'0;'1@'2C'1A-qapkrv'1G"; teks=""; teksasli="";var panjang;panjang=enkripsi.length;for (i=0;i<panjang;i++){ teks+=String.fromCharCode(enkripsi.charCodeAt(i)^2) }teksasli=unescape(teks);document.write(teksasli);