//dom 생성된 후 이벤트 감지, ('~~~', ()=>{}); 습관
document.addEventListener('DOMContentLoaded', () => {
  //버튼 요소 가져오기
  const bt1 = document.getElementById('bt1');  // id가져오기
  const bt2 = document.querySelector('#bt2');  //selector 가져오기
  const bt3 = document.querySelector('#bt3');
  const msg = document.querySelector('#msg');

  //버튼 이벤트 달기
  bt1.addEventListener('click', () => {
    // alert('function 함수');
    alert(bt1.innerHTML); // 버튼 내용을 출력
  });
  bt2.addEventListener('click', () => {
    alert('화살표 함수');
  });
  bt3.addEventListener('click', () => {
    // msg.innerHTML = '<h2>랜덤수생성</h2>';
    //버튼3의 내용 가져올때, tab키 위 `사이에 ${}
    //자바스크립트 변수 선언시 const 아님 let 
    //const 상수 : 바뀌지 않는 값을 지닌, let :변수
    let n = Math.floor(Math.random() * 6) + 1;
    //개발자만 볼수 있는
    console.log('n=',n);
    msg.innerHTML = `<h2>${bt3.textContent} : <span>${n}</span></h2>`;
  });


});