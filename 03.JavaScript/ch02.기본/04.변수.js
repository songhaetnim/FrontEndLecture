//  식별자(identifier)
//      1. 영문자, 숫자, $, _ 사용가능
//      2. 대소문자 구분
//      3. 숫자로 시작하면 안됨
//      4. 예약어(keyword) 사용금지
//      5. 단어가 여러개 사용하는 것을 권장 - camel style로 한 단어를 만들 것
//      6. 변수, 상수, 함수명 등은 소문자로 시작
//      7. 클래스 명은 대문자로 시작

// 변수(variable)
let pi = 3.1415926535;  // 신식
var radius = 10;        // 구식
console.log(`둘레는 ${2 * pi * radius}, 면적은${pi * radius * radius} 입니다.`);

// 복합 대입 연산자
let a = 1, str = '';
a += 2;             // a = a + 2
str += 'A quick brown fox ' ;
str += 'jumps over the lazy dog. ' ;
console.log(a, str)

// 증감 연산자
let x = 0, y = 0;
console.log(x++, ++y);      // post-increment, pre-increment ++x는 지금 당장 1올라가는거   x++는 나중에 1올라가는거  ++앞에붙이는거와 뒤에붙이는건 차이남.
console.log(x, y);
console.log(x--, --y);      // x--나중에 1감소하는거   --x지금 당장 1감소하는거   -- 앞에붙는거와 뒤에 붙는게 차이남
console.log(x, y);

// 나머지 자료형
// 4. 함수(function)
console.log(typeof function() { });
console.log(typeof(() => {}));      // 화살표(arrow) 함수, 람다 함수, 익명 함수 //typeof= 타입을 알려주는 태그다 함수인지,문자열인지,넘버인지 알려주는 단어

// 5. 객체(object)
let obj = {x: 1, y: 2};
console.log(typeof obj);
console.log(obj.x, obj.y);붙고

// 6. undefined
let alpha;
console.log(typeof alpha, typeof beta);     // 초기화하지 않은 변수, 선언하지 않은 변수,의미없는 변수(요소)
alpha = 123;
beta = 456;
console.log(typeof alpha, typeof beta);
