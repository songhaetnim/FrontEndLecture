let H = 0;
let M = 30;

console.log(`${H} ${M}`);

if(M<45){
    M=60-45+M; //M =60-45+30=45
    H--;       //H = 00-01=-01
}
else
    M-=45;
    // = M - 45


if(H==-1) // H = -1일경우 23으로 변경한다
    H=23;

console.log(`${H} ${M}`);





