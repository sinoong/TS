// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// JS : 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// TS : 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number): number {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number): number => a + b; // () :number 생략 가능

// 함수의 매개변수
// 명시적 -> 선택적 순으로 작성
// 선택적일 경우 undefined 일 수 있으니 조건문으로 명시하기
function introduce(name = "문신웅", age: number, tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("문신웅", 30, 180);
introduce("문신웅", 30); // 키는 선택이니 없어도 됨

// ...rest 사용해서 가변적인 매개변수들을 받아와 배열에 담아
// function getSum(...rest: [number, number, number]) -> 3개만 담는 방법
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it)); // it으로 하나씩 받아서 더하기
  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
