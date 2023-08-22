// $('.logo').click( function () {
//   var offset = $('.box1').offset();
//   $('html, body').animate({scrollTop: offset.top}, 400);
// });



let d_width = 0; // 브라우저 가로
let d_height = 0; // 문서 전체의 높이

function tmp() {
  // container의 가로사이즈(화면가로 * box 개수)
  let con_width = $(window).outerWidth() * $(".box").length;

  $(".container").css({
    width: con_width,
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
  });

  // css에서 해도 상관없다.
  $(".box").css({
    width: con_width / $(".box").length,
    height: "100vh",
    float: "left",
  });

  // box들을 위로 끌어올렸기 때문에 body의 높이는 100vh나 마찬가지인 상태.
  // 그래서 억지로 전체 box들의 세로크기 만큼 body에 줘야한다.(스크롤 내리기위함)
  // 이때 높이는 가로영역의 비율과 동일하게 준다. (이후 리미트를 주게 됨으로써 비율의 값이 정해진다.)
  $("body").css({
    height: "100vh",
  });

  let w_width = $(window).width(); // 화면의 가로값
  let w_height = $(window).height(); // 화면의 세로값

  // 스크롤 될때의 리미트
  d_width = con_width - w_width; // 전체 가로값 - 현재 화면의 가로값
  d_height = $("body").height() - w_height; // 전체 세로값 - 현재 화면의 세로값
}

tmp();

let array = [];
for (let i = 0; i < $(".box").length; i++) {
  array[i] = $(".box").eq(i).offset().left;
}

let chk = true;
$(".box").on("mousewheel DOMMouseScroll", function () {
  if (chk) {
    // 휠 일정시간동안 막기
    chk = false;
    setTimeout(function () {
      chk = true;
    }, 500);

    // 휠 방향 감지(아래: -120, 위: 120)
    let w_delta = event.wheelDelta / 120;

    // 휠 아래로
    if (w_delta < 0 && $(this).next().length > 0) {
      $(".container").animate(
        {
          left: -array[$(this).index() + 1],
        },
        300
      );
    }
    // 휠 위로
    else if (w_delta > 0 && $(this).prev().length > 0) {
      $(".container").animate(
        {
          left: -array[$(this).index() - 1],
        },
        300
      );
    }
  }
});

//브라우저를 resize했을시를 대비해 박스의 크기는 다시 구해준다.
$(window).resize(function () {
  for (let i = 0; i < $(".box").length; i++) {
    array[i] = $(".box").eq(i).offset().left;
  }

  tmp();
});


// 버튼 클릭시 페이지 넘어감
$('.logo').click(function(){
  $('.container').css({
    left: 0
  });
});

$('.gnb li').click(function(){

  var conWid = $('.box').width();

  var i = $(this).index();

  $('.container').css({
    left: (i + 1) * conWid * -1
  });

});

const swiper = new Swiper(".slider", {
  //전체 프레임
  // Optional parameters
  direction: "horizontal", //스와이프(슬라이드) 방향
  loop: false, //반복 여부
  spaceBetween: 0,
  grabCursor: true, //커서 모양
  slidesPerView: "auto", //css에서 설정한 슬라이더 크기
  centeredSlides: true, // 슬라이드 패널을 가운데로
  speed: 500, //슬라이드 속도
  
  effect: "coverflow", //효과 적용
  coverflowEffect: {
    rotate: 50, //회전 각
    stretch: -100, //슬라이드 사이 당김정도
    depth: 100, //원근감
    modifier: 1, //중첩도
    slideShadows: false, //그림자
  },

  //내비게이션 사용시
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //스크롤바 사용시
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});