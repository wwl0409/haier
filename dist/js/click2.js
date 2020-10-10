// $(function(){
//     var aBtns = $(".sp_item");
//     var aDivs = $(".moods_list");
//     aBtns.click(function(){
//       aDivs.css("display", 'none').eq($(this).index()).css("display", 'block');
//       $(this).attr("class", 'sp_item1').siblings().attr("class", 'sp_item');
//     })
    
// })
$(function(){
    var aBtns = $(".sp_item");
    var aDivs = $(".moods_list");

  aBtns.click(function(){
    aBtns.attr("id", '');
    aDivs.css("display", 'none').eq($(this).index()).css("display", 'block');

    $(this).attr("id", 'sp_item1');

  })
})