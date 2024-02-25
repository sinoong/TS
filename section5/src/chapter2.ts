// 선언 합침
// 인터페이스는 동일한 이름으로 중복 선언이 가능하고
// 선언 하면 모든 선언이 합쳐진다 merging
interface Person {
  name: string;
}

interface Person {
  // name: number; 에러 => 충돌
  age: number;
}

// 선언 확장 재정의 가능 => 합침이랑은 다름
interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 30,
};

// 모듈 보강
interface Lib {
  a: number;
  b: number;
}
// 보강 작업
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello", // 추가 하고 싶다면
};
