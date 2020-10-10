$(function(){
    $(".list2_left").mouseenter(function(){
        $(".list2_right").show();
    })
    $(".inputBox").click(function(){
        $(".inputLabel").hide();
        $(".js_result").show();
    })
    $(".js_result").mouseenter(function(){
        $("result_a").css("color", "red");
    }).mouseleave(function(){
        $(".js_result").hide();
    });
})