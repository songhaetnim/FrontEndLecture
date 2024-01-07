//1. 만 나이를 계산하세요.
//생년, 월, 일을 변수로 설정해서 풀어보세요.계산하세요

function getWesternAge(birthday) {
    
    const birth = new Date(birthday); 
    const now = new Date();
    
    const year = now.getFullYear()- birth.getFullYear();
    const nowMonth = birth.getMonth()+1;
    
    const birthMonth =  now.getMonth()+1;
    
    const m = birthMonth - nowMonth;
    
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) { 
    
      
      
    return year -1; 
    }
    return year; 
  }
  
  console.log(getWesternAge("1991-05-22"));



/* 2.백준도장 31090 참조
다음의 사례에 대해서 Good/Bye를 출력하세요.  
2023,2024,...,2040

단, 조건에 맞는를 확인해주는 함수 isDivisble(year)를 만들어서
해결하세요. */

function isDivisble(year) {
  if ((year + 1) %(year - 2000) == 0)
  console.log(year-2000,year+1,'good')
 else
 console.log(year-2000,year+1,'bye')
}
for(let i = 2023; i <2040; i++)
    isDivisble(i)

// for(let i = 2023; i <2040; i++) {

//   if ((i + 1) % (i - 2000) == 0)
//   console.log(i - 2000,i + 1,'good')
//  else
//  console.log(i - 2000,i + 1,'bye')
// }


/* 3.어레이를 매개변수로 받아서 합의 제곱과 제곱의 합의 차이를 구하는 함수를 만들고,
[24, 67, 45, 97, 43] 의 결과를 출력하세요 */

function sumOfSquare(arr) {
  let sumMaxArray = 0
  let sumArray = 0
 for (let i = 0; i < arr.length; i++)
 sumMaxArray += arr[i]
 sumMaxArray =sumMaxArray * sumMaxArray
 for( let i = 0; i < arr.length; i++)
 sumArray += arr[i] * arr[i]
 console.log(sumMaxArray)
 console.log(sumArray)
 return sumMaxArray - sumArray
}

let sampleArray = [24, 67, 45, 97, 43,];
console.log(sumOfSquare(sampleArray));




