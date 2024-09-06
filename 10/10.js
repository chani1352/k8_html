const disp = (divNum,divplus,divBonus,dsp)=>{
  divNum.style.display = dsp;
  divplus.style.display = dsp;
  divBonus.style.display = dsp;
}


document.addEventListener('DOMContentLoaded', () => {

  const bt = document.querySelector('button');
  const divNum = document.querySelector('#divNum');
  const divplus = document.querySelector('#divplus');
  const divBonus = document.querySelector('#divBonus');


disp(divNum,divplus,divBonus,'none');


  bt.addEventListener('click', (e) => {
    e.preventDefault();

    disp(divNum,divplus,divBonus,'inline');

    let arr = [];

    while (arr.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1;
      if (!arr.includes(n)) arr.push(n);
    }
    console.log(arr);

    let arr2 = arr.splice(6,1);
    arr.sort((a,b)=> a-b);
    console.log(arr);
    console.log(arr2);

    arr=arr.map(item=>`<span class = sp${Math.floor(item/10)} >${item}</span>`);

    arr=arr.join('');
    divNum.innerHTML =arr;

    arrBonus =arr2.map(item=>`<span class = sp${Math.floor(item/10)} >${item}</span>`);
    arrBonus=arrBonus.join('');
    divBonus.innerHTML =arrBonus;


    console.log(arr);


  });

});