// void
// void => 공허 -> 아무것도 없다.
// void => 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  // 반환하는게 없다 => 즉 void쓴다
  console.log("hello");
}

let a: void;
// a = 1 => 어떠한 값도 담을 수 없다 => "strictNullChecks": true,로 변경하면 담을 수 있음
a = undefined; // 오직 undefined만 담을 수 있다,

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let b: never; // 아무것도 담을 수 없음 (any도 안됨)
