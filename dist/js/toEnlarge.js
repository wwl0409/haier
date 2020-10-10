$(function(){
    $('.js_img').mouseenter(function(){
        // var wValue=1.5 * $(this).width();
        // var hValue=1.5 * $(this).height();
        $(".js_line").css("backgroundColor", "#0c5ca8");		
        $(this).stop().animate({width: "500",
                        height: "500",
                        left:"0",
                        top:"0"}, 500);
    }).mouseleave(function(){
        $(this).stop().animate({width: "460",
                                     height: "460",
                                     left:"20px",
                                     top:"20px"}, 500 );
                                     $(".js_line").css("backgroundColor", "transparent");	                           

    });
    
});
// $(function(){
//     $('.js_img').mouseenter(function(){
//         var wValue=1.5 * $(this).width();
//         var hValue=1.5 * $(this).height();		
//         $(this).stop().animate({width: wValue,
//                         height: hValue,
//                         left:("-"+(0.5 * $(this).width())/2),
//                         top:("-"+(0.5 * $(this).height())/2)}, 1000);
//     }).mouseleave(function(){
//         $(this).stop().animate({width: "460",
//                                      height: "460",
//                                      left:"20px",
//                                      top:"20px"}, 1000 );

//     });

// });
