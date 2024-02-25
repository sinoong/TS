// 제네릭 : 일반적인, 포괄적인

// 제네릭 함수 <T> : 타입을 저장하는 타입 변수
function func<T>(value: T): T {
  return value; // value의 타입대로 return한다 T를 사용하여 제대로 추론되게 만듦
}

let num = func(10);
// num.toUpperCase(); number로 판단되었으니 불가
if (typeof num === "number") {
  num.toFixed();
}

let bool = func(true);

let str = func("string");

let arr = func<[number, number, number]>([1, 2, 3]); // number[]으로 추론 및 튜플로 생성
