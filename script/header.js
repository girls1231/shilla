$(document).ready(function(){

  // 헤더 gnb 메뉴목록 숨기기 나오기/////////////////////////////////////////////////////////////////
  let bw = $(window).width();

  $(window).resize(function() {
      bw = $(window).width();
      console.log(bw);
  });
  $('.gnb_wrap').hide();
  $('.m_gnb_wrap').removeClass('adds');
  // 헤더에 toggle버튼 클릭시 이벤트 발생 윈도우 너비마다 변경.
  $('.h_toggle').click(function(){
  if(bw >= 1025){
      $('.gnb_wrap').toggle();
    return false;
  }else if(bw <= 1024){
    $('.gnb_wrap').hide();
    $('.m_gnb_wrap').toggleClass('adds');  
  }
});

// 태블릿, 모바일 gnb닫기 버튼입니다.
  $('#close_btn').click(function(){
    $('.m_gnb_wrap').removeClass('adds');  
  });



// 헤더 gnb 목록 서브 목록 펼치기 접기///////////////////////////////////////////////////////
  const h_mnu = $('.m_gnb > ul > li > a');
  h_mnu.click(function(e){
    let subM = $(this).next('ul');
    e.preventDefault();
    if(subM.is(":visible")){
      subM.slideUp();
      $(this).find('i.fa-angle-down').css({'transform' : 'rotate(0deg) translateY(20px)'});
    }else{
      subM.slideDown();
      $(this).find('i.fa-angle-down').css({'transform':'rotate(180deg) translateY(-20px)',});

    }
  });

  // 탑버튼 자연스럽게 보여지고 사라지기
  $(window).scroll(function(){
    if($(this).scrollTop() > 800){
    $('#top_btn').fadeIn(500);
    }else{
   $('#top_btn').fadeOut(500);
    }
    });


  //탑버튼 클릭이벤트 중복방지 animate
    $("#top_btn").off('click').on('click', function(){
      $('html, body').animate({
      scrollTop:0
      },100);
      return false;
      });

  // 헤더스크롤시 이벤트
    window.addEventListener('scroll', function(){

      scrollTop = window.scrollY;

      //출력
      console.log(scrollTop);

      // 스크롤값에 따른 헤더 이벤트
      if(scrollTop >= 900){
        document.querySelector('header').style.background = '#432C10';
        document.querySelector('header').style.borderBottom = 'none';
        document.querySelector('header').style.zIndex = '999999'; 
        document.querySelector('header').style.transition = '0.4s'; 
      }else if((scrollTop < 900)){
        document.querySelector('header').style.background = 'transparent';
        document.querySelector('header').style.borderBottom = '1px solid #f3f3f3';
      }
    });



});// jquery 끝