// 백준도장 2739
// 구구단

/*let num = 6;
fot (let i = 1; <= 9; i++) {
    console.log(1${num} x ${i} = ${num * i}`);
}*/

// 2단 ~ 9단

for (let i =2; i <= 9; i++) {
    console.log(`============${i} 단 ===========`);
    for (let k =1; k <= 9; k++)
    console.log(`${i} x ${k} = $(i * k)`)
   console.log();

}