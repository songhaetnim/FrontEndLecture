// 완전수 구하기

// 자기 자신을 제외한 약수의 합 구하는 함수
function sumOfDivisors(num){
    let divSum = 0;
    for (let i = 1; i < num; i++){
        if (num % i == 0)
        divSum += i;
    }
    return divSum
}
// 2에서부터 10000사이의 완전수 구하기
for (let i = 2; i <= 10000; i++){
    if (i == sumOfDivisors(i))
        console.log(i);
}

// 함수를 사용하지않은 코드
for (let i = 2; i <= 10000; i++){       // 체크해야할 수
    let divSum = 0;                     //
    for (let k = 1; k < i; k++){        // 1에서부터 자기자신 전까지 나누는 숫자
        if (i % k == 0)                 // 약수 구하기
            divSum += k;                // 약수를 더하기
    }
    if (i == divSum)                    // 자기 자신을 제외한 약수의 합과 자기자신의 같으면
        console.log(i);
}