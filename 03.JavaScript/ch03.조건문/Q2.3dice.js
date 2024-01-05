// 백준도장 2480
// 주사위 세개
let dice1 = Math.ceil(Math.random()*6);
let dice2 = Math.ceil(Math.random()*6);
let dice3 = Math.ceil(Math.random()*6);
let prize = 0;

if (dice1 == dice2 && dice2 == dice3){
    prize = 10000 + dice1 * 1000;
} else if (dice1 == dice2 || dice1 == dice3) {
    prize = 1000 + dice1 * 100
} else if (dice2 == dice3) {
    prize = 1000 + dice2 * 100
/* } else if (dice1 == dice3) {
    prize = 1000 + dice1 * 100 */
} else {
   /* let maxDice = dice1 > dice2 ? dice1 : dice2;
   maxDice = maxDice > dice3 ? maxDice : dice3; */
   let maxDice =Math.max(dice1, dice2, dice3);
   prize = maxDice * 100;
}
console.log(`${dice1}, ${dice2}, ${dice3} --> ${prize}원`);

// Refactoring