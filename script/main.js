$(document).ready(function(){

 //첫번째 콘텐츠 이미지 로드될때 애니메이션
 const content = document.querySelector('.con1_main_img');
      
 function animateWindow(){
   if(window.innerHeight > content.getBoundingClientRect().top){
     content.classList.add('on');
   }
 }
 animateWindow();




// 두번째 콘텐츠 컨트롤 버튼 슬라이드
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 세번째 콘텐츠 Tab 페이드인효과
 let tabM = $('#con3_wrap a');
 // 2.메뉴클릭시 해당 콘텐츠가 나오게한다.
 tabM.click(function(e){
   e.preventDefault();
   $('.con3_img_box').stop().fadeOut(900);  //보이는 콘텐츠를 숨긴다.
   $(this).next().stop().fadeIn(1000); //내가 선택한 대상의 다음요소를 보여준다.

   //선택한 메뉴에 서식을 적용하고 그외 다른 A요소
   $(this).addClass('act').parent().siblings().find('a').removeClass('act');
 });


//  네번째 콘텐츠 스크롤바 슬라이드 
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      // when window width is >= 375px
      360: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      481: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 1024px
      1025: {
        slidesPerView: 4.5,
        spaceBetween: 30
      },
      1450: {
        slidesPerView: 4.5,
        spaceBetween: 30
      }
      
    }
  });



// 다섯번째 콘텐츠 이미지 tab 

  let tabBtn = $('#con5_tab > ul > li');
  let tabCont = $('.con5_cont > .con5_box');

  tabCont.hide().eq(0).show();

  tabBtn.click(function(e){
    e.preventDefault();
    const index = $(this).index();

    tabCont.eq(index).fadeIn(800).siblings().hide();
  });


  // 1025px 태블릿 모바일 버전
  let tabBtn2 = $('.m_con5_tab > ul > li');
  let tabCont2 = $('.con5_cont > .con5_box');

  tabCont2.hide().eq(0).show();

  tabBtn2.click(function(e){
    e.preventDefault();
    const index = $(this).index();
    $(this).addClass("con5_act").siblings().removeClass("con5_act"); 
    tabCont2.eq(index).fadeIn(800).siblings().hide();
  });



  // 여섯번째 콘텐츠 마우스오버 탭
  let con6Tab = $('.con6_tab > ul > li');
  // 슬라이드변수
  let con6Slide = $('.con6_box > div');
  let i = 0;

  con6Tab.mouseenter(function(){
    let i = $(this).index();
    con6Slide.hide();
    con6Slide.eq(i).show();
  });
 


}); //jquery 끝