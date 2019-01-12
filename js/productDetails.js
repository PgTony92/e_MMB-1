$(function () {
    var search = location.search;
    search = search.substr(1)
    var productid = search.split("=")[1]
    console.log(productid);
    $.ajax({
        url: "http://localhost:9090/api/getproduct",
        data: {
            productid: productid
        },
        success: function (obj) {
            console.log(obj);
            var html = template("getproductTpl", obj);
            $(".header").html(html);
        }
    })
    $.ajax({
        url: "http://localhost:9090/api/getproductcom",
        data: {
            productid: productid
        },
        success: function (obj) {
            console.log(obj);
            var html = template("getproductcomTpl", obj);
            $(".appraise").html(html);
            var categoryid = obj.result[0].categoryId
            console.log(categoryid);

            $(".dianshi").on("tap", function () {
                location = "http://127.0.0.1:5500/productlist.html?categoryid=" + categoryid;
            })
        }
    })

})
// {
//     "result": [{
//         "_id": "5807277b10fa773b5d6d8dc3",
//         "productId": 1,
//         "productName": "乐视TV(Letv) 超3 X55 55英寸智能LED液晶 超级电视 4K超清电视",
//         "productImg": "<img src=\"http://pro.zuyushop.com:8015/ProPic/201510/Thumb/Thumb_201510001104382491.jpg\" alt=\"乐视TV(Letv) 超3 X55 55英寸智能LED液晶 超级电视 4K超清电视\" width=\"170\">",
//         "bjShop": "<table width=\"100%\">                <tbody><tr>                    <td rowspan=\"2\" class=\"p_pic\" valign=\"top\">                        <a href=\"redirect.aspx?webid=1&amp;bjid=200602351&amp;tourl=http://item.jd.com/2009814.html&amp;y=bijia\" target=\"_blank\" onclick=\"trackLog('商品购买','比价页面');\">                            <img src=\"http://sf.manmanbuy.com/images/sitelogo/1.png\"></a>                    </td>                    <td>                        <a href=\"redirect.aspx?webid=1&amp;bjid=200602351&amp;tourl=http://item.jd.com/2009814.html&amp;y=bijia\" target=\"_blank\" onclick=\"trackLog('商品购买','比价页面');\">京东商城</a>                    </td>                    <td class=\"red\">                        ￥3266.00                    </td>                    <td align=\"center\" width=\"60\">                        <span style=\"display: inline-block;width: 56px;height: 24px;border-radius: 6px;text-align: center;line-height: 24px;background-color: #ff5500;color: #fff;font-size: 14px;\">去购买</span>                    </td>                </tr>                <tr class=\"tab2\">                    <td>                    </td>                    <td class=\"r\">                    </td>                    <td></td>                </tr>            </tbody></table>",
//         "categoryId": 0
//     }]
// }

