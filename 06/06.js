document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('.dice > img');
  const bts = document.querySelectorAll('button');
  const result = document.querySelector('#result');

  for (let bt of bts) {
    // console.log(bt);
    bt.addEventListener('click', () => {
      let n = Math.floor(Math.random() * 6) + 1;
      let m = parseInt(bt.textContent.charAt(0)); //parseInt 문자를 숫자로
      imgs[0].setAttribute('src', `../img/${n}.png`);
      imgs[0].setAttribute('alt', `${n}.png`);
      imgs[1].setAttribute('src', `../img/${m}.png`);
      imgs[1].setAttribute('alt', `${m}.png`);
      if (n === m) {
        result.innerHTML = '맞춤';
      } else {
        result.innerHTML = '틀림';
      }
      //  console.log(bt.textContent.charAt(0)); //charAt(0) 글의 첫번째 가져옴
    });
  }
});