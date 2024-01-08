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
console.log(countArr);









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






// 3. 두개의 세자리수를 곱해서 나온 결과가 palindrome일때
// 가장 큰 palinderome 수와 어떤 수를 곱해서 나온 결과인가?







//4. C:/Workspace/Webproject/03.JavaScript/ch07.표준내장객체/04.String연습.js
//에서 파일명 (04.String연습.js)만 출력하세요.

















/*
1이 몇번 사용되었나? (방법)
 12345678901112131415
 (2345678902145 지움)
0, 2-9 -->''
/[023456789]/g,''
/^1/g,''*/
