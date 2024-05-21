$(document).ready(function(){

  // // 첫번째 콘텐츠 예약하기 모달 스크립트
//  //모달 열고 닫기
const b_open = $('.con1_reserve_inner');
b_open.click(function(){$('.con1_reserve_modal').fadeIn();});


//모달 닫기
 const b = $('#con1_reserve_close_btn');
 b.click(function(){$('.con1_reserve_modal').hide();});    



//room 선택하면 on서식 붙게(class = "on")
let room = $('.con1_reserve_room ul li');

room.click(function(){    

for(let l=0;l<room.length;l++){ 
 room[l].classList.remove('on'); 
 this.classList.add('on');   

 let room_name = $(this).attr('id'); //console.log(room_name);
 $('#room').html(room_name);
}
});

//hotel 선택하면 on서식 붙게(class = "on")
let hotel = $('.con1_reserve_hotel ul li');

hotel.click(function(){    
for(let l=0;l<hotel.length;l++){ 
 hotel[l].classList.remove('on'); 
 this.classList.add('on'); 

 let hotel_name = $(this).attr('id'); //console.log(room_name);
 $('#hotel').html(hotel_name);
}
});


//달력하기

 calendarInit();

/*
 달력 렌더링 할 때 필요한 정보 목록 

 현재 월(초기값 : 현재 시간)
 금월 마지막일 날짜와 요일
 전월 마지막일 날짜와 요일
*/

function calendarInit() {

 // 날짜 정보 가져오기
 var date = new Date(); // 현재 날짜(로컬 기준) 가져오기
 var utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000); // uct 표준시 도출
 var kstGap = 9 * 60 * 60 * 1000; // 한국 kst 기준시간 더하기
 var today = new Date(utc + kstGap); // 한국 시간으로 date 객체 만들기(오늘)

 var thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());
 // 달력에서 표기하는 날짜 객체

 
 var currentYear = thisMonth.getFullYear(); // 달력에서 표기하는 연
 var currentMonth = thisMonth.getMonth(); // 달력에서 표기하는 월
 var currentDate = thisMonth.getDate(); // 달력에서 표기하는 일

 // kst 기준 현재시간
 // console.log(thisMonth);

 // 캘린더 렌더링
 renderCalender(thisMonth);

 function renderCalender(thisMonth) {

     // 렌더링을 위한 데이터 정리
     currentYear = thisMonth.getFullYear();
     currentMonth = thisMonth.getMonth();
     currentDate = thisMonth.getDate();

     // 이전 달의 마지막 날 날짜와 요일 구하기
     var startDay = new Date(currentYear, currentMonth, 0);
     var prevDate = startDay.getDate();
     var prevDay = startDay.getDay();

     // 이번 달의 마지막날 날짜와 요일 구하기
     var endDay = new Date(currentYear, currentMonth + 1, 0);
     var nextDate = endDay.getDate();
     var nextDay = endDay.getDay();

     // console.log(prevDate, prevDay, nextDate, nextDay);

     // 현재 월 표기
     $('.year-month').text(currentYear + '.' + (currentMonth + 1));

     // 렌더링 html 요소 생성
     calendar = document.querySelector('.dates')
     calendar.innerHTML = '';
     
     // 지난달
     for (var i = prevDate - prevDay + 1; i <= prevDate; i++) {
         calendar.innerHTML = calendar.innerHTML + '<li class="day prev disable unchecked">' + i + '</li>'
     }
     // 이번달
     for (var i = 1; i <= nextDate; i++) {
         calendar.innerHTML = calendar.innerHTML + '<li class="day current unchecked">' + i + '</li>'
     }
     // 다음달
     for (var i = 1; i <= (7 - nextDay == 7 ? 0 : 7 - nextDay); i++) {
         calendar.innerHTML = calendar.innerHTML + '<li class="day next disable unchecked">' + i + '</li>'
     }

     // 오늘 날짜 표기
     if (today.getMonth() == currentMonth) {
         todayDate = today.getDate();
         var currentMonthDate = document.querySelectorAll('.dates .current');
         currentMonthDate[todayDate -1].classList.add('today');
     }
 }

     // 이전달로 이동
     $('.go-prev').on('click', function() {
         thisMonth = new Date(currentYear, currentMonth - 1, 1);
         renderCalender(thisMonth);
     });

     // 다음달로 이동
     $('.go-next').on('click', function() {
         thisMonth = new Date(currentYear, currentMonth + 1, 1);
         renderCalender(thisMonth); 
     });


 //날짜가 선택되면 색이 변하게 한다(class = "check")
     let checkDay = $('.dates > li.unchecked'); 
     // let myLi = $('.dates').children;

     checkDay.click(function(){
       for(let j=0;j<checkDay.length;j++){ 
       checkDay[j].classList.remove('check'); 
         this.classList.add('check'); 
       };
     });
    }



}); //jquery end 