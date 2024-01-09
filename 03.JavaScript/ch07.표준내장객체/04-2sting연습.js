// 2.
let displayTime = 0;
for (let hour = 0; hour <= 23; hour++){
    for (let minute = 0; minute <=59; minute++){
        let clock = ':' + hour + minute;        //문자열로 바꾸고
        if (clock.indexOf('3') >= 0)            //문자열에 3이 표시되면
            displayTime += 60;                  //60이 추가
    }
}
console.log(`하루동안 3이 표시되는 시간은 ${displayTime}초 입니다.`) // 29700

// 3.
function isPalindrome(s){
    return s == s.split('');
}
let maxPal = 0, max1 = 0, max2 = 0;
for (let i = 100; i <= 999; i++){
    for(let k = i; k<= 999; k++){
        let mul = i * k;
        if (isPalindrome(String(mul))){
            if (mul > maxPal){
                maxPal = mul; max1 = i; max2 = k;
            }
        }
    }
}
console.log(`${max1} x ${max2} = ${maxPal}`); //913 x 993 = 906609

// 4.
let path = 'C:/Workspace/Webproject/03.JavaScript/ch07.표준내장객체/04.String연습.js'

// split 후 맨 마지막 요소
let pathArr = path.split('/');
console.log(pathArr[pathArr.length - 1]);
// 맨 마지막에 있는 / 위치를 찾아서 substing 메소드를 찾는 방법
let fileIndex = path.lastIndexOf('/');
console.log(path.substring(fileIndex + 1))