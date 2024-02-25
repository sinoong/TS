// 조건부 타입 : 삼항연산자를 이용해서 조건에 따라서 타입을 결정함

type A = number extends string ? string : number;

type ObjA = {
  // super
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

// 제네릭과 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string 타입
let varB: StringNumberSwitch<string>; // number 타입

function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces<T>(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "") as any; // 공백문자를 제거 한다 (이거를, 이렇게 바꾼다)
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im winterlood");
result.toUpperCase();

let result2 = removeSpaces(undefined);
