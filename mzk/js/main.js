$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  })
  $(window).scroll(function (){
    $('.fadein').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200){
      $(this).addClass('scrollin');
      }
    });
  })
  $('#humberger-icon').on('click', function(){

    var $line = $('.line')
    $line.toggleClass('cross');

    if($line.hasClass('cross')){
      $('#line-top').css({
        transform: "rotate(-45deg) translateY(1.25rem)"
      });
      $('#line-middle').css({
        opacity: 0
      });
      $('#line-bottom').css({
        transform: "rotate(45deg) translateY(-1.25rem)"
      });
      $('.line').stop(true).animate({
        backgroundColor: '#ffffff'
      });
      $('#menu').css({
        display: 'block'
      });
      $('#menu').stop(true).animate({
        opacity: 0.98
      });
    }else{
      $('#line-top').css({
        transform: "rotate(0deg) translateY(0rem)"
      });
      $('#line-middle').css({
        opacity: 1
      });
      $('#line-bottom').css({
        transform: "rotate(0deg) translateY(0rem)"
      });
      $('.line').stop(true).animate({
        backgroundColor: '#000000'
      });
      $('#menu').stop(true).animate({
        opacity: 0
      });
      $('#menu').css({
        display: 'none'
      });
    };
  })
});
