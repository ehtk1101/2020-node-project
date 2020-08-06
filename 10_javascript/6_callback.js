// 6. 콜백 함수
// 다른 함수의 인자로 넘겨지는 함수

// 동기식 처리
function add(a, b) {
    let sum = a + b;
    return sum;
}

function print(result) {
    console.log(result);
}

print(add(2, 3)); // 동기식 호출 (순서대로 호출)

// 비동기식 처리
function add2(a, b, callback) {
    let sum = a + b;
    callback(sum);
}
add2(2, 3, print); // 비동기식 호출 (함수의 인자로 함수를 넘김)
// 함수의 watiting이 필요 없어서 굉장히 효율적인 방식이다.

add2(2, 3, (result) => {
    console.log(result);
}); // 보통사용하는 방법
