function ans1() {
    let num1 = Number(document.getElementById('num1').value);   // html의 num1에 js용으로 선언?
    let num2 = Number(document.getElementById('num2').value);   // html의 num2에 js용으로 선언?
    if (num1 < 1 || num1 > 20 || num2 < 10 || num2 > 30 || num2 - num1 < 4) {    // num = 1~20, num2 = 
        alert('입력값의 범위를 확인하고 다시 입력하세요.');
        return;
    }
    let powerArr = [];
    for (let i = num1; i <= num2; i++)
        powerArr.push(2 ** i);
    let resultStr = '';
    for (let i = 0; i < powerArr.length; i++)
        if ((i + 1) % 5 == 0)
            resultStr += powerArr[i] + '<br>';      // 다섯개 찍고 줄바꿈
        else {
            if (i == powerArr.length - 1)
                resultStr += powerArr[i];           // 맨 마지막 요소뒤에는, 를 붙이지 않겠다
            else
                resultStr += powerArr[i] + ',';
        }
    document.getElementById('result1').innerHTML = resultStr;
}

function ans2() {
    let sentence = document.getElementById('sentence').value;
    let search = document.getElementById('search').value;
    // 특수기호 제거, 소문자로 변경
    let noPunct = sentence.replace(/[-',.\n]/g, '').toLowerCase();
    let words = noPunct.split(' ');     //공백으로 분리하여 배열로 만듦
    let count = 0;
    for (let word of words) {
        if (word == search)
            count++;
    }
    document.getElementById('result2').innerHTML = `${search}의 갯수: ${count}`
}



function ans3() {
    let price = document.getElementById('price').value;
    let priceStrArr = price.split(';');

    // priceValArr와 newPrices는 값이 같은 배열
    let powerValArr = [];
    for (let element of priceStrArr)
        powerValArr.push(Number(element));
    let newprices = priceStrArr.map(x => Number(x));

    newprices.sort((a, b) => b - a);                 //내림차순 정렬
    let resultStr = '';
    for (let element of newprices)
        resultStr += element + '<br>';
    document.getElementById('result3').innerHTML = resultStr;
}


