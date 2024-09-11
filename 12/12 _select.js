  //OPEN API 데이터 가져오기
  const getData = (selDt,ul,selNa) =>{
    const testAPI = '82ca741a2844c5c180a208137bb92bd7';

    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
    url = `${url}key=${testAPI}&targetDt=${selDt}`;

    if(selNa != 'T'){
      url = `${url}&repNationCd=${selNa}`;
    }

    fetch(url)
      .then(resp => resp.json())
        // .then(data => console.log(data.boxOfficeResult))
        .then(data => {
          let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
          let tm = dailyBoxOfficeList.map(item => 
            `<li class='mvli'>
            <span class='rank'>${item.rank}</span>
            <span class='movieNm'>${item.movieNm}</span>
            <span class='openDt'>${item.openDt}</span>
            <span class='rankInten'>
            ${item.rankInten < 0 ? '<span class="spBlue">▼</span>' + item.rankInten.slice(-1) : item.rankInten == 0 ? '-' : '<span class="spRed">▲</span>' + item.rankInten}
            </span>
            </li>`)
          ul.innerHTML = tm.join('');
        })
      .catch(err => console.error(err));
  }
  // ${item.rankInten > 0 ? '<span class="spRed">▲</span>' : item.rankInten < 0 ? '<span class="spBlue">▼</span>' : '-'}
  // ${item.rankInten != 0 ? Math.abs(item.rankInten) : ''}
  
  
  //어제 날짜 구하기 함수
  const getYesterday = () =>{
    const yesterday = new Date();  //const라 변경 안됨, 상수
    yesterday.setDate(yesterday.getDate()-1);  //set 함수로 값 변경
    console.log('yesterday',yesterday);
    // const dateFormat = `${yesterday.getFullYear()} - ${('0'+(yesterday.getMonth()+1)).slice(-2)} - ${('0'+ yesterday.getDate()).slice(-2)}`;
    // return dateFormat;
    const year = yesterday.getFullYear();
    let month = yesterday.getMonth() + 1;
    let day = yesterday.getDate();

    //월일 2자리
    month = month < 10 ? '0'+ month : month;
    day = day < 10 ? '0' + day : day;

    //month = `${month}`.padStart(2,0);

    return `${year}-${month}-${day}`;

  }


document.addEventListener('DOMContentLoaded', ()=>{

  const dt = document.querySelector('#dt');
  const ul = document.querySelector('.sec > ul');
  const sel = document.querySelector('#Na');

  //어제 날짜 구하기
  let yesterday = getYesterday();   // 함수에서 return해서 값을 가져옴
  console.log('yesterday',yesterday);  

//date요소 최대값 설정
  dt.max = yesterday;

  //data 기본값
  dt.value = yesterday;
  getData(dt.value.replaceAll('-',''), ul,sel.value);

  dt.addEventListener('change',()=>{
    getData(dt.value.replaceAll('-',''), ul,sel.value);
  });

  sel.addEventListener('change', ()=>{
    getData(dt.value.replaceAll('-',''), ul,sel.value);
  });


});