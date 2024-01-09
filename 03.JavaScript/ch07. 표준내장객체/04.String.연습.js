// 연습문제
// 1. 1에서 1000사이에 0은 몇번, 1은 몇번,.....,9는 몇번 사용되었는가
//           1234567890101112131415....9991000
let numStr = '';
for (let i = 1; i <= 1000; i++) {
    numStr += i;
    
}
// 1이 몇번 사용되었나?
console.log(numStr.replace(/[^1]/g, '').length);


let pattern = new RegExp('[^2]' , 'g');
console.log(numStr.replace(pattern, '').length);

for (let i =0; i <= 9; i++) {
    let pattern = new RegExp('[^' + i +']', 'g');
    count = numStr.replace(pattern, '').length;
    console.log(`${i}: ${count}`);
}


// count 배열을 만들어 일일이 체크
let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < numStr.length; i++) {
    let num = Number(numStr[i]);
    countArr[num]++;
}
console.log(countArr);  //301, 300, ..., 300









// 2. 디지털 시계, 00:00 ~ 23:59
// 하루동안 3이 표시되는 시간은 몇초인가?

let totalSec = 0;
for (let h = 0; h < 24; ++h) {
    for (let m = 0; m < 60; ++m) {
        if (Math.floor(h / 10) === 3 || h % 10 === 3 || Math.floor(m / 10) === 3 || m % 10 === 3) {
            totalSec += 60;
        }
    }
}
console.log("total seconds: " + totalSec)

/* 
1시 13시 23시  3분 23분 30분 ~39분 43분 53분

let displayTime =0;
for (let hour =0; hour <= 23; hour++) {
    for (let minute = 0; minute <=59; minute++){
        let clock = hour + ':' + minute;
        if (clock.indexOf('3') >= 0)
        displayTime +=60;
    }
}
console.log(`하루동안 3이 표시되는 시간은 ${displayTime}초 입니다.`); ---선생님 버젼 */






// 3. 두개의 세자리수를 곱해서 나온 결과가 palindrome일때
// 가장 큰 palinderome 수와 어떤 수를 곱해서 나온 결과인가?

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

/* 
 function c(s) {
     return s == s.split('').reverse().join;
 }
 let maxPal =0, max1 =0, max =0;
 for (let i =100; i <= 999; i++) {
    for (let k= i; k <= 999; k++){
        let mul = i * k;
            if(is palindrome(String(i * k ))) {
                if (mul > maxPal) {
                    maxPal = mul; max1 = i; max2 = k;
                }
            }
    }
 }
 consle.log(`${max1} x ${max2} = ${maxpal}`);       // 913 x 993 = 906609
 ----선생님버젼





4. C:/Workspace/Webproject/03.JavaScript/ch07.표준내장객체/04.String연습.js
에서 파일명 (04.String연습.js)만 출력하세요.


let root = "C:/Workspace/WebProject/3.JavaScript/ch07.표준내장객체/04.String연습.js";
console.log(root.substring(root.indexOf('4') - 1));


let patg ='C:/Workspace/WebProject/3.JavaScript/ch07.표준내장객체/04.String연습.js";';



// split 후 맨 마지막 요소
let pathArr = path.split(",');
consle.lig(pathArr[pathArr.length -1]);

// 맨 마지막에 있는 / 위치를 찾아서 sudstring 메소드를 찾는 방법
let fileIndex = path.lastImdexOf('/" );
consle.lig(path.substi[pathArr.length -1]);















/*
1이 몇번 사용되었나? (방법)
 12345678901112131415
 (2345678902145 지움)
0, 2-9 -->''
/[023456789]/g,''
/^1/g,''*/
