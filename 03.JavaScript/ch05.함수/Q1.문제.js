// 배열에 대한 함수 만들어 보기

// 1.배열을 인수로 받아서, 합을 반환하는 함수          //무조건 외워야할것 너무 많이 나옴
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
    sum  += arr[i];
return sum; 

}

// 2. 배열에서 최대값을 찾아서 반환해주는 함수

    function maxArray(arr) {
        let maxValue = 0;
        for (let item of arr) { 
            if(item > maxValue )
            maxValue = item;
        }
        return numMax;
    };
    
    let sampleArray = [43, 17, 25, 36, 98, 73];
    
    console.log(sumArray(sampleArray)); // 샘플값을 maxArray()에 넣는다
    console.log(maxArray(sampleArray)); // 샘플값을 maxArray()에 넣는다

    // 평균
    console.log(sumArray(sampleArray) / sampleArray.length);

    // 3. 배열 원소의 제곱의 합
    function sumOfSquare(arr) {
        let sum = 0;
    for (let i = 0; i < arr.length; i++)
    sum  += arr[i]; /* *(별) */arr[i];
       return sum; 
        
    }
 console.log(sumOfSquare(sampleArray));




