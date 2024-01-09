// 1 ~ 10 홀수의 합
let sum = 0;
for (let i = 1; i <= 10; i += 2)
    sum += i;
console.log(sum);

sum = 0;
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0)
        continue;
    sum += i;
}
console.log(sum);

// 짝수
sum = 0;
for (let i = 2; i <= 10; i += 2){
    console.log(sum)
    sum += i;
}
console.log(sum)