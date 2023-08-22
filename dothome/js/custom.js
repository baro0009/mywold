$(function () {
  // 메뉴 클릭시 모션

  $(".main-gnb li").click(function () {
    var i = $(this).index();

    if ($(".sub-con").eq(i).hasClass("active")) {
      $(".sub-con.active").removeClass("active");

      $(".sub-wrap").stop().slideUp(200);
    } else {
      $(".sub-con.active").removeClass("active");

      $(".sub-con").eq(i).addClass("active");

      $(".sub-wrap").stop().slideDown(200);
    }
  });

  // 캐러셀 슬라이드

  var w = $(window).width();
  var l = $(".slider-item").length;
  var item = $(".slider-item");
  var count = 0;

  var left = $(".fa-chevron-left");
  var right = $(".fa-chevron-right");

  var sNum = 0;

  right.click(function () {
    if (sNum < l - 1) {
      item.eq(sNum).removeClass("on").addClass("go");
      item
        .eq(sNum - 1)
        .removeClass("go")
        .addClass("back");
      item.eq(sNum - 2).removeClass("back");
      item.eq(sNum + 1).addClass("on");
      sNum++;
    } else if (sNum == l - 1) {
      item.eq(0).addClass("on");
      item.eq(4).removeClass("on").addClass("go");
      item.eq(3).removeClass("go").addClass("back");
      item.eq(2).removeClass("back");
      sNum = 0;
    }
  });

  left.click(function () {
    if (sNum == 0) {
      item.eq(sNum).removeClass("on");
      item
        .eq(sNum + 3)
        .removeClass("back")
        .addClass("go");
      item.eq(sNum + 4).removeClass("go");
      item.eq(sNum - 1).addClass("on");
      item.eq(sNum + 2).addClass("back");
      sNum = l - 1;
    } else if (sNum <= l - 1) {
      item.eq(sNum).removeClass("on");
      item
        .eq(sNum - 1)
        .removeClass("go")
        .addClass("on");
      item
        .eq(sNum - 2)
        .removeClass("back")
        .addClass("go");
      item.eq(sNum - 3).addClass("back");

      sNum--;
    }
  });

  function rig() {
    if (sNum < l - 1) {
      item.eq(sNum).removeClass("on").addClass("go");
      item
        .eq(sNum - 1)
        .removeClass("go")
        .addClass("back");
      item.eq(sNum - 2).removeClass("back");
      item.eq(sNum + 1).addClass("on");
      sNum++;
    } else if (sNum == l - 1) {
      item.eq(0).addClass("on");
      item.eq(4).removeClass("on").addClass("go");
      item.eq(3).removeClass("go").addClass("back");
      item.eq(2).removeClass("back");
      sNum = 0;
    }
  }

  setInterval(rig, 5000);

  //up버튼 구현
  $(window).scroll(function () {
    var h = $(window).scrollTop();

    if (h > 900) {
      $(".top").fadeIn();
    } else if (h <= 900) {
      $(".top").fadeOut();
    }
  });
  $(".top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });

  // 모바일 메뉴 구현
  $(".mo-menu-open").click(function () {
    $(".mo-gnb").slideDown(300);
  });

  $(".mo-menu-close").click(function () {
    $(".mo-gnb").slideUp(300);
  });

  //모바일 메뉴
  // $(".mo-menu > li").click(function () {
  //   var i = $(this).index();
  //   console.log(i);

  //   if ($(".mo-sub").eq(i).hasClass("active")) {
  //     $(".mo-sub.active").removeClass("active");
  //   } else {
  //     $(".mo-sub.active").removeClass("active");
  //     $(".mo-sub").eq(i).addClass("active");
  //   }

  //   if ($(".mo-sub").eq(i).hasClass("active")) {
  //     $(".mo-sub").stop().slideUp();
  //     $(".mo-sub.active").slideDown();
  //     $(".open.active").eq(i).removeClass("active");
  //     $(".close").eq(i).addClass("active");
  //   } else {
  //     $(".mo-sub").eq(i).stop().slideUp();
  //     $(".close.active").removeClass("active");
  //     $(".open").eq(i).removeClass("active");
  //     $(".open").eq(i).addClass("active");
  //   }
  // });

  $(".mo-menu > li").click(function () {
    var currsub = $(this).find(".mo-sub");
    $(".mo-sub")
      .not(currsub)
      .slideUp()
      .parent()
      .find(".fa-angle-up")
      .attr("class", "fa-solid fa-angle-down close fr");

    if (currsub.css("display") != "block") {
      currsub.slideDown();
      $(this).find(".fa-angle-down").attr("class", "fa-solid fa-angle-up fr");
    } else {
      currsub.slideUp();
      $(this)
        .find(".fa-angle-up")
        .attr("class", "fa-solid fa-angle-down close fr");
    }
  });

  //모바일 사이트맵
  $(".mo-sit-menu > li").click(function () {
    var currsub = $(this).find(".mo-sit-sub");
    $(".mo-sit-sub")
      .not(currsub)
      .slideUp()
      .parent()
      .find(".fa-angle-up")
      .attr("class", "fa-solid fa-angle-down sit-close fr");

    if (currsub.css("display") != "block") {
      currsub.slideDown();
      $(this).find(".fa-angle-down").attr("class", "fa-solid fa-angle-up fr");
    } else {
      currsub.slideUp();
      $(this)
        .find(".fa-angle-up")
        .attr("class", "fa-solid fa-angle-down sit-close fr");
    }
  });

  function mo() {
    $(window)
      .resize(function () {
        var w = $(window).width();

        if (w >= 954 && $(".mo-gnb").css("display") == "block") {
          $(".mo-gnb").css('display', 'none');
        }
      })
      .resize();
  }

  mo();
});
