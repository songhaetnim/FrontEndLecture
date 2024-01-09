// 선언적 함수
function add(a, b) {    // a, b - 매개변수, parameter, argument //add2개의 변수를 4개의
    return a + b;       // 반환값
}
console.log(add(3, 4));
console.log(add(8, 9));

// 익명(Anonymous) 함수

const anonymousSum = function (a, b){ // 잘 안쓰는 함수
    return a + b;
}
console.log(anonymousSum(3, 4));
console.log(anonymousSum(8, 9));

// 화살표 함수, 람다 함수 
const arrowSum = (a, b) => a + b;
console.log(anonymousSum(3, 4));
console.log(anonymousSum(8, 9));