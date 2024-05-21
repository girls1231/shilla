$(document).ready(function(){

//일곱번째 콘텐츠 이벤트
let observer8 = new IntersectionObserver((e) => {
  e.forEach((con7Wrap)=>{
    if(con7Wrap.isIntersecting){
      con7Wrap.target.style.transform = 'translateY(0)';
      con7Wrap.target.style.opacity = '1';
    }
  });
});

let con7Wrap = document.querySelectorAll('.con07_wrap');
observer8.observe(con7Wrap[0]);




//여섯번째 콘텐츠 오른쪽 TAB 이벤트
let observer7 = new IntersectionObserver((e) => {
  e.forEach((con6Tab)=>{
    if(con6Tab.isIntersecting){
      con6Tab.target.style.transform = 'translateX(0)';
      con6Tab.target.style.opacity = '1';
    }
  });
});

let con6Tab = document.querySelectorAll('.con6_tab > ul > li');
observer7.observe(con6Tab[0]);
observer7.observe(con6Tab[1]);
observer7.observe(con6Tab[2]);



//여섯번째 콘텐츠 왼쪽 box 이벤트
let observer6 = new IntersectionObserver((e) => {
  e.forEach((con6Box)=>{
    if(con6Box.isIntersecting){
      con6Box.target.style.transform = 'translateX(0)';
      con6Box.target.style.opacity = '1';
    }
  });
});

let con6Box = document.querySelectorAll('.con6_box');
observer6.observe(con6Box[0]);


//다섯번째 콘텐츠 tab 이벤트
let observer5 = new IntersectionObserver((e) => {
  e.forEach((con5TabBox)=>{
    if(con5TabBox.isIntersecting){
      con5TabBox.target.style.opacity = '1';
      con5TabBox.target.style.transform = 'translateX(0)';
    }
  });
});

let con5TabBox = document.querySelectorAll('#con5_tab > ul');
observer5.observe(con5TabBox[0]);




 //네번째 콘텐츠 BOX 이벤트
let observer4 = new IntersectionObserver((e) => {
  e.forEach((con3Box)=>{
    if(con3Box.isIntersecting){
      con3Box.target.style.opacity = '1';
    }
  });
});

let con3Box = document.querySelectorAll('.con4_img_box');
observer4.observe(con3Box[0]);
observer4.observe(con3Box[1]);
observer4.observe(con3Box[2]); 
observer4.observe(con3Box[3]); 
observer4.observe(con3Box[4]); 
observer4.observe(con3Box[5]); 
observer4.observe(con3Box[6]); 
observer4.observe(con3Box[7]); 

//두번째 콘텐츠 BOX 이벤트
let observer3 = new IntersectionObserver((e) => {
  e.forEach((con2Box)=>{
    if(con2Box.isIntersecting){
      con2Box.target.style.opacity = '1';
      con2Box.target.style.transform = 'translateX(0)';
    }
  });
});

let con2Box = document.querySelectorAll('.con2_inner');
observer3.observe(con2Box[0]);
observer3.observe(con2Box[1]);
observer3.observe(con2Box[2]);



//다섯번째 콘텐츠 txt 이벤트
let observer2 = new IntersectionObserver((e) => {
  e.forEach((con5TxtBox)=>{
    if(con5TxtBox.isIntersecting){
      con5TxtBox.target.style.opacity = '1';
      con5TxtBox.target.style.transform = 'translateX(0)';
    }
  });
});

let con5TxtBox = document.querySelectorAll('.con5_txt_box');
observer2.observe(con5TxtBox[0]);
observer2.observe(con5TxtBox[1]);
observer2.observe(con5TxtBox[2]);


// 각 콘텐츠 제목 이벤트 left 
let observer = new IntersectionObserver((i) => {
  i.forEach((conTitle)=>{
    if(conTitle.isIntersecting){
      conTitle.target.style.opacity = '1';
      conTitle.target.style.transform = 'translateX(0)';
    }
  });
});

let conTitle = document.querySelectorAll('.con_title');
observer.observe(conTitle[0]);
observer.observe(conTitle[1]);
observer.observe(conTitle[2]);
observer.observe(conTitle[3]);
observer.observe(conTitle[4]);





}) //jquery end