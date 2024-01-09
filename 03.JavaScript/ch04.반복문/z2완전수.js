// 100000 이하의 완전수
for (let i = 2; i <= 10000; i++){
    let sum = 0;
    for(let k = 1; k < i; k++){
        if (i % k == 0)
            sum += k;
    }
    if (i == sum)
        console.log(i);
}