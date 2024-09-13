let num = 0;
let click = 0;

document.addEventListener('DOMContentLoaded', () => {
  const bt = document.querySelector('button');
  const box = document.querySelectorAll('.box');
  const result = document.querySelector('#result');

  for (let i of box) {
    i.addEventListener('click', () => {
      if (i.innerHTML.length != 1) return;
      
      if (num == 0){
        result.innerHTML = "폭탄을 섞어주세요";
        return;
      }
      else if (i.id != `box${num}`) {
        i.innerHTML = '<img src="../img/hart.png"></img>';
        click++;
      }
      else {
        i.innerHTML = '<img src="../img/boom.png"></img>';
        result.innerHTML = "실패";
        num = 0;
      }

      if (click == 8 && num != 0) {
        box[num - 1].innerHTML = '<img src="../img/hart.png"></img>';
        result.innerHTML = "성공";
      }
    });
  }

  bt.addEventListener('click', (e) => {
    e.preventDefault();
    num = Math.floor(Math.random() * 9) + 1;
    result.innerHTML = '게임중';
    console.log(num);
    let a = 1;
    click = 0;

    for (let i of box) {
      i.innerHTML = a++;
    }
  });
});