/* function calculateAge(birthDate) {
    // 생년월일을 '년', '월', '일'로 분리합니다.
    var birthYear = birthDate.getFullYear();
    var birthMonth = birthDate.getMonth();
    var birthDay = birthDate.getDate();
  
    // 현재 날짜를 가져옵니다.
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
  
    // 만 나이를 계산합니다.
    var age = currentYear - birthYear;
  
    // 현재 월과 생일의 월을 비교합니다.
    if (currentMonth < birthMonth) {
      age--;
    }
    // 현재 월과 생일의 월이 같은 경우, 현재 일과 생일의 일을 비교합니다.
    else if (currentMonth === birthMonth && currentDay < birthDay) {
      age--;
    }
  
    return age;
  }
  
  // 생년월일을 입력합니다.
  var birthDate = new Date('1993-10-20');
  // 만나이를 계산합니다.
  var age = calculateAge(birthDate);
  console.log(age); // 예상 결과: 33 */

const today = new Date();
const birthDate = new Date('2000, 7, 10'); // 2000년 8월 10일

let age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
}

document.writeln(age);