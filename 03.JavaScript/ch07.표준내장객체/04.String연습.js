// 연습문제
// 1. 1에서 1000사이에 0은 몇번, 1은 몇번,  ..., 9는 몇번 사용되었는가

let numStr = '';
for(let i = 1; i <=1000; i++){
    numStr += i;
}
//정규 표현식
// 1이 몇번 사용되었나?
    console.log(numStr.replace(/[^1]/g, '').length);

// count 배열을 만들어 일일이 체크
for (let i = 0; i <= 9; i++){
    let pattern = new RegExp('[^' + i + ']', 'g');
    count = numStr.replace(pattern, '').length
    console.log(`${i}: ${count}`)
}

let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (let i = 0; i < numStr.length; i++){
    let num = Number(numStr[i]);
    countArr[num]++;
}
console.log(countArr);












// 2. 디지털 시계, 00:00 ~ 23:59
// 하루동안 3이 표시되는 시간은 몇초인가?
/* let sum = 0;
for (let h = 0; h <= 24; h++) {
    if (h % 10 === 3)
        sum += 60 * 60
    else
        for (let m = 0; m <= 60; m++)
            if (m % 10 === 3)
                sum += 60
            else
                for (let n = 0; n <= 60; n++)
                    if (n % 10 === 3)
                        sum += 1
}
console.log(sum) */

/* let totalSec = 0;    
for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m++) {
        if (h % 10 == 3 || Math.floor(m / 10) == 3 || m % 10 == 3) { 

            totalSec += 60;
        }
    }
}
console.log("total seconds: " + totalSec);
 */

// 3. 두개의 세자리수를 곱해서 나온 결과가 palindrome일때
// 가장 큰 palinderome 수와 어떤 수를 곱해서 나온 결과인가?

/* let sum = 0
for(i = 100; i <= 999; i++)
    for(k = 100; k <=999; k++){
        let str = i * k;
}
function isPalinderome(str){
    let reverseStr = str.split('').reverse().join('')
    return str = reverseStr;
}

console.log(isPalinderome(str)); */

function isPalindrome(str) {
    str = String(str);
    let reverseStr = str.split('').reverse().join('');
    return str == reverseStr;
}

let all = [];
let max = 0;
let num1 = 100, num2 = 100;
for (let i = 100; i <= 999; i++) {
    for (let k = 100; k <= 999; k++) {
        let palindrome = i * k;
        if (isPalindrome(palindrome) == true)
            all.push(Number(palindrome));
    }
    for (let num of all) {
        if (num > max)
            max = num;
    }
    if (max % i == 0) {
        num1 = i;
        num2 = max / i;
    }
}
console.log(`가장 큰 Palindrome는 ${max}이고, 이는 ${num1} X ${num2}입니다.`);




//4. C:/Workspace/Webproject/03.JavaScript/ch07.표준내장객체/04.String연습.js
//에서 파일명 (04.String연습.js)만 출력하세요.

let file = 'C:/Workspace/Webproject/03.JavaScript/ch07.표준내장객체/04.String연습.js'
console.log(file.substring(50, 64))