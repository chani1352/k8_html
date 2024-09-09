document.addEventListener('DOMContentLoaded',()=>{
  const txt = document.querySelector('#txt1');
  const secBt1 = document.querySelectorAll('.secBt1');
  const secBt2 = document.querySelectorAll('.secBt2');
  const secBt3 = document.querySelectorAll('.secBt3');
  const secBt41 = document.querySelector('#secBt41');
  const secBt42 = document.querySelector('#secBt42');

  let obj = {apple:'🍎',carrot:'🥕',banana:'🍌'};

  let jsonDt;

  secBt41.addEventListener('click',(e)=>{
    e.preventDefault();

    jsonDt = JSON.stringify(obj);
    console.log('obj = ', obj);
    console.log('jsonDt = ', jsonDt);


  });

  secBt42.addEventListener('click',(e)=>{
    e.preventDefault();

  let obj2 = JSON.parse(jsonDt);
    console.log('jsonDt = ', jsonDt);
    console.log('obj2 = ', obj2);


  });


//추가
  for(let bt of secBt1){
    bt.addEventListener('click',(e)=>{
      e.preventDefault();

      let addItem = bt.innerHTML.replace('추가','');
      txt.value = txt.value + addItem;

      console.log(bt.innerHTML);

      console.log(txt.value);
    });
  }
//삭제
  for(let bt of secBt2){
    bt.addEventListener('click',(e)=>{
      e.preventDefault();

      let delItem = bt.innerHTML.replace('삭제','');

      //case1
      // let tmArr = Array.from(txt.value); //이모지형태로 분리
      //let tmArr = txt.value.split(''); //유니코드로 분리


      // for(let i = 0 ; i < tmArr.length ; i++ ){
      //   if(tmArr[i] == delItem) tmArr[i] = '';
      // }

      // tmArr = tmArr.filter(item => item !=delItem);

      // tmArr=tmArr.join('');
      // txt.value = tmArr;
      // console.log(tmArr);

      //case2
      // for(let i = 0 ; i < txt.value.length ; i++){

      //     txt.value = txt.value.replace(delItem,'');

      // }

      //case3
      txt.value = txt.value.replaceAll(delItem,'');


  
    });

  }

  //수정
  for(let bt of secBt3){
    bt.addEventListener('click',(e)=>{
      e.preventDefault();
      //case1
      // let delItem = bt.innerHTML.slice(0,2);
      // let addItem = bt.innerHTML.slice(3,5);
      // console.log(delItem);
      // console.log(addItem);
      // txt.value = txt.value.replaceAll(delItem,addItem);

      //case2
      let items = bt.innerHTML.split('→');
      console.log('items = ',items);
      //txt.value = txt.value.replaceAll(items[0],items[1]);

      //case3
      let tmArr = Array.from(txt.value);
      console.log(tmArr);
      tmArr = tmArr.map(item => item == items[0] ? items[1] : item);
      txt.value = tmArr.join('');
      




    });
  }


});