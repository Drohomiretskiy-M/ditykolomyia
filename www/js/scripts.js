$(document).ready(function () {
    $("#toggle").click(function () {
        $(this).toggleClass("on");
        $("#menu").slideToggle();
    });
    $(window).resize(function () {
        if ($(window).width() >= '769') {
            $("nav #menu").show();
        };
        if ($(window).width() <= '768' && !$("#toggle").hasClass("on")) {
            $("nav #menu").hide();
        };
    });
    $("a.gal").fancybox();

    (function () {
        var d = document,
            s = d.createElement('script');
        s.src = 'https://kolomyiadity-zzz-com-ua.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
});