// 피타고라스 a < b < c 1~1000
for(let a = 1; a <= 1000 ; a++){
    for(let b = a + 1; b <= 1000; b++){
        c = 1000 - a - b
        if (a * a + b * b == c * c){
            console.log(a, b, c)
            process.exit(0)
        }
    }
}
