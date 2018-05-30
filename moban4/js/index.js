/**
 * Created by Administrator on 18-3-9.
 */




$(function(){
    // 顶部导航的效果
    slideDown("#TopNavTab");
    //分类导航栏
    slideDown("#SortNav");
    setInterval(runNews(),1);

    // 招商中心 和 产品中心的动作
    $(".g-product").find(".m-title-section").hover(function(){
          console.log($(this).index());
           if($(this).index() == 0){
                    productMover = setInterval(mover(),2000);
                    clearInterval(productMover2);

           }else if($(this).index() == 1){
               var productMover2 = setInterval(mover2(),2000);
               clearInterval(productMover);
           }
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            $(this).closest('#ProductTab').find("#ImgSlideBox"+$(this).index()).addClass("active");
            $(this).closest('#ProductTab').find("#ImgSlideBox"+$(this).index()).siblings().removeClass("active");
    },function(){

    });

    // 商品中心 图片滚动的实现      封装成方法；
    $('.slide-bnt').click(function(){

        var targetEle = $(this).closest('.imgSlideBox').find('.box-content');
        var mlength = parseInt(targetEle.css('margin-left'));
        if($(this).hasClass('pre')){
            if(mlength <=  -1180){
                mlength ==  -1180;
            }else{
                mlength = (mlength -  236) + "px";
                $("#"+ $(this).closest('.imgSlideBox').attr('id')).find('.box-content').animate({"margin-left": mlength },400);
            }
        }else if(
            $(this).hasClass('next')){
                if(mlength >= 0) {
                    mlength == 0;
                }else {
                    mlength = (mlength + 236) + "px";
                    console.log($(this).closest('.imgSlideBox').attr('id'));
                    $("#"+ $(this).closest('.imgSlideBox').attr('id')).find('.box-content').animate({"margin-left": mlength },400);
                }
        }
    })



    //新闻中心的动作
    $("#NewsTab").find(".tab-nav").find('li').hover(function(){
        if(!$(this).attr('class')) {
            $(this).addClass('active');
        }
        $(this).siblings().removeClass('active');
        $(this).closest('.tab').find('.tab-pan').eq($(this).index()).addClass('active');
        $(this).closest('.tab').find('.tab-pan').eq($(this).index()).siblings().removeClass('active');
    })

      // 分类导航条的变化
    $(".g-sort-nav li").hover(function(){
          $(this).find('a').addClass('hov');
    },function(){
          $(this).find('a').removeClass('hov')
     })

    $("#ImgSlideBox0").hover(function(){
         clearInterval(productMover);
    },function(){
        productMover = setInterval(mover(),2000);
    })
    var productMover = setInterval(mover(),2000);
})
// 显示下拉模块
function slideDown(id){
    $(id).find(".nav-li").hover(function(){
            $(this).find(".nav-li-content").addClass("active");
        },function(){
            $(this).find(".nav-li-content").removeClass("active")}
    );
}
// 产品中心的滚动模块
var mover = function () {
    var num,ml,mltring,right;
         right = true;
         num = 1;
         function act() {
             ml = num * -236;
                 var mlength = $("#ImgSlideBox0").find('.box-content').css('margin-left');
             if(right){
                 mltring = parseInt($("#ImgSlideBox0").find('.box-content').css('margin-left')) - 236 +"px";
                 $("#ImgSlideBox0").find('.box-content').animate({"margin-left":  mltring },400);
                 console.log(mltring);
             }else{
                 mltring = parseInt($("#ImgSlideBox0").find('.box-content').css('margin-left')) + 236 +"px";
                 $("#ImgSlideBox0").find('.box-content').animate({"margin-left":  mltring },400);
             }
             if(parseInt(mltring ) <= -1180){
                 right = false;
             }else if(parseInt(mltring) >= 0){
                 right = true
             }
         }
         return act;
}
var mover2 = function () {
    var num,ml,mltring,right;
    right = true;
    num = 1;
    function act() {
        ml = num * -236;
        var mlength = $("#ImgSlideBox1").find('.box-content').css('margin-left');
        if(right){
            mltring = parseInt($("#ImgSlideBox1").find('.box-content').css('margin-left')) - 236 +"px";
            $("#ImgSlideBox1").find('.box-content').animate({"margin-left":  mltring },400);
            console.log(mltring);
        }else{
            mltring = parseInt($("#ImgSlideBox1").find('.box-content').css('margin-left')) + 236 +"px";
            $("#ImgSlideBox1").find('.box-content').animate({"margin-left":  mltring },400);
        }
        if(parseInt(mltring ) <= -1000){
            right = false;
        }else if(parseInt(mltring) >= 100){
            right = true
        }
    }
    return act;
}





// 新闻跑马灯 实现方法
var runNews = function runNews() {
         var mtLength = 28;
         var num =0;
         var run =function(){
                         mtLength += -1;
                         var html =  '<li>' + $(".run-news").find('li').eq(num).html() + '</li>';
                         $(".run-news").append(html);
                         $(".run-news").animate({'margin-top': mtLength -1 +'px'},100);
                         num ++;
                }
                return run;
}


