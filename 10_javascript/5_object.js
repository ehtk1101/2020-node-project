// 5. 객체
// 객체 선언
let a = {}; // 배열 : [], 객체 : {}
let b = new Object(); // 윗 라인과 같은 의미 : 빈 객체 생성
console.log(typeof a);
console.log(typeof b);

// 속성(property), 메소드(method)
// key: value
let Person = {
    age: 19,
    name: '홍길동',
    print(){
        console.log("저는 %d살 %s입니다.", this.age, this.name);
    }

    //print : fucntion (){
    //    console.log("저는 %d살 %s입니다.", this.age, this.name);
    //}
}

// object.속성명, object["속성명"]
console.log("저는 %d살 %s입니다.", Person.age, Person.name);
console.log("저는 %d살 %s입니다.", Person.age, Person["name"]); // 윗 라인과 같은 의미

Person.print(); // 객체내에서 property를 사용할 때는 this.을 붙이자

/* Friends 라는 배열
 나, 친구 {name:, age:}
 Friends 배열 출력


let Me = {
    age: 19,
    name: '나'
}
let Friend = {
    age: 19,
    name: '친구'
}
let Friends = [Me, Friend];
console.log(Friends);
*/

let Friends = [
    {
        name: "펭수",
        age: 10
    },
    {
        name: "펭순",
        age: 10
    }
];
console.log(Friends);
// 펭순
console.log(Friends[1].name);// Friends["name"]

let score = {
    data: { kor: 100, mat: 90, eng: 95 },
    print: function () {
        for (subject in this.data) { //subject는 key 값을 가져옴 ex: subject = "kor"
            console.log(subject + ":" + this.data[subject]);
        }
    },

    // 총점(sum), 평균(avg)

    sum : () => {
        let obj = score.data;
        return obj.kor + obj.mat + obj.eng;
    },
    avg() {
        let num = Object.keys(this.data).length; // Object.keys() : 객체를 배열로 바꿔서 키값을 넣어줌
        return this.sum() / num;
    }
}

score.print();
console.log(score.sum());
console.log(score.avg());

let id = 1;
let name = "홍길동";

// key: value
let obj = {
    id,
    name
}// key 값과 넣어주는 value의 변수명이 같을 때
console.log("%d, %s", obj.id, obj.name);