$('.top-banner-close img').click(function(){
  $('.top-banner').css('display', 'none');
});




var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    //자동슬라이드 (false-비활성화)
    delay: 4000, // 시간 설정
    disableOnInteraction: true, // false-스와이프 후 자동 재생
  },
});

setInterval(function time() {
  //시간 초기화
  var d = new Date();
  var hours = 24 - d.getHours();
  var min = 60 - d.getMinutes();
  var sec = 60 - d.getSeconds();
  //분이 있으면 시 반올림
  if (min == "00") {
    hours = 24 - d.getHours();
  } else {
    hours = 23 - d.getHours();
  }
  //초가 있으면 분 반올림
  if (sec == "00") {
    min = 60 - d.getMinutes();
  } else {
    min = 59 - d.getMinutes();
  }
  //1자리수라면 0을 붙혀라
  if ((hours + "").length == 1) {
    hours = "0" + hours;
  }
  if ((min + "").length == 1) {
    min = "0" + min;
  }
  if ((sec + "").length == 1) {
    sec = "0" + sec;
  }
  //날짜를 표기하고 딜레이는 1초(1000)마다 바뀌겠금
  jQuery("#the-final-countdown p").html(
    '<span class="t_txt">' +
      "남은시간 " +
      "</span>" +
      '<span class="t_hour">' +
      hours +
      "</span>" +
      '<span class="t_colon">:</span>' +
      '<span class="t_min">' +
      min +
      "</span>" +
      '<span class="t_colon">:</span>' +
      '<span class="t_sec">' +
      sec +
      "</span>"
  );
}, 1000);

$(".recommend-menu li:first-child").hover(function () {
  $(".recommend-menu li:last-child").css("border", "none");
  $(this).css("border-bottom", "5px solid #3f75ff");
  $(".hot.on").removeClass("on");
  $(".cart").addClass("on");
});

$(".recommend-menu li:last-child").hover(function () {
  $(".recommend-menu li:first-child").css("border", "none");
  $(this).css("border-bottom", "5px solid #3f75ff");
  $(".cart.on").removeClass("on");
  $(".hot").addClass("on");
});

$(".character-menu li:nth-child(2)").hover(function () {
  $(".character-menu li:first-child").removeClass("on");
  $(".character-menu li:last-child").removeClass("on");

  $(".character-menu li:nth-child(2)").addClass("on");

  $(".pooh").css("display", "none");
  $(".wille").css("display", "none");
  $(".snp").css("display", "block");
});

$(".character-menu li:first-child").hover(function () {
  $(".character-menu li:last-child").removeClass("on");
  $(".character-menu li:nth-child(2)").removeClass("on");

  $(".character-menu li:first-child").addClass("on");

  $(".pooh").css("display", "block");
  $(".wille").css("display", "none");
  $(".snp").css("display", "none");
});

$(".character-menu li:last-child").hover(function () {
  $(".character-menu li:first-child").removeClass("on");
  $(".character-menu li:nth-child(2)").removeClass("on");

  $(".character-menu li:last-child").addClass("on");

  $(".pooh").css("display", "none");
  $(".wille").css("display", "block");
  $(".snp").css("display", "none");
});


$("#scroller").simplyScroll({
  speed: 1,
  frameRate: 15
});