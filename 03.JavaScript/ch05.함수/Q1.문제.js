
// 배열에 대한 함수 만들어 보기

// 1. 배열을 인수로 받아서, 합을 반환하는 함수
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum;
}

// 2. 배열에서 최대값을 찾아서 반환해주는 함수
/* let sampleArray = [43, 17, 25, 36, 98, 73];
console.log(maxArray(sampleArray)); // 샘플값을 maxArray()에 넣는다
function maxArray(arr) {
    let numMax = 0;
    for (let num of arr){ // arr 즉 샘플의 값을 num = 맨처음을 값을 지정
        if(num > numMax)  // 맨처음의 값이 0보다 크면 
            numMax = num; // 0 = 맨처음값이 된다
    }
    return numMax;        // = numMax가 끝까지 반복
}; */

//2

function maxArray(arr) {
    let maxValue = arr[0];
    for (let item of arr){
        if(item > maxValue)
        maxValue = item;
    }
    return maxValue;
}
let sampleArray = [43, 17, 25, 36, 98, 73];
console.log(sumArray(sampleArray));
console.log(maxArray(sampleArray));

// 평균
console.log(sumArray(sampleArray) / sampleArray.length);

// 3. 배열 원소의 제곱의 합
function sum0fSquare(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i] * arr[i];
    return sum;
}
console.log(sum0fSquare(sampleArray))