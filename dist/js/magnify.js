$(function(){
  $("#middle").mouseenter(function(){
    $("#big,#ceng").show();
    }).mouseleave(function(){
      $("#big,#ceng").hide();
    }).mousemove(function(ev){
      var l = ev.clientX - $(this).offset().left - 40;
      var t = ev.clientY - $(this).offset().top - 40;
              //限制出界
      l = Math.max(0, l);
      l = Math.min(400, l);
      t = Math.max(0, t);
      t = Math.min(400, t);
      $("#ceng").css({
        left: l,
        top: t
      })
      $("#big_img").css({
        left: -2 * l,
        top: -2 * t
      })
    })
})