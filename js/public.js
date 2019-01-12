
(function (w) {
    var MMB = function () {



    }

    // 静态属性,用来获取当前根域名:端口
    MMB.domain = "http://120.78.196.6:9090";

    /**
     * 注意:此方法是静态方法,直接使用构造函数来调用,无须实例化.
     * URL解码方法为:decodeURI
     * 从URL中获取指定key的值,如http://xxxx?name=bulin,传入key,输出bulin
     * @param {*} key 参数:字符串
     * @returns JSON格式
     */
    MMB.getUrlParam = function (key) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return decodeURI(r[2]); return null; //返回参数值
    }

    /**
      * 用来获取首页菜单栏数据
      * @param {*} 无
      * @returns JSON格式
      */
    MMB.prototype.getIndexMenu = function () {
        return axios(`${MMB.domain}/api/getindexmenu`).then(res => {
            return res.data;

        })
    }


    /**
      * 用来获取折扣商品的列表信息
      * @param {*} 无
      * @returns JSON格式
      */
    MMB.prototype.getMoneyCtrl = function () {
        return axios(`${MMB.domain}/api/getmoneyctrl`).then(res => {
            return res.data;

        })
    }

    /**
      * 用来获分类标题
      * @param {*} 无
      * @returns 分类标题 | JSON格式
      */
    MMB.prototype.getCategoryTitle = function () {
        return axios(`${MMB.domain}/api/getcategorytitle`).then(res => {
            return res.data;

        })
    }


    /**
      * 用来获分类标题列表
      * @param {*} id = 分类id | Number类型
      * @returns 分类列表 | JSON格式
      */
    MMB.prototype.getCategory = function (id) {
        return axios(`${MMB.domain}/api/getcategory?titleid=${id}`).then(res => {
            return res.data;

        })
    }

    /**
      * 根据分类id获取分类名称
      * @param {*} id = 分类id | Number类型
      * @returns 分类名称 | JSON格式
      */
    MMB.prototype.getCategoryById = function (id) {
        return axios(`${MMB.domain}/api/getcategorybyid?categoryid=${id}`).then(res => {
            return res.data;

        })
    }

    /**
     * 根据分类id获取商品列表
     * @param {*} id = 分类id | Number类型
     * @returns 商品列表 | JSON格式
     */
    MMB.prototype.getProductList = function (categoryid, pageid) {
        return axios(`${MMB.domain}/api/getproductlist?categoryid=${categoryid}&pageid=${pageid}`).then(res => {
            return res.data;

        })
    }

    /**
    * 获取商品详情
    * @param productid  = 商品id | Number类型
    * @returns 商品详情 | JSON格式
    */
    MMB.prototype.getProduct = function (productid) {
        return axios(`${MMB.domain}/api/getproduct?productid=${productid}`).then(res => {
            return res.data;

        })
    }

    /**
      * 获取商品评论
      * @param productid  = 商品id | Number类型
      * @returns 商品评论 | JSON格式
      */
    MMB.prototype.getProductCom = function (productid) {
        return axios(`${MMB.domain}/api/getproductcom?productid=${productid}`).then(res => {
            return res.data;

        })
    }

    /**
      * 获取省钱控商品列表
      * @param pageid  = 页面id |默认为1,如下所示| Number类型
      * @returns 省钱控商品列表 | JSON格式
      */
    MMB.prototype.getMoneyCtrl = function (pageid = 1) {
        return axios(`${MMB.domain}/api/getmoneyctrl?pageid=${pageid}`).then(res => {
            return res.data;

        })
    }

    /**
     * 获取省钱控商品详情
     * @param productid   = 商品id | Number类型
     * @returns 省钱控商品详情 | JSON格式
     */
    MMB.prototype.getMoneyCtrlProduct = function (productid) {
        return axios(`${MMB.domain}/api/getmoneyctrlproduct?productid=${productid}`).then(res => {
            return res.data;

        })
    }

    /**
     * 获取国内折扣商品列表
     * @param 无
     * @returns 国内折扣商品列表 | JSON格式
     */
    MMB.prototype.getInLandDiscount = function () {
        return axios(`${MMB.domain}/api/getinlanddiscount`).then(res => {
            return res.data;

        })
    }

    /**
      * 获取国内折扣商品详情
      * @param productid | 商品id (Number)
      * @returns 国内折扣商品详情 | JSON格式
      */
    MMB.prototype.getDiscountProduct = function (productid) {
        return axios(`${MMB.domain}/api/getdiscountproduct?productid=${productid}`).then(res => {
            return res.data;

        })
    }

    /**
      * 获取白菜价标题
      * @param 无
      * @returns 白菜价标题 | JSON格式
      */
    MMB.prototype.getBaiCaiJiaTitle = function () {
        return axios(`${MMB.domain}/api/getbaicaijiatitle`).then(res => {
            return res.data;

        })
    }

    /**
  * 获取白菜价列表
  * @param titleid | 标题id (Number) 
  * @returns 白菜价列表 | JSON格式
  */
    MMB.prototype.getbaicaijiaproduct = function (titleid) {
        return axios(`${MMB.domain}/api/getbaicaijiaproduct?titleid=${titleid}`).then(res => {
            return res.data;

        })
    }


    /**
      * 获取优惠券标题
      * @param 无
      * @returns 优惠券标题 | JSON格式
      */
    MMB.prototype.getCoupon = function () {
        return axios(`${MMB.domain}/api/getcoupon`).then(res => {
            return res.data;

        })
    }


    /**
      * 获取优惠券列表
      * @param couponid | 优惠券id
      * @returns 优惠券列表 | JSON格式
      */
    MMB.prototype.getCouponproduct = function (couponid) {
        return axios(`${MMB.domain}/api/getcouponproduct?couponid=${couponid}`).then(res => {
            return res.data;

        })
    }

     /**
      * 获取凑单品店铺
      * @param 无
      * @returns 凑单品店铺 | JSON格式
      */
     MMB.prototype.getGSShop = function () {
        return axios(`${MMB.domain}/api/getgsshop`).then(res => {
            return res.data;

        })
    }

     /**
      * 获取凑单品区域
      * @param  无
      * @returns 凑单品店铺 | JSON格式
      */
     MMB.prototype.getGSShopArea = function () {
        return axios(`${MMB.domain}/api/getgsshoparea`).then(res => {
            return res.data;

        })
    }

    /**
      * 获取凑单品商品列表
      * @param  shopid : 店铺id  (Number)
      * @param  areaid : 区域id  (Number)
      * @returns 凑单品商品列表 | JSON格式
      */
     MMB.prototype.getGSProduct = function (shopid ,areaid ) {
        return axios(`${MMB.domain}/api/getgsproduct?shopid=${shopid}&areaid=${areaid}`).then(res => {
            return res.data;

        })
    }

      /**
      * 获取商城导航
      * @param  无
      * @returns 商城导航 | JSON格式
      */
     MMB.prototype.getSiteNav = function () {
        return axios(`${MMB.domain}/api/getsitenav`).then(res => {
            return res.data;

        })
    }

      /**
      * 获取品牌大全标题
      * @param  无
      * @returns 品牌大全标题 | JSON格式
      */
     MMB.prototype.getBrandTitle = function () {
        return axios(`${MMB.domain}/api/getbrandtitle`).then(res => {
            return res.data;

        })
    }

      /**
      * 获取品牌标题对应的十大品牌
      * @param  brandtitleid：品牌标题id  (Number)
      * @returns 品牌标题对应的十大品牌 | JSON格式
      */
     MMB.prototype.getBrand = function (brandtitleid) {
        return axios(`${MMB.domain}/api/getbrand?brandtitleid=${brandtitleid}`).then(res => {
            return res.data;

        })
    }

    /**
      * 获取品牌标题对应的十大品牌的销量排行商品列表
      * @param  brandtitleid：品牌标题id  (Number)
      * @param  pagesize ：展示的数据量 默认为4个 (Number)
      * @returns 品牌标题对应的十大品牌的销量排行商品列表 | JSON格式
      */
     MMB.prototype.getBrandProductList = function (brandtitleid,pagesize=10) {
        return axios(`${MMB.domain}/api/getbrandproductlist?brandtitleid=${brandtitleid}&pagesize=${pagesize}`).then(res => {
            return res.data;

        })
    }

    w.MMB = MMB;
})(window);