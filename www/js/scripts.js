$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#menu").slideToggle();
});
$(window).resize(function() {
  if ($(window).width() >= '769'){
    $("nav #menu").show();
   };
   if ($(window).width() <= '768' && !$("#toggle").hasClass("on")){
    $("nav #menu").hide();
   };
 });
