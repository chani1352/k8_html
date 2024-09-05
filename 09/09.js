document.addEventListener('DOMContentLoaded', () => {
  const txt1 = document.querySelector('#txt1');
  const txt2 = document.querySelector('#txt2');
  const bt1 = document.querySelector('#bt1');
  const bt2 = document.querySelector('#bt2');

  // 회문 처리
  bt1.addEventListener('click', (e) => {
    e.preventDefault();

    let s1 = txt1.value.replaceAll(' ', '');  // 공백이 있을때 공백 제거
    let s2 = '';

    //반복문 이용
    // for (let i = s1.length -1 ; i >=0 ; i-- ){
    //   s2 = s2 + s1[i];
    // } 
    s2 = s1.split('').reverse().join(''); // split 은 배열로 , 배열은 reverse가 존재 , 배열을 join으로 다시 묶기

    if (s1 == s2) txt2.value = '회문입니다.';
    else txt2.value = '회문이 아닙니다.';


    console.log('s1 : ', s1);
    console.log('s2 : ', s2);

  });

  //숫자합계

  bt2.addEventListener('click', (e) => {
    e.preventDefault();

    let n = 0;
    let cnt = 0; 
    for (let c of txt1.value) {
      if (c != ' ' && !isNaN(c)) {
        n = n + parseInt(c);
        cnt++;
      }
    }

    if (cnt == 0) {
      txt2.value = '숫자가 존재하지 않습니다.';
    } else txt2.value = n;
  });

});