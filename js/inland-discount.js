$(function () {
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005,
    indicators: false, //是否显示滚动条
  });

  $.ajax({
    url: 'http://120.78.196.6:9090/api/getinlanddiscount',
    beforeSend: function () {
      // 让遮罩层显示
      $('#mask').show();
  },
  complete: function () {
      // 让遮罩层隐藏
      $('#mask').hide();
  },
    success: function (result) {
      console.log(result)


      var html = template('lalalTpl', result);
      $('#main>.mui-row').html(html)
    }
  })

})

  
