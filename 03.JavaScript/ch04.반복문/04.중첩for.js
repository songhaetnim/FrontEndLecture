// 중첩 반복문
// 1. 별 다섯개를 다섯줄 그리기
for (let i =0; i <5; i++) {                     //다섯줄                 
    let star =''; 
    for (let k = 0; k < 5; k++) {   // 별 다섯개
        star +='*';
    }
    console.log(star);

}



// 2. 다이아몬드 그리기 (1사분면)

for (let i =0; i <5; i++) {                     //다섯줄                 
    let star =''; 
    for (let k = 0; k < i + 1; k++) {   // 별 다섯개
        star +='*';
    }
    console.log(star);

}

// 4사분면
for (let i =5; i >= 0; i--) {                              
    let star =''; 
    for (let k = 0; k < i; k++) {   
        star +='*';
      }
    console.log(star);

}
// 조건문*반복문  연습만이 연습이된다. 선생님 말 듣고 열심히 반복문을 연습하세요

// 2사분면

for (let i = 0; i < 5; i++){
    let star = '';
    for (let k =0; k < 4 - i; k++) {
        star += ' ';
    }
    for (let k = 0; k < i + 1; k++) {
        star += '*'; 
    }
    console.log(star);
}

// 3사분면 ( 5 빼기 - i 아이)

for (let i = 0; i < 5; i++) {
    let star ='';
    for (let k = 0; k < i; k++) {
        star += ' ';
    }
    for (let k = 0; k < 5 - i; k++ ) {
        star += '*';
    }
    console.log(star);
}


// 다이아몬드 완성

let maxDia = 7;
let N = parseInt(7 / 2); //3
for (let i =0; i <= N; i++) {
    let line = '';
    for (let k =0; k < N - i; k++)
    line += ' ';
    for (let k = 0;k < 2 * i + 1; k++)
    line += '*';
    console.log(line); 
}
for (let i = N -1; i >=0; i--){
    let line = '';
    for (let k =0; k < N - i; k++)
    line += ' ';
    for (let k = 0;k < 2 * i + 1; k++)
    line += '*';
    console.log(line); 
}


