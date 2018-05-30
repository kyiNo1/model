/**
 * Created by Administrator on 18-3-22.
 */

// 网站首页模板



$(function(){

     //banner 图片广告
    // 控制图片位置
    $('.g-flash').find('img').load(function(){
        var imgWidth = - $(this).width()/2;
        $(this).css({'left':imgWidth});
    })
    setInterval(showBanner(),3000);
    // 商品展示部分跑马灯
    var marqueeTime = setInterval(marqueeMover(),120);
    $('.marquee-content').hover(function(){
        clearInterval(marqueeTime);
    },function(){
        marqueeTime = setInterval(marqueeMover(),120);;
    })


})


// banner图片展示
function showBanner() {
    var num = 0;
    var length = $('.g-flash').find('a').length;
    var show = function(){
        if(num == length ) num = 0;
        $('.g-flash').find('a').eq(num).siblings().find('img').removeClass('animated').css({'z-index':'-1','display':'none'});
        $('.g-flash').find('a').eq(num).children('img').addClass('animated').css({'z-index':'1','visibility':'visible'}).fadeIn();
        num++;
    }
   return show;
}




// 跑马灯实现方法
function marqueeMover() {
           var mlength = parseInt($('.marquee-content').css('margin-left'));
           var lastBoxPosition = $('.marquee-content').find('li:last-child').offset().left;
           function run() {
             mlength = mlength - 5;
            $('.marquee-content').animate({'margin-left': mlength },100);
            if($('.marquee-content').find('li:last-child').offset().left >= 980 && $('.marquee-content').find('li:last-child').offset().left <= 989 ){
               html =  $('.marquee-content').html();
                $('.marquee-content').append(html);
            }
        }
     return run;
}