$('article').hover(function () {
       $(this).find('img').css({
            transform: 'scale(1.02)'
        });
    },

    function () {
        $('img').css({
            transform: 'scale(1)'
        });
    }


);