//1. 만 나이를 계산하세요.
//생년, 월, 일을 변수로 설정해서 풀어보세요.계산하세요

function getWesternAge(birthday) {
    // console.log(birthday);
    const birth = new Date(birthday); 
    const now = new Date();
    // console.log(now);
    const year = now.getFullYear()- birth.getFullYear();
    const nowMonth = birth.getMonth()+1;
    // console.log(nowMonth);
    const birthMonth =  now.getMonth()+1;
    // console.log(birthMonth);
    const m = birthMonth - nowMonth;
    // console.log(m);
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) { // 생일이 지났으면
      // now.getDate() < birth.getDate() 생일의 "일"이 오늘보다 크고
      // m === 0 오늘과 같은 월 이거나
      // 같은 월이면
      return year -1; // 생일이 안지났으니까 -1
    }
    return year; 
  }
  
  console.log(getWesternAge("1991-05-22"));



/*2.백준도장 31090 참조
다음의 사례에 대해서 Good/Bye를 출력하세요.  
2023,2024,...,2040

단, 조건에 맞는를 확인해주는 함수 isDivisble(year)를 만들어서
해결하세요.




3.어레이를 매개변수로 받아서 합의 제곱과 제곱의 합의 차이를 구하는 함수를 만들고,
[24, 67, 45, 97, 43] 의 결과를 출력하세요*/