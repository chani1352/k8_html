document.addEventListener('DOMContentLoaded', ()=>{

  const img = document.querySelector('img');
  const txt = document.querySelector('#txt');
  const bt = document.querySelector('#bt');

  bt.addEventListener('click', ()=>{
    let n = Math.floor(Math.random() * 100) + 1;
    console.log(n);

    if (parseInt(txt.value) === n) img.setAttribute('src','../img/good.png');
    else if(txt.value > n) img.setAttribute('src','../img/down.png');
    else img.setAttribute('src','../img/up.png');
  });

});