// 1. 변수
// 변수 선언
var a = 1;
var b = 2;
console.log(a);
console.log(b);
console.log(a, b);
console.log("%d, %d", a, b);
var s1 = "Hello";
var s2 = "World";
// Hello World
console.log(s1, s2);
console.log("%s %s", s1, s2);

console.log(typeof a); //number
//줄 복사하기 : shift + ALT + downarrow
console.log(typeof s1); //string
console.log(typeof true); //boolean
console.log(typeof C); //undefined
console.log(typeof {}); //object

// 변수 호이스팅(hoisting) 밑에서 위로 끌어올리다
function foo() {
    //var a; 있나 없나 같은것임 (hoisting 기능)
    console.log(a);
    var a = 10;
    console.log(a);
}

foo();

// 변수선언 두번째 방법 ES6(2015) let, const 추가
// let -> var대신에 사용 가능
// var : 함수 레벨 스코프 -> C, JAVA랑 달라서 많은 개발자들에게 혼동을 줌
// let : 블록 레벨 스코프

function foo2() {
    if (true) {
        var tmp = 0;
        console.log("1:", tmp);
    }
    console.log("2:", tmp);
}

function foo2_2() {
    if (true) {
        let tmp = 0;
        console.log("1:", tmp);
    }
    console.log("2:", tmp);
}

foo2();
//foo2_2(); -> 에러 발생

//const (상수) -> 값 변경 불가
const PI = 3.14;
//PI++; -> 불가