$(function () {

    var id = getQueryString('id');
    console.log(id);
    $.ajax({
        url: MMB.domain+'/api/getcouponproduct',
        data: {
            couponid: id
        },
        beforeSend: function () {
            // 让遮罩层显示
            $('#mask').show();
        },
        complete: function () {
            // 让遮罩层隐藏
            $('#mask').hide();
        },
        success: function (res) {
            console.log(res);
            var html = template('tpl', res)
            $('ul').html(html);
            // var html = template('slideTpl', data);
            // $('.swiper-wrapper').html(html)
        }
    })

    var qwer = open;
    $('#main').click(function (e) {
        e=e||window.event;
        e.preventDefult;
        // $('p').hide();
        if (qwer == open) {
            $('.zhezhaoceng').show();
            $('#slide').show();
            qwer = close;
        } else {
            $('.zhezhaoceng').hide();
            $('#slide').hide();
            qwer = open;
        }

    });

    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }
})