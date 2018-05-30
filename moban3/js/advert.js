/**
 * Created by Administrator on 18-3-16.
 */

// 网络问政质询 广告添加
// 2018-03-16

var adTestData; //  接收广告数据 底部有广告的虚拟数据，测试用


$(function(){
    // 提交时检查表单列表
   $("#myForm").bind("submit",checkForm);

    // 关闭广告
    $(".AdClose").click(function(){
        $(this).parent(".m-advert").css('display',"none");
    })
    //关键字搜索
    $("#search").siblings("i").click(function(){
       var keyWord =  $(this).siblings("input").val()
        search(keyWord);
    });

      // 显示广告
     initAdvert(adTestData,'AdBox',2000);
})

// 搜索关键字；
function search(keyWord){
         $.post('',{keyWord:keyWord},function(data,status){
              if(status == "success"){
                  // 转到要跳转的页面
                  window.location.href = "";
              }
         })
}

// 查验表单
function checkForm() {
   var form,
        Data;
        Data = {};
        form = $("#myForm");
        Data.netName = form.find("input[name='netName']").val();
        Data.subject = form.find("input[name='subject']").val();
        Data.helpType = form.find("select").val();
        Data.helpContent = form.find("textarea[name='helpContent']").val();
        Data.beHide = form.find("input[name='open']:checked").val()
        Data.userName = form.find("input[name='userName']").val();
        Data.telephone = form.find("input[name='telephone']").val();
        Data.email = form.find("input[name='email']").val();
        if(!Data.subject || isNull(Data.subject)){
            alert("请填写咨询主题");
            return false;
        }
        else if(!Data.helpType || isNull(Data.helpType)) {
            alert("请选择咨询类型");
            return false;
        }
        else if(!Data.helpContent || isNull(Data.helpContent)){
            alert("请填写咨询内容");
            return false;
        }
        // 检查邮箱格式
       if(Data.email) {
           checkEmail(Data.email);
       }

       //提交表单
        $.post('',Data,function(status){
            alert('dd');
              if(status == "success"){
                  alert("提交成功，感谢您的关注")
              }else{
                  // alert("提交错误，请重新提交")
              }
        })

}

// 判断输入字符串为空格 还是全为空格
function isNull(str){
    if ( str == "" ) return true;
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    return re.test(str);
}
// 检查邮箱格方法实现
function checkEmail(email) {
    if(!email.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)){
        alert("邮箱格式不正确");
        return false;
    }
}


// 接受两个广告的图片地址 Data 是图片数据， adId 是广告模块（div），
//  delayTime 广告在网页刷新后隔多长时间出来， bnt 控制广告是否展示， 默认为
function initAdvert(Data,adId,delayTime,bnt) {
    if(!bnt) bnt = "on";
    if( bnt == "off"){
       $("#"+adId).remove()
    }else{
        setTimeout(showAd(Data,adId),delayTime);
    }
}

function showAd(Data,adId){
    var imgData = Data.data;
    var adTarget = $("#"+adId).find('.m-advert');
        adTarget.each(function(index){
            $(this).find("a").attr("href",imgData[index].addHref);
            $(this).find("img").attr({"src":imgData[index].addImgSrc,"alt":imgData[index].alt,"title":imgData[index].title})
        })
        // if(imgData) {
        //
        //     for(var i = 0; i <  imgData.length; i++){
        //
        //     }
        // }
    console.log(imgData);
}




// 广告的虚拟数据
adTestData = {
     "data" : [
         {"alt":"这是广告一图片","addImgSrc":"img/testAdImg01.jpg","addHref":"#####","title":"这是广告1"},
         {"alt":"这是广告二图片","addImgSrc":"img/testAdImg01.jpg","addHref":"#####","title":"这是广告2"},
     ]
}