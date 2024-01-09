/* 입력
첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.

출력
출력형식과 같게 N*1부터 N*9까지 출력한다. */
/* let num = 6;
for(let i = 1; i <= 9; i++){
    
    console.log(`${num} x ${i} = ${num * i}`)
} */

// 2단 ~ 9단

for(let i = 2; i <= 9; i++){
    console.log(`=======${i}단=======`);
    for (let k = 1; k <= 9; k++)
        console.log(`${i} x ${k} = ${i * k}`)
    console.log();
}
