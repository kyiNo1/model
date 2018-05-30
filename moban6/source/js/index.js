/**
 * Created by Administrator on 18-3-23.
 */

$(function(){


    // 导航栏的 动作
    slideDown("#Header");

    //banner 轮播
    var BannerObj = new bannerSlide("#Banner");
    var slider =  setInterval(BannerObj.start,4000);
    BannerObj.hov;
    // 鼠标悬停停止 轮播
    $("#Banner").find('.slide-lis').find('li').hover(function(){
        clearInterval(slider);
    },function(){
        slider =  setInterval(BannerObj.start,4000);
    })


     //新闻滚动 **** 内容部分左边第一个轮播
    $("#News").carousel('cycle');
    $('#News').on('slid.bs.carousel', function () {
        var index = $('#News').find('.item.active').index();
        $('#News').find('.news-title').children('li').eq(index).siblings().removeClass('active');
        $('#News').find('.news-title').children('li').eq(index).addClass('active');
    })

    $('#NewNav').find('.cl-nav li.nav-l').hover(function(){
        var index = $(this).index();
        $(this).siblings().removeClass('active')
        $(this).addClass('active');

        $('#NewNav').find(".cl-content-text").find('li').eq(index).addClass('active');
        $('#NewNav').find(".cl-content-text").find('li').eq(index).siblings().removeClass('active');

    })


    //视频处理 ---右边内容最上面部分
    $('#VideoClose').on('click',function(){
         $('#video').get(0).pause();
         $('#VideoBox').css('display','none');
    })
    $('.cr-video a').on('click',function(){
        $('#VideoBox').css('display','block');
        $('#video').get(0).play();
    })

    // 视频下的轮播 --右边部分第二个轮播
    $("#crMdSlide").carousel('cycle');

    // 右边内容倒数第二的轮播
    var allScreem =  new allScreenSlide('#crBotSlide');
    var rcBotSlider = setInterval(allScreem.run,2000);
    $('.cr-bs-pic.left').on('click',function(){
        allScreem.clic('left');
    });
    $('.cr-bs-pic.right').on('click',function(){
        allScreem.clic('right');
    })


    //左边内容最下面的轮播
    $('#marquee1').kxbdSuperMarquee({
        distance:162,
        time:3,
        btnGo:{left:'#goL',right:'#goR'},
        direction:'left'
    });

    //右边内容最下面的轮播
    $("#myCarouse2").carousel('cycle');
    $('#myCarouse2').on('slid.bs.carousel', function () {
        var index = $('#myCarouse2').find('.item.active').index();
        $('#myCarouse2').find('.bot-desc').children('li').eq(index).siblings().removeClass('active');
        $('#myCarouse2').find('.bot-desc').children('li').eq(index).addClass('active');
    })


})


// 显示下拉模块
function slideDown(id){
    $(id).find(".nav-li").hover(function(){
            $(this).find(".nav-pan").addClass("active");
        },function(){
            $(this).find(".nav-pan").removeClass("active")}
    );
}

function allScreenSlide(Id) {
    var index,
        elLength;
        index = 1;
        elLength = $(Id).find('.bottom-slide-box li').length;
        function run() {
            $(Id).find('.bottom-slide-box li').eq(index).fadeIn();
            $(Id).find('.bottom-slide-box li').eq(index).siblings().css('display','none');
            index ++;
            index <   elLength-1 ? index == index : index =  index % elLength;
        }
       var clic = function (fx){
           if(fx == 'left'){
               if(index >= 1){
                   index = index -1;
               }else {
                   index == elLength;
               }
               $(Id).find('.bottom-slide-box li').eq(index).fadeIn();
               $(Id).find('.bottom-slide-box li').eq(index).siblings().css('display','none');
               index ++;
               index <   elLength-1 ? index == index : index =  index % elLength;
           }else if(fx == 'right'){
               if(index < elLength ){
                   index = index +1;
               }else {
                   index == 0;
               }
               $(Id).find('.bottom-slide-box li').eq(index).fadeIn();
               $(Id).find('.bottom-slide-box li').eq(index).siblings().css('display','none');
               index ++;
               index <   elLength-1 ? index == index : index =  index % elLength;
           }
       }
    this.run = run;
    this.clic = clic;

    return this;
}






//头部轮播方法
function bannerSlide(Id,time){
    var index,
        slider, //循环定时器
        imgNum;//当前的照片
        index = 1;
        imgNum = $(Id).find('.slide-box').find('.slide-item').length;
        if(!time){
            var time = 4000;
        }

    function start() {
        $(Id).find('.slide-lis').find('.lis').eq(index).addClass('hov');
        $(Id).find('.slide-lis').find('.lis').eq(index).closest('li').siblings().children('i').removeClass('hov');
        $(Id).find('.slide-box').find('.slide-item').siblings().css('display','none');
        $(Id).find('.slide-box').find('.slide-item').eq(index).fadeIn(500);
        index ++;
        index < imgNum ? index ==  index : index = index % imgNum;
    }
    function hov(){
        $(Id).find('.slide-lis').find('li').hover(function(){
            index = $(this).index()
            $(this).find('span').addClass('active');
            $(Id).find('.slide-lis').find('.lis').eq(index).addClass('hov');
            $(Id).find('.slide-lis').find('.lis').eq(index).closest('li').siblings().children('i').removeClass('hov');
            $(Id).find('.slide-box').find('.slide-item').siblings().css('display','none');
            $(Id).find('.slide-box').find('.slide-item').eq(index).fadeIn(500);
        },function(){
            $(this).find('span').removeClass('active');
        })
    }
    this.hov = hov();
    this.start = start;
    return this;
}