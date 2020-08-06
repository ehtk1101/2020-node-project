// 2. 배열
// 배열 선언
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); //5
console.log(arr[2]); //3 index는 0부터 시작

let arr2 = [1, 2, "apple", "banana"];

//반복문
for (i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// for-in
for (i in arr2) {
  console.log(i); // i 는 인덱스다!!
}

// for-of (ES6) 값을 받아옴
for (i of arr2) {
  console.log(i);
}

// splice 배열에서 특정원소를 삭제하고 중간에 내가 원하는 원소를 끼워넣을 수 있음
// 인자
// 1. index (추가할 위치)
// 2. howmany 원본 배열에서 삭제할 원소의 수
// 3. elements 중간에 추가할 원소들
let a = ["a", "b", "c"];
// a, d, b, c
a.splice(1, 0, "d");
console.log(a);
// a, x, y, c
a.splice(1, 2, "x", "y");
console.log(a);

const b = [1, 2, 3, 4, 5];
console.log(b.slice(0, 3));

// ES6
const result = b.find((key) => key >= 3); // 3
console.log(result);

const result2 = b.filter((key) => key >= 3); // 3 4 5
console.log(result2);

console.log(b.push(6));
console.log(b);

// [1, 2, 3, 4, 5, 6]
const result3 = b.map((key) => key * 2);
console.log(result3);
