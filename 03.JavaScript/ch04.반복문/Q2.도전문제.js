// 완전수(perfect number)
// 자기 자신을 제외한 약수의 합과 자기자신이 같은 수
// 6 = 1 + 2 + 3
// 28 = 1 + 2 + 4 + 7 +14
// 10000 이하의 수중에서 완전수 4개을 찾으세요.
/*let num = 28;
let sum = 0;
for (let i = 1; i < 28; i++) { // 체크해야할 수
    if(num % i == 0)
       sum += i;                                                                                                                                                                                                                                                                                                                                
}
confirm.log(sum); */

/*for (let i = 2; i <= 10000; i++) {
    let divSum = 0;
    for (let k = 1; k < i; k++) {       // 1에서부터 자기자신 전까지
        if ( i % k == 0)                  // 약수의 합 구하기
        divSum +=k;
    }
    if ( i == disSum)                       // 자기 자신을 제외한 약수의 합과 자기자신이 같으면
        console.log(i);
}*/
















// 2. a + b + c = 1000 을 만족하는 피타고라스 수 (단,a <b < c)
// a * a + b * b = c * c(피타고라스) 

for (let a = 1; a <= 332; a++) {
    for (let b = a + 1; b <= 500; b++) {
        c = 1000 - a - b;
        if (a * a + b * b == c * c ) {
            console.log(a, cb, c);
            Process.exit(0);                    // 프로그램 실행을 종료
        }
    }
}
/* 선생님 버젼 */










// 2. a+b+c = 1000 을 만족하는 피타고라스 수 (단, a<b<c)
/*let answer =[];
for(let a=1; a<1000; a++){
    for(let b=1; b<1000; b++){
        for(let c=1; c<1000; c++){
            re=a+b+c;
            if (re == 1000){ // 다 더한 값이 1000인 경우만 사용
                if(a*a + b*b == c*c && a < b){ // 피타고라스와 크기 비교
                    answer.push(a);
                    answer.push(b);
                    answer.push(c);
                }
            }
        }
    }
}
console.log(answer);*/

/* 순현님 버젼 */