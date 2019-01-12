queryProduct();
var mm =new MMB();
console.log(mm.getIndexMenu());

var gallery = mui('.mui-slider');
gallery.slider({
  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
});
// querycol();

function queryProduct() {
    $.ajax({
        url: MMB.domain+'/api/getmoneyctrl',
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
            // 2. 调用模板
            var html = template('moneyCtrlTpl', res);
            // 3. 把列渲染到商品列表 的 mui-row里面
            $('.productBox').html(html);
           
        }
    });
}

function querycol() {
    $.ajax({
        url: MMB.domain+'/api/getmoneyctrl',
        success: function (res) {
            console.log(res);
            // 2. 调用模板
            var html = template('moneyCtrlTplwidth', res);
            // 3. 把列渲染到商品列表 的 mui-row里面
            $('.productBox').html(html);
           
        }
    });
}
$('.menuList .hide').hide();
$('.menuList .more').on('click',function(){
    $('.menuList .hide').toggle();
})

var key=open;
$('.list-toggle').on('click',function(){
   
    if(key==open){
        querycol();
        $(this).addClass('fa-bars').removeClass('fa-table');
        key=close;
    }else{
        queryProduct();
        $(this).addClass('fa-table').removeClass('fa-bars');
        key=open;
    }
       
})






