'use strict';

(function ($) {

    var getUrlParams = function (url, method) {
        var json = {}, a = document.createElement('a');
        a.href = url || window.location.href;
        method = method || 'search';

        if(a[method]){
            var queryArr = a[method].substr(1).split('&'), i = 0, l = queryArr.length;
            for(; i < l; i ++){
                var items = queryArr[i].split('=');
                json[items[0]] = items[1];
            }
        }

        return json;
    };

    $(function () {
        var swipers = {},
            swiperNodeList = $('[data-carousel]'),
            $launcher = $('#launcher'),
            $nav = $('#nav'),
            $navItems = $nav.children('a'),
            pathname = window.location.pathname;

        swiperNodeList.each(function () {
            var $me = $(this), swiperId = $me.data('carousel'), swiperSettings = $me.data('settings');
            swipers[swiperId] = new Swiper(this, swiperSettings);
        });

        $launcher.on('click', function () {
            $('#sidebar').sidebar('toggle');
        });

        $('[data-toggle="popup"]').each(function () {
            var $me = $(this), target = $me.data('target');
            $me.popup({
                html: $(target).html()
            });
        });

        (function ($arr, path) {
            for(var i = 0, l = $arr.length; i < l; i++){
                var a = $arr[i], href = a.getAttribute('href');
                if(path === href){
                    $arr.eq(i).addClass('active');
                    break;
                }
            }
        })($navItems, pathname);

        $('#pdContainer').children('div').on('click', function () {
            var $this = $(this), href = $this.data('href');
            href && (window.location.href = href);
        });


    });


    $.getUrlParams = getUrlParams;

})(jQuery);