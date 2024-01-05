// 상수 (Constant) 값을 변환할수없다
 const a = 'Hello';
 console.log(a);
 // a += 'World';       // 실행하면 runtime error 발생

 const obj ={x: 1, y: 2};
// obj = {x: 1, y: 2, z: 3};  //error
obj.x =10;
obj.y=20;
console.log(obj);

        