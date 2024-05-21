
  $(document).ready(function(){

  // 헤더 gnb 메뉴목록 숨기기 나오기/////////////////////////////////////////////////////////////////
  let bw = $(window).width();

  $(window).resize(function() {
      bw = $(window).width();
      console.log(bw);
  });
  $('.gnb_wrap').hide();
  $('.m_gnb_wrap').removeClass('add'); 
  // 헤더에 toggle버튼 클릭시 이벤트 발생 윈도우 너비마다 변경.
  $('.h_toggle').click(function(){
  if(bw >= 1025){
      $('.gnb_wrap').toggle();
    return false;
  }else if(bw <= 1024){
    $('.gnb_wrap').hide();
    $('.m_gnb_wrap').addClass('add');  
  }
  });
  // 태블릿, 모바일 gnb닫기 버튼입니다.
  $('#close_btn').click(function(){
    $('.m_gnb_wrap').removeClass('add');  
  });



  // 헤더 gnb 목록 서브 목록 펼치기 접기///////////////////////////////////////////////////////
  const h_mnu = $('.m_gnb > ul > li > a');
  h_mnu.click(function(){
    $(this).next().slideDown().parent().siblings().find('.sub_m').slideUp();
    $(this).find('i.fa-angle-down').css({'transform':'rotate(180deg) translateY(-35px)',}).parent().parent().siblings().find('i.fa-angle-down').css({'transform' : 'rotate(0deg) translateY(35px)'});

  });


  });// jquery 끝
