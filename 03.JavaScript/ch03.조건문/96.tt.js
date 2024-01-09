// 백준 2884번
const readline = require("readline");

const rl = readline.createInterface({   // readline 모듈을 사용하여 인터페이스 생성
    input: process.stdin,
    output: process.stdout,
});
 
let input = []                          // Input을 잘라서 넣을 배열 형성
 
rl.on("line", (line) => {               // 'line' 이벤트: 한 줄을 입력받을 때마다 실행되는 콜백 함수
    input = line.split(' ').map((number) => Number(number));        
    // 입력받은 문자열을 공백을 기준으로 나누고 각 요소를 숫자로 변환하여 배열에 저장
    rl.close();                                                     // 입력을 모두 받았으므로 rl을 닫음
});
 
rl.on('close', () => {
    let H=input[0];
    let M=input[1];

    if(M<45){
        M=60-45+M;
        H--;
    }
    else
        M-=45;
    
    if(H<0)
        H=23;
    
    console.log(`${H} ${M}`);

    process.exit();
})
