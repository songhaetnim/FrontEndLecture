//자바스크립트의 자료형
//1.Number
console.log(5 + 2, 5 - 2, 5*2,5/2);  // +,-,*,/
console.log(5 % 2);             //modulo,나머지
console.log(2 ** 10);       //2의 10제곱, 1024(1K)
console.log(1.3e-8);        //1.3x 10** -8

//2.문자열(string)
// /* console.log('He said "I love you."');
// console.log("I'll be back.");
// console.log("He said \"I love you.\"");         //esping
console.log('BacK slash(\\) 기호를 사용할 때에는\\ 두개를 쓰면 됩니다.');

let hello ='안녕하세요?';
console.log(hello[0],hello[2], hello[5]);

// templateral
let a =2, b = 3;
console.log(a, '더하기',b,'은',2 + 3,'입니다');
console.log(`${a} 더하기 ${b}은 ${a+b}입니다.`)
console.log(`올해는 ${new Date().getFullYear()}년입니다`);
/*
    full year
        fullYear    :camel case -->Getter method    -->getFullTear (클래스만 대문자 나머진 소문자)
        full_year   :snaKe case
        */

        //3.논리형(boolean)
        console.log(typeof(true), typeof(false));
        console.log(2 ==2.0, 5>=4, !('가나다'>'마바사'));  //관계 연산자

        let x =10;
        console.log(x > 8 ||x < -3);        //논리 연산자 || (or), x > 8 또는 x < -3
        console.log(x >8 && x < 12);        //&&(and), 8 < x <12
        console.log(true > 10);    
