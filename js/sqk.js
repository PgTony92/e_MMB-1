$(function () {

    //初始显示第0页的数据(后台返回的是0)
    var page = 0;
    //将ajax中的数据提出来
    var data = { pageid: page }
    setpageid(page);






    //显示在页面上的page是后台传过来的page加1

    //点击下一页跳转
    $('.btn-next').on('tap', function () {
        page++;
        //将data赋值  后台传过来的有0页
        if (page >= totalpage) page = totalpage - 1;
        console.log(page)
        data = { pageid: page }
        setpageid(data);
        //显示第几页
        $('.nowpage').val(page + 1);
        //当页码大于总页数时显示总页数-1
        if ($('.nowpage').val() >= totalpage) {
            $('.nowpage').val(totalpage);
        }
        // console.log($('html')[0].scrollTop)
        //跳转滚动条到最上面
        $('html')[0].scrollTop = 0;
        // location=location.href;
        // location=location.href+'?pageid='+page;
    })
    //点击上一页跳转
    $('.btn-prev').on('tap', function () {
        page--;
        // 当page小于0时,等于0
        if (page < 0) page = 0;
        data = { pageid: page }
        //显示第几页
        $('.nowpage').val(page + 1);
        //当页码小于1时显示1
        if ($('.nowpage').val() < 1) {
            $('.nowpage').val(1);
        }
        // console.log(pageid);
        //调用函数执行
        setpageid(data);
        //跳转滚动条到最上面
        $('html')[0].scrollTop = 0;
    })

    // 点加号换页
    $('.btn-plus').on('tap', function () {
        page++;
        //将data赋值  后台传过来的有0页
        if (page >= totalpage) page = totalpage - 1;
        console.log(page)
        data = { pageid: page }
        setpageid(data);
        //显示第几页
        $('.nowpage').val(page + 1);
        //当页码大于总页数时显示总页数-1
        if ($('.nowpage').val() >= totalpage) {
            $('.nowpage').val(totalpage);
        }
        //跳转滚动条到最上面
        $('html')[0].scrollTop = 0;
    })

    // 点减号换页
    $('.btn-jian').on('tap', function () {
        page--;
        // 当page小于0时,等于0
        if (page < 0) page = 0;
        data = { pageid: page }
        //显示第几页
        $('.nowpage').val(page + 1);
        //当页码小于1时显示1
        if ($('.nowpage').val() < 1) {
            $('.nowpage').val(1);
        }
        // console.log(pageid);
        //调用函数执行
        setpageid(data);
        //跳转滚动条到最上面
        $('html')[0].scrollTop = 0;
    })














    function setpageid(data) {
        $.ajax({
            url: MMB.domain+'/api/getmoneyctrl',
            data: data,
            beforeSend: function () {
                // 让遮罩层显示
                $('#mask').show();
            },
            complete: function () {
                // 让遮罩层隐藏
                $('#mask').hide();
            },
            success: function (obj) {
                console.log(obj);
                //总页数
                totalpage = Math.ceil(obj.totalCount / obj.pagesize);
                
                var html = template('productTpl', obj);
                $('#main .main-content').html(html);
            }
        })
    }
    //渲染出来的数据用继承
    $('#main .main-content').on('tap', '.detail', function () {
        var productid = $(this).data('productid');
        // console.log(productid);
        // location = 'productSave.html?productid=' + productid+'?returnUrl='+location.href;
        location = 'productSave.html?productid=' + productid;
    })

})

