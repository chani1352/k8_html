// let arr = new arry();

let arr = [6,7,8,9,10];

console.log('arr', arr);

console.log('arr 개수 : ', arr.length);


//배열 요소 접근
console.log('맨처음요소 접근', arr[0]);
console.log('두번째요소 접근', arr[1]);;

//배열 전체 요소에 접근 : 배열의 순회
console.log('for');
for (let i = 0; i < arr.length ; i++){
  console.log(`${i+1}번째 : ${arr[i]}`);
}

console.log('for ... in')
for (let i in arr) {
  console.log(`${parseInt(i)+1}번째 : ${arr[i]}`);
}

console.log('for ... of')
for (let item of arr){
  console.log(`${item} : `, item % 2 == 0 ? "짝" : "홀");
}
console.log('for ... entries')
for (let [i,item] of arr.entries()){
  console.log(`${parseInt(i)+1}번째 : ${item} : ${item% 2 == 0 ? "짝" : "홀"}`);
}

console.log('foreach 메소드');
arr.forEach((item,i) =>{
  console.log(`${parseInt(i)+1}번째 : ${item} : ${item% 2 == 0 ? "짝" : "홀"}`);
});

// arr=[];
// arr.length = 0;  배열의 내용 없애기
// console.log('arr', arr);

arr.push(6);   // 배열 끝에 요소 추가
console.log('arr push', arr);

arr.pop();     // 배열 끝 요소 제거
console.log('arr pop', arr);

arr.unshift(6);  // 배열 처음 요소 추가
console.log('arr unshift', arr);

arr.shift();     // 배열 처음 요소 제거
console.log('arr shift', arr);

//  arr.splice(2,2);    *(index, 갯수) index위치에서 갯수만큼 제거
let arr2 = arr.splice(2,2); // arr에서 자른 값 arr2로 붙이기
console.log('arr splice', arr2);

arr2.splice(1,1,'a'); //(index,1, 값)  index위치에 값 변경
console.log('arr splice 값 변경', arr2);

arr2.splice(1,0,'b'); //(index,1, 값)  index위치에 값 추가
console.log('arr splice 값 추가', arr2);

arr = [1,2,3,4,5];


for (let item of arr){
  let item2 = item * 2;
  arr2.push(item2);
}
console.log('arr for 결과 arr2 :', arr2);

// callback 함수의 매개변수가 1개이면 () 생략 가능
// arr2 = arr.map((item)=>{

// callback 함수의 body에 return만 있으면 {}와 return 생략 가능
arr2 = arr.map(item=>{
//   // let item2 = item * 2;
//   // return item2;
  return item * 2;
});

arr2 = arr.map(item=> item*2);
console.log('arr map 결과 arr2 : ', arr2);

arr2 = arr.map(item=> item%2 == 0 ? '짝' : '홀');
console.log('arr map 결과 arr2 : ', arr2);

arr2 = arr.filter(item=> item%2 == 0);
console.log('arr filter 결과 arr2 : ', arr2);

arr2 = [];

for (let item of arr){
  if(item %2==0) arr2.push(item);
}

arr=[4,5,1,3,2];
console.log(`${arr} = > 정렬 ${arr.sort((a,b)=>b-a)}`);

