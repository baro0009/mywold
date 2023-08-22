// 슬라이드
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// 서브메뉴 동작
$(".fa-bars").click(function () {
  $(".sub-gnb-bg").fadeIn(200);
});

$(".close").click(function () {
  $(".sub-gnb-bg").fadeOut(200);
});

$(".sub-gnb-bg").click(function () {
  $(".sub-gnb-bg").fadeOut(200);
});

//TOP버튼 구현
$(window).scroll(function () {
  var h = $(window).scrollTop();

  if (h > 700) {
    $(".top-btn").fadeIn();
  } else if (h <= 900) {
    $(".top-btn").fadeOut();
  }
});
$(".top-btn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 300);
});



// 디즈니플러스 카테고리 기능
$('.MOSTRECRNT').click(function () {
  $('.disney ul li.on').removeClass('on');
  $('.MOSTRECRNT').addClass('on');
  $('.box').fadeIn(300).delay(600).css('transition', 'none');
});

$('.ADVENTURE').click(function () {
  $('.disney ul li.on').removeClass('on');
  $('.ADVENTURE').addClass('on');
  $('.box').css('display', 'none');
  $('.ADVENTURE').fadeIn(300).delay(600).css('transition', 'none');
});

$('.ANIMAL').click(function () {
  $('.disney ul li.on').removeClass('on');
  $('.ANIMAL').addClass('on');
  $('.box').css('display', 'none');
  $('.ANIMAL').fadeIn(300).delay(600).css('transition', 'none');
});
$('.DOCUSERIES').click(function () {
  $('.disney ul li.on').removeClass('on');
  $('.DOCUSERIES').addClass('on');
  $('.box').css('display', 'none');
  $('.DOCUSERIES').fadeIn(300).delay(600).css('transition', 'none');
});
$('.DRAMA').click(function () {
  $('.disney ul li.on').removeClass('on');
  $('.DRAMA').addClass('on');
  $('.box').css('display', 'none');
  $('.DRAMA').fadeIn(300).delay(600).css('transition', 'none');
});
$('.FOOD').click(function () {
  $('.disney ul li.on').removeClass('on');
  $('.FOOD').addClass('on');
  $('.box').css('display', 'none');
  $('.FOOD').fadeIn(300).delay(600).css('transition', 'none');
});
$('.HISTORY').click(function () {
  $('.disney ul li.on').removeClass('on');
  $('.HISTORY').addClass('on');
  $('.box').css('display', 'none');
  $('.HISTORY').fadeIn(300).delay(600).css('transition', 'none');
});
$('.MILITARY').click(function () {
  $('.disney ul li.on').removeClass('on');
  $('.MILITARY').addClass('on');
  $('.box').css('display', 'none');
  $('.MILITARY').fadeIn(300).delay(600).css('transition', 'none');
});
$('.NATURE').click(function () {
  $('.disney ul li.on').removeClass('on');
  $('.NATURE').addClass('on');
  $('.box').css('display', 'none');
  $('.NATURE').fadeIn(300).delay(600).css('transition', 'none');
});
$('.REALITY').click(function () {
  $('.disney ul li.on').removeClass('on');
  $('.REALITY').addClass('on');
  $('.box').css('display', 'none');
  $('.REALITY').fadeIn(300).delay(600).css('transition', 'none');
});
$('.SCIENCE').click(function () {
  $('.disney ul li.on').removeClass('on');
  $('.SCIENCE').addClass('on');
  $('.box').css('display', 'none');
  $('.SCIENCE').fadeIn(300).delay(600).css('transition', 'none');
});
$('.SOCIETY').click(function () {
  $('.disney ul li.on').removeClass('on');
  $('.SOCIETY').addClass('on');
  $('.box').css('display', 'none');
  $('.SOCIETY').fadeIn(300).delay(600).css('transition', 'none');
});
$('.WILD').click(function () {
  $('.disney ul li.on').removeClass('on');
  $('.WILD').addClass('on');
  $('.box').css('display', 'none');
  $('.WILD').fadeIn(300).delay(600).css('transition', 'none');
});


// 박스호버시 효과
$('.box').hover(function(){
  $(this).css('top', '-10px').css('transition', 'all 0.3s');
}, function(){
  $(this).css('top', '0');
});


//어패럴 슬라이드
var swiper = new Swiper(".plan-slide", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 3000, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

$(".plan-slide").each(function(elem, target){
  var swp = target.swiper;
  $(this).hover(function() {
      swp.autoplay.stop();
  }, function() {
      swp.autoplay.start();
  });
});