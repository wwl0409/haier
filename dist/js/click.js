$(function(){
    var aBtns = $(".sd_item");
    var aDivs = $(".sd_item_li");
    aBtns.click(function(){
      aDivs.css("display", 'none').eq($(this).index()).css("display", 'block');
      $(this).attr("class", 'sd_tag1').siblings().attr("class", 'sd_item');
    })
    
})
