// Call Back 함수 // 함수안에 파라메터로 
function callFiveTimes(callback) {          
    for (let i = 0; i < 5; i++)
        callback();
}

// 익명함수선언
/* const cb = function() {                     // 잘사용안함
    console.log('함수가 호출되었습니다.');
}

callFiveTimes(cb); */

// 함수를 호출할 때 익명 함수를 만들어 주는 것이 일반적
/* callFiveTimes(function() {    
    console.log('함수가 호출되었습니다.');
}
) */

//익명 함수로 화살표 함수를 사용하는 것이 많이보임
callFiveTimes(() => {    
    console.log('함수가 호출되었습니다.');
})

