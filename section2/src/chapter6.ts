// TS에만 있는 기능
// any
// 특정 변수의 타입을 우리가 확실히 모를 때 => 어떤 타입이든 담을 수 있음
let anyVar: any = 10;

let num: number = 10;
num = anyVar;

// unknown => 어떤 타입이든 담을 순 있지만 새로운 변수에 할당될 순 없다.
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 새로운 변수에 할당하고 싶다면 if문으로 typeof 를 사용하여 지정 => 타입 정제
if(typeof unknownVar === "number") {
  num = unknownVar
}

// 즉 any 보단 unknown을 쓰는게 조금 더 안정적이다
