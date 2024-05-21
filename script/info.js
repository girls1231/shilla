//info.html의 스크립트 (스크롤시 나오게 한다)

$(document).ready(function(){

  let sposX, sposY;

//스크롤 이벤트
  $('.info_t_btn').hide(); // 탑버튼 숨기기
  
  $(window).scroll(function(){
    sposY = $(this).scrollTop();
    
  $('.spos2').text(sposY);

  
//뷰포트 너비에 따른 top버튼 나오는 시간
  if ($(window).width() < 1025) {
  /* 뷰포트 너비가 1025 픽셀 미만 */
  if(sposY>=300){$('.info_t_btn').stop().fadeIn();}else{$('.info_t_btn').stop().fadeOut();}
} else {
  /* 뷰포트 너비가 1025 픽셀 이상 */
  if(sposY>=800){$('.info_t_btn').stop().fadeIn();}else{$('.info_t_btn').stop().fadeOut();}
}
});

//탑버튼 누르면 올리기
  $('.info_t_btn').click(function(){  
    e.preventDefault();   
    $('html, body').animate({scrollTop:"0px"},1000);
  });

 // 클래스가 "scroll_on"인 모든 요소를 선택합니다.
const $counters = $(".scroll_on");
    
 // 노출 비율(%)과 애니메이션 반복 여부(true/false)를 설정합니다.
const exposurePercentage = 70; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
const loop = true; // 애니메이션 반복 여부를 설정합니다. (true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨집니다.)

// 윈도우의 스크롤 이벤트를 모니터링합니다.
$(window).on('scroll', function() {
     // 각 "scroll_on" 클래스를 가진 요소에 대해 반복합니다.
    $counters.each(function() {
    const $el = $(this);

    // 요소의 위치 정보를 가져옵니다.
    const rect = $el[0].getBoundingClientRect();
    const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
    const contentHeight = rect.bottom - rect.top; // 요소의 높이
        
    // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
    if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) 
    {$el.addClass('active');}
    // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
    if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) 
    {$el.removeClass('active');}
    });

}).scroll();

});