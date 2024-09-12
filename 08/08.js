document.addEventListener('DOMContentLoaded', ()=>{

  const img = document.querySelector('#img1 > img');
  const txt = document.querySelector('#txt');
  const bt = document.querySelector('#bt');

  let n;
  let flag = false;

  bt.addEventListener('click', (e)=>{
    e.preventDefault();

    //if(flag == false){
    if (!flag){
      n = Math.floor(Math.random() * 100) + 1;
      flag = true;
      if(txt.style.display == 'none'){
        img.setAttribute('src', '../img/what.png')
        txt.style.display = 'inline';
        txt.value = '';
        txt.focus();  // 커서 위치 설정
        bt.innerHTML = '확인';
        return;
      }
    }
    
    console.log(n);

    if (parseInt(txt.value) === n) {
      img.setAttribute('src','../img/good.png');
      txt.style.display = 'none';
      bt.innerHTML = '번호를 다시 생성하세요.';
      flag = false;
    }
    else if(txt.value > n) img.setAttribute('src','../img/down.png');
    else img.setAttribute('src','../img/up.png');
  });

});