$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 ,
        indicators: false, //是否显示滚动条
      });
  var id=getQueryString('id');


    $.ajax({
        url:MMB.domain+'/api/getdiscountproduct',
        beforeSend: function () {
            // 让遮罩层显示
            $('#mask').show();
        },
        complete: function () {
            // 让遮罩层隐藏
            $('#mask').hide();
        },
        data:{
            productid:id,
        },
        success:function(data){
           console.log(data);
        var html=template('producktpl',data);
        $('#main .content').html(html);
        }

    });
 // $('.back').on('click',function(){
 //     location="discount.html";
 // })
 function getQueryString(name) {
     var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
     var r = window.location.search.substr(1).match(reg);
     if (r != null) {
         return unescape(r[2]);
     }
     return null;
 }
})