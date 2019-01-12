

    function sum() {
        $.ajax({
            url: MMB.domain+'/api/getcoupon',
            data: {
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
                var html = template('tpl', res);
                $('.swiper-wrapper').html(html);
            }
        })
    }
    sum();


    $('#nav .mui-row .mui-col-xs-6').on('tap','a',function(){
        var couponid=$(this).data('id');
        location ="kfc.html?returnUrl="+ couponid;
    })