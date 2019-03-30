
$(document).ready(function(){
  $('.onas').mouseover(function(){
      $('.onas').animate({ marginTop: '15px'}, 500);
  });

  $( ".onas").mouseout(function(){
      $('.onas').animate({ marginTop: '0'}, 500);
      console.log('out');
  });
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1500,
  });


  $('.zv').mouseover(function(){
    $('.uslimg').animate({opacity: '0'}, 1000, function(){
      $('.zv').animate({marginLeft: '300'}, 1500, function(){
        $('.txt1').animate({marginRight: '230'}, 1500);
      });
    });
      console.log('over');
  });

  $('.zv2').mouseover(function(){
    $('.arang').animate({opacity: '0'}, 1000, function(){
      $('.zv2').animate({marginLeft: '280'}, 1500, function(){
        $('.txt2').animate({marginRight: '200'}, 1500);
      });
    });
      console.log('over');
  });
  $('.zv3').mouseover(function(){
    $('.cam').animate({opacity: '0'}, 1000, function(){
      $('.zv3').animate({marginLeft: '280'}, 1500, function(){
        $('.txt3').animate({marginRight: '200'}, 1500);
      });
    });
      console.log('over');
  });

  $('.zm').mouseover(function(){
    $('.mas').animate({opacity: '0'}, 1000, function(){
      $('.zm').animate({marginLeft: '-280'}, 1500, function(){
        $('.text1').animate({marginLeft: '165'}, 1500);
      });
    });
      console.log('over');
  });

  $('.zm2').mouseover(function(){
    $('.masi2').animate({opacity: '0'}, 1000, function(){
      $('.zm2').animate({marginLeft: '-280'}, 1500, function(){
        $('.text2').animate({marginLeft: '200'}, 1500);
      });
    });
      console.log('over');
  });


  $('.zm4').mouseover(function(){
    $('.dis').animate({opacity: '0'}, 1000, function(){
      $('.zm4').animate({marginLeft: '-280'}, 1500, function(){
        $('.text5').animate({marginLeft: '200'}, 1500);
      });
    });
      console.log('over');
  });
});