// {
//     "result": [{
//         "_id": "5807279610fa773b5d6d9244",
//         "comId": 5,
//         "comName": "g***n",
//         "comTime": "2016/2/18",
//         "comFrom": "购买自：京东商城",
//         "comContent": "外观：精工细作，颜值再度提高作为一台55寸的大电视，乐视X55正面看起来非常大气，配合Letv独有的造型独特的云底座，整体视觉观感出色。会发光的Letv标识被放置在了机器的左下角，标识右侧，安排有一个圆形的遥控器信号接收区域。乐视X55的边框处理相当讲究，采用了时下智能手机产品上常见的倒角工艺，配合表面的金属拉丝，展现出产品细节上的用心。同时，乐视X55的正面屏幕边框也非常窄，正面边框与屏幕内部黑边的宽度总和近似等于一部普通智能手机的厚度。在成为会员之前，用户对所有高清视频拥有6分钟的试看时间。应用扩展方面，EUI5延续了超级电视一贯的风格，对于一台安卓系统的设备来说，系统中自带电视管家等应用可以进行内存清理等操作，方便实用。总结：超级电视的完善之作智能电视发展的日渐成熟，让智能电视产品本身越来越难以出现具有突破性的亮点，即使是有了超级之名的乐视TV，在实际的使用上，也并没什么真正让人眼前一亮的功能。此时乐视X55出现的意义，我们觉得是更像是对已经在行业占据领先位置的乐视TV的一次完善，出色的显示效果，更加精致的外观，回归实用的遥控器，配合软件上功能全面的EUI系统，乐视X55称的上市超级电视的完善之作。加油吧，京东",
//         "productId": 1,
//         "categoryId": 0
//     }, {
//         "_id": "5807279610fa773b5d6d9245",
//         "comId": 6,
//         "comName": "w***6",
//         "comTime": "2015/12/29",
//         "comFrom": "购买自：乐视tv旗舰店",
//         "comContent": "双12抢的单，14号收到货，速度奇快。特意使用了10来天，对产品有了一点的操控和了解，才来评价! 超级电视超级之处：1，颜值高，整体简洁，窄边框，前面板只有一个Letv的logo指示灯，无其他按键占用面板空间，外观简洁大气，边框做工精细。 2、操作简便，并可启用语音遥控，网络接入速度快，操作系统简洁，一目了然，运行速度相当流畅。 3、内容：乐视自家的视频APP内容相当丰富，科学归类，能快速找到想看的节目，第三方软件安装也方便，即使未登陆乐视会员，也能观看到高清影片及电视直播。 超级电视相对其他电视，有着很大的竞争优势。买这个电视，物有所值",
//         "productId": 1,
//         "categoryId": 0
//     }, {
//         "_id": "5807279610fa773b5d6d9246",
//         "comId": 7,
//         "comName": "j***l",
//         "comTime": "2016/1/24",
//         "comFrom": "购买自：京东商城",
//         "comContent": "电视历经千辛万苦 终于加入了我们的大家庭 刚开始因为外箱没有封口贴 不放心 后来打开才发现是2层包装 里面那层有封口贴 终于一颗心落地 接着说说电视 第一次买乐视电视 还送了28月的会员 一共3599的价格 真是已经很划算了 性价比超高 操作起来对于我们年轻人来说 再简单不过了 页面简单清爽 画质和音质对于一般家庭可以满足 但对于发烧友来讲 略逊一筹 收到的是超级遥控器 用起来很方便 有空鼠和语音 相比传统的遥控要好一些",
//         "productId": 1,
//         "categoryId": 0
//     }, {
//         "_id": "5807279610fa773b5d6d9247",
//         "comId": 8,
//         "comName": "戏***奇",
//         "comTime": "2016/9/27",
//         "comFrom": "购买自：京东商城",
//         "comContent": "乐视的性价比非常高，外观很漂亮，要是能配套云底座就完美了，话说底座价格实在不低，只能老实地安装挂架。开机广告时间不长，还可以接受，系统流畅，资源相对丰富。发热的问题并不严重，感觉无大影响。起初准备买50寸的，后来赶上919活动就买了55寸的，看起来也算大，估计以后标配60+了，另外赠送的会员时长相当给力。预约安装很方便很快捷，一切都很满意。",
//         "productId": 1,
//         "categoryId": 0
//     }, {
//         "_id": "5807279610fa773b5d6d9248",
//         "comId": 9,
//         "comName": "k***a",
//         "comTime": "2016/10/1",
//         "comFrom": "购买自：京东商城",
//         "comContent": "这已经是第二台乐视的，简单的评价下：操作系统的确很棒，非常方便，比家里其他品牌电视好不只几个档次；显示效果跟其他国产品牌没有太大区别，可能还要稍微逊色些；开机速度，还是一如既往的慢，当然家里另一台某创姓电视一样，所以不知道这是不是电视的通病；最后，谈谈性价比吧，记得乐视刚退出电视时，的确比其他电视价格低很多，但现在基本上没太大优势。我只所以再次选择乐视，只是我这个人不喜欢随随便便尝试新的东西。",
//         "productId": 1,
//         "categoryId": 0
//     }]
// }