document.addEventListener('DOMContentLoaded', ()=>{
  const bt = document.querySelector('button');
  const img = document.querySelector('#msg > img');

  bt.addEventListener('click', ()=>{
    let n = Math.floor(Math.random() * 6) + 1;

    //속성 값 set
    img.setAttribute('src', `../img/${n}.png`);
    img.setAttribute('alt', `${n}`);
  });
});