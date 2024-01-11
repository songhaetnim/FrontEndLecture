function ans1() {
    let num1 = Number($('#num1').val());   // html의 num1에 js용으로 선언?
    let num2 = Number($('#num2').val());   // html의 num2에 js용으로 선언?
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
    $('#result1').html(resultStr);
}

function ans2() {
    let sentence = $('#sentence').val();
    let search = $('#search').val();
    // 특수기호 제거, 소문자로 변경
    let noPunct = sentence.replace(/[-',.\n]/g, '').toLowerCase();
    let words = noPunct.split(' ');     //공백으로 분리하여 배열로 만듦
    let count = 0;
    for (let word of words) {
        if (word == search)
            count++;
    }
    $('#result2').html(`${search}의 갯수: ${count}`)
}

function ans3() {
    let price = $('#price').val();
    let priceStrArr = price.split(';');

    // priceValArr와 newPrices는 값이 같은 배열
    let priceValueArr = [];
    for (let element of priceStrArr)
        priceValueArr.push(Number(element));
    let newPrices = priceStrArr.map(x => Number(x));  //Number = parseInt

    newPrices.sort((a, b) => b - a);    // 내림차순 정렬
    let resultStr = '';
    for (let element of newPrices)
        resultStr += element + '<br>'
    $('#result3').html(resultStr);
}

function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);          // 4 --> '04' , 23 --> '23'
}                                                       // 넘버  문자   넘버   문자
function myDateTime(date) {
    return `${date.getFullYear()}-${twoDigit(date.getMonth() + 1)}-${twoDigit(date.getDate())} ` +
        `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`;
}
$(document).ready(() => {
    setInterval(function() {
        const now = new Date();
        const week = '일월화수목금토'.split('');        // ['일', ..., '토']
        let dateStr = myDateTime(now).substring(0, 10);
        dateStr += '(' + week[now.getDay()] +')';
        const timeStr = myDateTime(now).substring(11);
        $('#date').text(dateStr);
        
        $('#h1').attr('src', `../ch13.문서객체/img/${timeStr[0]}.svg`);
        $('#h2').attr('src', `../ch13.문서객체/img/${timeStr[1]}.svg`);
        $('#m1').attr('src', `../ch13.문서객체/img/${timeStr[3]}.svg`);
        $('#m2').attr('src', `../ch13.문서객체/img/${timeStr[4]}.svg`);
        $('#s1').attr('src', `../ch13.문서객체/img/${timeStr[6]}.svg`);
        $('#s2').attr('src', `../ch13.문서객체/img/${timeStr[7]}.svg`);
    }, 1000);
})