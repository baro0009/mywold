$(function () {

  //최상단 버튼
  $('.top-btn').click(function(){
    var offset = $(".wrap").offset(); //해당 위치 반환
  $("html, body").animate({scrollTop: offset.top},400); 
  });

  // 웹툰 슬라이드 기능

  var next = $('.today-btn-right');
  var prev = $('.today-btn-left');
  var slide = $('.today-con');
  var length = slide.length; //counter 
  var current = 1;
  var width = 1125;

  console.log(length);

  prev.css('color', '#ddd');

  // 다음버튼
  next.click(function () {
    if (current >= length-1) {
      current = length-1;
      next.css('color', '#ddd');
    }
    slide.css('transform', 'translateX(-' + width * current + 'px)');
    prev.css('color', '#00d564');
    current++;
  });
  
  // 이전버튼
  prev.click(function () {
    current--;
    if (current <= 1) {
      current = 1;
      prev.css('color', '#ddd');
    } else {
      next.css('color', '#00d564');
    }
    
    slide.css('transform', 'translateX(-' + width * (current -1) + 'px)');
  });


  var next1 = $('.daily-btn-right');
  var prev1 = $('.daily-btn-left');
  var slide1 = $('.daily-con');
  var length1 = slide1.length; //counter 
  var current1 = 1;
  var width1 = 1125;

  console.log(length1);

  prev1.css('color', '#ddd');

  // 다음버튼
  next1.click(function () {
    if (current1 >= length1-1) {
      current1 = length1-1;
      next1.css('color', '#ddd');
    }
    slide1.css('transform', 'translateX(-' + width1 * current1 + 'px)');
    prev1.css('color', '#00d564');
    current1++;
  });
  
  // 이전버튼
  prev1.click(function () {
    current1--;
    if (current1 <= 1) {
      current1 = 1;
      prev1.css('color', '#ddd');
    } else {
      next1.css('color', '#00d564');
    }
    
    slide1.css('transform', 'translateX(-' + width1 * (current1 -1) + 'px)');
  });





  $('.fa-bell').click(function () {
    var i = $(this).parents('.con').index();

    $('.con').eq(i).find('.fa-bell').removeClass('on');
    $('.con').eq(i).find('.fa-bell-slash').addClass('on');
  });
  $('.fa-bell-slash').click(function () {
    var i = $(this).parents('.con').index();

    $('.con').eq(i).find('.fa-bell-slash').removeClass('on');
    $('.con').eq(i).find('.fa-bell').addClass('on');
  });



});