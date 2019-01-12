$(function () {
    //页面加载时发送ajax请求数据，渲染到每个分类面板里
    $.ajax({
        url: MMB.domain + '/api/getbrandtitle',
        beforeSend: function () {
            // 让遮罩层显示
            $('#mask').show();
        },
        complete: function () {
            // 让遮罩层隐藏
            $('#mask').hide();
        },
        success: function (data) {
            console.log(data);
            /* 电视数据 */
            var html = template('tvTpl', data);
            $('.mui-table-view.Tv').html(html);
            /* 空调数据 */
            var html = template('airTpl', data);
            $('.mui-table-view.air').html(html);
            /* 影音数据 */
            var html = template('videoTpl', data);
            $('.mui-table-view.video').html(html);
            /* 冰箱数据 */
            var html = template('refrigeratorTpl', data);
            $('.mui-table-view.refrigerator').html(html);
            /* 厨卫数据 */
            var html = template('kitchenTpl', data);
            $('.mui-table-view.kitchen').html(html);
            /* 手机数据 */
            var html = template('mobileTpl', data);
            $('.mui-table-view.mobile').html(html);
            /* 相机数据 */
            var html = template('cameraTpl', data);
            $('.mui-table-view.camera').html(html);

            //点击二级分类的li，将当前分类的id传到详情页
            $('.content .mui-table-view li').on('click', function () {
               var id = $(this).data('id');
               location = 'brand-content.html?brandtitleid=' + id;
            })

            //点击一级分类，显示二级分类，使用滑动效果
            $('.content li>a').on('click',function () { 
                $(this).siblings('.mui-table-view').slideToggle();
             })
            
            
            
            

        }
    })

  






})