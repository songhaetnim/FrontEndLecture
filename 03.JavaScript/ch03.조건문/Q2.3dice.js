// 백준도장 2480
// 주사위 세개
let dice1 = Math.ceil(Math.random()*6); // Math.random < 숫자를 랜덤으로(로또번호처럼) 할때 쓰는  단어 
let dice2 = Math.ceil(Math.random()*6); // Math.random < 지금 여기선 주사위 1 ~ 6번까지만 보여줄수있게 해주는 단어
let dice3 = Math.ceil(Math.random()*6);
let prize = 0;

if (dice1 == dice2 && dice2 == dice3){  // if > 만약에, 조건을 걸때, 이 조건이 맞으면 출력 아니면 넘어간다
    prize = 10000 + dice1 * 1000;
} else if (dice1 == dice2 || dice1 == dice3) { // else if는 if 안맞을때 else if 대체로 출력하다(?)
    prize = 1000 + dice1 * 100
} else if (dice2 == dice3) {
    prize = 1000 + dice2 * 100
/* } else if (dice1 == dice3) {
    prize = 1000 + dice1 * 100 */
} else {  // else 끝낼때  위에 조건들이 다 안맞아도 무조건 출력할때 
   /* let maxDice = dice1 > dice2 ? dice1 : dice2;
   maxDice = maxDice > dice3 ? maxDice : dice3; */
   let maxDice =Math.max(dice1, dice2, dice3);
   prize = maxDice * 100; // prize 
}
console.log(`${dice1}, ${dice2}, ${dice3} --> ${prize}원`);

// Refactoring