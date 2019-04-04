
$(document).ready(function(){

  $('.car').fadeOut()
  $('.plusi').fadeOut()
  $('.zv , .sv, .ar, .pk, .vd, .ds').fadeOut()
  $('.car').fadeIn(2000)
  $('.opis').fadeOut()

  var lastScrollTop = 0;
  $(window).scroll(function(event){
     var st = $(this).scrollTop();
     if (st > lastScrollTop){
        $('.navbar').slideUp(420);
        $('.navbar').removeClass('active');
     } else {
        $('.navbar').slideDown(420);
        $('.navbar').addClass('active');
     }
     lastScrollTop = st;
  });


  $(window).scroll(function(){

    if($(window).scrollTop()>100){
			$('.opis').fadeIn(2000)
		}
    if($(window).scrollTop()>720){
      $('.zv , .sv, .ar, .pk, .vd, .ds').fadeIn(800);
			$('.zv').animate({'left':'735px'},500);
      $('.p').css("text-align","left");
      $('.p').css("text-align","left");
      $('.sv').animate({'left':'-870px'},500);
      $('.p2').css("text-align","right");
      $('.p2').css("text-align","right");
      $('.ar').animate({'left':'730px'},500);
      $('.p3').css("text-align","left");
      $('.p3').css("text-align","left");
      $('.pk').animate({'left':'-735px'},500);
      $('.p4').css("text-align","right");
      $('.p4').css("text-align","right");
      $('.vd').animate({'left':'870px'},500);
      $('.p5').css("text-align","left");
      $('.p5').css("text-align","left");
      $('.ds').animate({'left':'-735px'},500);
      $('.p6').css("text-align","right");
      $('.p6').css("text-align","right");
		}
    if($(window).scrollTop()>1100){
			$('.plusi').fadeIn(2000)
		}
	});


  $('.onas').hover(function(){
      $('.onas').animate({ marginTop: '15px'}, 500);
  }, function(){
    $('.onas').animate({ marginTop: '0'}, 500);
    console.log('out');
  });

  $('.uslimg').hover(function(){
    $('.zvd').animate({
      borderBottomColor:"#00BFFF",
      borderLeftColor:"#00BFFF",
      borderRightColor:"#00BFFF",
      borderTopColor:"#00BFFF"
    }, 500);
  }, function(){
    $('.zvd').animate({
      borderBottomColor:"#e0e0e0",
      borderLeftColor:"#e0e0e0",
      borderRightColor:"#e0e0e0",
      borderTopColor:"##e0e0e0"
    }, 500);
  });

  $('.mas').hover(function(){
    $('.zvd2').animate({
      borderBottomColor:"#00BFFF",
      borderLeftColor:"#00BFFF",
      borderRightColor:"#00BFFF",
      borderTopColor:"#00BFFF"
    }, 500);
  }, function(){
    $('.zvd2').animate({
      borderBottomColor:"#e0e0e0",
      borderLeftColor:"#e0e0e0",
      borderRightColor:"#e0e0e0",
      borderTopColor:"##e0e0e0"
    }, 500);
  });

  $('.arang').hover(function(){
    $('.zvd3').animate({
      borderBottomColor:"#00BFFF",
      borderLeftColor:"#00BFFF",
      borderRightColor:"#00BFFF",
      borderTopColor:"#00BFFF"
    }, 500);
  }, function(){
    $('.zvd3').animate({
      borderBottomColor:"#e0e0e0",
      borderLeftColor:"#e0e0e0",
      borderRightColor:"#e0e0e0",
      borderTopColor:"##e0e0e0"
    }, 500);
  });

  $('.kluch').hover(function(){
    $('.zvd4').animate({
      borderBottomColor:"#00BFFF",
      borderLeftColor:"#00BFFF",
      borderRightColor:"#00BFFF",
      borderTopColor:"#00BFFF"
    }, 500);
  }, function(){
    $('.zvd4').animate({
      borderBottomColor:"#e0e0e0",
      borderLeftColor:"#e0e0e0",
      borderRightColor:"#e0e0e0",
      borderTopColor:"##e0e0e0"
    }, 500);
  });

  $('.cam').hover(function(){
    $('.zvd5').animate({
      borderBottomColor:"#00BFFF",
      borderLeftColor:"#00BFFF",
      borderRightColor:"#00BFFF",
      borderTopColor:"#00BFFF"
    }, 500);
  }, function(){
    $('.zvd5').animate({
      borderBottomColor:"#e0e0e0",
      borderLeftColor:"#e0e0e0",
      borderRightColor:"#e0e0e0",
      borderTopColor:"##e0e0e0"
    }, 500);
  });

  $('.dis').hover(function(){
    $('.zvd6').animate({
      borderBottomColor:"#00BFFF",
      borderLeftColor:"#00BFFF",
      borderRightColor:"#00BFFF",
      borderTopColor:"#00BFFF"
    }, 500);
  }, function(){
    $('.zvd6').animate({
      borderBottomColor:"#e0e0e0",
      borderLeftColor:"#e0e0e0",
      borderRightColor:"#e0e0e0",
      borderTopColor:"##e0e0e0"
    }, 500);
  });

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1500,
  });

});
