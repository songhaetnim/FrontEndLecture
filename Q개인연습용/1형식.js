// console.log(
//     Number(true),
//     Number(false)
// )

// false - 숫자 0
//       -빈 문자열
//      -null
//     -undefined
//         -NaN

// for (let i = 0; i< 1;4

    
// } 
// )
// max = '문장'
    
// // let(선언) - 내가 이 파일에서 이 변수를 사용할테니 아무도 못쓰게 한다
// // if(조건문) - 내가 정해준 조건을만족하면 실행
// // for(반복문) - 값이 정해지 않을경우 무한반복 값을 정하면 내가 정한 값까지 반복한다
// console.log(max)
// //1. 만 나이를 계산하세요.
//생년, 월, 일을 변수로 설정해서 풀어보세요.계산하세요

console.log(getWesternAge("1991-05-22"));
// 1. console.log - 로그를 띄운다(cmd에서 눈에보이게)
// 2. getWesternAge("1991-05-22") - getWesternAge란 함수에 1991-05-22를 대입해서 계산

function getWesternAge(birthday) { // function 함수선언 getWesternAge 함수이름 birthday 대입되는 값
    
    const birth = new Date(birthday); // const = 상수 선언 birth = 상수에 이름 new Date 현재날짜(년,월,일,시간) 
    const now = new Date();           // getWesternAge란 함수안에 birthday값을 대입한다
                //now = 현시간, birth = 대입 값 = 내생일
    const year = now.getFullYear()- birth.getFullYear(); // year란 상수 선언, now현재날짜에 년만 가져온다 birth 대입값에 년도만
    const nowMonth = birth.getMonth()+1;
        // Month =월 대입한값에 월만
    const birthMonth =  now.getMonth()+1;
        // 현재 날짜의 월만
    const m = birthMonth - nowMonth;
        // 현재월(1)에 빼기(-) 대입한값에 월(5)
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) { 
      // m :-4, 0보다 낮을경우 현재 일에 대입한값에 일보다 낮을경우 밑에값을 준다
      
      
    return year -1;  // 낮을경우 -1 (32)
    }
    return year;  // 높을경우 변동없이 출력된다(33)
  }
  
//getFullYear =내장함수=? 계산식을 지정해주지 않아도 내장되어 있는 식으로 계산 

