$(function(){
    var productid=getQueryString('productid');
    var returnUrl=getQueryString('returnUrl');
    $.ajax({
        url:MMB.domain+'/api/getmoneyctrlproduct',
        beforeSend: function () {
            // 让遮罩层显示
            $('#mask').show();
        },
        complete: function () {
            // 让遮罩层隐藏
            $('#mask').hide();
        },
        data:{
            productid:productid,
        },
        success:function(obj){
            var html=template('productSaveTpl',obj);
            $('#main').html(html);
        }
    })

    $('.return').on('tap',function(){
        $(this).attr('href','javascript:history.go(-1)');
    })
    


    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        // console.log(r); 
        if (r != null) return decodeURI(r[2]);
        return null;
    }
})