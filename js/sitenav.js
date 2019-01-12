$(function () {
    //页面加载，渲染商品导航数据
    $.ajax({
        url: MMB.domain + '/api/getsitenav',
        success: function (data) {
            var html = template('linkTpl', data);
            $('#main').html(html);
            console.log(data);
            $('#main a').each(function (index,value) {
                if(index<3){
                    value.style.animation='linkTop 1s forwards';
                }else if(index<6){
                    value.style.animation='linkTop 1s .2s forwards';
                }else if(index<9){
                    value.style.animation='linkTop 1s .4s forwards';
                }else if(index<12){
                    value.style.animation='linkTop 1s .6s forwards';
                }else if(index<15){
                    value.style.animation='linkTop 1s .8s forwards';
                }else if(index<18){
                    value.style.animation='linkTop 1s 1s forwards';
                }else if(index<21){
                    value.style.animation='linkTop 1s 1.2s forwards';
                }else if(index<24){
                    value.style.animation='linkTop 1s 1.4s forwards';
                }else if(index<27){
                    value.style.animation='linkTop 1s 1.6s forwards';
                }else if(index<30){
                    value.style.animation='linkTop 1s 1.8s forwards';
                }
             })
            
        }
    })




})