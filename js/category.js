$(function () {
    $.ajax({
        url: MMB.domain+"/api/getcategorytitle",
        success: function (obj) {
            console.log(obj);

            var html = template("categoryTitTpl", obj)
            $(".overall").html(html)
        }
    })
    $(".overall").on("tap", ".portion .headline", function () {
        $(".content ul").html("<li></li>")
        var titleid = $(this).attr("data-titleid");
        $.ajax({
            url: MMB.domain+"/api/getcategory",
            data: {
                titleid: titleid
            },
            success: function (obj) {
                console.log(obj);
                
               var html = template("categoryContentTpl", obj)
                $(".content ul").html(html)
                $(".overall").on("tap", ".content li a", function () {
                    var categoryid = $(this).attr("data-categoryId");
                    location =  "productlist.html?categoryid="+categoryid;
                    
                  })
            }
        })
    })
    

})