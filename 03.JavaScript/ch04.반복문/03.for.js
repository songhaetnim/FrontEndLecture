 // for - 반복문
 // 1 에서부터 1000까지 합 구하기

 /* let sum = 0;
 for(let i = 1; i <=1000; i++) {
    sum += i;
 }
console.log(`1에서 1000까지 합은 ${sum}`);
 */
// 1에서 1000까지 홀수 합 구하기


let oddSum = 0;
for(let i =1; i <=1000; i +=2) {
    oddSum += i;
}
console.log(`1에서 1000까지 홀수의 합은 ${oddSum}`);
// 1에서 1000까지 짝수 합 구하기
let ddSum = 0;
for(let i =2; i <=1000; i +=2) {
    ddSum += i;
}
console.log(`1에서 1000까지 홀수의 합은 ${ddSum}`);


// 1에서 10까지 곱 구하기

 let product =1;
 for (let i = 1;i <= 10; i++)
    product *= i;
console.log(`1에서 10까지 곱은${product}`);

// array의 요소 출력
// element1, elemet2,....
let fruits = [` 사과`, `감`, `귤`,`배`];
let fruitStr ='';
for (let fruit of fruits) {
    fruitStr += fruits + ', ';
}
console.log(fruitStr);


/*
 let sum = 0;
 for(let i = 1; i <=1000; i++) {
    sum += i;
 }
console.log(`1에서 1000까지 합은 ${sum}`); < 이 형식 응용형식 싹 외워둘것*/
// for 반복문을 하게 된다면 100번은 연습으로  돌려보고 해볼것
//4-20까지 증량 4-10까지 등등 연습해볼것 실력을 늘려라

