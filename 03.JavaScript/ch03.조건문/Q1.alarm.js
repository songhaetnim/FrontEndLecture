// 백준도장 2884
// 알람시계
let hour = 6, minute = 30;
let newHour = 0, newMinute = 0;

if (minute >= 45) {
    newHour = hour;
    newMinute = minute - 45;
} else {
    if (hour == 0){
        newHour = 23;
        newMinute = minute + 60 - 45 ;
    } else {
        newHour = hour - 1;
        newMinute = minute + 60 - 45 ;
    }
}

console.log(`${hour}시 ${minute}분 --> ${newHour}시 ${newMinute}분}`)