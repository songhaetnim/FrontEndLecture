//  Array 객체

// 1. 배열 생성
let fruits = ['apple', 'banana', 'cherry'];
let casr = new Array('Audi','Benz','BMW');
console.log(casr);


/* // 2. 배열 속성
console.log(casr.length);


// 3. 배열 메소드
// 3-1.concat()
let newFruits = fruits.concat('mango','orange');
console.log(fruits);
console.log(newFruits);

// 3-2.join()
console.log(`내가 갖고 싶은 차는  ${casr.join(', ')}입니다.`);
// 단어 서로 연결해주고싶을땐 ' ,' 을 써주면 된다

// 3-3. pop()*       *자기 파괴적(self destructive) 메소드
console.log(casr.pop());          // 맨 뒤에 있는 요소를 끄집어 냄
console.log(casr);


//3-4.push()*
casr.push('Volkswagen');casr.push('Hyundai');
console.log('casr');

//3-5. reverse()*
casr.reverse();
console.log(casr);

// 3-6. sort()*
let numbers = [34, 56, 12, 20, 64, 46, 72];
// 오름차순(Ascending order)
numbers.sort();
casr.sort()
console.log(casr);

// 내림차순(Descending order)
numbers.sort(function(a, b){
    return b - a;
});
casr.sort(function(a, b){
    if (a < b )
     return 1;
    if(a > b)
    return-1;
    return 0;
});
console.log(casr);

let person = [
    {name:'James', age:30, job:'programmer'},
    {name:'maria', age:24, job:'student'},
    {name:'brian', age:27, job:'teacher'}
];
person.sort((a, b) => {
    if (a.name < b.name)
     return -1;
    if (a.name > b.name)
     return 1;
    return 0;
});

// 나이의 내림차순으로 정렬
person.sort((a, b) => b.age - a.age);
console.log(person);


// 3-7.slice()
console.log(fruits.slice(0, 2));
console.log(fruits);
 */

// 4. 응용
// 4-1. 문자열 뒤집기
let str = 'Hello, Javascript';
console.log(str.split('').reduce().join(''));


//4-2. 어떤 문자열이 회문(palindrome)인가?
function ispalindrome(str) {
    let reverseStr = str.split('').reduce().join('');
    return str == reverseStr;
}
console.log(ispalindrome('우영우'));
console.log(ispalindrome('소주 만병만 주소'));