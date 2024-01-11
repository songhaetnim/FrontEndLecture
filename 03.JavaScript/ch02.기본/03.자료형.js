// 자바스크립트의 자료형
// 1. Number
console.log(5 + 2, 5 - 2 , 5 * 2, 5 / 2, ); // +, -, * , /
console.log(5 % 2);     // modulo, 나머지
console.log(2 ** 10);   // 2의 10제곱, 1024(1k) ***X2ㄴㄴ
console.log(1.3e-8);   // 1.3 * 10 ** -8

// 2. 문자열(stiong)
console.log('He said "I love you."');
console.log("I'll be back.");
console.log("'He said \"I love you.\"'");    // escaping
console.log('Back slash (\\) 기호를 사용할 때에는 \\ 두개를 쓰면됩니다.');

let hello = '안녕하세요?';
console.log(hello[0], hello[2], hello[5]);

// //  template literal
let a = 2, b = 3;
console.log(a, '더하기', b, '은', 2 + 3, '입니다');
console.log(`${a} 더하기 ${b}은 ${a+b} 입니다`);
console.log(`올해는 ${new Date().getFullYear()}년입니다.`);
// full year
//      fullYear  : camel case  --> Getter method   --> getFullYear
//      full_year : snake case

// 3. 논리형(boolean)
console.log(typeof(true), typeof(false));
console.log(2 == 2.0, 5 >= 4, !('가나다' > '마바사')); // 관계 연산자   ?= true ,진실,참,   ! = not 거짓(또는 반대)

let x = 10 ;
console.log(x > 8 || x < -3);   // 논리 연산자 ||(or,또는 둘중에 하나라도 맞으면 된다.), x > 8 또는 x < -3 
console.log(x > 8 && x < 12);   // && (and 둘다 똑같아야한다.), 8 < x < 12
console.log(true > 10); // true=1, false=0 값이 있으면 true 0이거나 값이 없으면 false