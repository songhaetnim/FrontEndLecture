// 1. 완전수
for (let i = 2; i <= 10000; i++){       // 체크해야할 수
    let divSum = 0;                     //
    for (let k = 1; k < i; k++){        // 1에서부터 자기자신 전까지 나누는 숫자
        if (i % k == 0)                 // 약수 구하기
            divSum += k;                // 약수를 더하기
    }
    if (i == divSum)                    // 자기 자신을 제외한 약수의 합과 자기자신의 같으면
        console.log(i);
}

// 2. a+b+c = 1000 을 만족하는 피타고라스 수 (단, a<b<c)

for (let a =1; a <= 1000; a++){         // 1000안에 a가 찾아야될 수
    for(let b = a + 1; b <= 1000; b++){ // 1000안에 b가 찾아야될 수
        c = 1000 - a -b;                // c와 a b의 관계? 
        if (a * a + b * b == c * c){    // 피타고라스
            console.log(a, b, c);       // 구현
            process.exit(0);            // 프로그램 실행을 종료
        }
    }
}