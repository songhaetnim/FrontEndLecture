// 사물을 속성: 속성값 들로 객체화
// 사물이 -동작 - method (객체안에서 사용되는 함수)

let obj = {
    // 속성(attribute)
    name:'사과',
    print: 1000,

    // 메소드(ㅡmethod)
    print:function() {
        console.timeLog(`${this.name}의 가격은 ${this.print}의 입니다.`);
        
    }
}
console.log(obj.name.obj.price);
obj.print();