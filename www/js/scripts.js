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

$(document).ready(function () {
    $("a.gal").fancybox({
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Фото ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });
});