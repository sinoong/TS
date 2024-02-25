// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은타입으로
// 타입을 상황에 따라 좁히는 방법을 이야기

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // 왼쪽의 값이 오른쪽의 instance냐? true : false
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // 'age'가 value에 있냐? true : false
    // in 은 null, undefined 있으면 안되서 value && "age" in value로 명시
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
